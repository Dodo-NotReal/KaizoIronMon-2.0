import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd());
const core = path.join(root, 'battle-core');
const dist = path.join(root, 'dist', 'battle-core');
const generationMods = Array.from({ length: 8 }, (_, index) => `gen${index + 1}`);
const formatMods = Array.from({ length: 9 }, (_, index) => `gen${index + 1}`);
const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
	const filename = path.join(dir, entry.name);
	return entry.isDirectory() ? walk(filename) : [filename];
});
for (const dir of [core, dist]) {
	assert.ok(fs.existsSync(dir), `Missing ${dir}; run npm run build first.`);
	const mods = fs.readdirSync(path.join(dir, 'data', 'mods'), { withFileTypes: true })
		.filter(entry => entry.isDirectory()).map(entry => entry.name).sort();
	assert.deepEqual(mods, generationMods, `Unexpected mod directory in ${dir}`);
	const files = walk(dir);
	assert.ok(files.every(file => !/random-battles|random-teams|random-player-ai/i.test(file)), `Generator file found in ${dir}`);
	assert.ok(files.every(file => !/mods[\\/]gen[1-8][\\/]rulesets\.(?:ts|js)$/.test(file)), `Mod ruleset found in ${dir}`);
	for (const file of files.filter(file => /\.(?:ts|js)$/.test(file))) {
		const content = fs.readFileSync(file, 'utf8');
		assert.doesNotMatch(content, /(?:from|require\(|import\().*random-battles|RandomTeamsTypes|\.getGenerator\(/,
			`Generator reference found in ${file}`);
		if (/[\\/]formats-data\.(?:ts|js)$/.test(file)) {
			assert.doesNotMatch(content, /\b(?:tier|doublesTier|natDexTier)\s*:/, `Tier field found in ${file}`);
		}
	}
}
const { Dex } = await import('../dist/index.js');
assert.equal(Dex.formats.get('gen9randombattle', true).exists, false);
assert.deepEqual(Dex.formats.all().map(format => format.mod), formatMods);
for (const format of Dex.formats.all()) {
	assert.equal(format.id, `${format.mod}linkbattle`);
	assert.ok(!format.team);
	assert.deepEqual(format.ruleset, []);
	assert.deepEqual(format.banlist, []);
	assert.deepEqual(format.unbanlist, []);
	assert.deepEqual(format.restricted, []);
	assert.equal(Dex.forFormat(format).formats.getRuleTable(format).size, 0);
}
for (const species of [Dex.species.get('Mewtwo'), Dex.species.get('Garchomp')]) {
	for (const field of ['tier', 'doublesTier', 'natDexTier']) assert.equal(field in species, false);
}
console.log('Audit passed: nine rule-free Link Battles, no competitive tier fields or mod rulesets.');
