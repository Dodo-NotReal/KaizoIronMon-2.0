import { Dex, createBattle } from '../index';
import { sampleTeams } from './teams';

for (let gen = 1; gen <= 9; gen++) {
	const format = `gen${gen}ou`;
	const teams = sampleTeams();
	const engine = createBattle({
		format,
		p1: { name: 'Alice', team: teams.p1 },
		p2: { name: 'Bob', team: teams.p2 },
	});
	engine.choose('p1', 'move 1');
	engine.choose('p2', 'move 1');
	console.log(`${format}: Gen ${Dex.forFormat(format).gen}, turn ${engine.battle.turn}`);
}
