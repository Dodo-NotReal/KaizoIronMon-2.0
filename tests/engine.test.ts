import assert from 'node:assert/strict';
import { test } from 'node:test';
import { Battle, BattleStream, BattleTextParser, Dex, Teams, TeamValidator, createBattle } from '../index';
import { sampleTeams } from '../examples/teams';

for (const gen of [1, 4, 9]) {
	test(`Gen ${gen}: manual teams, moves and protocol`, () => {
		const teams = sampleTeams();
		const engine = createBattle({
			format: `gen${gen}ou`,
			p1: { name: 'Alice', team: teams.p1 },
			p2: { name: 'Bob', team: teams.p2 },
		});
		assert.equal(engine.battle.gen, gen);
		assert.equal(engine.battle.sides[0].pokemon.length, 2);
		assert.equal(engine.battle.sides[1].pokemon.length, 2);
		const seen: string[] = [];
		engine.onEvent(event => seen.push(event.line));
		engine.choose('p1', 'move 1');
		engine.choose('p2', 'move 1');
		assert.ok(seen.some(line => line.startsWith('|turn|')));
		assert.ok(seen.some(line => line.startsWith('|move|')));
		assert.ok(seen.some(line => line.startsWith('|-damage|')));
		assert.ok(seen.every(line => !line.startsWith('|split|')));
		assert.equal(seen.filter(line => line.startsWith('|switch|p1a: Pikachu')).length, 1);
		const move = engine.events.find(event => event.line.startsWith('|move|p1a: Pikachu'));
		assert.match(move ? engine.formatBattleText(move, 'p1') : '', /Pikachu.*Thunderbolt/i);
	});
}

test('switch 2 changes the active Pokémon', () => {
	const teams = sampleTeams();
	const engine = createBattle({
		format: 'gen9ou',
		p1: { name: 'Alice', team: teams.p1 },
		p2: { name: 'Bob', team: teams.p2 },
	});
	engine.choose('p1', 'switch 2');
	engine.choose('p2', 'move 1');
	assert.equal(engine.battle.sides[0].active[0].species.name, 'Bulbasaur');
	assert.ok(engine.events.some(event => event.line.startsWith('|switch|p1a: Bulbasaur')));
});

test('original mod inheritance changes species and type data by generation', () => {
	assert.equal(Dex.mod('gen1').gen, 1);
	assert.equal(Dex.mod('gen4').gen, 4);
	assert.equal(Dex.mod('gen9').gen, 9);
	assert.equal(Dex.mod('gen1').types.get('Dark').isNonstandard, 'Future');
	assert.equal(Dex.mod('gen4').types.get('Dark').isNonstandard, null);
	assert.equal(Dex.mod('gen4').types.get('Fairy').isNonstandard, 'Future');
	assert.equal(Dex.mod('gen9').types.get('Fairy').isNonstandard, null);
	assert.equal(Dex.mod('gen3').moves.get('Bite').category, 'Special');
	assert.equal(Dex.mod('gen4').moves.get('Bite').category, 'Physical');
});

test('all retained format rules and mods load', () => {
	for (const format of Dex.formats.all()) {
		assert.equal(Dex.forFormat(format).gen > 0, true, format.id);
		assert.ok(Dex.forFormat(format).formats.getRuleTable(format), format.id);
	}
});

test('OU battles start and resolve a turn in all nine generations', () => {
	for (let gen = 1; gen <= 9; gen++) {
		const teams = sampleTeams();
		const engine = createBattle({
			format: `gen${gen}ou`,
			p1: { name: 'Alice', team: teams.p1 },
			p2: { name: 'Bob', team: teams.p2 },
		});
		engine.choose('p1', 'move 1');
		engine.choose('p2', 'move 1');
		assert.ok(engine.events.some(event => event.line.startsWith('|move|')), `gen${gen}ou`);
	}
});

test('English battle text covers key protocol events', () => {
	const parser = new BattleTextParser('p1', 'en');
	const events = [
		'|move|p1a: Pikachu|Thunderbolt|p2a: Squirtle',
		'|-damage|p2a: Squirtle|55/100',
		'|-status|p2a: Squirtle|par',
		'|-boost|p1a: Pikachu|spe|1',
		'|switch|p1a: Bulbasaur|Bulbasaur, L50|100/100',
		'|faint|p2a: Squirtle',
		'|win|Alice',
	];
	for (const event of events) assert.ok(parser.extractMessage(event).trim(), event);
	assert.match(new BattleTextParser('p1', 'en').extractMessage(events[0]), /Pikachu.*Thunderbolt/i);
	assert.match(parser.extractMessage('|-supereffective|p2a: Squirtle'), /super effective/i);
	assert.throws(() => new BattleTextParser('p1', 'it'), /English/);
});

test('team validation remains available', () => {
	const teams = sampleTeams();
	const validator = new TeamValidator('gen9ou');
	assert.ok(Array.isArray(validator.validateTeam([{ ...teams.p1[0], species: 'NotAPokemon' }])));
});

test('manual team export and packing round trip', () => {
	const parsed = Teams.import('Pikachu\nAbility: Static\n- Thunderbolt\n- Quick Attack');
	assert.equal(parsed?.[0].species, 'Pikachu');
	assert.equal(Teams.unpack(Teams.pack(parsed))?.[0].moves[0], 'Thunderbolt');
});

test('Random Battle formats and generators cannot be used', () => {
	assert.equal(Dex.formats.get('gen9randombattle', true).exists, false);
	assert.equal(Dex.formats.get('gen1randombattle', true).exists, false);
	assert.ok(Dex.formats.all().every(format => !format.team && !/random|factory/i.test(format.name)));
	const teams = sampleTeams();
	assert.throws(() => createBattle({
		format: 'gen9randombattle',
		p1: { name: 'Alice', team: teams.p1 },
		p2: { name: 'Bob', team: teams.p2 },
	}), /Unavailable/);
	assert.throws(() => new Battle({ formatid: 'gen9randombattle' as ID }), /Unavailable/);
});

test('BattleStream still accepts protocol commands', () => {
	const teams = sampleTeams();
	const stream = new BattleStream({ noCatch: true });
	stream.write('>start {"formatid":"gen4ou"}');
	stream.write('>player p1 ' + JSON.stringify({ name: 'Alice', team: teams.p1 }));
	stream.write('>player p2 ' + JSON.stringify({ name: 'Bob', team: teams.p2 }));
	stream.write('>p1 move 1');
	stream.write('>p2 move 1');
	assert.equal(stream.battle?.gen, 4);
	assert.ok(stream.battle?.log.some(line => line.startsWith('|move|')));
});
