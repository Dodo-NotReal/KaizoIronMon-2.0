// Extracted from Pokémon Showdown config/formats.ts. Manual-team formats for the main generations only.
import { Dex } from '../sim/dex';
import { DataMove } from '../sim/dex-moves';
export const Formats: import('../sim/dex-formats').FormatList = [
	{
		section: "S/V Singles",
	},
	{
		name: "[Gen 9] OU",
		mod: 'gen9',
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Sleep Moves Clause', '!Sleep Clause Mod'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Shadow Tag', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Shed Tail', 'Tera Blast'],
	},
	{
		name: "[Gen 9] Ubers",
		mod: 'gen9',
		ruleset: ['Standard'],
		banlist: ['AG', 'Moody', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Last Respects'],
	},
	{
		name: "[Gen 9] UU",
		mod: 'gen9',
		ruleset: ['[Gen 9] OU'],
		banlist: ['OU', 'UUBL'],
	},
	{
		name: "[Gen 9] RU",
		mod: 'gen9',
		ruleset: ['[Gen 9] UU'],
		banlist: ['UU', 'RUBL', 'Light Clay'],
	},
	{
		name: "[Gen 9] NU",
		mod: 'gen9',
		ruleset: ['[Gen 9] RU'],
		banlist: ['RU', 'NUBL', 'Drought', 'Grassy Surge', 'Quick Claw'],
	},
	{
		name: "[Gen 9] PU",
		mod: 'gen9',
		ruleset: ['[Gen 9] NU'],
		banlist: ['NU', 'PUBL', 'Damp Rock'],
	},
	{
		name: "[Gen 9] LC",
		mod: 'gen9',
		ruleset: ['Little Cup', 'Standard'],
		banlist: [
			'Basculin-White-Striped', 'Cutiefly', 'Diglett-Base', 'Dunsparce', 'Duraludon', 'Flittle', 'Gastly', 'Girafarig', 'Gligar',
			'Magby', 'Meditite', 'Misdreavus', 'Murkrow', 'Porygon', 'Qwilfish-Hisui', 'Rufflet', 'Scraggy', 'Scyther', 'Shellder', 'Sneasel',
			'Sneasel-Hisui', 'Snivy', 'Stantler', 'Torchic', 'Voltorb-Hisui', 'Vulpix', 'Vulpix-Alola', 'Yanma', 'Moody', 'Heat Rock', 'Baton Pass',
			'Sticky Web',
		],
	},
	{
		name: "[Gen 9] Monotype",
		mod: 'gen9',
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Same Type Clause', 'Terastal Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Baxcalibur', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Blaziken', 'Deoxys-Normal', 'Deoxys-Attack',
			'Dialga', 'Dialga-Origin', 'Espathra', 'Eternatus', 'Giratina', 'Giratina-Origin', 'Gliscor', 'Gouging Fire', 'Groudon', 'Ho-Oh', 'Iron Bundle',
			'Kingambit', 'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings',
			'Necrozma-Dusk-Mane', 'Palafin', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Solgaleo', 'Ursaluna-Bloodmoon', 'Urshifu-Single-Strike',
			'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Moody', 'Shadow Tag', 'Booster Energy', 'Damp Rock', 'Focus Band',
			'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Smooth Rock', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] CAP",
		desc: "The Create-A-Pok&eacute;mon project is a community dedicated to exploring and understanding the competitive Pok&eacute;mon metagame by designing, creating, and playtesting new Pok&eacute;mon concepts.",
		mod: 'gen9',
		ruleset: ['[Gen 9] OU', '+CAP'],
		banlist: ['Crucibellite', 'Rage Fist'],
	},
	{
		name: "[Gen 9] BSS Reg I",
		mod: 'gen9',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 9', 'VGC Timer', 'Limit Two Restricted'],
		restricted: ['Restricted Legendary'],
	},
	{
		name: "[Gen 9] Custom Game",
		mod: 'gen9',
		searchShow: false,
		debug: true,
		battle: { trunc: Math.trunc },
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		section: "S/V Doubles",
	},
	{
		name: "[Gen 9] Doubles OU",
		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'Evasion Abilities Clause'],
		banlist: ['DUber', 'Shadow Tag', 'Commander'],
	},
	{
		name: "[Gen 9] Doubles Ubers",
		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', '!Gravity Sleep Clause'],
	},
	{
		name: "[Gen 9] Doubles UU",
		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['[Gen 9] Doubles OU'],
		banlist: ['DOU', 'DBL'],
	},
	{
		name: "[Gen 9] Doubles LC",
		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Doubles', 'Little Cup', 'Sleep Clause Mod'],
		banlist: [
			'Basculin-White-Striped', 'Dunsparce', 'Duraludon', 'Girafarig', 'Gligar', 'Misdreavus', 'Murkrow', 'Qwilfish-Hisui', 'Scyther', 'Sneasel', 'Sneasel-Hisui',
			'Stantler', 'Vulpix', 'Vulpix-Alola', 'Yanma',
		],
	},
	{
		name: "[Gen 9] VGC 2025 Reg I",
		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 9', 'VGC Timer', 'Open Team Sheets', 'Limit Two Restricted'],
		restricted: ['Restricted Legendary'],
	},
	{
		name: "[Gen 9] Doubles Custom Game",
		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		battle: { trunc: Math.trunc },
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		section: "Unofficial Metagames",
	},
	{
		name: "[Gen 9] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		mod: 'gen9',
		ruleset: [
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Standard', 'Terastal Clause', 'Sleep Moves Clause', 'Accuracy Moves Clause', '!Sleep Clause Mod',
		],
		banlist: [
			'Arceus', 'Archaludon', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Cinderace', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Dialga',
			'Dialga-Origin', 'Dragonite', 'Eternatus', 'Flutter Mane', 'Gholdengo', 'Giratina', 'Giratina-Origin', 'Gouging Fire', 'Groudon', 'Ho-Oh', 'Jirachi',
			'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Meloetta', 'Mew', 'Mewtwo', 'Mimikyu', 'Miraidon', 'Necrozma',
			'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Cornerstone', 'Ogerpon-Hearthflame', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Regidrago', 'Reshiram',
			'Scream Tail', 'Shaymin-Sky', 'Solgaleo', 'Terapagos', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Moody',
			'Custap Berry', 'Focus Band', 'Focus Sash', 'King\'s Rock', 'Razor Fang', 'Quick Claw', 'Perish Song',
		],
	},
	{
		name: "[Gen 9] 2v2 Doubles",
		desc: `Double battle where you bring four Pok&eacute;mon to Team Preview and choose only two.`,
		mod: 'gen9',
		gameType: 'doubles',
		ruleset: [
			'Picked Team Size = 2', 'Max Team Size = 4',
			'Standard Doubles', 'Accuracy Moves Clause', 'Terastal Clause', 'Sleep Clause Mod', 'Evasion Items Clause',
		],
		banlist: [
			'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin', 'Eternatus', 'Giratina', 'Giratina-Origin', 'Groudon',
			'Ho-Oh', 'Koraidon', 'Kyogre', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia',
			'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Solgaleo', 'Urshifu', 'Urshifu-Rapid-Strike', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned',
			'Zekrom', 'Commander', 'Moody', 'Focus Sash', 'King\'s Rock', 'Razor Fang', 'Ally Switch', 'Final Gambit', 'Perish Song', 'Swagger',
		],
	},
	{
		name: "[Gen 9] Anything Goes",
		mod: 'gen9',
		ruleset: ['Standard AG'],
	},
	{
		name: "[Gen 9] ZU",
		mod: 'gen9',
		ruleset: ['[Gen 9] PU'],
		banlist: ['PU', 'ZUBL', 'Heat Rock'],
	},
	{
		name: "[Gen 9] Free-For-All",
		mod: 'gen9',
		gameType: 'freeforall',
		rated: false,
		tournamentShow: false,
		ruleset: ['Standard', 'Sleep Moves Clause', '!Sleep Clause Mod', '!Evasion Items Clause', '!Species Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Darkrai', 'Deoxys-Normal', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin',
			'Dondozo', 'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Iron Bundle', 'Koraidon', 'Kyogre', 'Kyurem-White',
			'Landorus-Incarnate', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Hearthflame', 'Palkia',
			'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Terapagos', 'Ursaluna', 'Ursaluna-Bloodmoon', 'Urshifu', 'Urshifu-Rapid-Strike',
			'Zacian', 'Zacian-Crowned', 'Zekrom', 'Moody', 'Shadow Tag', 'Toxic Chain', 'Toxic Debris', 'Aromatic Mist', 'Baton Pass', 'Coaching',
			'Court Change', 'Decorate', 'Dragon Cheer', 'Final Gambit', 'Flatter', 'Fling', 'Floral Healing', 'Follow Me', 'Heal Pulse', 'Heart Swap', 'Last Respects',
			'Malignant Chain', 'Poison Fang', 'Rage Powder', 'Skill Swap', 'Spicy Extract', 'Swagger', 'Toxic', 'Toxic Spikes',
		],
	},
	{
		name: "[Gen 9] LC UU",
		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] LC'],
		banlist: [
			'Chinchou', 'Diglett-Alola', 'Elekid', 'Foongus', 'Glimmet', 'Gothita', 'Growlithe-Hisui', 'Impidimp', 'Mareanie', 'Mienfoo', 'Mudbray',
			'Sandshrew-Alola', 'Shellos', 'Stunky', 'Tinkatink', 'Toedscool', 'Vullaby', 'Zorua-Hisui',
			// LC UUBL
			'Deerling', 'Minccino', 'Light Clay',
		],
	},
	{
		name: "[Gen 9] Monocolor",
		desc: `All Pok&eacute;mon on a team must share a color.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] OU', 'Same Color Clause'],
		banlist: ['Ogerpon-Wellspring', 'Regieleki'],
		unbanlist: ['Archaludon', 'Volcarona', 'Tera Blast'],
	},
	{
		name: "[Gen 9] Statmons",
		desc: `All Pok&eacute;mon on a team must have the same base stat be at 100 or higher.`,
		mod: `gen9`,
		searchShow: false,
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Sleep Moves Clause', '!Sleep Clause Mod'],
		banlist: ['AG', 'Uber', 'Regieleki', 'Arena Trap', 'Moody', 'Shadow Tag', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Shed Tail'],
		onValidateTeam(team) {
			let statsTable: string[] = [];
			for (const [i, set] of team.entries()) {
				let species = this.dex.species.get(set.species);
				if (!species.types) return [`Invalid pokemon ${set.name || set.species}`];
				if (i === 0) {
					statsTable = Object.keys(species.baseStats).filter(stat => species.baseStats[stat as StatID] >= 100);
				} else {
					statsTable = statsTable.filter(stat => species.baseStats[stat as StatID] >= 100);
				}
				const item = this.dex.items.get(set.item);
				if (item.megaStone?.[species.name]) {
					species = this.dex.species.get(item.megaStone[species.name]);
					statsTable = statsTable.filter(stat => species.baseStats[stat as StatID] >= 100);
				}
				if (item.id === "ultranecroziumz" && species.baseSpecies === "Necrozma") {
					species = this.dex.species.get("Necrozma-Ultra");
					statsTable = statsTable.filter(stat => species.baseStats[stat as StatID] >= 100);
				}
				if (!statsTable.length) return [`All Pok\u00e9mon on your team must have the same base stat over 100.`];
			}
		},
	},
	{
		name: "[Gen 9] Ubers UU",
		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] Ubers'],
		banlist: [
			// Ubers OU
			'Arceus-Normal', 'Arceus-Fairy', 'Arceus-Ground', 'Arceus-Water', 'Blissey', 'Calyrex-Ice', 'Deoxys-Attack', 'Deoxys-Speed', 'Eternatus', 'Flutter Mane',
			'Giratina-Origin', 'Glimmora', 'Gliscor', 'Groudon', 'Hatterene', 'Ho-Oh', 'Kingambit', 'Koraidon', 'Kyogre', 'Kyurem-Black', 'Landorus-Therian', 'Lunala',
			'Necrozma-Dusk-Mane', 'Ribombee', 'Skeledirge', 'Terapagos', 'Ting-Lu', 'Zacian-Crowned',
			// Ubers UUBL + Lunala, Arceus-Water
			'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Steel', 'Giratina', 'Necrozma-Dawn-Wings', 'Rayquaza', 'Shaymin-Sky',
			'Spectrier', 'Zacian', 'Zekrom',
		],
	},
	{
		section: "Draft",
		column: 1,
	},
	{
		name: "[Gen 9] Draft",
		mod: 'gen9',
		searchShow: false,
		teraPreviewDefault: true,
		ruleset: ['Standard Draft', 'Min Source Gen = 9'],
	},
	{
		name: "[Gen 9] 6v6 Doubles Draft",
		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		teraPreviewDefault: true,
		ruleset: ['Standard Draft', '!Sleep Clause Mod', '!Evasion Clause', 'Min Source Gen = 9'],
	},
	{
		name: "[Gen 9] 4v4 Doubles Draft",
		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		teraPreviewDefault: true,
		ruleset: ['Standard Draft', 'Item Clause = 1', 'VGC Timer', '!Sleep Clause Mod', '!OHKO Clause', '!Evasion Clause', 'Adjust Level = 50', 'Picked Team Size = 4', 'Min Source Gen = 9'],
	},
	{
		name: "[Gen 9] NatDex Draft",
		mod: 'gen9',
		searchShow: false,
		teraPreviewDefault: true,
		ruleset: ['Standard Draft', '+Unobtainable', '+Past', 'Min Source Gen = 1'],
	},
	{
		name: "[Gen 9] NatDex 6v6 Doubles Draft",
		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		teraPreviewDefault: true,
		ruleset: ['[Gen 9] 6v6 Doubles Draft', '+Unobtainable', '+Past', '!! Min Source Gen = 3'],
	},
	{
		name: "[Gen 9] NatDex LC Draft",
		mod: 'gen9',
		searchShow: false,
		teraPreviewDefault: true,
		ruleset: ['[Gen 9] NatDex Draft', 'Item Clause = 2', 'Little Cup'],
		banlist: ['Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 8] Draft",
		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard Draft', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] NatDex Draft",
		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard Draft', 'NatDex Mod', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] NatDex 4v4 Doubles Draft",
		mod: 'gen8',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Draft', 'Item Clause = 1', 'NatDex Mod', '!Sleep Clause Mod', '!OHKO Clause', '!Evasion Moves Clause', 'Adjust Level = 50', 'Picked Team Size = 4'],
	},
	{
		name: "[Gen 7] Draft",
		mod: 'gen7',
		searchShow: false,
		ruleset: ['Standard Draft', '+LGPE'],
	},
	{
		name: "[Gen 6] Draft",
		mod: 'gen6',
		searchShow: false,
		ruleset: ['Standard Draft'],
		banlist: ['Moody', 'Soul Dew', 'Swagger'],
	},
	{
		name: "[Gen 5] Draft",
		mod: 'gen5',
		searchShow: false,
		ruleset: ['Standard Draft', '-Unreleased', 'DryPass Clause', 'Gems Clause', 'Sleep Moves Clause'],
		banlist: [
			'Moody', 'King\'s Rock', 'Quick Claw', 'Soul Dew', 'Assist', 'Swagger', 'Drizzle ++ Swift Swim',
			'Drought ++ Chlorophyll', 'Sand Stream ++ Sand Rush', 'Landorus + Sheer Force', 'Excadrill + Sand Rush',
		],
	},
	{
		name: "[Gen 4] Draft",
		mod: 'gen4',
		searchShow: false,
		ruleset: ['Standard Draft', 'DryPass Clause', '!Team Preview', '!Evasion Abilities Clause', 'Accuracy Moves Clause'],
		banlist: ['King\'s Rock', 'Quick Claw', 'Assist', 'Swagger', 'Sand Stream ++ Sand Veil', 'Snow Warning ++ Snow Cloak', 'No Guard + Dynamic Punch'],
	},
	{
		name: "[Gen 3] Draft",
		mod: 'gen3',
		searchShow: false,
		ruleset: ['Standard Draft'],
	},
	{
		section: "Ladder Spotlight",
		column: 2,
	},
	{
		name: "[Gen 9] No Holds Barred!",
		desc: `Pok&eacute;mon combine their Attack and Special Attack stats, as well as their Defense and Special Defense stats.`,
		mod: 'gen9',
		// searchShow: false,
		ruleset: ['Standard OMs', 'Evasion Abilities Clause', 'Evasion Items Clause', 'Sleep Moves Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Archaludon', 'Blissey', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chansey', 'Deoxys-Attack', 'Deoxys-Normal', 'Dialga', 'Dialga-Origin',
			'Dondozo', 'Espathra', 'Eternatus', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Incarnate',
			'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Hearthflame', 'Palafin', 'Palkia', 'Palkia-Origin',
			'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Solgaleo', 'Terapagos', 'Volcarona', 'Zacian', 'Zacian-Crowned', 'Zamazenta-Crowned', 'Zekrom', 'Arena Trap', 'Moody',
			'Shadow Tag', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
		actions: {
			getDamage(source, target, move, suppressMessages = false) {
				if (typeof move === 'string') move = this.dex.getActiveMove(move);

				if (typeof move === 'number') {
					const basePower = move;
					move = new DataMove({
						basePower,
						type: '???',
						category: 'Physical',
						willCrit: false,
					}) as ActiveMove;
					move.hit = 0;
				}

				if (!target.runImmunity(move, !suppressMessages)) {
					return false;
				}

				if (move.ohko) return this.battle.gen === 3 ? target.hp : target.maxhp;
				if (move.damageCallback) return move.damageCallback.call(this.battle, source, target);
				if (move.damage === 'level') {
					return source.level;
				} else if (move.damage) {
					return move.damage;
				}

				const category = this.battle.getCategory(move);

				let basePower: number | false | null = move.basePower;
				if (move.basePowerCallback) {
					basePower = move.basePowerCallback.call(this.battle, source, target, move);
				}
				if (!basePower) return basePower === 0 ? undefined : basePower;
				basePower = this.battle.clampIntRange(basePower, 1);

				let critMult;
				let critRatio = this.battle.runEvent('ModifyCritRatio', source, target, move, move.critRatio || 0);
				if (this.battle.gen <= 5) {
					critRatio = this.battle.clampIntRange(critRatio, 0, 5);
					critMult = [0, 16, 8, 4, 3, 2];
				} else {
					critRatio = this.battle.clampIntRange(critRatio, 0, 4);
					if (this.battle.gen === 6) {
						critMult = [0, 16, 8, 2, 1];
					} else {
						critMult = [0, 24, 8, 2, 1];
					}
				}

				const moveHit = target.getMoveHitData(move);
				moveHit.crit = move.willCrit || false;
				if (move.willCrit === undefined) {
					if (critRatio) {
						moveHit.crit = this.battle.randomChance(1, critMult[critRatio]);
					}
				}

				if (moveHit.crit) {
					moveHit.crit = this.battle.runEvent('CriticalHit', target, null, move);
				}

				// happens after crit calculation
				basePower = this.battle.runEvent('BasePower', source, target, move, basePower, true);

				if (!basePower) return 0;
				basePower = this.battle.clampIntRange(basePower, 1);
				// Hacked Max Moves have 0 base power, even if you Dynamax
				if ((!source.volatiles['dynamax'] && move.isMax) || (move.isMax && this.dex.moves.get(move.baseMove).isMax)) {
					basePower = 0;
				}

				const dexMove = this.dex.moves.get(move.id);
				if (source.terastallized && (source.terastallized === 'Stellar' ?
					!source.stellarBoostedTypes.includes(move.type) : source.hasType(move.type)) &&
					basePower < 60 && dexMove.priority <= 0 && !dexMove.multihit &&
					// Hard move.basePower check for moves like Dragon Energy that have variable BP
					!((move.basePower === 0 || move.basePower === 150) && move.basePowerCallback)
				) {
					basePower = 60;
				}

				const level = source.level;

				const attacker = move.overrideOffensivePokemon === 'target' ? target : source;
				const defender = move.overrideDefensivePokemon === 'source' ? source : target;

				const isPhysical = move.category === 'Physical';
				let attackStat: StatIDExceptHP = move.overrideOffensiveStat || (isPhysical ? 'atk' : 'spa');
				const defenseStat: StatIDExceptHP = move.overrideDefensiveStat || (isPhysical ? 'def' : 'spd');

				const statTable = { atk: 'Atk', def: 'Def', spa: 'SpA', spd: 'SpD', spe: 'Spe' };

				const otherHalf: { [k: string]: StatIDExceptHP & Omit <StatIDExceptHP, "spe"> } = {
					'atk': 'spa',
					'def': 'spd',
					'spa': 'atk',
					'spd': 'def',
				};

				let atkBoosts = attacker.boosts[attackStat];
				let defBoosts = defender.boosts[defenseStat];

				let otherAtkBoosts = attackStat === 'spe' ? 0 : attacker.boosts[otherHalf[attackStat] as StatIDExceptHP];
				let otherDefBoosts = defenseStat === 'spe' ? 0 : defender.boosts[otherHalf[defenseStat] as StatIDExceptHP];

				let ignoreNegativeOffensive = !!move.ignoreNegativeOffensive;
				let ignorePositiveDefensive = !!move.ignorePositiveDefensive;

				if (moveHit.crit) {
					ignoreNegativeOffensive = true;
					ignorePositiveDefensive = true;
				}
				const ignoreOffensive = !!(move.ignoreOffensive || (ignoreNegativeOffensive && (atkBoosts < 0 || otherAtkBoosts < 0)));
				const ignoreDefensive = !!(move.ignoreDefensive || (ignorePositiveDefensive && (defBoosts > 0 || otherDefBoosts > 0)));

				if (ignoreOffensive) {
					this.battle.debug('Negating (sp)atk boost/penalty.');
					if (atkBoosts < 0) atkBoosts = 0;
					if (otherAtkBoosts < 0) otherAtkBoosts = 0;
				}
				if (ignoreDefensive) {
					this.battle.debug('Negating (sp)def boost/penalty.');
					if (defBoosts > 0) defBoosts = 0;
					if (otherDefBoosts > 0) otherDefBoosts = 0;
				}

				let attack = attacker.calculateStat(attackStat, atkBoosts, 1, source);
				let defense = defender.calculateStat(defenseStat, defBoosts, 1, target);

				if (otherHalf[attackStat]) attack += attacker.calculateStat(otherHalf[attackStat], otherAtkBoosts, 1, source);
				if (otherHalf[defenseStat]) defense += defender.calculateStat(otherHalf[defenseStat], otherDefBoosts, 1, target);

				attackStat = (category === 'Physical' ? 'atk' : 'spa');

				// Apply Stat Modifiers
				// Apply both onModifyX - requested by Delibird Heart
				// ^ After further deliberation, do not do this (yet)
				attack = this.battle.runEvent('Modify' + statTable[attackStat], source, target, move, attack);
				// attack = this.battle.runEvent(
				// 	'Modify' + statTable[otherHalf[attackStat] as StatIDExceptHP], source, target, move, attack
				// );
				defense = this.battle.runEvent('Modify' + statTable[defenseStat], target, source, move, defense);
				// defense = this.battle.runEvent(
				// 	'Modify' + statTable[otherHalf[defenseStat] as StatIDExceptHP], target, source, move, defense
				// );

				if (this.battle.gen <= 4 && ['explosion', 'selfdestruct'].includes(move.id) && defenseStat === 'def') {
					defense = this.battle.clampIntRange(Math.floor(defense / 2), 1);
				}

				const tr = this.battle.trunc;

				// int(int(int(2 * L / 5 + 2) * A * P / D) / 50);
				const baseDamage = tr(tr(tr(tr(2 * level / 5 + 2) * basePower * attack) / defense) / 50);

				// Calculate damage modifiers separately (order differs between generations)
				return this.modifyDamage(baseDamage, source, target, move, suppressMessages);
			},
		},
	},
	{
		name: "[Gen 9] Fortemons",
		desc: `Put an attacking move in the item slot to have all of a Pok&eacute;mon's attacks inherit its properties.`,
		mod: 'gen9',
		// searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Archaludon', 'Azumarill', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Cloyster', 'Cobalion', 'Comfey', 'Deoxys-Normal',
			'Deoxys-Attack', 'Dialga-Base', 'Dialga-Origin', 'Espathra', 'Eternatus', 'Flutter Mane', 'Giratina-Altered', 'Great Tusk', 'Groudon', 'Ho-Oh', 'Iron Bundle',
			'Iron Treads', 'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Incarnate', 'Lugia', 'Lunala', 'Magearna', 'Meowscarada', 'Mewtwo', 'Miraidon',
			'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palafin', 'Palkia', 'Palkia-Origin', 'Quaquaval', 'Raging Bolt', 'Rayquaza', 'Reshiram', 'Riolu', 'Samurott-Hisui',
			'Shaymin-Sky', 'Skeledirge', 'Smeargle', 'Solgaleo', 'Spectrier', 'Sneasler', 'Terapagos', 'Ursaluna-Bloodmoon', 'Urshifu', 'Urshifu-Rapid-Strike', 'Zacian',
			'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Arena Trap', 'Moody', 'Serene Grace', 'Shadow Tag', 'Damp Rock', 'Heat Rock', 'Light Clay',
			'Baton Pass', 'Beat Up', 'Fake Out', 'Last Respects', 'move:Metronome', 'Shed Tail',
		],
		restricted: [
			'Doom Desire', 'Dynamic Punch', 'Electro Ball', 'Explosion', 'Gyro Ball', 'Final Gambit', 'Flail', 'Flip Turn', 'Fury Cutter', 'Future Sight', 'Grass Knot',
			'Grassy Glide', 'Hard Press', 'Heavy Slam', 'Heat Crash', 'Inferno', 'Low Kick', 'Misty Explosion', 'Nuzzle', 'Power Trip', 'Reversal', 'Self-Destruct',
			'Spit Up', 'Stored Power', 'Tera Blast', 'U-turn', 'Volt Switch', 'Weather Ball', 'Zap Cannon',
		],
		onValidateTeam(team) {
			const itemTable = new Set<string>();
			for (const set of team) {
				const forte = this.toID(set.item);
				if (!forte) continue;
				const move = this.dex.moves.get(forte);
				if (move.exists && move.id !== 'metronome') {
					if (itemTable.has(forte)) {
						return [
							`You are limited to one of each move in the item slot per team.`,
							`(You have more than one ${move.name}.)`,
						];
					}
					itemTable.add(forte);
				}
			}
		},
		validateSet(set, teamHas) {
			const item = set.item;
			const species = this.dex.species.get(set.species);
			const move = this.dex.moves.get(item);
			if (!move.exists || move.id === 'metronome' || move.category === 'Status') {
				return this.validateSet(set, teamHas);
			}
			set.item = '';
			const problems = this.validateSet(set, teamHas) || [];
			set.item = item;
			if (this.ruleTable.has('obtainablemoves') && this.checkCanLearn(move, species, this.allSources(species), set)) {
				problems.push(`${species.name} can't learn ${move.name}.`);
			}
			if (set.moves.map(this.toID).includes(move.id)) {
				problems.push(`Moves in the item slot can't be in the moveslots as well.`);
			}
			if (this.ruleTable.has(`-move:${move.id}`)) {
				problems.push(`The move ${move.name} is fully banned.`);
			}
			const accuracyLoweringMove =
				move.secondaries?.some(secondary => secondary.boosts?.accuracy && secondary.boosts?.accuracy < 0);
			const flinchMove = move.secondaries?.some(secondary => secondary.volatileStatus === 'flinch');
			const freezeMove = move.secondaries?.some(secondary => secondary.status === 'frz') || move.id === 'triattack';
			if (
				this.ruleTable.isRestricted(`move:${move.id}`) ||
				((accuracyLoweringMove || move.ohko || move.multihit || move.id === 'beatup' || move.flags['charge'] ||
					move.priority > 0 || move.damageCallback || flinchMove || freezeMove) &&
					!this.ruleTable.has(`+move:${move.id}`))
			) {
				problems.push(`The move ${move.name} can't be used as an item.`);
			}
			return problems.length ? problems : null;
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				const move = this.dex.getActiveMove(pokemon.set.item);
				if (move.exists && move.category !== 'Status') {
					pokemon.m.forte = move;
					pokemon.item = 'mail' as ID;
				}
			}
		},
		onModifyMovePriority: 1,
		onModifyMove(move, pokemon, target) {
			const forte: ActiveMove = pokemon.m.forte;
			if (move.category !== 'Status' && forte) {
				move.flags = { ...move.flags, ...forte.flags };
				if (forte.self) {
					if (forte.self.onHit && move.self?.onHit) {
						for (const i in forte.self) {
							if (i.startsWith('onHit')) continue;
							(move.self as any)[i] = (forte.self as any)[i];
						}
					} else {
						move.self = { ...move.self, ...forte.self };
					}
				}
				if (forte.selfBoost?.boosts) {
					if (!move.selfBoost?.boosts) move.selfBoost = { boosts: {} };
					let boostid: BoostID;
					for (boostid in forte.selfBoost.boosts) {
						if (!move.selfBoost.boosts![boostid]) move.selfBoost.boosts![boostid] = 0;
						move.selfBoost.boosts![boostid]! += forte.selfBoost.boosts[boostid]!;
					}
				}
				if (forte.secondaries) {
					move.secondaries = [...(move.secondaries || []), ...forte.secondaries];
				}
				move.critRatio = (move.critRatio || 1) + (forte.critRatio || 1) - 1;
				const VALID_PROPERTIES = [
					'alwaysHit', 'basePowerCallback', 'breaksProtect', 'chloroblastRecoil', 'drain', 'forceSTAB', 'forceSwitch', 'hasCrashDamage',
					'hasSheerForce', 'ignoreAbility', 'ignoreAccuracy', 'ignoreDefensive', 'ignoreEvasion', 'ignoreImmunity', 'mindBlownRecoil',
					'noDamageVariance', 'ohko', 'overrideDefensivePokemon', 'overrideDefensiveStat', 'overrideOffensivePokemon', 'overrideOffensiveStat',
					'pseudoWeather', 'recoil', 'selfdestruct', 'selfSwitch', 'sleepUsable', 'smartTarget', 'stealsBoosts', 'thawsTarget', 'volatileStatus',
					'willCrit',
				] as const;
				for (const property of VALID_PROPERTIES) {
					if (forte[property]) {
						move[property] = forte[property] as any;
					}
				}
				// Added here because onEffectiveness doesn't have an easy way to reference the source
				if (forte.onEffectiveness) {
					move.onEffectiveness = function (typeMod, t, type, m) {
						return forte.onEffectiveness!.call(this, typeMod, t, type, m);
					};
				}
				forte.onModifyMove?.call(this, move, pokemon, target);
			}
		},
		onModifyPriority(priority, source, target, move) {
			const forte = source?.m.forte;
			if (move.category !== 'Status' && forte) {
				if (source.hasAbility('Triage') && forte.flags['heal']) {
					return priority + (move.flags['heal'] ? 0 : 3);
				}
				return priority + forte.priority;
			}
		},
		onModifyTypePriority: 1,
		onModifyType(move, pokemon, target) {
			const forte = pokemon.m.forte;
			if (move.category !== 'Status' && forte) {
				this.singleEvent('ModifyType', forte, null, pokemon, target, move, move);
			}
		},
		onHitPriority: 1,
		onHit(target, source, move) {
			const forte = source.m.forte;
			if (move?.category !== 'Status' && forte) {
				this.singleEvent('Hit', forte, {}, target, source, move);
				if (forte.self) this.singleEvent('Hit', forte.self, {}, source, source, move);
				this.singleEvent('AfterHit', forte, {}, target, source, move);
			}
		},
		onAfterSubDamage(damage, target, source, move) {
			const forte = source.m.forte;
			if (move?.category !== 'Status' && forte) {
				this.singleEvent('AfterSubDamage', forte, null, target, source, move, damage);
			}
		},
		onModifySecondaries(secondaries, target, source, move) {
			if (secondaries.some(s => !!s.self)) move.selfDropped = false;
		},
		onAfterMoveSecondaryPriority: 1,
		onAfterMoveSecondarySelf(source, target, move) {
			const forte = source.m.forte;
			if (move?.category !== 'Status' && forte) {
				this.singleEvent('AfterMoveSecondarySelf', forte, null, source, target, move);
			}
		},
		onBasePowerPriority: 1,
		onBasePower(basePower, source, target, move) {
			const forte = source.m.forte;
			if (move.category !== 'Status' && forte?.onBasePower) {
				forte.onBasePower.call(this, basePower, source, target, move);
			}
		},
		pokemon: {
			getItem() {
				const move = this.battle.dex.moves.get(this.m.forte);
				if (!move.exists) return Object.getPrototypeOf(this).getItem.call(this);
				return {
					...this.battle.dex.items.get('mail'),
					name: move.name, id: move.id, ignoreKlutz: true, onTakeItem: false,
				};
			},
		},
	},
	{
		name: "[Gen 9] Tier Shift AAA",
		desc: `Pok&eacute;mon have access to almost any ability. Additionally, Pok&eacute;mon below OU get their stats, excluding HP, boosted. UU/RUBL get +15, RU/NUBL get +20, NU/PUBL get +25, and PU or lower get +30.`,
		mod: 'gen9',
		ruleset: ['Standard OMs', 'Evasion Abilities Clause', 'Evasion Items Clause', 'Sleep Moves Clause', '!Obtainable Abilities', 'Ability Clause = 2', 'Tier Shift Mod', 'Terastal Clause'],
		banlist: [
			'Arceus', 'Calyrex-Shadow', 'Decidueye-Hisui', 'Deoxys-Attack', 'Electrode-Hisui', 'Eternatus', 'Ho-Oh', 'Hoopa-Confined', 'Kyurem-Black', 'Miraidon',
			'Necrozma-Dusk-Mane', 'Noivern', 'Rayquaza', 'Regigigas', 'Slaking', 'Weavile', 'Arena Trap', 'Comatose', 'Contrary', 'Fur Coat', 'Good as Gold', 'Gorilla Tactics',
			'Huge Power', 'Ice Scales', 'Illusion', 'Imposter', 'Innards Out', 'Magic Bounce', 'Magnet Pull', 'Moody', 'Neutralizing Gas', 'Orichalcum Pulse',
			'Parental Bond', 'Poison Heal', 'Pure Power', 'Quick Draw', 'Shadow Tag', 'Simple', 'Speed Boost', 'Stakeout', 'Toxic Debris', 'Triage', 'Unburden',
			'Water Bubble', 'Wonder Guard', 'Light Ball', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Revival Blessing', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] NFE",
		desc: `Only Pok&eacute;mon that can evolve are allowed.`,
		mod: 'gen9',
		// searchShow: false,
		ruleset: ['Standard OMs', 'Not Fully Evolved', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Basculin-White-Striped', 'Bisharp', 'Chansey', 'Combusken', 'Dipplin', 'Duraludon', 'Dusclops', 'Electabuzz', 'Gligar', 'Gurdurr',
			'Haunter', 'Magmar', 'Magneton', 'Misdreavus', 'Porygon2', 'Primeape', 'Qwilfish-Hisui', 'Rhydon', 'Scraggy', 'Scyther', 'Sneasel',
			'Sneasel-Hisui', 'Ursaring', 'Vigoroth', 'Vulpix-Base', 'Arena Trap', 'Magnet Pull', 'Moody', 'Shadow Tag', 'Baton Pass',
		],
	},
	{
		name: "[Gen 9] National Dex 35 Pokes",
		desc: `Only 35 Pok&eacute;mon are legal.`,
		mod: 'gen9',
		// searchShow: false,
		ruleset: [
			'Standard NatDex',
			'!Species Clause', 'Forme Clause', 'Sleep Moves Clause', 'Terastal Clause', 'DryPass Clause', 'Mega Rayquaza Clause',
		],
		banlist: [
			'ND Uber', 'ND AG', 'ND OU', 'ND UUBL', 'ND UU', 'ND RUBL', 'ND RU', 'ND NFE', 'ND LC',
			'Battle Bond', 'Moody', 'Power Construct', 'Shadow Tag', 'Tangled Feet', 'Berserk Gene', 'Booster Energy', 'King\'s Rock', 'Quick Claw',
			'Razor Fang', 'Hidden Power', 'Last Respects', 'Shed Tail', 'Baton Pass + Contrary', 'Baton Pass + Rapid Spin', 'Baton Pass + Well-Baked Body',
		],
		unbanlist: [
			'Araquanid-Base', 'Archeops', 'Bellossom', 'Boltund', 'Escavalier', 'Farigiraf', 'Fezandipiti', 'Gothitelle', 'Gyarados-Base', 'Kabutops',
			'Kilowattrel', 'Klawf', 'Magmortar', 'Mamoswine', 'Metagross-Base', 'Miltank', 'Oricorio-Base', 'Orthworm', 'Persian-Base', 'Pinsir-Base',
			'Polteageist', 'Pyukumuku', 'Rotom-Mow', 'Scizor-Base', 'Shiftry', 'Simisear', 'Skarmory-Base', 'Slowbro-Galar', 'Slurpuff', 'Thievul', 'Torkoal',
			'Toxtricity-Base', 'Turtonator', 'Tyranitar-Base', 'Wailord', 'Ultranecrozium Z', 'Solganium Z', 'Lunalium Z', 'Mewnium Z', 'Marshadium Z', 'Yawn',
		],
		// Stupid hardcode
		onValidateSet(set, format, setHas, teamHas) {
			if (set.item) {
				const item = this.dex.items.get(set.item);
				if (item.megaStone && !(this.ruleTable.has(`+item:${item.id}`) || this.ruleTable.has(`+tag:mega`))) {
					return [`Mega Evolution is banned.`];
				}
				if (item.zMove && !(this.ruleTable.has(`+item:${item.id}`))) {
					return [`${item.name} is banned.`];
				}
			}
		},
	},
	{
		name: "[Gen 2] UU",
		mod: 'gen2',
		// searchShow: false,
		ruleset: ['[Gen 2] OU'],
		banlist: ['OU', 'UUBL', 'Agility + Baton Pass'],
		unbanlist: ['Mean Look + Baton Pass', 'Spider Web + Baton Pass'],
	},
	{
		name: "[Gen 1] NU",
		mod: 'gen1',
		// searchShow: false,
		ruleset: ['[Gen 1] UU'],
		banlist: ['UU', 'NUBL'],
	},
	{
		name: "[Gen 9] VGC 2024 Reg G",
		mod: 'gen9',
		gameType: 'doubles',
		// searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 9', 'VGC Timer', 'Open Team Sheets', 'Limit One Restricted'],
		restricted: ['Restricted Legendary'],
	},
	{
		section: "Other Metagames",
		column: 2,
	},
	{
		name: "[Gen 9] Almost Any Ability",
		desc: `Pok&eacute;mon have access to almost any ability.`,
		mod: 'gen9',
		ruleset: ['Standard OMs', '!Obtainable Abilities', 'Ability Clause = 1', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Baxcalibur', 'Calyrex-Ice', 'Calyrex-Shadow', 'Ceruledge', 'Darkrai', 'Deoxys-Normal', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin', 'Dragapult', 'Dragonite',
			'Enamorus-Incarnate', 'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Gouging Fire', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Iron Bundle', 'Iron Valiant', 'Keldeo',
			'Koraidon', 'Kyogre', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Noivern',
			'Palkia', 'Palkia-Origin', 'Raging Bolt', 'Rayquaza', 'Regigigas', 'Reshiram', 'Shaymin-Sky', 'Slaking', 'Sneasler', 'Solgaleo', 'Spectrier', 'Urshifu', 'Urshifu-Rapid-Strike',
			'Volcarona', 'Walking Wake', 'Weavile', 'Zacian', 'Zacian-Crowned', 'Zekrom', 'Arena Trap', 'Comatose', 'Contrary', 'Fur Coat', 'Good as Gold', 'Gorilla Tactics', 'Huge Power',
			'Ice Scales', 'Illusion', 'Imposter', 'Innards Out', 'Magic Bounce', 'Magnet Pull', 'Moody', 'Neutralizing Gas', 'Orichalcum Pulse', 'Parental Bond', 'Poison Heal', 'Pure Power',
			'Shadow Tag', 'Simple', 'Speed Boost', 'Stakeout', 'Toxic Debris', 'Triage', 'Unburden', 'Water Bubble', 'Wonder Guard', 'King\'s Rock', 'Razor Fang', 'Baton Pass',
			'Last Respects', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] Balanced Hackmons",
		desc: `Anything directly hackable onto a set (EVs, IVs, forme, ability, item, and move) and is usable in local battles is allowed.`,
		mod: 'gen9',
		ruleset: [
			'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Moves Clause',
			'Endless Battle Clause', 'Hackmons Forme Legality', 'Species Reveal Clause', 'Terastal Clause',
		],
		banlist: [
			'Calyrex-Shadow', 'Deoxys-Attack', 'Gengar-Mega', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y', 'Rayquaza-Mega', 'Regigigas', 'Shedinja', 'Slaking', 'Arena Trap',
			'Contrary', 'Gorilla Tactics', 'Hadron Engine', 'Huge Power', 'Illusion', 'Innards Out', 'Libero', 'Liquid Ooze', 'Magnet Pull', 'Moody', 'Neutralizing Gas',
			'Orichalcum Pulse', 'Parental Bond', 'Poison Heal', 'Protean', 'Pure Power', 'Shadow Tag', 'Stakeout', 'Water Bubble', 'Wonder Guard', 'King\'s Rock',
			'Razor Fang', 'Baton Pass', 'Belly Drum', 'Ceaseless Edge', 'Clangorous Soul', 'Dire Claw', 'Electro Shot', 'Fillet Away', 'Imprison', 'Last Respects',
			'Lumina Crash', 'No Retreat', 'Photon Geyser', 'Power Trip', 'Quiver Dance', 'Rage Fist', 'Revival Blessing', 'Shed Tail', 'Sleep Talk', 'Substitute',
			'Shell Smash', 'Tail Glow', 'V-create',
		],
	},
	{
		name: "[Gen 9] Godly Gift",
		desc: `Each Pok&eacute;mon receives one base stat from a God (Restricted Pok&eacute;mon) depending on its position in the team. If there is no restricted Pok&eacute;mon, it uses the Pok&eacute;mon in the first slot.`,
		mod: 'gen9',
		ruleset: ['Standard OMs', 'Evasion Abilities Clause', 'Evasion Items Clause', 'Sleep Moves Clause', 'Godly Gift Mod'],
		banlist: [
			'Blissey', 'Calyrex-Shadow', 'Chansey', 'Deoxys-Attack', 'Koraidon', 'Kyurem-Black', 'Miraidon', 'Arena Trap', 'Gale Wings', 'Huge Power', 'Moody', 'Pure Power', 'Shadow Tag',
			'Swift Swim', 'Focus Band', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
		restricted: [
			'Alomomola', 'Annihilape', 'Araquanid', 'Arceus', 'Baxcalibur', 'Calyrex-Ice', 'Chien-Pao', 'Chi-Yu', 'Crawdaunt', 'Deoxys-Normal', 'Deoxys-Speed', 'Dialga', 'Dialga-Origin', 'Dragapult',
			'Espathra', 'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Gliscor', 'Gouging Fire', 'Groudon', 'Hawlucha', 'Ho-Oh', 'Iron Bundle', 'Iron Hands', 'Kingambit', 'Kyogre',
			'Kyurem', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Hearthflame', 'Palafin', 'Palkia', 'Palkia-Origin', 'Raging Bolt',
			'Rayquaza', 'Regieleki', 'Reshiram', 'Serperior', 'Shaymin-Sky', 'Smeargle', 'Solgaleo', 'Spectrier', 'Terapagos', 'Toxapex', 'Ursaluna', 'Ursaluna-Bloodmoon', 'Volcarona', 'Zacian',
			'Zacian-Crowned', 'Zamazenta-Crowned', 'Zekrom',
		],
	},
	{
		name: "[Gen 9] STABmons",
		desc: `Pok&eacute;mon can use any move of their typing, in addition to the moves they can normally learn.`,
		mod: 'gen9',
		ruleset: ['Standard OMs', 'STABmons Move Legality', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Arceus', 'Azumarill', 'Baxcalibur', 'Basculegion-M', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Deoxys-Attack', 'Deoxys-Normal', 'Dialga', 'Dialga-Origin',
			'Dragapult', 'Dragonite', 'Enamorus-Incarnate', 'Eternatus', 'Flutter Mane', 'Garchomp', 'Giratina', 'Giratina-Origin', 'Gouging Fire', 'Groudon', 'Gyarados', 'Ho-Oh',
			'Iron Bundle', 'Komala', 'Koraidon', 'Kyogre', 'Kyurem-Base', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Incarnate', 'Lugia', 'Lunala', 'Magearna', 'Meloetta', 'Mewtwo',
			'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Hearthflame', 'Ogerpon-Wellspring', 'Palkia', 'Palkia-Origin', 'Porygon-Z', 'Raging Bolt', 'Rayquaza',
			'Reshiram', 'Roaring Moon', 'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Terapagos', 'Thundurus-Therian', 'Ursaluna', 'Ursaluna-Bloodmoon', 'Urshifu', 'Urshifu-Rapid-Strike',
			'Walking Wake', 'Zacian', 'Zacian-Crowned', 'Zamazenta-Crowned', 'Zekrom', 'Zoroark-Hisui', 'Arena Trap', 'Moody', 'Shadow Tag', 'Damp Rock', 'King\'s Rock', 'Razor Fang',
			'Baton Pass', 'Last Respects', 'Shed Tail',
		],
		restricted: [
			'Astral Barrage', 'Belly Drum', 'Ceaseless Edge', 'Clangorous Soul', 'Combat Torque', 'Dire Claw', 'Dragon Energy', 'Electro Shot', 'Esper Wing', 'Extreme Speed', 'Fillet Away',
			'Final Gambit', 'Flower Trick', 'Gigaton Hammer', 'No Retreat', 'Rage Fist', 'Revival Blessing', 'Shell Smash', 'Shift Gear', 'Surging Strikes', 'Torch Song', 'Triple Arrows',
			'V-create', 'Victory Dance', 'Water Shuriken', 'Wicked Blow', 'Wicked Torque',
		],
	},
	{
		name: "[Gen 6] Pure Hackmons",
		desc: `Anything that can be hacked in-game and is usable in local battles is allowed.`,
		mod: 'gen6',
		ruleset: ['-Nonexistent', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'EV limit = 510'],
	},
	{
		section: "Challengeable OMs",
		column: 2,
	},
	{
		name: "[Gen 9] 1-2 Switch",
		desc: `Doubles-based metagame where each Pok&eacute;mon takes turns being "active" every few turns.`,
		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard OMs', 'Gravity Sleep Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Basculegion-M', 'Calyrex-Ice', 'Calyrex-Shadow', 'Darkrai', 'Deoxys-Attack', 'Deoxys-Normal', 'Dialga', 'Dialga-Origin', 'Eternatus', 'Flutter Mane',
			'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Lugia', 'Lunala', 'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings',
			'Necrozma-Dusk-Mane', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Tatsugiri', 'Terapagos', 'Urshifu', 'Urshifu-Rapid-Strike', 'Zacian', 'Zacian-Crowned', 'Zamazenta',
			'Zamazenta-Crowned', 'Moody', 'Shadow Tag',
		],
		battle: {
			endTurn() {
				// @ts-expect-error Hack
				for (const pokemon of this.getAllActive(false, true)) {
					// turn counter hasn't been incremented yet
					if (this.turn & 1 && pokemon.position === (this.turn & 2 ? 0 : 1) && pokemon.hp && pokemon.allies().length) {
						pokemon.volatiles['commanding'] = this.initEffectState({ id: 'commanding', name: 'Commanding', target: pokemon });
						pokemon.volatiles['gastroacid'] = this.initEffectState({ id: 'gastroacid', name: 'Gastro Acid', target: pokemon });
						this.add('-message', `${pokemon.side.name}'s ${pokemon.name !== pokemon.species.name ? `${pokemon.name} (${pokemon.species.name})` : pokemon.name} will be skipped next turn.`);
					} else {
						pokemon.removeVolatile('commanding');
						pokemon.removeVolatile('gastroacid');
					}
				}
				this.constructor.prototype.endTurn.call(this);
			},
			getAllActive(includeFainted, includeCommanding) {
				const pokemonList: Pokemon[] = [];
				for (const side of this.sides) {
					for (const pokemon of side.active) {
						if (pokemon && (includeFainted || !pokemon.fainted) && (includeCommanding || !pokemon.volatiles['commanding'])) {
							pokemonList.push(pokemon);
						}
					}
				}
				return pokemonList;
			},
		},
		side: {
			allies(all?: boolean) {
				let allies = this.active.filter(ally => ally);
				if (!all) allies = allies.filter(ally => ally.hp && !ally.volatiles['commanding']);
				return allies;
			},
		},
	},
	{
		name: "[Gen 9] 350 Cup",
		desc: `Pokemon with a BST of 350 or lower have their stats doubled.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves Clause', '350 Cup Mod', 'Evasion Clause'],
		banlist: ['Calyrex-Shadow', 'Clefairy', 'Flittle', 'Gastly', 'Miraidon', 'Pikachu', 'Rufflet', 'Smeargle', 'Arena Trap', 'Moody', 'Shadow Tag', 'Eviolite', 'Baton Pass'],
	},
	{
		name: "[Gen 9] Alphabet Cup",
		desc: `Allows Pok&eacute;mon to use any move that shares the same first letter as their name or a previous evolution's name.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Alphabet Cup Move Legality', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Baxcalibur', 'Blaziken', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Deoxys-Attack', 'Deoxys-Normal', 'Dialga', 'Dialga-Origin',
			'Dragapult', 'Dragonite', 'Espathra', 'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Gouging Fire', 'Groudon', 'Ho-Oh', 'Iron Bundle', 'Kingambit', 'Koraidon',
			'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Incarnate', 'Lugia', 'Lunala', 'Magearna', 'Mamoswine', 'Meowscarada', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings',
			'Necrozma-Dusk-Mane', 'Palafin', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Sceptile', 'Shaymin-Sky', 'Sneasler', 'Solgaleo', 'Spectrier', 'Ursaluna',
			'Urshifu-Single-Strike', 'Weavile', 'Zacian', 'Zacian-Crowned', 'Zamazenta-Crowned', 'Zekrom', 'Arena Trap', 'Moody', 'Shadow Tag', 'Damp Rock', 'Heat Rock',
			'King\'s Rock', 'Light Clay', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
		restricted: [
			'Belly Drum', 'Burning Bulwark', 'Ceaseless Edge', 'Clangorous Soul', 'Dire Claw', 'Extreme Speed', 'Fillet Away', 'Glacial Lance', 'Glare', 'Lumina Crash', 'Rage Fist',
			'Revival Blessing', 'Sacred Fire', 'Salt Cure', 'Shell Smash', 'Shift Gear', 'Surging Strikes', 'Tail Glow', 'Triple Arrows',
		],
	},
	{
		name: "[Gen 9] Bad 'n Boosted",
		desc: `All base stats of 70 and lower are doubled.`,
		searchShow: false,
		ruleset: ['Standard', 'Bad \'n Boosted Mod', 'Sleep Moves Clause', '!Sleep Clause Mod'],
		banlist: ['AG', 'Araquanid', 'Cyclizar', 'Espathra', 'Espeon', 'Pawmot', 'Polteageist', 'Huge Power', 'Moody', 'Pure Power', 'Shadow Tag', 'Eviolite', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Last Respects'],
	},
	{
		name: "[Gen 9] Battlefields",
		desc: `Any field condition with a set duration becomes permanent once triggered unless directly replaced, removed, or reversed. Namely, this impacts screens, weathers, terrains, room effects, gravity, and side conditions like Tailwind and Safeguard.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Evasion Abilities Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Deoxys-Attack', 'Deoxys-Normal', 'Dialga', 'Dialga-Origin', 'Espathra',
			'Eternatus', 'Flutter Mane', 'Gholdengo', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White',
			'Landorus-Incarnate', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Hearthflame', 'Palafin',
			'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Sneasler', 'Spectrier', 'Terapagos', 'Urshifu', 'Urshifu-Rapid-Strike', 'Zacian',
			'Zacian-Crowned', 'Zamazenta-Crowned', 'Zekrom', 'Arena Trap', 'Moody', 'Shadow Tag', 'King\'s Rock', 'Razor Fang', 'Aurora Veil', 'Baton Pass', 'Fairy Lock',
			'Last Respects', 'Light Screen', 'Quick Guard', 'Reflect', 'Shed Tail', 'Tailwind', 'Trick Room',
		],
		onWeatherChange() {
			this.field.weatherState.duration = 0;
		},
		onTerrainChange() {
			this.field.terrainState.duration = 0;
		},
		onPseudoWeatherChange(target, source, pseudoWeather) {
			this.field.pseudoWeather[pseudoWeather.id].duration = 0;
		},
		onSideConditionStart(side, source, sideCondition) {
			side.sideConditions[sideCondition.id].duration = 0;
		},
	},
	{
		name: "[Gen 9] Camomons",
		desc: `Pok&eacute;mon have their types set to match their first two moves.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Clause Mod', 'Evasion Items Clause', 'Evasion Abilities Clause', 'Terastal Clause', 'Camomons Mod'],
		banlist: [
			'Arceus', 'Baxcalibur', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Darkrai', 'Deoxys-Normal', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin', 'Dragonite', 'Drednaw',
			'Enamorus-Incarnate', 'Espathra', 'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Gouging Fire', 'Groudon', 'Ho-Oh', 'Iron Bundle', 'Kommo-o', 'Koraidon', 'Kyogre',
			'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Incarnate', 'Lugia', 'Lunala', 'Magearna', 'Manaphy', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane',
			'Palafin', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Roaring Moon', 'Shaymin-Sky', 'Sneasler', 'Solgaleo', 'Spectrier', 'Tornadus-Therian', 'Ursaluna-Bloodmoon',
			'Volcarona', 'Zacian', 'Zacian-Crowned', 'Zamazenta-Crowned', 'Zekrom', 'Arena Trap', 'Moody', 'Shadow Tag', 'Booster Energy', 'King\'s Rock', 'Light Clay', 'Razor Fang',
			'Baton Pass', 'Last Respects', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] Category Swap",
		desc: `All Special moves become Physical, and all Physical moves become Special.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Clause Mod', 'Category Swap Mod'],
		banlist: [
			'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Darkrai', 'Deoxys-Normal', 'Deoxys-Attack', 'Deoxys-Speed', 'Dialga', 'Dialga-Origin', 'Dragapult', 'Eternatus',
			'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Iron Valiant', 'Koraidon', 'Kyogre', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Incarnate', 'Lugia', 'Lunala',
			'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Regieleki', 'Reshiram', 'Roaring Moon', 'Solgaleo',
			'Spectrier', 'Terapagos', 'Volcarona', 'Zacian', 'Zacian-Crowned', 'Zamazenta-Crowned', 'Zekrom', 'Arena Trap', 'Moody', 'Shadow Tag', 'Damp Rock', 'King\'s Rock',
			'Razor Fang', 'Baton Pass', 'Draco Meteor', 'Last Respects', 'Overheat', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] Convergence",
		desc: `Allows all Pok&eacute;mon that have identical types to share moves and abilities.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Ability Clause = 1', 'Sleep Moves Clause', 'Convergence Legality', 'Terastal Clause', '!Obtainable Abilities'],
		banlist: [
			'Arceus', 'Baxcalibur', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Comfey', 'Darkrai', 'Deoxys-Normal', 'Deoxys-Attack', 'Deoxys-Speed',
			'Dialga', 'Dialga-Origin', 'Dondozo', 'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Groudon', 'Haxorus', 'Ho-oh', 'Inteleon',
			'Iron Bundle', 'Iron Hands', 'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Incarnate', 'Lilligant-Hisui', 'Lugia', 'Lunala',
			'Magearna', 'Manaphy', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Hearthflame', 'Palafin', 'Palkia', 'Palkia-Origin',
			'Porygon-Z', 'Primarina', 'Rayquaza', 'Regieleki', 'Regigigas', 'Reshiram', 'Roaring Moon', 'Shaymin-Sky', 'Solgaleo', 'Slaking', 'Smeargle', 'Sneasler',
			'Spectrier', 'Umbreon', 'Urshifu-Single-Strike', 'Urshifu-Rapid-Strike', 'Walking Wake', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned',
			'Zekrom', 'Arena Trap', 'Comatose', 'Contrary', 'Drizzle', 'Drought', 'Imposter', 'Moody', 'Pure Power', 'Shadow Tag', 'Speed Boost', 'Unburden',
			'King\'s Rock', 'Light Clay', 'Razor Fang', 'Baton Pass', 'Belly Drum', 'Boomburst', 'Extreme Speed', 'Final Gambit', 'Last Respects', 'Population Bomb',
			'Quiver Dance', 'Rage Fist', 'Shed Tail', 'Shell Smash', 'Spore', 'Transform',
		],
	},
	{
		name: "[Gen 9] Cross Evolution",
		desc: `Give a Pok&eacute;mon a Pok&eacute;mon name of the next evolution stage as a nickname to inherit stat changes, typing, abilities, and moves from the next stage Pok&eacute;mon.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Basculin-White-Striped', 'Duraludon', 'Kyogre', 'Miraidon', 'Scyther', 'Sneasel', 'Sneasel-Hisui', 'Ursaring', 'Arena Trap',
			'Huge Power', 'Pure Power', 'Shadow Tag', 'Moody', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Shed Tail',
		],
		restricted: ['Espathra', 'Frosmoth', 'Gallade', 'Lilligant-Hisui', 'Lunala', 'Solgaleo'],
		onValidateTeam(team) {
			const nums = new Set<number>();
			for (const set of team) {
				const name = set.name;
				const species = this.dex.species.get(name);
				if (nums.has(species.num)) {
					return [
						`Your Pok\u00e9mon must have different nicknames.`,
						`(You have more than one Pok\u00e9mon named after a form of '${species.name}')`,
					];
				}
				if (species.exists && species.name !== set.species) nums.add(species.num);
			}
			if (!nums.size) {
				return [
					`${this.format.name} works using nicknames; your team has 0 nicknamed Pok\u00e9mon.`,
					`(If this was intentional, add a nickname to one Pok\u00e9mon that isn't the name of a Pok\u00e9mon species.)`,
				];
			}
		},
		checkCanLearn(move, species, lsetData, set) {
			if (!(set as any).sp?.exists || !(set as any).crossSpecies?.exists) {
				return this.checkCanLearn(move, species, lsetData, set);
			}
			const problem = this.checkCanLearn(move, (set as any).sp);
			if (!problem) return null;
			if (this.checkCanLearn(move, (set as any).crossSpecies)) return problem;
			return null;
		},
		validateSet(set, teamHas) {
			const crossSpecies = this.dex.species.get(set.name);
			let problems = this.dex.formats.get('Obtainable Misc').onChangeSet?.call(this, set, this.format) || null;
			if (Array.isArray(problems) && problems.length) return problems;
			const crossNonstandard = (!this.ruleTable.has('natdexmod') && crossSpecies.isNonstandard === 'Past') ||
				crossSpecies.isNonstandard === 'Future';
			const crossIsCap = !this.ruleTable.has('+tag:cap') && crossSpecies.isNonstandard === 'CAP';
			if (!crossSpecies.exists || crossNonstandard || crossIsCap) return this.validateSet(set, teamHas);
			const species = this.dex.species.get(set.species);
			const check = this.checkSpecies(set, species, species, {});
			if (check) return [check];
			const nonstandard = !this.ruleTable.has('natdexmod') && species.isNonstandard === 'Past';
			const isCap = !this.ruleTable.has('+tag:cap') && species.isNonstandard === 'CAP';
			if (!species.exists || nonstandard || isCap || species === crossSpecies) return this.validateSet(set, teamHas);
			if (!species.nfe) return [`${species.name} cannot cross evolve because it doesn't evolve.`];
			const crossIsUnreleased = (crossSpecies.tier === "Unreleased" && crossSpecies.isNonstandard === "Unobtainable" &&
				!this.ruleTable.has('+unobtainable'));
			if (crossSpecies.battleOnly || crossIsUnreleased || !crossSpecies.prevo) {
				return [`${species.name} cannot cross evolve into ${crossSpecies.name} because it isn't an evolution.`];
			}
			if (this.ruleTable.isRestrictedSpecies(crossSpecies)) {
				return [`${species.name} cannot cross evolve into ${crossSpecies.name} because it is banned.`];
			}
			const crossPrevoSpecies = this.dex.species.get(crossSpecies.prevo);
			if (!crossPrevoSpecies.prevo !== !species.prevo) {
				return [
					`${species.name} cannot cross evolve into ${crossSpecies.name} because they are not consecutive evolution stages.`,
				];
			}
			const item = this.dex.items.get(set.item);
			if (item.itemUser?.length) {
				if (!item.itemUser.includes(crossSpecies.name) || crossSpecies.name !== species.name) {
					return [`${species.name} cannot use ${item.name} because it is cross evolved into ${crossSpecies.name}.`];
				}
			}
			const ability = this.dex.abilities.get(set.ability);
			if (!this.ruleTable.isRestricted(`ability:${ability.id}`) || Object.values(species.abilities).includes(ability.name)) {
				set.species = crossSpecies.name;
			}

			(set as any).sp = species;
			(set as any).crossSpecies = crossSpecies;
			problems = this.validateSet(set, teamHas);
			set.name = crossSpecies.name;
			set.species = species.name;
			return problems;
		},
		onModifySpecies(species, target, source, effect) {
			if (!target) return; // chat
			if (effect && ['imposter', 'transform'].includes(effect.id)) return;
			if (target.set.name === target.set.species) return;
			const crossSpecies = this.dex.species.get(target.set.name);
			if (!crossSpecies.exists) return;
			if (species.battleOnly || !species.nfe) return;
			const crossIsUnreleased = (crossSpecies.tier === "Unreleased" && crossSpecies.isNonstandard === "Unobtainable" &&
				!this.ruleTable.has('+unobtainable'));
			if (crossSpecies.battleOnly || crossIsUnreleased || !crossSpecies.prevo) return;
			const crossPrevoSpecies = this.dex.species.get(crossSpecies.prevo);
			if (!crossPrevoSpecies.prevo !== !species.prevo) return;

			const mixedSpecies = this.dex.deepClone(species);
			mixedSpecies.weightkg =
				Math.max(0.1, species.weightkg + crossSpecies.weightkg - crossPrevoSpecies.weightkg).toFixed(1);
			mixedSpecies.nfe = false;
			mixedSpecies.evos = [];
			mixedSpecies.eggGroups = crossSpecies.eggGroups;
			mixedSpecies.abilities = crossSpecies.abilities;
			mixedSpecies.bst = 0;
			let i: StatID;
			for (i in species.baseStats) {
				const statChange = crossSpecies.baseStats[i] - crossPrevoSpecies.baseStats[i];
				mixedSpecies.baseStats[i] = this.clampIntRange(species.baseStats[i] + statChange, 1, 255);
				mixedSpecies.bst += mixedSpecies.baseStats[i];
			}
			if (crossSpecies.types[0] !== crossPrevoSpecies.types[0]) mixedSpecies.types[0] = crossSpecies.types[0];
			if (crossSpecies.types[1] !== crossPrevoSpecies.types[1]) {
				mixedSpecies.types[1] = crossSpecies.types[1] || crossSpecies.types[0];
			}
			if (mixedSpecies.types[0] === mixedSpecies.types[1]) mixedSpecies.types = [mixedSpecies.types[0]];

			return mixedSpecies;
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.baseSpecies = pokemon.species;
			}
		},
	},
	{
		name: "[Gen 9] Fervent Impersonation",
		desc: `Nickname a Pok&eacute;mon after another Pok&eacute;mon that it shares a moveset with, and it will transform into the Pok&eacute;mon it's nicknamed after once it drops to or below 50% health.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Fervent Impersonation Mod', '!Nickname Clause'],
		banlist: ['Arena Trap', 'Moody', 'Shadow Tag', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Dire Claw', 'Shed Tail', 'Last Respects'],
		restricted: [
			'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Deoxys-Normal', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin', 'Espathra', 'Eternatus',
			'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna',
			'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palafin', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Regieleki', 'Reshiram', 'Shaymin-Sky',
			'Solgaleo', 'Terapagos', 'Urshifu-Single-Strike', 'Zacian', 'Zacian-Crowned', 'Zamazenta-Crowned', 'Zekrom',
		],
		// Implemented the mechanics as a Rule because I'm too lazy to make battles read base format for `onResidual` at the moment
	},
	{
		name: "[Gen 9] Flipped",
		desc: `All Pok&eacute;mon have their base stats flipped. For example, Sylveon's HP and Speed stats, Attack and Special Defense stats, and Defense and Special Attack stats swap.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Evasion Abilities Clause', 'Evasion Items Clause', 'Flipped Mod'],
		banlist: [
			'Annihilape', 'Araquanid', 'Arceus', 'Azumarill', 'Blissey', 'Calyrex-Ice', 'Calyrex-Shadow', 'Cloyster', 'Cyclizar', 'Deoxys-Attack', 'Deoxys-Normal',
			'Deoxys-Speed', 'Dialga', 'Dialga-Origin', 'Espathra', 'Eternatus', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Koraidon', 'Kyogre',
			'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Mienshao', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia',
			'Palkia-Origin', 'Rayquaza', 'Regieleki', 'Reshiram', 'Shaymin-Sky', 'Snorlax', 'Solgaleo', 'Sylveon', 'Terapagos', 'Torkoal', 'Tornadus-Therian', 'Zacian',
			'Zacian-Crowned', 'Zamazenta-Crowned', 'Zekrom', 'Arena Trap', 'Moody', 'Shadow Tag', 'Damp Rock', 'King\'s Rock', 'Light Clay', 'Razor Fang', 'Baton Pass',
			'Last Respects', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] Foresighters",
		desc: `Moves in the first moveslot will be delayed by two turns.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Baxcalibur', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chien-Pao', 'Chi-Yu', 'Deoxys-Normal', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin', 'Espathra',
			'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Iron Bundle', 'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Incarnate',
			'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palafin', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Shaymin-Sky',
			'Solgaleo', 'Spectrier', 'Ursaluna-Bloodmoon', 'Urshifu', 'Urshifu-Rapid-Strike', 'Zacian', 'Zacian-Crowned', 'Zamazenta-Crowned', 'Zekrom', 'Arena Trap', 'Moody', 'Shadow Tag',
			'Sand Veil', 'Snow Cloak', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Dire Claw', 'Last Respects', 'Shed Tail',
		],
		restricted: [
			'Belly Drum', 'Clangorous Soul', 'Dragon Dance', 'Endeavor', 'Quiver Dance', 'Shell Smash', 'Shift Gear', 'Tail Glow', 'Tidy Up', 'Victory Dance',
		],
		onValidateSet(set) {
			const fsMove = this.dex.moves.get(set.moves[0]);
			if (this.ruleTable.isRestricted(`move:${fsMove.id}`)) {
				return [`${set.name}'s move ${fsMove.name} cannot be used as a future move.`];
			}
		},
		onModifyMove(move, pokemon) {
			if (move.id === pokemon.moveSlots[0].id && !move.flags['futuremove']) {
				move.flags['futuremove'] = 1;
				delete move.flags['protect'];
				move.onTry = function (source, t) {
					if (!t.side.addSlotCondition(t, 'futuremove')) {
						this.hint('Future moves fail when the targeted slot already has a future move focused on it.');
						return false;
					}
					const moveData = this.dex.getActiveMove(move.id);
					moveData.flags['futuremove'] = 1;
					delete moveData.flags['protect'];
					delete moveData.smartTarget;
					if (moveData.id === 'beatup') this.singleEvent('ModifyMove', moveData, null, pokemon, null, null, moveData);
					Object.assign(t.side.slotConditions[t.position]['futuremove'], {
						duration: 3,
						move: moveData.id,
						source,
						moveData,
					});
					this.add('-message', `${source.name} foresaw an attack!`);
					return this.NOT_FAIL;
				};
			}
		},
	},
	{
		name: "[Gen 9] Formemons",
		desc: `Alternate formes of existing Pokemon can be used directly without required items/moves.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: [
			'Standard AG', '!Obtainable Formes', '+Past', '+LGPE', 'Evasion Clause', 'Forme Clause', 'OHKO Clause', 'Overflow Stat Mod',
			'Sleep Moves Clause', 'Species Reveal Clause', 'Hackmons Forme Legality', 'Mega Rayquaza Clause',
		],
		banlist: ['Calyrex-Shadow', 'Gengar-Mega', 'Miraidon', 'Moody', 'King\'s Rock', 'Razor Fang', 'Baton Pass'],
		onValidateSet(set, format, setHas, teamHas) {
			const species = this.dex.species.get(set.species);
			if (this.dex.species.get(species.baseSpecies).isNonstandard) return [`${species.name} does not exist in Gen 9.`];
			if (species.name !== species.baseSpecies && species.baseSpecies === 'Arceus' &&
				this.dex.items.get(set.item).onPlate !== species.types[0]) {
				return [`${species.name} is required to hold the ${species.requiredItems![0]}.`];
			}
		},
	},
	{
		name: "[Gen 9] Frantic Fusions",
		desc: `Pok&eacute;mon nicknamed after another Pok&eacute;mon get their stats buffed by 1/4 of that Pok&eacute;mon's stats, barring HP, and access to one of their abilities.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', '!Nickname Clause', '!Obtainable Abilities', 'Ability Clause = 2', 'Sleep Moves Clause', 'Frantic Fusions Mod', 'Terastal Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Baxcalibur', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Comfey', 'Cresselia', 'Darkrai', 'Deoxys-Normal', 'Deoxys-Attack',
			'Deoxys-Speed', 'Dialga', 'Dialga-Origin', 'Ditto', 'Dragapult', 'Enamorus-Incarnate', 'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Gouging Fire',
			'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Iron Boulder', 'Iron Bundle', 'Iron Moth', 'Iron Valiant', 'Keldeo', 'Koraidon', 'Komala', 'Kyogre', 'Kyurem', 'Kyurem-Black',
			'Kyurem-White', 'Landorus-Incarnate', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Numel', 'Ogerpon-Hearthflame',
			'Ogerpon-Wellspring', 'Palafin', 'Palkia', 'Palkia-Origin', 'Persian-Alola', 'Rayquaza', 'Regieleki', 'Regigigas', 'Reshiram', 'Shaymin-Sky', 'Slaking', 'Sneasler',
			'Solgaleo', 'Spectrier', 'Toxapex', 'Urshifu', 'Urshifu-Rapid-Strike', 'Volcarona', 'Walking Wake', 'Weavile', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned',
			'Zekrom', 'Arena Trap', 'Contrary', 'Huge Power', 'Ice Scales', 'Illusion', 'Magnet Pull', 'Moody', 'Neutralizing Gas', 'Poison Heal', 'Pure Power', 'Shadow Tag',
			'Stakeout', 'Stench', 'Speed Boost', 'Unburden', 'Water Bubble', 'Damp Rock', 'Heat Rock', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Baton Pass', 'Last Respects',
			'Revival Blessing', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] Inheritance",
		desc: `Pok&eacute;mon may use the ability and moves of another, as long as they forfeit their own learnset.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Ability Clause = 1', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chien-Pao', 'Cresselia', 'Deoxys-Normal', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin', 'Dondozo', 'Dragapult', 'Eternatus',
			'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Groudon', 'Hoopa-Unbound', 'Ho-Oh', 'Iron Bundle', 'Iron Valiant', 'Koraidon', 'Kyogre', 'Kyurem', 'Kyurem-Black',
			'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Palkia-Origin', 'Pecharunt', 'Rayquaza',
			'Regieleki', 'Regigigas', 'Reshiram', 'Roaring Moon', 'Sableye', 'Scream Tail', 'Shaymin-Sky', 'Slaking', 'Smeargle', 'Solgaleo', 'Spectrier', 'Urshifu-Single-Strike',
			'Ursaluna-Base', 'Weavile', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Arena Trap', 'Drizzle', 'Drought', 'Good as Gold', 'Huge Power',
			'Imposter', 'Magic Bounce', 'Magnet Pull', 'Moody', 'Neutralizing Gas', 'Poison Heal', 'Pure Power', 'Shadow Tag', 'Sheer Force', 'Speed Boost', 'Stakeout', 'Water Bubble',
			'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Ceaseless Edge', 'Fillet Away', 'Last Respects', 'Quiver Dance', 'Rage Fist', 'Shed Tail', 'Shell Smash',
		],
		getEvoFamily(speciesid) {
			let species = Dex.species.get(speciesid);
			while (species.prevo) {
				const prevoSpecies = Dex.species.get(species.prevo);
				if (prevoSpecies.evos.length > 1) break;
				species = prevoSpecies;
			}
			return species.id;
		},
		validateSet(set, teamHas) {
			if (!teamHas.abilityMap) {
				teamHas.abilityMap = Object.create(null);
				for (const pokemon of Dex.species.all()) {
					if (pokemon.isNonstandard && !this.ruleTable.has(`+tag:${this.toID(pokemon.isNonstandard)}`)) continue;
					if (pokemon.battleOnly) continue;
					if (this.ruleTable.isBannedSpecies(pokemon)) continue;

					for (const key of Object.values(pokemon.abilities)) {
						const abilityId = this.dex.toID(key);
						if (abilityId in teamHas.abilityMap) {
							teamHas.abilityMap[abilityId][pokemon.evos ? 'push' : 'unshift'](pokemon.id);
						} else {
							teamHas.abilityMap[abilityId] = [pokemon.id];
						}
					}
				}
			}

			const problem = this.validateForme(set);
			if (problem.length) return problem;

			const species = this.dex.species.get(set.species);
			if (!species.exists || species.num < 1) return [`The Pok\u00e9mon "${set.species}" does not exist.`];
			if (species.isNonstandard && !this.ruleTable.has(`+tag:${this.toID(species.isNonstandard)}`)) {
				return [`${species.name} is not obtainable in Generation ${this.dex.gen}.`];
			}

			const name = set.name;
			if (this.ruleTable.isBannedSpecies(species)) {
				return this.validateSet(set, teamHas);
			}

			const ability = this.dex.abilities.get(set.ability);
			if (!ability.exists || ability.isNonstandard) return [`${name} needs to have a valid ability.`];
			const pokemonWithAbility = teamHas.abilityMap[ability.id];
			if (!pokemonWithAbility) return [`${ability.name} is not available on a legal Pok\u00e9mon.`];

			(this.format as any).debug = true;

			if (!teamHas.abilitySources) teamHas.abilitySources = Object.create(null);
			const validSources: string[] = teamHas.abilitySources[this.toID(set.species)] = []; // Evolution families

			let canonicalSource = ''; // Specific for the basic implementation of Donor Clause (see onValidateTeam).
			const hpType = set.hpType;

			for (const donor of pokemonWithAbility) {
				const donorSpecies = this.dex.species.get(donor);
				let format = this.format;
				if (!format.getEvoFamily) format = this.dex.formats.get('gen9inheritance');
				const evoFamily = format.getEvoFamily!(donorSpecies.id);
				if (validSources.includes(evoFamily)) continue;

				set.species = donorSpecies.name;
				set.name = donorSpecies.baseSpecies;
				// TODO: Make this less hardcoded. Is it even possible?
				// Do I even need to add special cases for Pagos and pokemon with fixed minimum IVs?
				const min20IVs = ["Iron Boulder", "Gouging Fire", "Iron Crown", "Raging Bolt"];
				if (min20IVs.includes(donorSpecies.name)) {
					let iv: StatID;
					for (iv in set.ivs) {
						if (set.ivs[iv] < 20) set.ivs[iv] = 20;
					}
				}
				const problems = this.validateSet(set, teamHas);
				if (!problems?.length) {
					validSources.push(evoFamily);
					canonicalSource = donorSpecies.name;
				}
				// Specific for the basic implementation of Donor Clause (see onValidateTeam).
				if (validSources.length > 1) break;
			}
			(this.format as any).debug = false;

			set.name = name;
			set.species = species.name;
			set.hpType = hpType;
			if (!validSources.length) {
				if (pokemonWithAbility.length > 1) return [`${name}'s set is illegal.`];
				return [`${name} has an illegal set with an ability from ${this.dex.species.get(pokemonWithAbility[0]).name}.`];
			}

			// Protocol: Include the data of the donor species in the `pokeball` data slot.
			// Afterwards, we are going to reset the name to what the user intended.
			set.pokeball = `${set.pokeball}0${canonicalSource}`;
			return null;
		},
		onValidateTeam(team, f, teamHas) {
			if (this.ruleTable.has('abilityclause')) {
				const abilityTable = new this.dex.Multiset<string>();
				const base: { [k: string]: string } = {
					airlock: 'cloudnine',
					armortail: 'queenlymajesty',
					battlearmor: 'shellarmor',
					clearbody: 'whitesmoke',
					dazzling: 'queenlymajesty',
					emergencyexit: 'wimpout',
					filter: 'solidrock',
					gooey: 'tanglinghair',
					insomnia: 'vitalspirit',
					ironbarbs: 'roughskin',
					keeneye: 'illuminate',
					libero: 'protean',
					minus: 'plus',
					moxie: 'chillingneigh',
					powerofalchemy: 'receiver',
					propellertail: 'stalwart',
					teravolt: 'moldbreaker',
					turboblaze: 'moldbreaker',
				};
				const num = parseInt(this.ruleTable.valueRules.get('abilityclause')!);
				for (const set of team) {
					let ability = this.toID(set.ability.split('0')[0]);
					if (!ability) continue;
					if (ability in base) ability = base[ability] as ID;
					if (abilityTable.get(ability) >= num) {
						return [
							`You are limited to ${num} of each ability by ${num} Ability Clause.`,
							`(You have more than ${num} ${this.dex.abilities.get(ability).name} variants)`,
						];
					}
					abilityTable.add(ability);
				}
			}

			// Donor Clause
			const evoFamilyLists = [];
			for (const set of team) {
				const abilitySources = teamHas.abilitySources?.[this.toID(set.species)];
				if (!abilitySources) continue;
				let format = this.format;
				if (!format.getEvoFamily) format = this.dex.formats.get('gen9inheritance');
				evoFamilyLists.push(abilitySources.map(format.getEvoFamily!));
			}

			// Checking actual full incompatibility would require expensive algebra.
			// Instead, we only check the trivial case of multiple Pokémon only legal for exactly one family. FIXME?
			const requiredFamilies = Object.create(null);
			for (const evoFamilies of evoFamilyLists) {
				if (evoFamilies.length !== 1) continue;
				const [familyId] = evoFamilies;
				if (!(familyId in requiredFamilies)) {
					requiredFamilies[familyId] = 1;
				} else {
					requiredFamilies[familyId]++;
				}
				if (requiredFamilies[familyId] > 1) {
					return [
						`You are limited to up to one inheritance from each evolution family by the Donor Clause.`,
						`(You inherit more than once from ${this.dex.species.get(familyId).name}).`,
					];
				}
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				if (pokemon.pokeball.includes('0')) {
					const donor = pokemon.pokeball.split('0')[1];
					pokemon.m.donor = this.toID(donor);
					(pokemon as any).pokeball = this.toID(pokemon.pokeball.split('0')[0]);
				}
			}
		},
		onSwitchIn(pokemon) {
			if (!pokemon.m.donor) return;
			const donorTemplate = this.dex.species.get(pokemon.m.donor);
			if (!donorTemplate.exists) return;
			// Place volatiles on the Pokémon to show the donor details.
			this.add('-start', pokemon, donorTemplate.name, '[silent]');
		},
	},
	{
		name: "[Gen 9] Inverse",
		desc: `The type chart is inverted; weaknesses become resistances, while resistances and immunities become weaknesses.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Inverse Mod', 'Terastal Clause'],
		banlist: [
			'Arceus', 'Baxcalibur', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chien-Pao', 'Deoxys-Attack', 'Deoxys-Normal', 'Deoxys-Speed', 'Espathra', 'Eternatus', 'Flutter Mane',
			'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Indeedee', 'Indeedee-F', 'Koraidon', 'Kyogre', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Lunala', 'Maushold', 'Mewtwo',
			'Miraidon', 'Necrozma-Dawn-Wings', 'Palafin', 'Palkia', 'Palkia-Origin', 'Porygon-Z', 'Rayquaza', 'Regidrago', 'Regieleki', 'Reshiram', 'Rillaboom', 'Shaymin-Sky',
			'Spectrier', 'Ursaluna', 'Ursaluna-Bloodmoon', 'Zacian', 'Zacian-Crowned', 'Zamazenta-Hero', 'Zekrom', 'Arena Trap', 'Moody', 'Shadow Tag', 'King\'s Rock', 'Light Clay',
			'Baton Pass', 'Last Respects', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] Nature Swap",
		desc: `Pok&eacute;mon have their stats swapped around based on their nature. A Pok&eacute;mon with a Modest nature will have its Atk and Sp. Atk stats swap.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Azumarill', 'Blissey', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chansey', 'Chi-Yu', 'Chien-Pao', 'Cloyster', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense',
			'Deoxys-Speed', 'Dialga', 'Dialga-Origin', 'Espathra', 'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Gouging Fire', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound',
			'Iron Bundle', 'Koraidon', 'Kyogre', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Incarnate', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings',
			'Necrozma-Dusk-Mane', 'Palafin', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Regieleki', 'Reshiram', 'Shaymin-Sky', 'Sneasler', 'Solgaleo', 'Terapagos', 'Ursaluna',
			'Ursaluna-Bloodmoon', 'Urshifu-Single-Strike', 'Urshifu-Rapid-Strike', 'Zacian', 'Zacian-Crowned', 'Zamazenta-Crowned', 'Zekrom', 'Arena Trap', 'Moody', 'Shadow Tag',
			'Baton Pass', 'Last Respects', 'Shed Tail',
		],
		onSwitchIn(pokemon) {
			this.add('-start', pokemon, pokemon.getNature().name, '[silent]');
		},
		battle: {
			statModify(baseStats, set, statName) {
				const tr = this.trunc;
				const nature = this.dex.natures.get(set.nature);
				let baseStatName = statName;
				if (nature.plus) {
					if (statName === nature.minus) {
						baseStatName = nature.plus;
					} else if (statName === nature.plus) {
						baseStatName = nature.minus!;
					}
				}
				let stat = baseStats[baseStatName];
				if (statName === 'hp') {
					return tr(tr(2 * stat + set.ivs[statName] + tr(set.evs[statName] / 4) + 100) * set.level / 100 + 10);
				}
				stat = tr(tr(2 * stat + set.ivs[statName] + tr(set.evs[statName] / 4)) * set.level / 100 + 5);
				if (nature.plus === statName) {
					stat = this.ruleTable.has('overflowstatmod') ? Math.min(stat, 595) : stat;
					stat = tr(tr(stat * 110, 16) / 100);
				}
				return stat;
			},
		},
	},
	{
		name: "[Gen 9] Pure Hackmons",
		desc: `Anything directly hackable onto a set (EVs, IVs, forme, ability, item, and move) and is usable in local battles is allowed.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Hackmons Forme Legality', 'Species Reveal Clause', 'Endless Battle Clause'],
	},
	{
		name: "[Gen 9] Relay Race",
		desc: `The effects of the move Baton Pass are triggered upon manually withdrawing a Pok&eacute;mon from battle.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Archaludon', 'Baxcalibur', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chien-Pao', 'Chi-Yu', 'Deoxys-Attack', 'Deoxys-Normal', 'Dialga',
			'Dialga-Origin', 'Enamorus-Incarnate', 'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Gouging Fire', 'Groudon', 'Ho-Oh', 'Iron Bundle',
			'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Incarnate', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings',
			'Necrozma-Dusk-Mane', 'Ogerpon-Hearthflame', 'Ogerpon-Wellspring', 'Palafin', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Sneasler',
			'Solgaleo', 'Skeledirge', 'Spectrier', 'Ursaluna-Bloodmoon', 'Urshifu', 'Urshifu-Rapid-Strike', 'Zacian', 'Zacian-Crowned', 'Zamazenta-Crowned', 'Zekrom',
			'Arena Trap', 'Moody', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'Speed Boost', 'Bright Powder', 'King\'s Rock', 'Razor Fang', 'Clangorous Soul',
			'Last Respects', 'Mud-Slap', 'Muddy Water', 'Night Daze', 'No Retreat', 'Perish Song', 'Sand Attack', 'Shell Smash', 'Smokescreen', 'Quiver Dance', 'Victory Dance',
		],
		actions: {
			switchIn(pokemon, pos, sourceEffect, isDrag) {
				if (!pokemon || pokemon.isActive) {
					this.battle.hint("A switch failed because the Pokémon trying to switch in is already in.");
					return false;
				}

				const side = pokemon.side;
				if (pos >= side.active.length) {
					throw new Error(`Invalid switch position ${pos} / ${side.active.length}`);
				}
				const oldActive = side.active[pos];
				const unfaintedActive = oldActive?.hp ? oldActive : null;
				if (unfaintedActive) {
					oldActive.beingCalledBack = true;
					let switchCopyFlag: 'copyvolatile' | 'shedtail' | boolean = false;
					if (sourceEffect && typeof (sourceEffect as Move).selfSwitch) {
						if (typeof (sourceEffect as Move).selfSwitch === 'string') {
							switchCopyFlag = (sourceEffect as Move).selfSwitch!;
						}
					} else {
						if (!isDrag && !sourceEffect) switchCopyFlag = 'copyvolatile';
					}
					if (!oldActive.skipBeforeSwitchOutEventFlag && !isDrag) {
						this.battle.runEvent('BeforeSwitchOut', oldActive);
						if (this.battle.gen >= 5) {
							this.battle.eachEvent('Update');
						}
					}
					oldActive.skipBeforeSwitchOutEventFlag = false;
					if (!this.battle.runEvent('SwitchOut', oldActive)) {
						// Warning: DO NOT interrupt a switch-out if you just want to trap a pokemon.
						// To trap a pokemon and prevent it from switching out, (e.g. Mean Look, Magnet Pull)
						// use the 'trapped' flag instead.

						// Note: Nothing in the real games can interrupt a switch-out (except Pursuit KOing,
						// which is handled elsewhere); this is just for custom formats.
						return false;
					}
					if (!oldActive.hp) {
						// a pokemon fainted from Pursuit before it could switch
						return 'pursuitfaint';
					}

					// will definitely switch out at this point

					oldActive.illusion = null;
					this.battle.singleEvent('End', oldActive.getAbility(), oldActive.abilityState, oldActive);
					this.battle.singleEvent('End', oldActive.getItem(), oldActive.itemState, oldActive);

					// if a pokemon is forced out by Whirlwind/etc or Eject Button/Pack, it can't use its chosen move
					this.battle.queue.cancelAction(oldActive);

					let newMove = null;
					if (this.battle.gen === 4 && sourceEffect) {
						newMove = oldActive.lastMove;
					}
					if (switchCopyFlag) {
						pokemon.copyVolatileFrom(oldActive, switchCopyFlag);
					}
					if (newMove) pokemon.lastMove = newMove;
					oldActive.clearVolatile();
				}
				if (oldActive) {
					oldActive.isActive = false;
					oldActive.isStarted = false;
					oldActive.usedItemThisTurn = false;
					oldActive.statsRaisedThisTurn = false;
					oldActive.statsLoweredThisTurn = false;
					oldActive.position = pokemon.position;
					if (oldActive.fainted) oldActive.status = '';
					pokemon.position = pos;
					side.pokemon[pokemon.position] = pokemon;
					side.pokemon[oldActive.position] = oldActive;
				}
				pokemon.isActive = true;
				side.active[pos] = pokemon;
				pokemon.activeTurns = 0;
				pokemon.activeMoveActions = 0;
				for (const moveSlot of pokemon.moveSlots) {
					moveSlot.used = false;
				}
				pokemon.abilityState = this.battle.initEffectState({ id: pokemon.ability, target: pokemon });
				pokemon.itemState = this.battle.initEffectState({ id: pokemon.item, target: pokemon });
				this.battle.runEvent('BeforeSwitchIn', pokemon);
				if (sourceEffect) {
					this.battle.add(isDrag ? 'drag' : 'switch', pokemon, pokemon.getFullDetails, `[from] ${sourceEffect}`);
				} else {
					this.battle.add(isDrag ? 'drag' : 'switch', pokemon, pokemon.getFullDetails);
				}
				if (isDrag && this.battle.gen === 2) pokemon.draggedIn = this.battle.turn;
				pokemon.previouslySwitchedIn++;

				if (isDrag && this.battle.gen >= 5) {
					// runSwitch happens immediately so that Mold Breaker can make hazards bypass Clear Body and Levitate
					this.runSwitch(pokemon);
				} else {
					this.battle.queue.insertChoice({ choice: 'runSwitch', pokemon });
				}

				return true;
			},
		},
	},
	{
		name: "[Gen 9] Revelationmons",
		desc: `The moves in the first slot(s) of a Pok&eacute;mon's set have their types changed to match the Pok&eacute;mon's type(s).`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Clause Mod', 'Revelationmons Mod', 'Terastal Clause'],
		banlist: [
			'Arcanine-Hisui', 'Arceus', 'Archaludon', 'Barraskewda', 'Basculegion-M', 'Baxcalibur', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Darkrai',
			'Deoxys-Normal', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin', 'Dragapult', 'Dragonite', 'Enamorus-Incarnate', 'Espathra', 'Eternatus', 'Flutter Mane',
			'Giratina', 'Giratina-Origin', 'Gliscor', 'Gouging Fire', 'Groudon', 'Ho-Oh', 'Iron Bundle', 'Kommo-o', 'Koraidon', 'Kyogre', 'Kyurem', 'Kyurem-Black',
			'Kyurem-White', 'Landorus-Incarnate', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Noivern',
			'Ogerpon-Hearthflame', 'Palafin', 'Palkia', 'Palkia-Origin', 'Polteageist', 'Rayquaza', 'Reshiram', 'Roaring Moon', 'Shaymin-Sky', 'Solgaleo', 'Spectrier',
			'Ursaluna-Bloodmoon', 'Urshifu', 'Urshifu-Single-Strike', 'Zacian', 'Zacian-Crowned', 'Zekrom', 'Arena Trap', 'Moody', 'Shadow Tag', 'King\'s Rock',
			'Razor Fang', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
		restricted: ['U-turn', 'Volt Switch'],
	},
	{
		name: "[Gen 9] Sketchmons",
		desc: "Pok&eacute;mon can learn one of any move they don't normally learn.",
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Evasion Abilities Clause', 'Evasion Items Clause', 'Terastal Clause', 'Sleep Moves Clause', 'Sketchmons Move Legality'],
		banlist: [
			'Annihilape', 'Arceus', 'Basculegion-M', 'Baxcalibur', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chien-Pao', 'Chi-Yu', 'Deoxys-Attack', 'Deoxys-Normal', 'Dialga', 'Dialga-Origin',
			'Dragapult', 'Dragonite', 'Enamorus-Incarnate', 'Espathra', 'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Gouging Fire', 'Groudon', 'Ho-Oh', 'Iron Bundle',
			'Komala', 'Koraidon', 'Kyogre', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Incarnate', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings',
			'Necrozma-Dusk-Mane', 'Ogerpon-Hearthflame', 'Ogerpon-Wellspring', 'Palafin', 'Palkia', 'Palkia-Origin', 'Raging Bolt', 'Rayquaza', 'Regieleki', 'Reshiram', 'Roaring Moon',
			'Serperior', 'Shaymin-Sky', 'Sneasler', 'Solgaleo', 'Spectrier', 'Ursaluna-Bloodmoon', 'Urshifu-Single-Strike', 'Urshifu-Rapid-Strike', 'Volcarona', 'Zacian', 'Zacian-Crowned',
			'Zamazenta-Crowned', 'Zekrom', 'Arena Trap', 'Magnet Pull', 'Moody', 'Shadow Tag', 'Damp Rock', 'King\'s Rock', 'Light Clay', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
		restricted: [
			'Belly Drum', 'Boomburst', 'Burning Bulwark', 'Ceaseless Edge', 'Clangorous Soul', 'Dire Claw', 'Dragon Energy', 'Extreme Speed', 'Eruption', 'Final Gambit', 'Gigaton Hammer',
			'Fillet Away', 'Lumina Crash', 'No Retreat', 'Quiver Dance', 'Rage Fist', 'Revival Blessing', 'Shell Smash', 'Shift Gear', 'Tail Glow', 'Transform', 'Triple Arrows', 'V-create',
			'Victory Dance', 'Water Spout', 'Wicked Blow',
		],
	},
	{
		name: "[Gen 9] Tera Donation",
		desc: `The first Pok&eacute;mon sent out immediately terastallizes. The other Pok&eacute;mon in the party inherit that Tera Type as an additional type.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Tera Type Preview'],
		banlist: [
			'Annihilape', 'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Darkrai', 'Deoxys-Normal', 'Deoxys-Attack', 'Deoxys-Speed', 'Dialga',
			'Dialga-Origin', 'Espathra', 'Eternatus', 'Giratina', 'Giratina-Origin', 'Groudon', 'Flutter Mane', 'Ho-Oh', 'Hoopa-Unbound', 'Iron Bundle', 'Koraidon',
			'Kyogre', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Incarnate', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings',
			'Necrozma-Dusk-Mane', 'Palafin', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Regieleki', 'Reshiram', 'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Terapagos',
			'Urshifu', 'Urshifu-Rapid-Strike', 'Volcarona', 'Zacian', 'Zacian-Crowned', 'Zamazenta-Crowned', 'Zekrom', 'Arena Trap', 'Moody', 'Shadow Tag',
			'Booster Energy', 'Heat Rock', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
		onValidateRule() {
			if (this.dex.gen !== 9) {
				throw new Error(`Tera Donation is not supported in generations without terastallization.`);
			}
		},
		onSwitchIn(pokemon) {
			if (this.turn === 0) {
				this.actions.terastallize(pokemon);
				const teraType = pokemon.teraType;
				for (const poke of pokemon.side.pokemon) {
					poke.m.thirdType = teraType;
				}
			}
			if (!pokemon.terastallized) {
				this.add('-start', pokemon, 'typechange', (pokemon.illusion || pokemon).getTypes(true).join('/'), '[silent]');
			}
		},
		onModifyMove(move, pokemon, target) {
			if (move.id === 'terablast') {
				const teraType = pokemon.m.thirdType;
				move.basePowerCallback = function (p, t, m) {
					if ((p.terastallized || teraType) === 'Stellar') {
						return 100;
					}
					return 80;
				};
				if (teraType) {
					if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) {
						move.category = 'Physical';
					}
					if (teraType === "Stellar") {
						move.self = { boosts: { atk: -1, spa: -1 } };
					}
				}
			}
		},
		onModifyType(move, pokemon, target) {
			if (move.id === 'terablast') {
				const teraType = pokemon.m.thirdType;
				if (teraType) {
					move.type = teraType;
				}
			}
		},
		onPrepareHit(target, source, move) {
			if (move.id === 'terablast' && source.m.thirdType) {
				this.attrLastMove('[anim] Tera Blast ' + source.m.thirdType);
			}
		},
		actions: {
			modifyDamage(baseDamage, pokemon, target, move, suppressMessages) {
				const tr = this.battle.trunc;
				if (!move.type) move.type = '???';
				const type = move.type;

				baseDamage += 2;

				if (move.spreadHit) {
					// multi-target modifier (doubles only)
					const spreadModifier = this.battle.gameType === 'freeforall' ? 0.5 : 0.75;
					this.battle.debug(`Spread modifier: ${spreadModifier}`);
					baseDamage = this.battle.modify(baseDamage, spreadModifier);
				} else if (move.multihitType === 'parentalbond' && move.hit > 1) {
					// Parental Bond modifier
					const bondModifier = this.battle.gen > 6 ? 0.25 : 0.5;
					this.battle.debug(`Parental Bond modifier: ${bondModifier}`);
					baseDamage = this.battle.modify(baseDamage, bondModifier);
				}

				// weather modifier
				baseDamage = this.battle.priorityEvent('WeatherModifyDamage', pokemon, target, move, baseDamage);

				// crit - not a modifier
				const isCrit = target.getMoveHitData(move).crit;
				if (isCrit) {
					baseDamage = tr(baseDamage * (move.critModifier || (this.battle.gen >= 6 ? 1.5 : 2)));
				}

				// random factor - also not a modifier
				baseDamage = this.battle.randomizer(baseDamage);

				// STAB
				// The "???" type never gets STAB
				// Not even if you Roost in Gen 4 and somehow manage to use
				// Struggle in the same turn.
				// (On second thought, it might be easier to get a MissingNo.)
				if (type !== '???') {
					let stab: number | [number, number] = 1;

					const isSTAB = move.forceSTAB || pokemon.hasType(type) || pokemon.getTypes(false, true).includes(type);
					if (isSTAB) {
						stab = 1.5;
					}

					// The Stellar tera type makes this incredibly confusing
					// If the move's type does not match one of the user's base types,
					// the Stellar tera type applies a one-time 1.2x damage boost for that type.
					//
					// If the move's type does match one of the user's base types,
					// then the Stellar tera type applies a one-time 2x STAB boost for that type,
					// and then goes back to using the regular 1.5x STAB boost for those types.
					if ((pokemon.terastallized || pokemon.m.thirdType) === 'Stellar') {
						if (!pokemon.stellarBoostedTypes.includes(type)) {
							stab = isSTAB ? 2 : [4915, 4096];
							if (pokemon.species.name !== 'Terapagos-Stellar') {
								pokemon.stellarBoostedTypes.push(type);
							}
						}
					} else {
						if (pokemon.terastallized === type && pokemon.getTypes(false, true).includes(type)) {
							stab = 2;
						}
						stab = this.battle.runEvent('ModifySTAB', pokemon, target, move, stab);
					}

					baseDamage = this.battle.modify(baseDamage, stab);
				}

				// types
				let typeMod = target.runEffectiveness(move);
				typeMod = this.battle.clampIntRange(typeMod, -6, 6);
				target.getMoveHitData(move).typeMod = typeMod;
				if (typeMod > 0) {
					if (!suppressMessages) this.battle.add('-supereffective', target);

					for (let i = 0; i < typeMod; i++) {
						baseDamage *= 2;
					}
				}
				if (typeMod < 0) {
					if (!suppressMessages) this.battle.add('-resisted', target);

					for (let i = 0; i > typeMod; i--) {
						baseDamage = tr(baseDamage / 2);
					}
				}

				if (isCrit && !suppressMessages) this.battle.add('-crit', target);

				if (pokemon.status === 'brn' && move.category === 'Physical' && !pokemon.hasAbility('guts')) {
					if (this.battle.gen < 6 || move.id !== 'facade') {
						baseDamage = this.battle.modify(baseDamage, 0.5);
					}
				}

				// Generation 5, but nothing later, sets damage to 1 before the final damage modifiers
				if (this.battle.gen === 5 && !baseDamage) baseDamage = 1;

				// Final modifier. Modifiers that modify damage after min damage check, such as Life Orb.
				baseDamage = this.battle.runEvent('ModifyDamage', pokemon, target, move, baseDamage);

				const bypassProtect = target.getMoveHitData(move).bypassProtect;
				if (bypassProtect) {
					baseDamage = this.battle.modify(baseDamage, 0.25);
					if (bypassProtect !== true && bypassProtect.effectType === 'Ability') {
						this.battle.add('-ability', pokemon, bypassProtect.name);
					}
					this.battle.add('-zbroken', target);
				}

				// Generation 6-7 moves the check for minimum 1 damage after the final modifier...
				if (this.battle.gen !== 5 && !baseDamage) return 1;

				// ...but 16-bit truncation happens even later, and can truncate to 0
				return tr(baseDamage, 16);
			},
		},
		pokemon: {
			getTypes(excludeAdded, preterastallized) {
				if (!preterastallized && this.terastallized && this.terastallized !== 'Stellar') {
					return [this.terastallized];
				}
				const types = this.battle.runEvent('Type', this, null, null, this.types);
				if (!types.length) types.push(this.battle.gen >= 5 ? 'Normal' : '???');
				if (!excludeAdded && this.addedType) return types.concat(this.addedType);
				const addTeraType = this.m.thirdType;
				if (addTeraType) return Array.from(new Set([...types, addTeraType]));
				return types;
			},
			runEffectiveness(move) {
				if ((this.terastallized || this.m.thirdType) && move.type === 'Stellar') return 1;
				let totalTypeMod = 0;
				for (const type of this.getTypes()) {
					let typeMod = this.battle.dex.getEffectiveness(move, type);
					typeMod = this.battle.singleEvent('Effectiveness', move, null, this, type, move, typeMod);
					totalTypeMod += this.battle.runEvent('Effectiveness', this, type, move, typeMod);
				}
				return totalTypeMod;
			},
		},
	},
	{
		name: "[Gen 9] The Loser's Game",
		desc: `The first player to lose all of their Pok&eacute;mon wins.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Clause Mod', '!OHKO Clause', 'Picked Team Size = 6', 'Adjust Level = 100'],
		banlist: ['Infiltrator', 'Choice Scarf', 'Explosion', 'Final Gambit', 'Healing Wish', 'Lunar Dance', 'Magic Room', 'Memento', 'Misty Explosion', 'Self-Destruct'],
		onValidateTeam(team) {
			const familyTable = new Set<ID>();
			for (const set of team) {
				let species = this.dex.species.get(set.species);
				while (species.prevo) {
					species = this.dex.species.get(species.prevo);
				}
				if (familyTable.has(species.id)) {
					return [
						`You are limited to one Pok&eacute;mon from each family by the Family Clause.`,
						`(You have more than one evolution of ${species.name}.)`,
					];
				}
				familyTable.add(species.id);
			}
		},
		battle: {
			tiebreak() {
				if (this.ended) return false;

				this.inputLog.push(`>tiebreak`);
				this.add('message', "Time's up! Going to tiebreaker...");
				const notFainted = this.sides.map(side => (
					side.pokemon.filter(pokemon => !pokemon.fainted).length
				));
				this.add('-message', this.sides.map((side, i) => (
					`${side.name}: ${notFainted[i]} Pokemon left`
				)).join('; '));
				const maxNotFainted = Math.max(...notFainted);
				let tiedSides = this.sides.filter((side, i) => notFainted[i] === maxNotFainted);
				if (tiedSides.length <= 1) {
					return this.win(tiedSides[1]);
				}

				const hpPercentage = tiedSides.map(side => (
					side.pokemon.map(pokemon => pokemon.hp / pokemon.maxhp).reduce((a, b) => a + b) * 100 / 6
				));
				this.add('-message', tiedSides.map((side, i) => (
					`${side.name}: ${Math.round(hpPercentage[i])}% total HP left`
				)).join('; '));
				const maxPercentage = Math.max(...hpPercentage);
				tiedSides = tiedSides.filter((side, i) => hpPercentage[i] === maxPercentage);
				if (tiedSides.length <= 1) {
					return this.win(tiedSides[1]);
				}

				const hpTotal = tiedSides.map(side => (
					side.pokemon.map(pokemon => pokemon.hp).reduce((a, b) => a + b)
				));
				this.add('-message', tiedSides.map((side, i) => (
					`${side.name}: ${Math.round(hpTotal[i])} total HP left`
				)).join('; '));
				const maxTotal = Math.max(...hpTotal);
				tiedSides = tiedSides.filter((side, i) => hpTotal[i] === maxTotal);
				if (tiedSides.length <= 1) {
					return this.win(tiedSides[1]);
				}
				return this.tie();
			},
			checkWin(faintData) {
				const team1PokemonLeft = this.sides[0].pokemonLeft;
				const team2PokemonLeft = this.sides[1].pokemonLeft;
				if (!team1PokemonLeft && !team2PokemonLeft) {
					this.win(faintData?.target.side || null);
					return true;
				}
				for (const side of this.sides) {
					if (!side.pokemonLeft) {
						this.win(side);
						return true;
					}
				}
			},
		},
	},
	{
		name: "[Gen 9] Tier Shift",
		desc: `Pok&eacute;mon below OU get their stats, excluding HP, boosted. UU/RUBL get +15, RU/NUBL get +20, NU/PUBL get +25, and PU or lower get +30.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Terastal Clause', 'Evasion Clause', 'Tier Shift Mod'],
		banlist: [
			'Arceus', 'Calyrex-Shadow', 'Koraidon', 'Kyogre', 'Medicham', 'Miraidon', 'Necrozma-Dusk-Mane', 'Zacian-Crowned', 'Drizzle', 'Moody', 'Arena Trap', 'Shadow Tag',
			'Baton Pass', 'Last Respects', 'Shed Tail', 'Heat Rock', 'King\'s Rock', 'Light Clay', 'Razor Fang',
		],
		unbanlist: ['Arceus-Bug', 'Arceus-Grass', 'Arceus-Ice'],
	},
	{
		name: "[Gen 9] Triples",
		mod: 'gen9',
		gameType: 'triples',
		searchShow: false,
		ruleset: ['Standard Doubles', 'Evasion Abilities Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Darkrai', 'Dialga', 'Dialga-Origin', 'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin',
			'Groudon', 'Ho-Oh', 'Indeedee-M', 'Indeedee-F', 'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon',
			'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Solgaleo', 'Terapagos', 'Urshifu', 'Urshifu-Rapid-Strike',
			'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Moody', 'Shadow Tag', 'Bright Powder', 'King\'s Rock', 'Razor Fang',
		],
	},
	{
		name: "[Gen 9] Type Split",
		desc: `The Physical/Special split is reverted; All non-Status moves are Physical or Special depending on their type, no exceptions.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Evasion Abilities Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Archaludon', 'Calyrex-Shadow', 'Chi-Yu', 'Darkrai', 'Deoxys-Normal', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin', 'Espathra',
			'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Iron Bundle', 'Koraidon', 'Kyogre', 'Kyurem-White', 'Landorus-Incarnate',
			'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Regieleki',
			'Reshiram', 'Shaymin-Sky', 'Sneasler', 'Solgaleo', 'Terapagos', 'Volcarona', 'Zacian-Crowned', 'Zamazenta-Crowned', 'Arena Trap', 'Moody', 'Shadow Tag',
			'Bright Powder', 'Damp Rock', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
		onModifyMovePriority: -1000,
		onModifyMove(move, pokemon, target) {
			if (move.category === 'Status') return;
			const specialTypes = ['Dark', 'Dragon', 'Electric', 'Fairy', 'Fire', 'Grass', 'Ice', 'Psychic', 'Water'];
			if (specialTypes.includes(move.type)) {
				move.category = 'Special';
			} else if (move.type === 'Stellar') {
				move.category = pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true) ? 'Physical' : 'Special';
			} else {
				move.category = 'Physical';
			}
		},
	},
	{
		name: "[Gen 9] VoltTurn Mayhem",
		desc: `Every move that targets a foe causes the user to switch out after use.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves Clause', 'VoltTurn Mayhem Mod'],
		banlist: [
			'Arceus', 'Chi-Yu', 'Chien-Pao', 'Calyrex-Ice', 'Calyrex-Shadow', 'Darkrai', 'Deoxys-Attack', 'Deoxys-Normal', 'Deoxys-Speed', 'Dialga', 'Dialga-Origin', 'Dragonite',
			'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Gouging Fire', 'Groudon', 'Ho-Oh', 'Iron Bundle', 'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White',
			'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palafin', 'Palkia', 'Palkia-Origin', 'Raging Bolt', 'Rayquaza', 'Regieleki',
			'Reshiram', 'Shaymin-Sky', 'Solgaleo', 'Terapagos', 'Urshifu-Single-Strike', 'Zacian', 'Zacian-Crowned', 'Zekrom', 'King\'s Rock', 'Razor Fang', 'Fake Out',
			'Last Respects', 'Revival Blessing',
		],
	},
	{
		name: "[Gen 7] Pure Hackmons",
		desc: `Anything that can be hacked in-game and is usable in local battles is allowed.`,
		mod: 'gen7',
		searchShow: false,
		ruleset: ['-Nonexistent', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	{
		section: "Temporary Tour Metas",
	},
	{
		name: "[Gen 9] AAA Doubles",
		desc: `Almost Any Ability, but in a Doubles format.`,
		mod: 'gen9',
		searchShow: false,
		gameType: 'doubles',
		ruleset: ['Standard OMs', 'Sleep Moves Clause', '!Obtainable Abilities', 'Ability Clause = 2'],
		banlist: [
			'Annihilape', 'Arceus', 'Basculegion-M', 'Calyrex-Ice', 'Calyrex-Shadow', 'Dragonite', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin', 'Eternatus', 'Flutter Mane',
			'Gholdengo', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyurem-Black', 'Kyurem-White', 'Koraidon', 'Kyogre', 'Lugia', 'Lunala', 'Mewtwo', 'Miraidon',
			'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Raging Bolt', 'Regigigas', 'Reshiram', 'Solgaleo', 'Slaking', 'Terapagos',
			'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Anger Point', 'Arena Trap', 'Comatose', 'Commander', 'Contrary', 'Costar', 'Dancer',
			'Fur Coat', 'Gorilla Tactics', 'Huge Power', 'Ice Scales', 'Illusion', 'Imposter', 'Innards Out', 'Orichalcum Pulse', 'Moody', 'Neutralizing Gas', 'Parental Bond',
			'Prankster', 'Pure Power', 'Serene Grace', 'Shadow Tag', 'Simple', 'Soul-Heart', 'Speed Boost', 'Stamina', 'Steam Engine', 'Water Bubble', 'Wonder Guard',
			'King\'s Rock', 'Razor Fang', 'Beat Up',
		],
	},
	{
		name: "[Gen 9] AAA Draft",
		desc: `Almost Any Ability, but Draft League format.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] Almost Any Ability', 'Evasion Abilities Clause', 'Evasion Items Clause'],
		banlist: [
			'Deoxys-Speed', 'Roaring Moon', 'Zamazenta-Hero', 'Quick Claw', 'Revival Blessing',
		],
		unbanlist: ['Volcarona'],
	},
	{
		name: "[Gen 9] AAA Ubers",
		desc: `Almost Any Ability, but higher power level.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves Clause', '!Obtainable Abilities', 'Terastal Clause'],
		banlist: [
			'Calyrex-Shadow', 'Miraidon', 'Slaking', 'Arena Trap', 'Comatose', 'Contrary', 'Good as Gold', 'Gorilla Tactics', 'Huge Power', 'Illusion', 'Imposter',
			'Innards Out', 'Magnet Pull', 'Moody', 'Neutralizing Gas', 'Parental Bond', 'Pure Power', 'Shadow Tag', 'Simple', 'Stakeout', 'Speed Boost', 'Toxic Debris',
			'Water Bubble', 'Wonder Guard', 'Baton Pass',
		],
	},
	{
		name: "[Gen 9] AAA UU",
		desc: `Almost Any Ability, with Pok&eacute;mon above B- in the Viability Rankings banned.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] Almost Any Ability'],
		banlist: [
			'Archaludon', 'Brambleghast', 'Chien-Pao', 'Cinderace', 'Cobalion', 'Corviknight', 'Deoxys-Speed', 'Garchomp', 'Gholdengo', 'Gliscor', 'Great Tusk', 'Hydreigon',
			'Iron Boulder', 'Iron Crown', 'Iron Hands', 'Iron Moth', 'Iron Treads', 'Kingambit', 'Landorus', 'Landorus-Therian', 'Latios', 'Mamoswine', 'Manaphy',
			'Meowscarada', 'Moltres-Base', 'Ogerpon-Cornerstone', 'Ogerpon-Hearthflame', 'Ogerpon-Wellspring', 'Pecharunt', 'Polteageist', 'Primarina', 'Roaring Moon',
			'Scream Tail', 'Sinistcha', 'Skarmory', 'Slither Wing', 'Swampert', 'Ting-Lu', 'Ursaluna-Bloodmoon', 'Zamazenta', 'Zamazenta-Crowned', 'Zapdos', 'Zapdos-Galar',
			'Zarude', 'Light Clay',
		],
	},
	{
		name: "[Gen 8] Almost Any Ability",
		desc: `Gen 8 Almost Any Ability.`,
		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves Clause', '!Obtainable Abilities', 'Ability Clause = 2'],
		banlist: [
			'Archeops', 'Blacephalon', 'Buzzwole', 'Calyrex-Ice', 'Calyrex-Shadow', 'Dialga', 'Dracovish', 'Dragapult', 'Dragonite', 'Eternatus', 'Genesect', 'Gengar',
			'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kartana', 'Keldeo', 'Kyogre', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna',
			'Marshadow', 'Melmetal', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Noivern', 'Palkia', 'Pheromosa', 'Rayquaza', 'Regigigas',
			'Reshiram', 'Shedinja', 'Solgaleo', 'Spectrier', 'Urshifu', 'Urshifu-Rapid-Strike', 'Victini', 'Weavile', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned',
			'Zamazenta-Hero', 'Zekrom', 'Zeraora', 'Zygarde-50%', 'Arena Trap', 'Comatose', 'Contrary', 'Fluffy', 'Fur Coat', 'Gorilla Tactics', 'Huge Power', 'Ice Scales',
			'Illusion', 'Imposter', 'Innards Out', 'Intrepid Sword', 'Libero', 'Magic Bounce', 'Magnet Pull', 'Moody', 'Neutralizing Gas', 'Parental Bond', 'Poison Heal',
			'Protean', 'Pure Power', 'Shadow Tag', 'Simple', 'Speed Boost', 'Stakeout', 'Unburden', 'Water Bubble', 'Wonder Guard', 'King\'s Rock', 'Baton Pass', 'Electrify',
		],
	},
	{
		name: "[Gen 8] Balanced Hackmons",
		desc: `Anything directly hackable onto a set (EVs, IVs, forme, ability, item, and move) and is usable in local battles is allowed.`,
		mod: 'gen8',
		searchShow: false,
		ruleset: ['-Nonexistent', 'OHKO Clause', 'Evasion Moves Clause', 'Forme Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Moves Clause', 'Endless Battle Clause'],
		banlist: [
			'Calyrex-Shadow', 'Cramorant-Gorging', 'Darmanitan-Galar-Zen', 'Eternatus-Eternamax', 'Shedinja', 'Zacian-Crowned',
			'Arena Trap', 'Contrary', 'Gorilla Tactics', 'Huge Power', 'Illusion', 'Innards Out', 'Intrepid Sword', 'Libero',
			'Magnet Pull', 'Moody', 'Neutralizing Gas', 'Parental Bond', 'Protean', 'Pure Power', 'Shadow Tag', 'Stakeout',
			'Water Bubble', 'Wonder Guard', 'Rusted Sword', 'Baton Pass', 'Belly Drum', 'Bolt Beak', 'Court Change',
			'Double Iron Bash', 'Octolock', 'Shell Smash', 'Transform', 'Comatose + Sleep Talk',
		],
		unbanlist: ['Acupressure'],
	},
	{
		name: "[Gen 7] Balanced Hackmons",
		desc: `Anything directly hackable onto a set (EVs, IVs, forme, ability, item, and move) and is usable in local battles is allowed.`,
		mod: 'gen7',
		searchShow: false,
		ruleset: ['-Nonexistent', 'Ability Clause = 2', 'CFZ Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Forme Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Moves Clause', 'Endless Battle Clause'],
		banlist: [
			'Groudon-Primal', 'Rayquaza-Mega', 'Arena Trap', 'Contrary', 'Huge Power', 'Illusion', 'Innards Out', 'Magnet Pull', 'Moody',
			'Parental Bond', 'Protean', 'Psychic Surge', 'Pure Power', 'Shadow Tag', 'Stakeout', 'Water Bubble', 'Wonder Guard', 'Gengarite',
			'Baton Pass', 'Belly Drum', 'Chatter', 'Electrify', 'Shell Smash', 'Comatose + Sleep Talk',
		],
		unbanlist: ['Acupressure'],
	},
	{
		name: "[Gen 9] National Dex Ubers (!Unobtainable Formes)",
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard NatDex', '!Obtainable Formes', '!Evasion Clause', 'Evasion Moves Clause', 'Evasion Items Clause', 'Terastal Clause'],
		banlist: ['Gengar-Mega', 'Miraidon', 'Assist', 'Baton Pass'],
	},
	{
		name: "[Gen 9] NatDex Camove Chaos",
		desc: `National Dex-based format where Pokemon can use almost any move in the game, and their first two move types determine their type.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: [
			'Standard OMs', 'Camomons Mod', 'NatDex Mod', '!Obtainable Moves', '!Team Preview', 'Team Type Preview', 'CFZ Clause', 'Sleep Moves Clause', 'Terastal Clause',
		],
		banlist: [
			'Aerodactyl-Mega', 'Alakazam', 'Arceus', 'Beedrill-Mega', 'Blaziken-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Charizard-Mega-Y', 'Chi-Yu', 'Chien-Pao', 'Comfey',
			'Darmanitan', 'Darmanitan-Galar', 'Deoxys-Attack', 'Deoxys-Normal', 'Dhelmise', 'Dialga', 'Dialga-Origin', 'Dondozo', 'Enamorus-Incarnate', 'Eternatus', 'Flutter Mane',
			'Genesect', 'Gengar-Mega', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Kangaskhan-Mega', 'Kartana', 'Komala', 'Koraidon', 'Kyogre',
			'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Incarnate', 'Lucario-Mega', 'Lugia', 'Lunala', 'Marshadow', 'Mawile-Mega', 'Medicham-Mega', 'Melmetal',
			'Metagross-Mega', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra', 'Palafin', 'Palkia', 'Palkia-Origin', 'Pheromosa',
			'Porygon-Z', 'Rayquaza', 'Regieleki', 'Reshiram', 'Roserade', 'Salamence-Mega', 'Sceptile-Mega', 'Serperior', 'Shedinja', 'Sneasler', 'Solgaleo', 'Spectrier',
			'Tapu Koko', 'Ting-Lu', 'Ursaluna', 'Ursaluna-Bloodmoon', 'Xerneas', 'Xurkitree', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned',
			'Zekrom', 'Zoroark', 'Arena Trap', 'Magnet Pull', 'Moody', 'Power Construct', 'Regenerator > 2', 'Shadow Tag', 'Damp Rock', 'Heat Rock', 'King\'s Rock',
			'Quick Claw', 'Razor Fang', 'Smooth Rock', 'Assist', 'Astral Barrage', 'Baneful Bunker', 'Baton Pass', 'Belly Drum', 'Bolt Beak', 'Boomburst', 'Burning Bulwark',
			'Ceaseless Edge', 'Chatter', 'Clangorous Soul', 'Dire Claw', 'Double Iron Bash', 'Dragon Energy', 'Eruption', 'Extreme Speed', 'Electrify', 'Electro Shot',
			'Fillet Away', 'Final Gambit', 'Fishious Rend', 'Geomancy', 'Heal Order', 'Jet Punch', 'Last Respects', 'Lumina Crash', 'No Retreat', 'Octolock', 'Population Bomb',
			'Power Trip', 'Quiver Dance', 'Rage Fist', 'Revival Blessing', 'Rising Voltage', 'Salt Cure', 'Shed Tail', 'Shell Smash', 'Shift Gear', 'Stored Power', 'Substitute',
			'Surging Strikes', 'Tail Glow', 'Take Heart', 'Thousand Arrows', 'Transform', 'Triple Arrows', 'V-create', 'Victory Dance', 'Water Spout', 'Wicked Blow',
		],
		unbanlist: ['Blazing Torque', 'Combat Torque', 'Light of Ruin', 'Magical Torque', 'Noxious Torque', 'Power Shift', 'Wicked Torque'],
	},
	{
		section: "National Dex",
	},
	{
		name: "[Gen 9] National Dex",
		mod: 'gen9',
		ruleset: ['Standard NatDex', 'Terastal Clause'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock',
			'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
	},
	{
		name: "[Gen 8] National Dex",
		mod: 'gen8',
		ruleset: ['Standard NatDex', 'Dynamax Clause'],
		banlist: ['ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Razor Fang', 'Quick Claw', 'Baton Pass'],
	},
	{
		section: "National Dex Other Tiers",
	},
	{
		name: "[Gen 9] National Dex Ubers",
		mod: 'gen9',
		ruleset: ['Standard NatDex', '!Evasion Clause', 'Evasion Moves Clause', 'Evasion Items Clause', 'Mega Rayquaza Clause'],
		banlist: ['ND AG', 'Shedinja', 'Assist', 'Baton Pass'],
	},
	{
		name: "[Gen 9] National Dex UU",
		mod: 'gen9',
		ruleset: ['[Gen 9] National Dex'],
		banlist: ['ND OU', 'ND UUBL', 'Drizzle', 'Drought', 'Light Clay'],
	},
	{
		name: "[Gen 9] National Dex RU",
		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] National Dex UU'],
		banlist: ['ND UU', 'ND RUBL', 'Slowbronite'],
	},
	{
		name: "[Gen 9] National Dex LC",
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard NatDex', 'Little Cup'],
		banlist: [
			'Aipom', 'Basculin-White-Striped', 'Clamperl', 'Corsola-Galar', 'Cutiefly', 'Drifloon', 'Dunsparce', 'Duraludon', 'Flittle', 'Girafarig',
			'Gligar', 'Meditite', 'Misdreavus', 'Murkrow', 'Porygon', 'Qwilfish-Hisui', 'Rufflet', 'Scraggy', 'Scyther', 'Sneasel', 'Sneasel-Hisui',
			'Stantler', 'Swirlix', 'Tangela', 'Voltorb-Hisui', 'Woobat', 'Yanma', 'Zigzagoon-Base', 'Chlorophyll', 'Moody', 'Eevium Z', 'King\'s Rock',
			'Quick Claw', 'Razor Fang', 'Assist', 'Aurora Veil', 'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Sticky Web',
		],
	},
	{
		name: "[Gen 9] National Dex Monotype",
		mod: 'gen9',
		ruleset: ['Standard NatDex', 'Same Type Clause', 'Terastal Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Baxcalibur', 'Blastoise-Mega', 'Blaziken', 'Blaziken-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Darkrai',
			'Deoxys-Normal', 'Deoxys-Attack', 'Dialga', 'Dracovish', 'Dragapult', 'Espathra', 'Eternatus', 'Flutter Mane', 'Genesect', 'Gengar-Mega', 'Giratina',
			'Giratina-Origin', 'Gouging Fire', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Iron Bundle', 'Kangaskhan-Mega', 'Kartana', 'Kingambit', 'Koraidon', 'Kyogre',
			'Kyurem-Black', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mawile-Mega', 'Medicham-Mega', 'Metagross-Mega', 'Mewtwo',
			'Miraidon', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Hearthflame', 'Palafin', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram',
			'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Ursaluna-Bloodmoon', 'Urshifu-Single-Strike', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned',
			'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-50%', 'Zygarde-Complete', 'Moody', 'Shadow Tag', 'Power Construct', 'Booster Energy', 'Damp Rock',
			'Focus Band', 'Icy Rock', 'King\'s Rock', 'Leppa Berry', 'Quick Claw', 'Razor Fang', 'Smooth Rock', 'Terrain Extender', 'Baton Pass',
			'Last Respects', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] National Dex Doubles",
		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'NatDex Mod', 'Evasion Abilities Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin', 'Espathra', 'Eternatus', 'Genesect', 'Gengar-Mega',
			'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Koraidon', 'Kyogre', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Melmetal', 'Metagross-Mega',
			'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Shedinja',
			'Solgaleo', 'Stakataka', 'Terapagos', 'Urshifu', 'Urshifu-Rapid-Strike', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned',
			'Zekrom', 'Zygarde-50%', 'Zygarde-Complete', 'Commander', 'Power Construct', 'Shadow Tag', 'Eevium Z', 'Assist', 'Coaching', 'Dark Void', 'Swagger',
		],
	},
	{
		name: "[Gen 9] National Dex Doubles Ubers",
		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Doubles', 'NatDex Mod', '!Gravity Sleep Clause'],
		banlist: ['Shedinja', 'Assist'],
	},
	{
		name: "[Gen 9] National Dex 1v1",
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard AG', 'NatDex Mod', 'Nickname Clause', 'Evasion Moves Clause', 'OHKO Clause', 'Species Clause', 'Sleep Moves Clause', 'Terastal Clause', 'Accuracy Moves Clause', 'Picked Team Size = 1', 'Max Team Size = 3'],
		banlist: [
			'Arceus', 'Archaludon', 'Blastoise-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Deoxys-Normal', 'Deoxys-Attack', 'Deoxys-Defense', 'Dialga', 'Dialga-Origin', 'Dragonite',
			'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Gouging Fire', 'Groudon', 'Ho-Oh', 'Jirachi', 'Kangaskhan-Mega', 'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White',
			'Lugia', 'Lunala', 'Marshadow', 'Melmetal', 'Metagross-Mega', 'Mew', 'Mewtwo', 'Mimikyu', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Cornerstone', 'Palkia',
			'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Snorlax', 'Solgaleo', 'Terapagos', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta',
			'Zamazenta-Crowned', 'Zekrom', 'Moody', 'Custap Berry', 'Focus Band', 'Focus Sash', 'Fightinium Z + Detect', 'Perish Song',
		],
	},
	{
		name: "[Gen 9] National Dex AG",
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard AG', 'NatDex Mod'],
	},
	{
		name: "[Gen 9] National Dex AAA",
		desc: `Pok&eacute;mon have access to almost any ability.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard NatDex', '!Obtainable Abilities', 'Ability Clause = 2', '!Sleep Clause Mod', 'Sleep Moves Clause', 'Terastal Clause', 'Z-Move Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Archeops', 'Baxcalibur', 'Bisharp', 'Blacephalon', 'Blastoise-Mega', 'Blaziken-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Ceruledge', 'Darkrai', 'Deoxys-Attack',
			'Deoxys-Normal', 'Dialga', 'Dialga-Origin', 'Dracovish', 'Dragapult', 'Enamorus-Incarnate', 'Eternatus', 'Flutter Mane', 'Genesect', 'Gengar-Mega', 'Giratina', 'Giratina-Origin',
			'Gouging Fire', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Iron Bundle', 'Iron Valiant', 'Kangaskhan-Mega', 'Kartana', 'Keldeo', 'Kingambit', 'Koraidon', 'Kyogre', 'Kyurem', 'Kyurem-Black',
			'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Melmetal', 'Mewtwo', 'Miraidon', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Noivern',
			'Palkia', 'Palkia-Origin', 'Pheromosa', 'Rayquaza', 'Regigigas', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Shedinja', 'Slaking', 'Sneasler', 'Solgaleo', 'Spectrier', 'Urshifu',
			'Urshifu-Rapid-Strike', 'Weavile', 'Xerneas', 'Xurkitree', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zekrom', 'Zygarde-50%', 'Arena Trap', 'Comatose', 'Contrary', 'Fur Coat', 'Good as Gold',
			'Gorilla Tactics', 'Hadron Engine', 'Huge Power', 'Ice Scales', 'Illusion', 'Imposter', 'Innards Out', 'Intrepid Sword', 'Magic Bounce', 'Magnet Pull', 'Moody', 'Neutralizing Gas',
			'Orichalcum Pulse', 'Parental Bond', 'Poison Heal', 'Pure Power', 'Shadow Tag', 'Simple', 'Speed Boost', 'Stakeout', 'Triage', 'Unburden', 'Water Bubble', 'Wonder Guard', 'King\'s Rock',
			'Light Clay', 'Assist', 'Baton Pass', 'Electrify', 'Last Respects', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] National Dex BH",
		desc: `Balanced Hackmons with National Dex elements mixed in.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: [
			'Standard AG', 'NatDex Mod', '!Obtainable',
			'Forme Clause', 'Sleep Moves Clause', 'Ability Clause = 2', 'OHKO Clause', 'Evasion Moves Clause', 'Dynamax Clause', 'CFZ Clause', 'Terastal Clause', '-CAP',
		],
		banlist: [
			'Cramorant-Gorging', 'Calyrex-Shadow', 'Darmanitan-Galar-Zen', 'Eternatus-Eternamax', 'Greninja-Ash', 'Groudon-Primal', 'Rayquaza-Mega', 'Shedinja', 'Terapagos-Stellar', 'Arena Trap',
			'Contrary', 'Gorilla Tactics', 'Hadron Engine', 'Huge Power', 'Illusion', 'Innards Out', 'Magnet Pull', 'Moody', 'Neutralizing Gas', 'Orichalcum Pulse', 'Parental Bond', 'Pure Power',
			'Shadow Tag', 'Stakeout', 'Water Bubble', 'Wonder Guard', 'Berserk Gene', 'Gengarite', 'Baton Pass', 'Belly Drum', 'Bolt Beak', 'Ceaseless Edge', 'Chatter', 'Double Iron Bash',
			'Electrify', 'Imprison', 'Last Respects', 'Octolock', 'Rage Fist', 'Revival Blessing', 'Shed Tail', 'Shell Smash', 'Sleep Talk',
		],
		restricted: ['Arceus'],
		onValidateTeam(team, format) {
			// baseSpecies:count
			const restrictedPokemonCount = new this.dex.Multiset<string>();
			for (const set of team) {
				const species = this.dex.species.get(set.species);
				if (!this.ruleTable.isRestrictedSpecies(species)) continue;
				restrictedPokemonCount.add(species.baseSpecies);
			}
			for (const [baseSpecies, count] of restrictedPokemonCount) {
				if (count > 1) {
					return [
						`You are limited to one ${baseSpecies} forme.`,
						`(You have ${count} ${baseSpecies} forme${count === 1 ? '' : 's'}.)`,
					];
				}
			}
		},
	},
	{
		name: "[Gen 9] National Dex Godly Gift",
		desc: `Each Pok&eacute;mon receives one base stat from a God (Restricted Pok&eacute;mon) depending on its position in the team. If there is no restricted Pok&eacute;mon, it uses the Pok&eacute;mon in the first slot.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard NatDex', 'Terastal Clause', '!Sleep Clause Mod', 'Sleep Moves Clause', 'Godly Gift Mod', 'Mega Rayquaza Clause'],
		banlist: [
			'Blissey', 'Calyrex-Shadow', 'Chansey', 'Deoxys-Attack', 'Groudon-Primal', 'Koraidon', 'Miraidon', 'Shuckle', 'Xerneas',
			'Arena Trap', 'Huge Power', 'Moody', 'Pure Power', 'Shadow Tag', 'Swift Swim', 'King\'s Rock', 'Quick Claw', 'Assist',
			'Baton Pass', 'Last Respects', 'Shed Tail',
		],
		restricted: [
			'Arceus', 'Blastoise-Mega', 'Blaziken-Mega', 'Calyrex-Ice', 'Chi-Yu', 'Chien-Pao', 'Darmanitan-Galar', 'Deoxys-Normal', 'Deoxys-Defense', 'Deoxys-Speed', 'Dialga', 'Dialga-Origin', 'Dracovish',
			'Dragapult', 'Espathra', 'Eternatus', 'Flutter Mane', 'Genesect', 'Gengar Mega', 'Giratina', 'Giratina-Origin', 'Groudon', 'Hawlucha', 'Ho-Oh', 'Iron Bundle', 'Kangaskhan-Mega', 'Kingambit',
			'Kyogre', 'Kyogre-Primal', 'Kyurem-Black', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna', 'Marowak-Alola', 'Marshadow', 'Mawile-Mega', 'Medicham-Mega', 'Melmetal', 'Metagross-Mega',
			'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Palkia-Origin', 'Pheromosa', 'Pikachu', 'Rayquaza', 'Reshiram', 'Sableye-Mega',
			'Salamence-Mega', 'Serperior', 'Shaymin-Sky', 'Smeargle', 'Solgaleo', 'Spectrier', 'Swellow', 'Toxapex', 'Ursaluna', 'Ursaluna-Bloodmoon', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta-Crowned',
			'Zekrom', 'Power Construct',
		],
	},
	{
		name: "[Gen 9] National Dex Monoletter",
		desc: `All Pok&eacute;mon on a team must have names starting with the same letter.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] National Dex', 'Same Letter Clause'],
		banlist: ['Light Clay'],
		unbanlist: ['Ogerpon-Hearthflame', 'Ursaluna-Bloodmoon', 'Walking Wake', 'Yveltal', 'Urshifu', 'Naganadel'],
	},
	{
		name: "[Gen 9] National Dex STABmons",
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard NatDex', 'STABmons Move Legality', '!Sleep Clause Mod', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Araquanid', 'Arceus', 'Azumarill', 'Baxcalibur', 'Blastoise-Mega', 'Blaziken-Mega', 'Basculegion', 'Basculegion-F', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chien-Pao', 'Chi-Yu',
			'Cloyster', 'Darkrai', 'Darmanitan-Galar', 'Deoxys-Attack', 'Deoxys-Normal', 'Dialga', 'Dialga-Origin', 'Dracovish', 'Dragapult', 'Dragonite', 'Enamorus-Incarnate', 'Espathra',
			'Eternatus', 'Flutter Mane', 'Garchomp', 'Gengar-Mega', 'Genesect', 'Giratina', 'Giratina-Origin', 'Groudon', 'Gouging Fire', 'Ho-Oh', 'Iron Bundle', 'Kangaskhan-Mega',
			'Kartana', 'Koraidon', 'Komala', 'Kyogre', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Incarnate', 'Lilligant-Hisui', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna',
			'Manaphy', 'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Miraidon', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Hearthflame', 'Ogerpon-Wellspring', 'Palkia',
			'Palkia-Origin', 'Porygon-Z', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Silvally', 'Solgaleo', 'Spectrier', 'Tapu Koko', 'Tapu Lele', 'Terapagos',
			'Thundurus-Therian', 'Ursaluna-Bloodmoon', 'Urshifu-Single-Strike', 'Walking Wake', 'Xerneas', 'Xurkitree', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta-Crowned', 'Zekrom',
			'Zoroark-Hisui', 'Zygarde-50%', 'Arena Trap', 'Moody', 'Shadow Tag', 'Power Construct', 'Damp Rock', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass',
			'Last Respects', 'Shed Tail',
		],
		restricted: [
			'Astral Barrage', 'Belly Drum', 'Bolt Beak', 'Chatter', 'Clangorous Soul', 'Dire Claw', 'Double Iron Bash', 'Dragon Energy', 'Electrify', 'Extreme Speed',
			'Fillet Away', 'Final Gambit', 'Fishious Rend', 'Geomancy', 'Gigaton Hammer', 'No Retreat', 'Rage Fist', 'Revival Blessing', 'Shell Smash', 'Shift Gear', 'Thousand Arrows',
			'Trick-or-Treat', 'Triple Arrows', 'V-create', 'Victory Dance', 'Wicked Blow', 'Wicked Torque',
		],
	},
	{
		name: "[Gen 8] National Dex Ubers",
		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard NatDex', '!Evasion Clause', 'Evasion Moves Clause', 'Evasion Abilities Clause', 'Mega Rayquaza Clause', 'Dynamax Clause'],
		banlist: ['ND AG', 'Ultranecrozium Z', 'Moody', 'Shadow Tag', 'Baton Pass'],
	},
	{
		name: "[Gen 9] National Dex Ubers UU",
		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] National Dex Ubers'],
		banlist: [
			'Alomomola', 'Arceus-Normal', 'Arceus-Dark', 'Arceus-Ground', 'Calyrex-Ice', 'Deoxys-Attack', 'Deoxys-Speed', 'Ditto', 'Dondozo', 'Eternatus',
			'Giratina-Origin', 'Groudon-Primal', 'Ho-Oh', 'Kyogre-Primal', 'Lunala', 'Marshadow', 'Mewtwo-Mega-Y', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra',
			'Salamence-Mega', 'Smeargle', 'Yveltal', 'Zacian-Crowned', 'Zygarde-50%',
			// UUBL
			'Arceus-Dragon', 'Arceus-Fairy', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Water', 'Blaziken-Mega', 'Chi-Yu', 'Chien-Pao', 'Dracovish', 'Flutter Mane', 'Groudon',
			'Kyogre', 'Kyurem-Black', 'Rayquaza', 'Shaymin-Sky', 'Zacian', 'Zekrom', 'Power Construct', 'Light Clay', 'Ultranecrozium Z', 'Last Respects',
		],
	},
	{
		name: "[Gen 8] National Dex UU",
		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] National Dex'],
		banlist: ['ND OU', 'ND UUBL', 'Drizzle', 'Drought', 'Light Clay', 'Slowbronite'],
	},
	{
		name: "[Gen 8] National Dex RU",
		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] National Dex UU'],
		banlist: ['ND UU', 'ND RUBL'],
	},
	{
		name: "[Gen 8] National Dex Doubles",
		mod: 'gen8',
		searchShow: false,
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'NatDex Mod', 'Evasion Abilities Clause', 'Dynamax Clause'],
		banlist: [
			'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Dialga', 'Eternatus', 'Gengar-Mega', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White',
			'Lugia', 'Lunala', 'Magearna', 'Melmetal', 'Mewtwo', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Rayquaza', 'Reshiram', 'Solgaleo', 'Urshifu-Base',
			'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Complete', 'Power Construct', 'Shadow Tag',
			'Beat Up', 'Dark Void', 'Eevium Z', 'Guard Split', 'Swagger',
		],
	},
	{
		name: "[Gen 8] National Dex Monotype",
		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard NatDex', 'Same Type Clause', '!Evasion Clause', 'Evasion Moves Clause', 'Evasion Items Clause', 'Dynamax Clause'],
		banlist: [
			'Arceus', 'Blastoise-Mega', 'Blaziken', 'Blaziken-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Darkrai', 'Deoxys-Normal', 'Deoxys-Attack', 'Dialga', 'Dracovish', 'Dragapult',
			'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina', 'Giratina-Origin', 'Greninja-Bond', 'Greninja-Ash', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Kangaskhan-Mega', 'Kartana',
			'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mawile-Mega', 'Medicham-Mega', 'Metagross-Mega', 'Mewtwo', 'Moltres-Galar',
			'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Spectrier',
			'Urshifu-Single-Strike', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-50%', 'Zygarde-Complete', 'Battle Bond',
			'Power Construct', 'Moody', 'Shadow Tag', 'Damp Rock', 'Focus Band', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Smooth Rock', 'Terrain Extender', 'Baton Pass',
		],
	},
	{
		section: "Randomized Metas",
		column: 3,
	},
	{
		name: "[Gen 9] Metronome Battle",
		mod: 'gen9',
		gameType: 'doubles',
		bestOfDefault: true,
		ruleset: ['Max Team Size = 2', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: [
			'type:Steel', 'teratype:Steel', 'Chandelure-Mega', 'Pokestar Spirit', 'Pecharunt', 'Terapagos', 'Shedinja + Sturdy', 'Cheek Pouch', 'Commander',
			'Cursed Body', 'Dry Skin', 'Earth Eater', 'Fur Coat', 'Gorilla Tactics', 'Grassy Surge', 'Huge Power', 'Ice Body', 'Iron Barbs', 'Moody', 'Neutralizing Gas',
			'Opportunist', 'Parental Bond', 'Perish Body', 'Poison Heal', 'Power Construct', 'Pressure', 'Pure Power', 'Rain Dish', 'Rough Skin', 'Sand Spit',
			'Sand Stream', 'Seed Sower', 'Spicy Spray', 'Stamina', 'Toxic Chain', 'Volt Absorb', 'Water Absorb', 'Wonder Guard', 'Harvest + Jaboca Berry',
			'Harvest + Rowap Berry', 'Aguav Berry', 'Assault Vest', 'Berry', 'Berry Juice', 'Berserk Gene', 'Black Sludge', 'Chandelurite', 'Chimechite',
			'Enigma Berry', 'Figy Berry', 'Gold Berry', 'Iapapa Berry', 'Kangaskhanite', 'Leftovers', 'Mago Berry', 'Mawilite',	'Medichamite', 'Scovillainite',
			'Starminite', 'Steel Memory', 'Oran Berry', 'Rocky Helmet', 'Shell Bell', 'Sitrus Berry', 'Tatsugirinite', 'Wiki Berry',
		],
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			if (species.bst > 625) {
				return [`${species.name} is banned.`, `(Pok\u00e9mon with a BST higher than 625 are banned)`];
			}
			const item = this.dex.items.get(set.item);
			if (set.item && item.megaStone) {
				const megaSpecies = this.dex.species.get(item.megaStone[species.baseSpecies]);
				if (megaSpecies.bst > 625) {
					return [
						`${set.name || set.species}'s item ${item.name} is banned.`, `(Pok\u00e9mon with a BST higher than 625 are banned)`,
					];
				}
			}
			if (set.moves.length !== 1 || this.dex.moves.get(set.moves[0]).id !== 'metronome') {
				return [`${set.name || set.species} has illegal moves.`, `(Pok\u00e9mon can only have one Metronome in their moveset)`];
			}
		},
	},
	{
		section: "Past Gens OU",
		column: 4,
	},
	{
		name: "[Gen 8] OU",
		mod: 'gen8',
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Power Construct', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Baton Pass'],
	},
	{
		name: "[Gen 7] OU",
		mod: 'gen7',
		ruleset: ['Standard'],
		banlist: ['Uber', 'Arena Trap', 'Power Construct', 'Shadow Tag', 'Baton Pass'],
	},
	{
		name: "[Gen 6] OU",
		mod: 'gen6',
		ruleset: ['Standard', 'Evasion Abilities Clause'],
		banlist: ['Uber', 'Arena Trap', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Soul Dew', 'Baton Pass', 'Swagger'],
	},
	{
		name: "[Gen 5] OU",
		mod: 'gen5',
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Sleep Moves Clause', 'Gems Clause', 'Baton Pass Stat Clause'],
		banlist: ['Uber', 'Arena Trap', 'Drizzle ++ Swift Swim', 'Drought ++ Chlorophyll', 'Sand Rush', 'Shadow Tag', 'King\'s Rock', 'Razor Fang', 'Soul Dew', 'Assist', 'Swagger'],
	},
	{
		name: "[Gen 4] OU",
		mod: 'gen4',
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Baton Pass Stat Trap Clause', 'Freeze Clause Mod', 'Sleep Moves Clause', '!Sleep Clause Mod'],
		banlist: ['AG', 'Uber', 'Arena Trap', 'Quick Claw', 'Soul Dew', 'Swagger'],
	},
	{
		name: "[Gen 3] OU",
		mod: 'gen3',
		ruleset: ['Standard', 'One Boost Passer Clause', 'Accuracy Trap Clause', 'Freeze Clause Mod', 'Speed Pass Clause'],
		banlist: ['Uber', 'Smeargle + Ingrain', 'Sand Veil', 'Soundproof', 'Quick Claw', 'Assist', 'Baton Pass + Block', 'Baton Pass + Mean Look', 'Baton Pass + Spider Web', 'Swagger'],
	},
	{
		name: "[Gen 2] OU",
		mod: 'gen2',
		ruleset: ['Standard'],
		banlist: ['Uber', 'Mean Look + Baton Pass', 'Spider Web + Baton Pass'],
	},
	{
		name: "[Gen 1] OU",
		mod: 'gen1',
		ruleset: ['Standard'],
		banlist: ['Uber'],
	},
	{
		section: "Past Gens Doubles OU",
		column: 4,
	},
	{
		name: "[Gen 8] Doubles OU",
		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'Dynamax Clause'],
		banlist: ['DUber', 'Power Construct', 'Shadow Tag', 'Swagger'],
	},
	{
		name: "[Gen 7] Doubles OU",
		mod: 'gen7',
		gameType: 'doubles',
		ruleset: ['Standard Doubles'],
		banlist: ['DUber', 'Power Construct', 'Eevium Z', 'Dark Void', 'Swagger'],
	},
	{
		name: "[Gen 6] Doubles OU",
		mod: 'gen6',
		gameType: 'doubles',
		ruleset: ['Standard Doubles'],
		banlist: ['DUber', 'Soul Dew', 'Dark Void', 'Swagger'],
	},
	{
		name: "[Gen 5] Doubles OU",
		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Sleep Clause Mod'],
		banlist: ['DUber', 'Shadow Tag', 'Soul Dew', 'Dark Void', 'Gravity', 'Swagger'],
	},
	{
		name: "[Gen 4] Doubles OU",
		mod: 'gen4',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard', 'Evasion Abilities Clause'],
		banlist: ['AG', 'Uber', 'Soul Dew', 'Explosion', 'Dark Void', 'Self-Destruct', 'Swagger', 'Thunder Wave'],
		unbanlist: ['Machamp', 'Manaphy', 'Mew', 'Salamence', 'Wobbuffet', 'Wynaut'],
	},
	{
		name: "[Gen 3] Doubles OU",
		mod: 'gen3',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard', '!Switch Priority Clause Mod'],
		banlist: ['Uber', 'Quick Claw', 'Soul Dew', 'Explosion', 'Self-Destruct', 'Swagger'],
		unbanlist: ['Wobbuffet', 'Wynaut'],
	},
	{
		section: "Sw/Sh Singles",
		column: 4,
	},
	{
		name: "[Gen 8] Ubers",
		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: ['AG', 'Shadow Tag', 'Baton Pass'],
	},
	{
		name: "[Gen 8] UU",
		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] OU'],
		banlist: ['OU', 'UUBL', 'Light Clay'],
	},
	{
		name: "[Gen 8] RU",
		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] UU'],
		banlist: ['UU', 'RUBL'],
	},
	{
		name: "[Gen 8] NU",
		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] RU'],
		banlist: ['RU', 'NUBL', 'Drizzle', 'Drought', 'Slush Rush'],
	},
	{
		name: "[Gen 8] PU",
		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] NU'],
		banlist: ['NU', 'PUBL'],
	},
	{
		name: "[Gen 8] LC",
		mod: 'gen8',
		searchShow: false,
		ruleset: ['Little Cup', 'Standard', 'Dynamax Clause'],
		banlist: [
			'Corsola-Galar', 'Cutiefly', 'Drifloon', 'Gastly', 'Gothita', 'Magby', 'Rufflet', 'Scraggy', 'Scyther', 'Sneasel', 'Swirlix',
			'Tangela', 'Vulpix-Alola', 'Woobat', 'Zigzagoon-Base', 'Chlorophyll', 'Moody', 'Baton Pass', 'Sticky Web',
		],
	},
	{
		name: "[Gen 8] Monotype",
		desc: `All the Pok&eacute;mon on a team must share a type.`,
		mod: 'gen8',
		searchShow: false,
		ruleset: ['Same Type Clause', 'Standard', 'Evasion Abilities Clause', 'Dynamax Clause'],
		banlist: [
			'Blaziken', 'Calyrex-Ice', 'Calyrex-Shadow', 'Dialga', 'Dracovish', 'Eternatus', 'Genesect', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh',
			'Kartana', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Incarnate', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mewtwo', 'Naganadel',
			'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Solgaleo', 'Urshifu-Single-Strike', 'Xerneas',
			'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-50%', 'Moody', 'Power Construct', 'Shadow Tag',
			'Damp Rock', 'Focus Band', 'King\'s Rock', 'Quick Claw', 'Smooth Rock', 'Terrain Extender', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		mod: 'gen8',
		searchShow: false,
		ruleset: [
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Obtainable', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Accuracy Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Endless Battle Clause',
		],
		banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Cinderace', 'Dialga', 'Dragonite', 'Eternatus', 'Genesect', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Jirachi',
			'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Melmetal', 'Mew', 'Mewtwo', 'Mimikyu', 'Necrozma', 'Necrozma-Dawn-Wings',
			'Necrozma-Dusk-Mane', 'Palkia', 'Rayquaza', 'Reshiram', 'Sableye', 'Snorlax', 'Solgaleo', 'Victini', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned',
			'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Moody', 'Power Construct', 'Bright Powder', 'Focus Band', 'Focus Sash', 'Lax Incense', 'Quick Claw',
			'Hypnosis', 'Perish Song', 'Sing',
		],
	},
	{
		name: "[Gen 8] Anything Goes",
		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard AG'],
	},
	{
		name: "[Gen 8] ZU",
		desc: `The unofficial usage-based tier below PU.`,
		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] PU'],
		banlist: ['PU', 'ZUBL', 'Damp Rock', 'Grassy Seed'],
	},
	{
		name: "[Gen 8] CAP",
		desc: "The Create-A-Pok&eacute;mon project is a community dedicated to exploring and understanding the competitive Pok&eacute;mon metagame by designing, creating, and playtesting new Pok&eacute;mon concepts.",
		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] OU', '+CAP'],
		banlist: ['Crucibellite'],
	},
	{
		name: "[Gen 8] Battle Stadium Singles",
		mod: 'gen8',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 8', 'VGC Timer', 'Limit Two Restricted'],
		restricted: ['Restricted Legendary'],
	},
	{
		name: "[Gen 8] Custom Game",
		mod: 'gen8',
		searchShow: false,
		debug: true,
		battle: { trunc: Math.trunc },
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		section: "Sw/Sh Doubles",
		column: 4,
	},
	{
		name: "[Gen 8] Doubles Ubers",
		mod: 'gen8',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Doubles', '!Gravity Sleep Clause'],
		banlist: [],
	},
	{
		name: "[Gen 8] Doubles UU",
		mod: 'gen8',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['[Gen 8] Doubles OU'],
		banlist: ['DOU', 'DBL'],
	},
	{
		name: "[Gen 8] VGC 2022",
		mod: 'gen8',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 8', 'VGC Timer', 'Limit Two Restricted'],
		restricted: ['Restricted Legendary'],
	},
	{
		name: "[Gen 8] VGC 2021",
		mod: 'gen8',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 8', 'VGC Timer'],
	},
	{
		name: "[Gen 8] Doubles Custom Game",
		mod: 'gen8',
		gameType: 'doubles',
		searchShow: false,
		battle: { trunc: Math.trunc },
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		section: "US/UM Singles",
		column: 4,
	},
	{
		name: "[Gen 7] Ubers",
		mod: 'gen7',
		searchShow: false,
		ruleset: ['Standard', 'Mega Rayquaza Clause'],
		banlist: ['Baton Pass'],
	},
	{
		name: "[Gen 7] UU",
		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] OU'],
		banlist: ['OU', 'UUBL', 'Drizzle', 'Drought', 'Kommonium Z', 'Mewnium Z'],
	},
	{
		name: "[Gen 7] RU",
		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] UU'],
		banlist: ['UU', 'RUBL', 'Mimikyu', 'Aurora Veil'],
		unbanlist: ['Drought'],
	},
	{
		name: "[Gen 7] NU",
		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] RU'],
		banlist: ['RU', 'NUBL', 'Drought'],
	},
	{
		name: "[Gen 7] PU",
		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] NU'],
		banlist: ['NU', 'PUBL'],
	},
	{
		name: "[Gen 7] LC",
		mod: 'gen7',
		searchShow: false,
		ruleset: ['Little Cup', 'Standard'],
		banlist: [
			'Aipom', 'Cutiefly', 'Drifloon', 'Gligar', 'Gothita', 'Meditite', 'Misdreavus', 'Murkrow', 'Porygon',
			'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Trapinch', 'Vulpix-Base', 'Vulpix-Alola', 'Wingull', 'Yanma',
			'Eevium Z', 'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Sticky Web', 'Swagger',
		],
	},
	{
		name: "[Gen 7] Monotype",
		desc: `All the Pok&eacute;mon on a team must share a type.`,
		mod: 'gen7',
		searchShow: false,
		ruleset: ['Same Type Clause', 'Standard', 'Evasion Abilities Clause'],
		banlist: [
			'Aegislash', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys-Normal', 'Deoxys-Attack', 'Dialga', 'Genesect', 'Gengar-Mega', 'Giratina', 'Giratina-Origin',
			'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Kangaskhan-Mega', 'Kartana', 'Kyogre', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna',
			'Marshadow', 'Mawile-Mega', 'Medicham-Mega', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia',
			'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Tapu Lele', 'Xerneas', 'Yveltal', 'Zekrom', 'Zygarde',
			'Battle Bond', 'Shadow Tag', 'Damp Rock', 'Focus Band', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Smooth Rock', 'Terrain Extender', 'Baton Pass',
			'Swagger',
		],
	},
	{
		name: "[Gen 7] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		mod: 'gen7',
		searchShow: false,
		ruleset: [
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Obtainable', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Accuracy Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause',
		],
		banlist: [
			'Arceus', 'Darkrai', 'Deoxys-Normal', 'Deoxys-Attack', 'Deoxys-Defense', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon',
			'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Marshadow', 'Mew', 'Mewtwo',
			'Mimikyu', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky',
			'Snorlax', 'Solgaleo', 'Tapu Koko', 'Xerneas', 'Yveltal', 'Zekrom', 'Moody', 'Focus Sash', 'Grass Whistle', 'Hypnosis',
			'Perish Song', 'Sing', 'Swagger', 'Detect + Fightinium Z',
		],
	},
	{
		name: "[Gen 7] Anything Goes",
		mod: 'gen7',
		searchShow: false,
		ruleset: ['Standard AG'],
	},
	{
		name: "[Gen 7] ZU",
		desc: `The unofficial usage-based tier below PU.`,
		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] PU'],
		banlist: ['PU', 'ZUBL'],
	},
	{
		name: "[Gen 7] CAP",
		desc: "The Create-A-Pok&eacute;mon project is a community dedicated to exploring and understanding the competitive Pok&eacute;mon metagame by designing, creating, and playtesting new Pok&eacute;mon concepts.",
		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] OU', '+CAP'],
	},
	{
		name: "[Gen 7] Battle Spot Singles",
		mod: 'gen7',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', 'Min Source Gen = 6'],
		banlist: ['Battle Bond'],
	},
	{
		name: "[Gen 7] Custom Game",
		mod: 'gen7',
		searchShow: false,
		debug: true,
		battle: { trunc: Math.trunc },
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		section: "US/UM Doubles",
		column: 4,
	},
	{
		name: "[Gen 7] Doubles UU",
		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['[Gen 7] Doubles OU'],
		banlist: ['DOU', 'DBL'],
	},
	{
		name: "[Gen 7] VGC 2019",
		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 7', 'VGC Timer', 'Limit Two Restricted'],
		restricted: ['Restricted Legendary'],
		banlist: ['Unown', 'Battle Bond'],
	},
	{
		name: "[Gen 7] VGC 2018",
		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 7', 'VGC Timer', '!! Timer Starting = 300'],
		banlist: ['Oranguru + Symbiosis', 'Passimian + Defiant', 'Unown', 'Custap Berry', 'Enigma Berry', 'Jaboca Berry', 'Micle Berry', 'Rowap Berry', 'Battle Bond'],
	},
	{
		name: "[Gen 7] Battle Spot Doubles",
		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', 'Min Source Gen = 6'],
		banlist: ['Battle Bond'],
	},
	{
		name: "[Gen 7] Doubles Custom Game",
		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		battle: { trunc: Math.trunc },
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		section: "OR/AS Singles",
		column: 4,
	},
	{
		name: "[Gen 6] Ubers",
		mod: 'gen6',
		searchShow: false,
		ruleset: ['Standard', 'Mega Rayquaza Clause'],
		banlist: ['Baton Pass', 'Swagger'],
	},
	{
		name: "[Gen 6] UU",
		mod: 'gen6',
		searchShow: false,
		ruleset: ['Standard'],
		banlist: ['Uber', 'OU', 'UUBL', 'Arena Trap', 'Drizzle', 'Drought', 'Shadow Tag', 'Soul Dew', 'Baton Pass', 'Swagger'],
	},
	{
		name: "[Gen 6] RU",
		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] UU'],
		banlist: ['UU', 'RUBL'],
	},
	{
		name: "[Gen 6] NU",
		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] RU'],
		banlist: ['RU', 'NUBL'],
	},
	{
		name: "[Gen 6] PU",
		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] NU'],
		banlist: ['NU', 'PUBL', 'Chatter'],
	},
	{
		name: "[Gen 6] LC",
		mod: 'gen6',
		searchShow: false,
		ruleset: ['Standard', 'Little Cup', 'Pomeg Glitch Clause'],
		banlist: [
			'Drifloon', 'Gligar', 'Meditite', 'Misdreavus', 'Murkrow', 'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Yanma',
			'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Swagger',
		],
	},
	{
		name: "[Gen 6] Monotype",
		desc: `All the Pok&eacute;mon on a team must share a type.`,
		mod: 'gen6',
		searchShow: false,
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Same Type Clause'],
		banlist: [
			'Aegislash', 'Altaria-Mega', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys-Normal', 'Deoxys-Attack', 'Deoxys-Speed', 'Dialga', 'Genesect', 'Gengar-Mega',
			'Giratina', 'Giratina-Origin', 'Greninja', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Kangaskhan-Mega', 'Keldeo', 'Kyogre', 'Kyurem-White', 'Lucario-Mega',
			'Lugia', 'Mawile-Mega', 'Medicham-Mega', 'Metagross-Mega', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Sableye-Mega', 'Salamence-Mega', 'Shaymin-Sky',
			'Slowbro-Mega', 'Talonflame', 'Xerneas', 'Yveltal', 'Zekrom', 'Shadow Tag', 'Damp Rock', 'Focus Band', 'King\'s Rock', 'Quick Claw', 'Razor Fang',
			'Smooth Rock', 'Soul Dew', 'Baton Pass', 'Swagger',
		],
	},
	{
		name: "[Gen 6] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		mod: 'gen6',
		searchShow: false,
		ruleset: [
			'Max Team Size = 3', 'Picked Team Size = 1', 'Obtainable', 'Nickname Clause', 'OHKO Clause',
			'Evasion Moves Clause', 'Accuracy Moves Clause', 'Endless Battle Clause', 'HP Percentage Mod',
			'Cancel Mod', 'Team Preview',
		],
		banlist: [
			'Arceus', 'Charizard-Mega-X', 'Charizard-Mega-Y', 'Deoxys-Normal', 'Deoxys-Attack', 'Deoxys-Defense', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon',
			'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-White', 'Lugia', 'Mew', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky',
			'Snorlax', 'Xerneas', 'Yveltal', 'Zekrom', 'Moody', 'Focus Sash', 'Soul Dew', 'Dark Void', 'Grass Whistle', 'Hypnosis', 'Perish Song', 'Sing', 'Sleep Powder',
			'Swagger', 'Yawn',
		],
	},
	{
		name: "[Gen 6] Anything Goes",
		mod: 'gen6',
		searchShow: false,
		ruleset: ['Standard AG'],
	},
	{
		name: "[Gen 6] ZU",
		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] PU'],
		banlist: ['PU', 'ZUBL', 'Light Clay'],
	},
	{
		name: "[Gen 6] CAP",
		desc: "The Create-A-Pok&eacute;mon project is a community dedicated to exploring and understanding the competitive Pok&eacute;mon metagame by designing, creating, and playtesting new Pok&eacute;mon concepts.",
		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] OU', '+CAP'],
		banlist: ['Cawmodore'],
	},
	{
		name: "[Gen 6] Battle Spot Singles",
		mod: 'gen6',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', 'Min Source Gen = 6'],
		banlist: ['Soul Dew'],
	},
	{
		name: "[Gen 6] Custom Game",
		mod: 'gen6',
		searchShow: false,
		debug: true,
		battle: { trunc: Math.trunc },
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		section: "OR/AS Doubles/Triples",
		column: 4,
	},
	{
		name: "[Gen 6] VGC 2016",
		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', 'Min Source Gen = 6', 'Limit Two Restricted'],
		restricted: ['Restricted Legendary'],
		banlist: ['Soul Dew'],
	},
	{
		name: "[Gen 6] VGC 2015",
		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', 'Min Source Gen = 6'],
		banlist: ['Soul Dew', 'Articuno + Snow Cloak', 'Zapdos + Static', 'Moltres + Flame Body', 'Dragonite + Barrier'],
	},
	{
		name: "[Gen 6] Battle Spot Doubles",
		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', 'Min Source Gen = 6'],
		banlist: ['Soul Dew'],
	},
	{
		name: "[Gen 6] Doubles Custom Game",
		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		battle: { trunc: Math.trunc },
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 6] Battle Spot Triples",
		mod: 'gen6',
		gameType: 'triples',
		searchShow: false,
		ruleset: ['Flat Rules', 'Min Source Gen = 6'],
	},
	{
		name: "[Gen 6] Triples Custom Game",
		mod: 'gen6',
		gameType: 'triples',
		searchShow: false,
		battle: { trunc: Math.trunc },
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		section: "B2/W2 Singles",
		column: 4,
	},
	{
		name: "[Gen 5] Ubers",
		mod: 'gen5',
		searchShow: false,
		ruleset: ['Standard', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 5] UU",
		mod: 'gen5',
		searchShow: false,
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Sleep Clause Mod'],
		banlist: ['Uber', 'OU', 'UUBL', 'Arena Trap', 'Drought', 'Sand Stream', 'Snow Warning', 'Prankster + Assist', 'Prankster + Copycat', 'Baton Pass', 'Swagger'],
	},
	{
		name: "[Gen 5] RU",
		mod: 'gen5',
		searchShow: false,
		ruleset: ['[Gen 5] UU', 'Baton Pass Clause', '!Sleep Clause Mod', 'Sleep Moves Clause'],
		banlist: ['UU', 'RUBL', 'Shadow Tag', 'Shell Smash + Baton Pass'],
		unbanlist: ['Prankster + Assist', 'Prankster + Copycat', 'Baton Pass'],
	},
	{
		name: "[Gen 5] NU",
		mod: 'gen5',
		searchShow: false,
		ruleset: ['[Gen 5] RU', '!Sleep Moves Clause', 'Sleep Clause Mod'],
		banlist: ['RU', 'NUBL', 'Assist', 'Copycat'],
	},
	{
		name: "[Gen 5] PU",
		mod: 'gen5',
		searchShow: false,
		ruleset: ['[Gen 5] NU', 'Sleep Moves Clause'],
		banlist: ['NU', 'PUBL', 'Damp Rock'],
	},
	{
		name: "[Gen 5] Monotype",
		desc: `All the Pok&eacute;mon on a team must share a type.`,
		mod: 'gen5',
		searchShow: false,
		ruleset: ['[Gen 5] OU', 'Same Type Clause', '!Gems Clause'],
		banlist: ['Latios'],
		unbanlist: ['Cloyster'],
	},
	{
		name: "[Gen 5] LC",
		mod: 'gen5',
		searchShow: false,
		ruleset: ['Standard', 'Little Cup', 'Pomeg Glitch Clause', 'Sleep Moves Clause'],
		banlist: [
			'Gligar', 'Meditite', 'Misdreavus', 'Murkrow', 'Scraggy', 'Scyther', 'Sneasel', 'Tangela', 'Vulpix', 'Yanma',
			'Sand Rush', 'Sand Veil', 'Berry Juice', 'Soul Dew', 'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Swagger',
		],
	},
	{
		name: "[Gen 5] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		mod: 'gen5',
		searchShow: false,
		ruleset: [
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Standard', 'Baton Pass Clause', 'Accuracy Moves Clause', 'Sleep Moves Clause',
		],
		banlist: [
			'Arceus', 'Blaziken', 'Cottonee', 'Darkrai', 'Deoxys', 'Dialga', 'Dragonite', 'Giratina', 'Groudon', 'Ho-Oh',
			'Jirachi', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Mew', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram',
			'Shaymin-Sky', 'Thundurus-Incarnate', 'Togekiss', 'Victini', 'Whimsicott', 'Zekrom', 'Focus Band', 'Focus Sash',
			'Quick Claw', 'Soul Dew', 'Perish Song', 'Swagger',
		],
	},
	{
		name: "[Gen 5] CAP",
		desc: "The Create-A-Pok&eacute;mon project is a community dedicated to exploring and understanding the competitive Pok&eacute;mon metagame by designing, creating, and playtesting new Pok&eacute;mon concepts.",
		mod: 'gen5',
		searchShow: false,
		ruleset: ['[Gen 5] OU', '+CAP'],
		banlist: ['Cawmodore'],
	},
	{
		name: "[Gen 5] ZU",
		mod: 'gen5',
		searchShow: false,
		ruleset: ['[Gen 5] PU'],
		banlist: ['PU', 'ZUBL', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Baton Pass'],
		unbanlist: ['Damp Rock'],
	},
	{
		name: "[Gen 5] GBU Singles",
		mod: 'gen5',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules'],
		banlist: ['Dark Void', 'Sky Drop', 'Soul Dew'],
	},
	{
		name: "[Gen 5] Custom Game",
		mod: 'gen5',
		searchShow: false,
		debug: true,
		battle: { trunc: Math.trunc },
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		section: "B2/W2 Doubles",
		column: 4,
	},
	{
		name: "[Gen 5] VGC 2013",
		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules'],
		banlist: ['Chatot', 'Dark Void', 'Sky Drop', 'Soul Dew'],
	},
	{
		name: "[Gen 5] Doubles Custom Game",
		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		debug: true,
		battle: { trunc: Math.trunc },
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 5] Triples Custom Game",
		mod: 'gen5',
		gameType: 'triples',
		searchShow: false,
		debug: true,
		battle: { trunc: Math.trunc },
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},
	{
		section: "DPP Singles",
		column: 4,
	},
	{
		name: "[Gen 4] Ubers",
		mod: 'gen4',
		searchShow: false,
		ruleset: ['Standard'],
		banlist: ['AG'],
	},
	{
		name: "[Gen 4] UU",
		mod: 'gen4',
		searchShow: false,
		ruleset: ['[Gen 4] OU', '!Baton Pass Stat Trap Clause', '!Freeze Clause Mod'],
		banlist: ['OU', 'UUBL', 'Baton Pass'],
		unbanlist: ['Arena Trap', 'Snow Cloak', 'Quick Claw', 'Swagger'],
	},
	{
		name: "[Gen 4] NU",
		mod: 'gen4',
		searchShow: false,
		ruleset: ['[Gen 4] UU', 'Baton Pass Clause', '!Sleep Moves Clause', 'Sleep Clause Mod'],
		banlist: ['UU', 'NUBL'],
		unbanlist: ['Sand Veil', 'Baton Pass'],
	},
	{
		name: "[Gen 4] LC",
		mod: 'gen4',
		searchShow: false,
		ruleset: ['Standard', 'Little Cup', 'Pomeg Glitch Clause', 'Evasion Abilities Clause', 'Sleep Moves Clause'],
		banlist: [
			'Meditite', 'Misdreavus', 'Murkrow', 'Scyther', 'Sneasel', 'Tangela', 'Yanma',
			'Berry Juice', 'Deep Sea Tooth', 'Dragon Rage', 'Sonic Boom', 'Swagger',
		],
	},
	{
		name: "[Gen 4] Anything Goes",
		mod: 'gen4',
		searchShow: false,
		ruleset: ['Standard AG'],
	},
	{
		name: "[Gen 4] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		mod: 'gen4',
		searchShow: false,
		ruleset: [
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Standard', 'Accuracy Moves Clause', 'Sleep Moves Clause', 'Team Preview',
		],
		banlist: [
			'Arceus', 'Clefable', 'Darkrai', 'Deoxys-Attack', 'Deoxys-Normal', 'Deoxys-Defense', 'Deoxys-Speed', 'Dialga', 'Garchomp',
			'Giratina', 'Groudon', 'Ho-Oh', 'Jirachi', 'Kyogre', 'Latias', 'Latios', 'Lugia', 'Machamp', 'Manaphy', 'Mew', 'Mewtwo',
			'Palkia', 'Porygon-Z', 'Rayquaza', 'Salamence', 'Shaymin', 'Shaymin-Sky', 'Snorlax', 'Togekiss', 'Focus Band', 'Focus Sash',
			'Quick Claw', 'Soul Dew', 'Destiny Bond', 'Explosion', 'Perish Song', 'Self-Destruct',
		],
	},
	{
		name: "[Gen 4] CAP",
		desc: "The Create-A-Pok&eacute;mon project is a community dedicated to exploring and understanding the competitive Pok&eacute;mon metagame by designing, creating, and playtesting new Pok&eacute;mon concepts.",
		mod: 'gen4',
		searchShow: false,
		ruleset: ['[Gen 4] OU', '+CAP'],
	},
	{
		name: "[Gen 4] PU",
		mod: 'gen4',
		searchShow: false,
		ruleset: ['[Gen 4] NU', '!Baton Pass Clause'],
		banlist: ['NU', 'PUBL', 'Baton Pass'],
	},
	{
		name: "[Gen 4] ZU",
		mod: 'gen4',
		searchShow: false,
		ruleset: ['[Gen 4] PU', 'Baton Pass Clause'],
		banlist: ['PU', 'ZUBL', 'Damp Rock'],
		unbanlist: ['Baton Pass'],
	},
	{
		name: "[Gen 4] Custom Game",
		mod: 'gen4',
		searchShow: false,
		debug: true,
		battle: { trunc: Math.trunc },
		// no restrictions
		ruleset: ['Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		section: "DPP Doubles",
		column: 4,
	},
	{
		name: "[Gen 4] VGC 2010",
		mod: 'gen4',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules'],
		restricted: ['Restricted Legendary'],
		banlist: ['Soul Dew'],
		onValidateTeam(team) {
			const problems = [];
			const restrictedSpecies = [];
			const nonRestrictedSpecies = [];
			for (const set of team) {
				const species = this.dex.species.get(set.species);
				if (this.ruleTable.isRestrictedSpecies(species)) {
					restrictedSpecies.push(species.name);
				} else {
					nonRestrictedSpecies.push(species.name);
				}
			}
			if (restrictedSpecies.length > 4) {
				problems.push(`You can only use up to four restricted Pok\u00e9mon; you have: ${restrictedSpecies.join(', ')}`);
			}
			if (nonRestrictedSpecies.length < 2) {
				problems.push(`You must use at least two non-restricted Pok\u00e9mon; you have: ${nonRestrictedSpecies.length ? nonRestrictedSpecies[0] : 'None'}.`);
			}
			return problems;
		},
		onChooseTeam(positions, pokemon, autoChoose) {
			if (autoChoose) {
				positions = [];
				let restrictedCount = 0;
				for (let i = 0; i < pokemon.length; i++) {
					if (this.ruleTable.isRestrictedSpecies(pokemon[i].species)) {
						restrictedCount++;
						if (restrictedCount > 2) continue;
					}
					positions.push(i);
				}
				return positions;
			}
			const restrictedCount = positions.filter(pos => this.ruleTable.isRestrictedSpecies(pokemon[pos].species)).length;
			if (restrictedCount > 2) {
				return `You can only bring up to two restricted Pok\u00e9mon to the battle.`;
			}
		},
	},
	{
		name: "[Gen 4] Doubles Custom Game",
		mod: 'gen4',
		gameType: 'doubles',
		searchShow: false,
		debug: true,
		battle: { trunc: Math.trunc },
		// no restrictions
		ruleset: ['Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		section: "Past Generations",
		column: 4,
	},
	{
		name: "[Gen 3] Ubers",
		mod: 'gen3',
		searchShow: false,
		ruleset: ['Standard', 'Deoxys Camouflage Clause Mod', 'One Baton Pass Clause'],
		banlist: ['Wobbuffet + Leftovers', 'Wynaut + Leftovers', 'Baton Pass'],
	},
	{
		name: "[Gen 3] UU",
		mod: 'gen3',
		searchShow: false,
		ruleset: ['Standard'],
		banlist: ['Uber', 'OU', 'UUBL', 'Smeargle + Ingrain', 'Arena Trap', 'Baton Pass', 'Swagger'],
	},
	{
		name: "[Gen 3] RU",
		mod: 'gen3',
		searchShow: false,
		ruleset: ['Standard'],
		banlist: ['Uber', 'OU', 'UUBL', 'UU', 'RUBL', 'Glalie', 'Smeargle + Ingrain', 'Arena Trap', 'Baton Pass', 'Swagger'],
	},
	{
		name: "[Gen 3] NU",
		mod: 'gen3',
		searchShow: false,
		ruleset: ['Standard', 'One Boost Passer Clause'],
		banlist: ['Uber', 'OU', 'UUBL', 'UU', 'RUBL', 'RU', 'NUBL', 'Smeargle + Ingrain'],
	},
	{
		name: "[Gen 3] PU",
		mod: 'gen3',
		searchShow: false,
		ruleset: ['Standard', 'Baton Pass Stat Clause'],
		banlist: ['Uber', 'OU', 'UUBL', 'UU', 'RUBL', 'RU', 'NUBL', 'NU', 'PUBL', 'Baton Pass + Substitute'],
	},
	{
		name: "[Gen 3] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		mod: 'gen3',
		searchShow: false,
		ruleset: [
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Standard', 'Accuracy Moves Clause', 'Sleep Moves Clause', 'Team Preview',
		],
		banlist: [
			'Clefable', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Groudon', 'Ho-Oh', 'Kyogre', 'Latias', 'Latios',
			'Lugia', 'Mew', 'Mewtwo', 'Rayquaza', 'Slaking', 'Snorlax', 'Suicune', 'Zapdos', 'Destiny Bond', 'Explosion', 'Perish Song',
			'Self-Destruct', 'Focus Band', 'King\'s Rock', 'Quick Claw',
		],
	},
	{
		name: "[Gen 3] UUBL",
		mod: 'gen3',
		searchShow: false,
		ruleset: ['[Gen 3] OU', '!Accuracy Trap Clause'],
		banlist: [
			'OU', 'Smeargle + Ingrain', 'Baton Pass + Block', 'Baton Pass + Mean Look', 'Baton Pass + Spider Web', 'Flail', 'Reversal',
			'Baton Pass + Speed Boost', 'Baton Pass + Agility', 'Baton Pass + Dragon Dance', 'Baton Pass + Salac Berry',
		],
		unbanlist: ['Soundproof', 'Sand Veil', 'Regice', 'Porygon2', 'Quick Claw'],
	},
	{
		name: "[Gen 3] ZU",
		mod: 'gen3',
		searchShow: false,
		ruleset: ['Standard', 'Sleep Moves Clause', 'Baton Pass Stat Trap Clause'],
		banlist: ['Uber', 'OU', 'UUBL', 'UU', 'RUBL', 'RU', 'NUBL', 'NU', 'PUBL', 'PU', 'ZUBL', 'Swagger', 'Baton Pass + Substitute'],
	},
	{
		name: "[Gen 3] LC",
		mod: 'gen3',
		searchShow: false,
		ruleset: ['Standard', 'Little Cup', 'Pomeg Glitch Clause', 'Sleep Moves Clause', 'Accuracy Moves Clause'],
		banlist: ['Abra', 'Chansey', 'Diglett', 'Meditite', 'Omanyte', 'Porygon', 'Scyther', 'Wynaut', 'Zigzagoon', 'Deep Sea Tooth', 'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Swagger', 'Thunder Wave'],
	},
	{
		name: "[Gen 3] Custom Game",
		mod: 'gen3',
		searchShow: false,
		debug: true,
		battle: { trunc: Math.trunc },
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 3] Doubles Custom Game",
		mod: 'gen3',
		gameType: 'doubles',
		searchShow: false,
		debug: true,
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 2] Ubers",
		mod: 'gen2',
		searchShow: false,
		ruleset: ['Standard'],
	},
	{
		name: "[Gen 2] NU",
		mod: 'gen2',
		searchShow: false,
		ruleset: ['[Gen 2] UU'],
		banlist: ['UU', 'NUBL', 'Swagger'],
		unbanlist: ['Agility + Baton Pass'],
	},
	{
		name: "[Gen 2] PU",
		mod: 'gen2',
		searchShow: false,
		ruleset: ['[Gen 2] NU'],
		banlist: ['NU', 'PUBL', 'Baton Pass + Mean Look', 'Baton Pass + Spider Web'],
		unbanlist: ['Swagger'],
	},
	{
		name: "[Gen 2] 1v1",
		mod: 'gen2',
		searchShow: false,
		ruleset: [
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Standard', 'Accuracy Moves Clause', 'Sleep Moves Clause', 'Team Preview',
		],
		banlist: [
			'Alakazam', 'Celebi', 'Clefable', 'Ho-Oh', 'Lugia', 'Mew', 'Mewtwo', 'Snorlax', 'Zapdos',
			'Berserk Gene', 'Focus Band', 'King\'s Rock', 'Quick Claw', 'Attract', 'Destiny Bond',
			'Explosion', 'Perish Song', 'Present', 'Self-Destruct', 'Confuse Ray', 'Supersonic', 'Swagger',
			'Sweet Kiss',
		],
	},
	{
		name: "[Gen 2] ZU",
		mod: 'gen2',
		searchShow: false,
		ruleset: ['[Gen 2] PU'],
		banlist: ['PU', 'ZUBL', 'Baton Pass + Mean Look', 'Baton Pass + Spider Web'],
		unbanlist: ['Baton Pass'],
	},
	{
		name: "[Gen 2] Custom Game",
		mod: 'gen2',
		searchShow: false,
		debug: true,
		battle: { trunc: Math.trunc },
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 1] Ubers",
		mod: 'gen1',
		searchShow: false,
		ruleset: ['Standard'],
	},
	{
		name: "[Gen 1] UU",
		mod: 'gen1',
		searchShow: false,
		ruleset: ['[Gen 1] OU'],
		banlist: ['OU', 'UUBL', 'Bind', 'Clamp', 'Confuse Ray', 'Fire Spin', 'Supersonic', 'Wrap'],
	},
	{
		name: "[Gen 1] PU",
		mod: 'gen1',
		searchShow: false,
		ruleset: ['[Gen 1] NU'],
		banlist: ['NU', 'PUBL'],
	},
	{
		name: "[Gen 1] ZU",
		mod: 'gen1',
		searchShow: false,
		ruleset: ['[Gen 1] PU'],
		banlist: ['PU', 'ZUBL'],
	},
	{
		name: "[Gen 1] LC",
		mod: 'gen1',
		searchShow: false,
		ruleset: ['Little Cup', 'Standard', '!Max Level', 'Adjust Level = 5', 'Sleep Moves Clause', 'Accuracy Moves Clause'],
		banlist: ['Dragon Rage', 'Fire Spin', 'Sonic Boom', 'Wrap'],
	},
	{
		name: "[Gen 1] 1v1",
		mod: 'gen1',
		searchShow: false,
		ruleset: [
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Standard', 'Accuracy Moves Clause', 'Sleep Moves Clause', 'Team Preview',
		],
		banlist: ['Mew', 'Mewtwo', 'Bind', 'Clamp', 'Explosion', 'Fire Spin', 'Self-Destruct', 'Wrap'],
	},
	{
		name: "[Gen 1] Tradebacks OU",
		desc: `RBY OU with movepool additions from the Time Capsule.`,
		mod: 'gen1',
		searchShow: false,
		ruleset: ['[Gen 1] OU', 'Allow Tradeback'],
	},
	{
		name: "[Gen 1] Custom Game",
		mod: 'gen1',
		searchShow: false,
		debug: true,
		battle: { trunc: Math.trunc },
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Desync Clause Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
];
