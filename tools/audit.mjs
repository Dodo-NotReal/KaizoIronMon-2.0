import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd());
const core = path.join(root, 'battle-core');
const dist = path.join(root, 'dist', 'battle-core');
const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
	const filename = path.join(dir, entry.name);
	return entry.isDirectory() ? walk(filename) : [filename];
});
for (const dir of [core, dist]) {
	assert.ok(fs.existsSync(dir), `Missing ${dir}; run npm run build first.`);
	const files = walk(dir);
	assert.ok(files.every(file => !/random-battles|random-teams|random-player-ai/i.test(file)), `Generator file found in ${dir}`);
	for (const file of files.filter(file => /\.(?:ts|js)$/.test(file))) {
		const content = fs.readFileSync(file, 'utf8');
		assert.doesNotMatch(content, /(?:from|require\(|import\().*random-battles|RandomTeamsTypes|\.getGenerator\(/,
			`Generator reference found in ${file}`);
	}
}
const { Dex } = await import('../dist/index.js');
assert.equal(Dex.formats.get('gen9randombattle', true).exists, false);
assert.ok(Dex.formats.all().every(format => !format.team && !/random|factory/i.test(format.name)));
console.log('Audit passed: no Random Battle formats, generator files, or generator imports in source/build.');
