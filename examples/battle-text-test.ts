import { BattleTextParser } from '../index';

const parser = new BattleTextParser('p1', 'en');
for (const line of [
	'|move|p1a: Pikachu|Thunderbolt|p2a: Squirtle',
	'|-supereffective|p2a: Squirtle',
	'|-status|p2a: Squirtle|par',
]) {
	console.log(parser.extractMessage(line).trim());
}
