/**
 * Regenerate manual-team formats for the nine main generations.
 * Usage: node tools/extract-formats.mjs path/to/pokemon-showdown
 * A formats.ts file can also be passed to filter an existing snapshot.
 */
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const upstream = process.argv[2];
if (!upstream) throw new Error('Pass the upstream Pokémon Showdown directory.');
const inputFile = fs.statSync(upstream).isDirectory() ? path.join(upstream, 'config/formats.ts') : upstream;
const input = fs.readFileSync(inputFile, 'utf8');
const source = ts.createSourceFile('formats.ts', input, ts.ScriptTarget.Latest, true);
const declaration = source.statements.find(statement =>
  ts.isVariableStatement(statement) && statement.declarationList.declarations.some(d => d.name.getText(source) === 'Formats')
);
const array = declaration?.declarationList.declarations.find(d => d.name.getText(source) === 'Formats')?.initializer;
if (!array || !ts.isArrayLiteralExpression(array)) throw new Error('Could not read the upstream Formats array.');
const prop = (node, name) => node.properties.find(p => ts.isPropertyAssignment(p) && p.name.getText(source) === name)?.initializer;
const literal = node => node && ts.isStringLiteralLike(node) ? node.text : undefined;
const id = value => (value || '').toLowerCase().replace(/[^a-z0-9]+/g, '');
let sections = [];
let current;
for (const node of array.elements) {
  if (!ts.isObjectLiteralExpression(node)) continue;
  const section = literal(prop(node, 'section'));
  if (section) {
    current = { text: node.getText(source), formats: [] };
    sections.push(current);
  } else if (current) {
    current.formats.push({
      name: literal(prop(node, 'name')),
      mod: literal(prop(node, 'mod')),
      team: literal(prop(node, 'team')),
      text: node.getText(source),
      rules: prop(node, 'ruleset')?.getText(source) || '',
    });
  }
}
const banned = new Set();
for (const { formats } of sections) for (const format of formats) {
  if (!format.name || format.team || (format.mod && !/^gen[1-9]$/.test(format.mod)) ||
      /random|factory|staff bros|chatbats/i.test(format.name) ||
      /random-battles|random-teams|randomTeam|Teams\.generate|getGenerator|randomFactory/i.test(format.text)) {
    banned.add(id(format.name));
  }
}
let changed;
do {
  changed = false;
  for (const { formats } of sections) for (const format of formats) {
    if (banned.has(id(format.name))) continue;
    if ([...banned].some(b => b && format.rules.toLowerCase().replace(/[^a-z0-9]+/g, '').includes(b))) {
      banned.add(id(format.name)); changed = true;
    }
  }
} while (changed);
const included = sections.map(s => ({ ...s, formats: s.formats.filter(f => !banned.has(id(f.name))) })).filter(s => s.formats.length);
const output = `// Extracted from Pokémon Showdown config/formats.ts. Manual-team formats for the main generations only.\n` +
  `import { Dex } from '../sim/dex';\nimport { DataMove } from '../sim/dex-moves';\n` +
  `export const Formats: import('../sim/dex-formats').FormatList = [\n` +
  included.map(s => `\t${s.text},\n${s.formats.map(f => `\t${f.text},`).join('\n')}`).join('\n') + '\n];\n';
fs.writeFileSync('battle-core/config/formats.ts', output.replaceAll('new Dex.Move(', 'new DataMove('));
const mods = [...new Set(included.flatMap(s => s.formats.map(f => f.mod).filter(Boolean)))].sort();
console.log(`Kept ${included.reduce((n, s) => n + s.formats.length, 0)} manual-team formats; removed ${banned.size}.`);
console.log(`Direct format mods: ${mods.join(', ')}`);
