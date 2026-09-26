export const Rulesets: import('../../../sim/dex-formats').ModdedFormatDataTable = {
	obtainablemoves: {
		inherit: true,
		banlist: [
			// https://www.smogon.com/forums/threads/implementing-all-old-gens-in-ps-testers-required.3483261/post-5420130
			// confirmed by Marty
			'Kakuna + Poison Sting + Harden', 'Kakuna + String Shot + Harden',
			'Beedrill + Poison Sting + Harden', 'Beedrill + String Shot + Harden',

			// https://www.smogon.com/forums/threads/rby-and-gsc-illegal-movesets.78638/
			'Nidoking + Fury Attack + Thrash',
			'Exeggutor + Poison Powder + Stomp', 'Exeggutor + Sleep Powder + Stomp', 'Exeggutor + Stun Spore + Stomp',
			'Eevee + Tackle + Growl',
			'Vaporeon + Tackle + Growl',
			'Jolteon + Tackle + Growl', 'Jolteon + Focus Energy + Thunder Shock',
			'Flareon + Tackle + Growl', 'Flareon + Focus Energy + Ember',

			// https://github.com/smogon/pokemon-showdown/pull/8869
			'Rapidash + Pay Day + Growl',
			'Rapidash + Pay Day + Tail Whip',
			'Fearow + Pay Day + Peck',
			'Fearow + Pay Day + Mirror Move',
			'Magikarp + Dragon Rage + Tackle',
		],
	},
	standard: {
		effectType: 'ValidatorRule',
		name: 'Standard',
		ruleset: [
			'Standard AG',
			'Sleep Clause Mod', 'Freeze Clause Mod', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Items Clause', 'Evasion Moves Clause',
		],
		banlist: [
			'Hypnosis + Mean Look',
			'Hypnosis + Spider Web',
			'Lovely Kiss + Mean Look',
			'Lovely Kiss + Spider Web',
			'Sing + Mean Look',
			'Sing + Spider Web',
			'Sleep Powder + Mean Look',
			'Sleep Powder + Spider Web',
			'Spore + Mean Look',
			'Spore + Spider Web',
		],
	},
};
