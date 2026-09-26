import { createBattle } from '../index';
import { sampleTeams } from './teams';

const teams = sampleTeams();
const engine = createBattle({
	format: 'gen4ou',
	p1: { name: 'Alice', team: teams.p1 },
	p2: { name: 'Bob', team: teams.p2 },
});

engine.onEvent(event => {
	if (event.audience) return;
	const message = engine.formatBattleText(event, 'p1').trim();
	if (message) console.log(message);
});

engine.choose('p1', 'move 1');
engine.choose('p2', 'move 1');
engine.choose('p1', 'switch 2');
engine.choose('p2', 'move 1');
