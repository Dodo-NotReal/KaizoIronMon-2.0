# KaizoIronMon 2.0 battle engine

A Node.js and TypeScript library containing the original Pokémon Showdown battle simulator, its generation data and manual-team formats, plus an English, headless battle text parser. It has no UI, web server, matchmaking, graphics or automatic team generation.

This project is based on the official [Pokémon Showdown simulator](https://github.com/smogon/pokemon-showdown) and the MIT-licensed [battle text parser](https://github.com/smogon/pokemon-showdown-client/blob/master/play.pokemonshowdown.com/src/battle-text-parser.ts) from its client. The exact upstream revisions and extraction decisions are in [UPSTREAM.md](UPSTREAM.md).

## Requirements and commands

- Node.js 22.18 or newer
- npm

```sh
npm install
npm run build
npm test
npm run example
```

`npm test` rebuilds the library, audits the source and build for Random Battle code, and runs the automated tests. `npm run example` prints a short Gen 4 battle. The public entry point is `dist/index.js`, with TypeScript definitions at `dist/index.d.ts`. Copy or clone the repository, install dependencies, and build it; no Pokémon Showdown server or client installation is needed.

## Start and play a battle

```js
const { Teams, createBattle } = require('./dist');

const p1Team = Teams.import(`Pikachu
Ability: Static
- Thunderbolt
- Quick Attack

Bulbasaur
Ability: Overgrow
- Tackle
- Growl`);
const p2Team = Teams.import(`Squirtle
Ability: Torrent
- Tackle
- Water Gun

Charmander
Ability: Blaze
- Scratch
- Growl`);

const engine = createBattle({
  format: 'gen4ou',
  p1: { name: 'Alice', team: p1Team },
  p2: { name: 'Bob', team: p2Team },
});

engine.onEvent(event => {
  if (event.audience) return; // private request for one player
  console.log(event.line);       // original Showdown protocol line
  const text = engine.formatBattleText(event, 'p1');
  if (text.trim()) console.log(text.trim());
});

engine.choose('p1', 'move 1');
engine.choose('p2', 'move 1'); // resolves the turn
engine.choose('p1', 'switch 2');
engine.choose('p2', 'move 1');
```

`onEvent` replays the opening events when registered after `createBattle`. Each event has a protocol `line`, an `audience` (`null`, `p1` or `p2`) and English `text` for both perspectives. Text uses the original Showdown English templates, including generation-specific variants. Private `|request|` and `|error|` events are available to drive a custom UI; their `text` is empty. `formatBattleText` returns the stored text for a public event.

The wrapper submits the supplied order automatically during Team Preview. Set `autoTeamPreview: false` to choose the order yourself using `engine.choose('p1', 'team 21')` and the corresponding P2 choice. For doubles or formats with forced switches, send all choices requested by the simulator. Invalid decisions throw an error. `engine.battle` exposes the underlying original `Battle` when advanced access is needed.

## Generations and formats

Set `format` to `gen1ou`, `gen2ou`, ..., `gen9ou` to switch generations. The original Dex loads the appropriate mod, including its inheritance chain and original battle mechanics. The included format list contains 234 formats from the pinned upstream revision that accept manually supplied teams and use only the main Gen 1–9 mods. Inspect them with:

```js
const { Dex } = require('./dist');
console.log(Dex.formats.all().map(format => format.id));
```

Historical variant and dedicated special mods and their associated formats have been removed. Random Battle and factory formats are also unavailable. The simulator still uses its normal PRNG for accuracy, critical hits, damage rolls and other battle mechanics.

`BattleEngine` accepts two-player formats. Some retained manual-team formats use more players; use the raw `BattleStream` with all required player slots for those.

## Teams and validation

Supply an array of `PokemonSet` objects, a packed team string from `Teams.pack`, or parse a Showdown export with `Teams.import`. Both players must have nonempty teams. The wrapper does not alter teams or automatically validate them on creation. To check legality under the chosen format:

```js
const problems = engine.validateTeam(p1Team);
if (problems) console.error(problems);
```

`TeamValidator`, `Teams` and `Dex` are also exported directly. Format legality is separate from whether the simulator can run a battle with a given set.

## Raw BattleStream protocol

`BattleStream` and `getPlayerStreams` remain available for integrations that use Showdown's native stream protocol. The stream accepts commands such as:

```text
>start {"formatid":"gen9ou"}
>player p1 {"name":"Alice","team":"<packed team>"}
>player p2 {"name":"Bob","team":"<packed team>"}
>p1 team 12
>p2 team 12
>p1 move 1
>p2 switch 2
```

Gen 9 OU begins with Team Preview, so the raw stream needs `team` choices before moves. Use `Teams.pack` to produce the packed strings. The stream emits `update`, `sideupdate` and `end` messages; see the original [simulation protocol](https://github.com/smogon/pokemon-showdown/blob/master/sim/SIM-PROTOCOL.md).

## Directory layout

```text
battle-core/
  sim/             Battle, BattleStream, Dex, Teams, validation and mechanics
  data/            battle data, English text and eight generation mods
  lib/             stream and utility helpers only
  config/          manual-team format catalog
battle-text/        MIT-licensed BattleTextParser with English tables
examples/           basic battle, generation loop, text parser
tests/              simulation, text, mechanics and removal checks
tools/              format extraction, clean build and audit
licenses/           upstream license copies
```

The simulator's `sim`, data tables and mod inheritance remain based on the original implementation. See [ARCHITECTURE.md](ARCHITECTURE.md) for dependency and removal details.
For the purpose, parent mod and linked formats of each remaining folder in `data/mods/`, see [MODS.md](MODS.md).

## License and attribution

The copied simulator, battle data and the specific client `battle-text-parser.ts` file carry MIT license notices. The parser's own upstream header explicitly says `@license MIT`; the broader client repository uses AGPL, and its license is included for reference in `licenses/`. The project keeps the upstream source headers and the original [MIT license](LICENSE). See [NOTICE.md](NOTICE.md) for precise origins and revisions.

Pokémon and related names belong to their respective owners. This is an independent integration project and is not an official Pokémon product.
