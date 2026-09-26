export const Rulesets: import('../../../sim/dex-formats').ModdedFormatDataTable = {
	standard: {
		inherit: true,
		ruleset: [
			'Standard AG',
			'Sleep Clause Mod', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Items Clause', 'Evasion Moves Clause',
		],
	},
	standarddoubles: {
		inherit: true,
		ruleset: [
			'Standard AG',
			'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Gravity Sleep Clause',
		],
	},
	standardoms: {
		inherit: true,
		ruleset: [
			'Standard AG',
			'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Dynamax Clause', 'Overflow Stat Mod',
		],
	},
	teampreview: {
		inherit: true,
		onTeamPreview() {
			this.add('clearpoke');
			for (const pokemon of this.getAllPokemon()) {
				const details = pokemon.details.replace(', shiny', '')
					.replace(/(Arceus|Greninja|Gourgeist|Pumpkaboo|Xerneas|Silvally|Urshifu|Dudunsparce)(-[a-zA-Z?-]+)?/g, '$1-*')
					.replace(/(Zacian|Zamazenta)(?!-Crowned)/g, '$1-*'); // Hacked-in Crowned formes will be revealed
				this.add('poke', pokemon.side.id, details, '');
			}
			this.makeRequest('teampreview');
		},
	},
};
