import { Battle } from './battle-core/sim/battle';
import { Dex, toID } from './battle-core/sim/dex';
import { Teams, type PokemonSet } from './battle-core/sim/teams';
import { TeamValidator } from './battle-core/sim/team-validator';
import { BattleTextParser } from './battle-text/battle-text-parser';

export interface BattlePlayer {
	name: string;
	team: PokemonSet[] | string;
}

export interface CreateBattleOptions {
	format: string;
	p1: BattlePlayer;
	p2: BattlePlayer;
}

export interface BattleEvent {
	/** One line of the Pokémon Showdown battle protocol. */
	line: string;
	/** `null` means visible to everyone; side updates are private. */
	audience: 'p1' | 'p2' | null;
	text: { p1: string; p2: string };
}

export class BattleEngine {
	readonly battle: Battle;
	readonly events: BattleEvent[] = [];
	private readonly listeners = new Set<(event: BattleEvent) => void>();
	private readonly textParsers = {
		p1: new BattleTextParser('p1', 'en'),
		p2: new BattleTextParser('p2', 'en'),
	};

	constructor(options: CreateBattleOptions) {
		const format = Dex.formats.get(options.format, true);
		if (!format.exists || format.team) throw new Error(`Unavailable manual-team format: ${options.format}`);
		if (format.playerCount !== 2) throw new Error(`BattleEngine requires a two-player format: ${options.format}`);
		for (const [slot, player] of [['p1', options.p1], ['p2', options.p2]] as const) {
			if (!player?.team || (Array.isArray(player.team) && !player.team.length)) {
				throw new Error(`${slot} must provide a non-empty team.`);
			}
		}
		this.battle = new Battle({
			formatid: toID(options.format),
			p1: { name: options.p1.name, team: options.p1.team },
			p2: { name: options.p2.name, team: options.p2.team },
			send: (type, data) => this.receive(type, data),
		});
		this.battle.sendUpdates();
	}

	private receive(type: string, data: string | string[]) {
		if (type !== 'update' && type !== 'sideupdate') return;
		const lines = Array.isArray(data) ? data : data.split('\n');
		const audience = type === 'sideupdate' && (lines[0] === 'p1' || lines[0] === 'p2') ? lines.shift() as 'p1' | 'p2' : null;
		for (let i = 0; i < lines.length; i++) {
			let line = lines[i];
			let p1Line = line;
			let p2Line = line;
			let eventAudience = audience;
			const split = /^\|split\|(p[12])$/.exec(line);
			if (split) {
				const player = split[1] as 'p1' | 'p2';
				const secret = lines[++i] || '';
				const shared = lines[++i] || '';
				line = shared || secret;
				p1Line = player === 'p1' ? secret : shared;
				p2Line = player === 'p2' ? secret : shared;
				if (!shared) eventAudience = player;
			}
			if (!line.startsWith('|')) continue;
			const event: BattleEvent = {
				line, audience: eventAudience,
				text: type === 'sideupdate' ? { p1: '', p2: '' } : {
					p1: p1Line ? this.textParsers.p1.extractMessage(p1Line) : '',
					p2: p2Line ? this.textParsers.p2.extractMessage(p2Line) : '',
				},
			};
			this.events.push(event);
			for (const listener of this.listeners) listener(event);
		}
	}

	/** Replays events already produced, so listeners registered after creation see the opening. */
	onEvent(listener: (event: BattleEvent) => void): () => void {
		for (const event of this.events) listener(event);
		this.listeners.add(listener);
		return () => this.listeners.delete(listener);
	}

	choose(side: 'p1' | 'p2', decision: string): void {
		if (!this.battle.choose(side, decision)) {
			throw new Error(this.battle.getSide(side).choice.error || `Invalid choice: ${decision}`);
		}
		this.battle.sendUpdates();
	}

	formatBattleText(event: BattleEvent, perspective: 'p1' | 'p2' = 'p1'): string {
		return event.text[perspective];
	}

	validateTeam(team: PokemonSet[] | string): string[] | null {
		const unpacked = typeof team === 'string' ? Teams.unpack(team) : team;
		return new TeamValidator(this.battle.format).validateTeam(unpacked);
	}
}

export function createBattle(options: CreateBattleOptions): BattleEngine {
	return new BattleEngine(options);
}
