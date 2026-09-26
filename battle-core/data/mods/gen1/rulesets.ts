export const Rulesets: import('../../../sim/dex-formats').ModdedFormatDataTable = {
	standardag: {
		inherit: true,
		ruleset: [
			'Obtainable', 'Desync Clause Mod', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause',
		],
	},
	standard: {
		effectType: 'ValidatorRule',
		name: 'Standard',
		ruleset: [
			'Standard AG',
			'Sleep Clause Mod', 'Freeze Clause Mod', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause',
		],
		banlist: ['Dig', 'Fly'],
	},
};
