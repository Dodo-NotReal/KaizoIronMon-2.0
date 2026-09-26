import type { PokemonSet } from '../battle-core/sim/teams';

const stats = { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };
const ivs = { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 };

function set(species: string, moves: string[], ability = ''): PokemonSet {
	return {
		name: species, species, moves, ability, item: '', nature: 'Hardy', gender: '',
		level: 50, evs: { ...stats }, ivs: { ...ivs },
	};
}

export function sampleTeams() {
	return {
		p1: [set('Pikachu', ['Thunderbolt', 'Quick Attack'], 'Static'), set('Bulbasaur', ['Tackle', 'Growl'], 'Overgrow')],
		p2: [set('Squirtle', ['Tackle', 'Water Gun'], 'Torrent'), set('Charmander', ['Scratch', 'Growl'], 'Blaze')],
	};
}
