import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { randomUUID } from 'node:crypto';

const require = createRequire(import.meta.url);
const { Dex, createBattle } = require('../dist/index.js');
const page = new URL('../tests/web/index.html', import.meta.url);
const script = new URL('../tests/web/app.js', import.meta.url);
const style = new URL('../tests/web/style.css', import.meta.url);
const port = Number(process.env.TEST_WEB_PORT || 3000);
const catalogs = new Map();
const battles = new Map();
const stats = ['hp', 'atk', 'def', 'spa', 'spd', 'spe'];

function generation(value) {
	const gen = Number(value);
	if (!Number.isInteger(gen) || gen < 1 || gen > 9) throw new Error('Seleziona una generazione da 1 a 9.');
	return gen;
}

function catalog(gen) {
	if (catalogs.has(gen)) return catalogs.get(gen);
	const dex = Dex.mod(`gen${gen}`);
	const species = dex.species.all()
		.filter(mon => mon.exists && mon.num > 0 && mon.gen <= gen && mon.isNonstandard !== 'Future' && !mon.placeholderFor)
		.map(mon => ({
			id: mon.id, name: mon.name, num: mon.num, types: mon.types,
			baseStats: mon.baseStats, abilities: Object.values(mon.abilities).filter(Boolean),
			gender: mon.gender || '', canGigantamax: !!mon.canGigantamax, gen: mon.gen,
		})).sort((a, b) => a.num - b.num || a.name.localeCompare(b.name));
	const moves = dex.moves.all()
		.filter(move => move.exists && move.gen <= gen && !['Future', 'Custom', 'Gmax'].includes(move.isNonstandard))
		.map(move => ({ id: move.id, name: move.name }));
	const items = gen >= 2 ? dex.items.all()
		.filter(item => item.exists && item.gen <= gen && !['Future', 'Custom'].includes(item.isNonstandard))
		.map(item => ({ id: item.id, name: item.name })) : [];
	const natures = gen >= 3 ? Object.values(dex.data.Natures).map(nature => nature.name).sort() : [];
	const types = dex.types.names();
	const data = { gen, species, moves, items, natures, types };
	catalogs.set(gen, data);
	return data;
}

function integer(value, min, max, label) {
	if (!Number.isInteger(value) || value < min || value > max) throw new Error(`${label}: inserisci un numero da ${min} a ${max}.`);
	return value;
}

function cleanSet(raw, gen, label) {
	if (!raw || typeof raw !== 'object') throw new Error(`${label}: manca il Pokémon.`);
	const data = catalog(gen);
	const species = data.species.find(mon => mon.id === raw.species);
	if (!species) throw new Error(`${label}: specie non disponibile in Gen ${gen}.`);
	const moves = Array.isArray(raw.moves) ? raw.moves.filter(Boolean) : [];
	if (moves.length < 1 || moves.length > 4 || moves.some(move => !data.moves.some(option => option.name === move))) {
		throw new Error(`${label}: scegli da una a quattro mosse della generazione.`);
	}
	const ability = gen >= 3 ? raw.ability || species.abilities[0] || '' : '';
	if (ability && !species.abilities.includes(ability)) throw new Error(`${label}: abilità non disponibile per ${species.name}.`);
	const item = gen >= 2 ? raw.item || '' : '';
	if (item && !data.items.some(option => option.name === item)) throw new Error(`${label}: strumento non disponibile in Gen ${gen}.`);
	const nature = gen >= 3 ? raw.nature || 'Hardy' : '';
	if (nature && !data.natures.includes(nature)) throw new Error(`${label}: natura non valida.`);
	const evs = {};
	const ivs = {};
	for (const stat of stats) {
		evs[stat] = integer(raw.evs?.[stat], 0, 255, `${label} EV ${stat}`);
		ivs[stat] = integer(raw.ivs?.[stat], 0, gen <= 2 ? 30 : 31, `${label} IV ${stat}`);
		if (gen <= 2 && ivs[stat] % 2) throw new Error(`${label}: in Gen 1 e 2 i DV devono essere pari (0–30).`);
	}
	const gender = gen >= 2 ? String(raw.gender || '') : '';
	if (gender && !['M', 'F', 'N'].includes(gender)) throw new Error(`${label}: sesso non valido.`);
	if (species.gender && gender && species.gender !== gender) throw new Error(`${label}: sesso non disponibile per ${species.name}.`);
	const set = {
		name: String(raw.name || species.name).slice(0, 18), species: species.name,
		moves, ability, item, nature,
		gender: gen >= 2 ? species.gender || gender : '',
		level: integer(raw.level, 1, 100, `${label} livello`),
		evs, ivs,
		happiness: gen >= 2 ? integer(raw.happiness ?? 255, 0, 255, `${label} amicizia`) : 255,
		shiny: gen >= 2 && !!raw.shiny,
	};
	if (gen === 8) {
		set.dynamaxLevel = integer(raw.dynamaxLevel ?? 10, 0, 10, `${label} livello Dynamax`);
		if (raw.gigantamax && !species.canGigantamax) throw new Error(`${label}: ${species.name} non può Gigamaxare.`);
		set.gigantamax = !!raw.gigantamax;
	}
	if (gen === 9 && raw.teraType) {
		if (!data.types.includes(raw.teraType)) throw new Error(`${label}: tipo Tera non valido.`);
		set.teraType = raw.teraType;
	}
	return set;
}

function sideSnapshot(side) {
	const request = side.activeRequest;
	return {
		name: side.name,
		active: side.active[0] ? {
			name: side.active[0].name, species: side.active[0].species.name,
			hp: side.active[0].hp, maxhp: side.active[0].maxhp, status: side.active[0].status,
		} : null,
		team: side.pokemon.map((mon, index) => ({ index: index + 1, name: mon.name, fainted: mon.fainted, active: mon.isActive })),
		request: side.requestState === 'move' ? {
			type: 'move', moves: request?.active?.[0]?.moves || [],
			canMegaEvo: !!request?.active?.[0]?.canMegaEvo,
			canMegaEvoX: !!request?.active?.[0]?.canMegaEvoX,
			canMegaEvoY: !!request?.active?.[0]?.canMegaEvoY,
			canUltraBurst: !!request?.active?.[0]?.canUltraBurst,
			canZMove: !!request?.active?.[0]?.canZMove?.some(Boolean),
			canDynamax: !!request?.active?.[0]?.canDynamax,
			canTerastallize: !!request?.active?.[0]?.canTerastallize,
		} : side.requestState === 'switch' ? { type: 'switch' } : { type: side.requestState || 'wait' },
	};
}

function snapshot(session, from = 0) {
	const battle = session.engine.battle;
	return {
		id: session.id, turn: battle.turn, ended: !!battle.ended,
		winner: battle.winner || '',
		p1: sideSnapshot(battle.sides[0]), p2: sideSnapshot(battle.sides[1]),
		events: session.engine.events.slice(from).map(event => ({ line: event.line, text: event.text.p1 || '' })),
	};
}

function chooseOpponent(session) {
	const engine = session.engine;
	for (let attempt = 0; attempt < 12 && !engine.battle.ended; attempt++) {
		const side = engine.battle.sides[1];
		if (side.requestState === 'move') {
			const moves = side.activeRequest?.active?.[0]?.moves || [];
			const index = moves.findIndex(move => !move.disabled && (move.pp === undefined || move.pp > 0));
			engine.choose('p2', `move ${index < 0 ? 1 : index + 1}`);
		} else if (side.requestState === 'switch') {
			const index = side.pokemon.findIndex(mon => !mon.fainted && !mon.isActive);
			if (index < 0) break;
			engine.choose('p2', `switch ${index + 1}`);
		} else {
			break;
		}
		if (engine.battle.sides[0].requestState && engine.battle.sides[1].requestState === 'move') break;
	}
}

function json(response, status, data) {
	response.writeHead(status, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' });
	response.end(JSON.stringify(data));
}

async function body(request) {
	let input = '';
	for await (const chunk of request) {
		input += chunk;
		if (input.length > 1_000_000) throw new Error('Richiesta troppo grande.');
	}
	return JSON.parse(input || '{}');
}

const server = createServer(async (request, response) => {
	try {
		const url = new URL(request.url || '/', 'http://localhost');
		if (request.method === 'GET' && url.pathname === '/api/catalog') {
			return json(response, 200, catalog(generation(url.searchParams.get('gen'))));
		}
		if (request.method === 'GET' && url.pathname === '/api/learnset') {
			const gen = generation(url.searchParams.get('gen'));
			const id = url.searchParams.get('species');
			if (!catalog(gen).species.some(species => species.id === id)) throw new Error('Specie non disponibile.');
			const dex = Dex.mod(`gen${gen}`);
			const names = [...dex.species.getMovePool(id)].map(move => dex.moves.get(move).name).sort();
			return json(response, 200, { moves: names });
		}
		if (request.method === 'POST' && url.pathname === '/api/battles') {
			const input = await body(request);
			const gen = generation(input.gen);
			if (!Array.isArray(input.opponents) || input.opponents.length < 1 || input.opponents.length > 6) {
				throw new Error('L’avversario deve avere da 1 a 6 Pokémon.');
			}
			const player = cleanSet(input.player, gen, 'Giocatore');
			const opponents = input.opponents.map((mon, index) => cleanSet(mon, gen, `Avversario ${index + 1}`));
			const engine = createBattle({
				format: `gen${gen}linkbattle`,
				p1: { name: 'Giocatore', team: [player] },
				p2: { name: 'Avversario', team: opponents },
			});
			const session = { id: randomUUID(), engine };
			if (battles.size >= 30) battles.delete(battles.keys().next().value);
			battles.set(session.id, session);
			return json(response, 201, snapshot(session));
		}
		const choiceMatch = url.pathname.match(/^\/api\/battles\/([a-f0-9-]+)\/choice$/);
		if (request.method === 'POST' && choiceMatch) {
			const session = battles.get(choiceMatch[1]);
			if (!session) return json(response, 404, { error: 'Battaglia non trovata. Avviane una nuova.' });
			const input = await body(request);
			const choice = String(input.choice || '');
			if (!/^(move [1-4](?: (?:mega|megax|megay|ultra|zmove|dynamax|terastallize))?|switch [1-6])$/.test(choice)) throw new Error('Scelta non valida.');
			const from = session.engine.events.length;
			session.engine.choose('p1', choice);
			chooseOpponent(session);
			return json(response, 200, snapshot(session, from));
		}
		const staticFiles = {
			'/': [page, 'text/html; charset=utf-8'],
			'/app.js': [script, 'text/javascript; charset=utf-8'],
			'/style.css': [style, 'text/css; charset=utf-8'],
		};
		if (request.method === 'GET' && staticFiles[url.pathname]) {
			const [file, type] = staticFiles[url.pathname];
			response.writeHead(200, { 'content-type': type, 'cache-control': 'no-store' });
			return response.end(await readFile(file));
		}
		return json(response, 404, { error: 'Pagina non trovata.' });
	} catch (error) {
		return json(response, 400, { error: error instanceof Error ? error.message : 'Errore sconosciuto.' });
	}
});

server.listen(port, '127.0.0.1', () => {
	console.log(`Pagina di test: http://127.0.0.1:${port}`);
});
