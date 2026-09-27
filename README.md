# KaizoIronMon 2.0 battle engine

A Node.js and TypeScript library containing the original Pokémon Showdown battle simulator, its generation data, nine rule-free Link Battle formats and an English, headless battle text parser. It has no UI, web server, matchmaking, graphics or automatic team generation.

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

`npm test` builds the library and test files, audits the source and build, and runs the automated tests. `npm run build` compiles the library without test files. `npm run example` prints a short Gen 4 battle. The public entry point is `dist/index.js`, with TypeScript definitions at `dist/index.d.ts`. Copy or clone the repository, install dependencies, and build it; no Pokémon Showdown server or client installation is needed.

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
  format: 'gen4linkbattle',
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

The Link Battle formats do not activate Team Preview. For forced switches, send the choices requested by the simulator. Invalid decisions throw an error. `engine.battle` exposes the underlying original `Battle` when advanced access is needed.

## Generations and formats

Set `format` to `gen1linkbattle`, `gen2linkbattle`, ..., `gen9linkbattle` to switch generations. The Dex loads the appropriate mod, including its inheritance chain and original battle mechanics. Each format has `ruleset: []`, with no competitive bans or clauses. Inspect the nine formats with:

```js
const { Dex } = require('./dist');
console.log(Dex.formats.all().map(format => format.id));
```

The simulator still uses its normal PRNG for accuracy, critical hits, damage rolls and other battle mechanics. `Battle.ruleTable` remains available as an empty `RuleTable` for generation code that reads it.

## Teams and validation

Supply an array of `PokemonSet` objects, a packed team string from `Teams.pack`, or parse a Showdown export with `Teams.import`. Both players must have nonempty teams. The wrapper does not alter or validate teams on creation. The retained upstream `TeamValidator` can still be called explicitly:

```js
const problems = engine.validateTeam(p1Team);
if (problems) console.error(problems);
```

`TeamValidator`, `Teams` and `Dex` are also exported directly. The nine formats have no competitive rules. Game-specific limits and species availability belong in an external validator; that layer has not been added yet.

## Local battle test page

After `npm install`, run `npm run test:web` and open `http://127.0.0.1:3000` in a browser. The server listens only on the local computer. Stop it with Ctrl+C.

Select a Gen 1–9 mod, configure 1–6 player Pokémon and 1–6 opponent Pokémon, then select **Avvia test battaglia**. Choose a move or switch to another available player Pokémon; the opponent uses its first available move and switches when needed. **Mostra JSON squadre** displays both teams for copying into other tests.

The selected mod supplies species, forms, base stats, abilities, moves and items. Open a Pokémon data menu to see its full list, then type in the menu to filter by name (or Pokédex number for species). Press Enter to select an exact name or click a result. Pikachu and Bulbasaur are just the initial selections: the menu does not limit the catalog to them. You can customize nickname, level, EVs, IVs, friendship and the generation-specific fields (including Dynamax in Gen 8 and Tera type in Gen 9). Species, abilities, items, moves, natures and Tera types must exist in the selected mod; arbitrary names cannot be used by the battle engine. Base stats come from the mod and are not changed by an individual Pokémon set. This is a local test harness, not a competitive legality checker.

### Removing the test harness later

All test-only source files can be removed by deleting the entire `tests/` directory. This includes `tests/engine.test.ts`, `tests/audit.mjs`, `tests/generations-smoke.ts`, `tests/battle-text-smoke.ts`, `tests/tsconfig.json`, `tests/README.md`, and the four web files `tests/web/index.html`, `tests/web/app.js`, `tests/web/style.css`, `tests/web/server.mjs`.

After deleting that directory, remove these references outside it:

| File | Test-related content to remove or update |
| --- | --- |
| `package.json` | The `test`, `test:web` and `audit` scripts. |
| `README.md` | `npm test` in the command block and its explanation, this local battle test page section, this removal guide, and the `tests/` line in the directory layout. |
| `ARCHITECTURE.md` | The `tests/audit.mjs` paragraph in **Removed code** and the **Scope of verification** section, which describes the test suite and smoke script. |

The generated `dist/tests/` output can be cleared with the normal build cleanup (`npm run build`); `dist/` is ignored by Git. The production build does not include `tests/` as source. `tools/clean.mjs` and `examples/teams.ts` are also used outside tests and should stay.

## Raw BattleStream protocol

`BattleStream` and `getPlayerStreams` remain available for integrations that use Showdown's native stream protocol. The stream accepts commands such as:

```text
>start {"formatid":"gen9linkbattle"}
>player p1 {"name":"Alice","team":"<packed team>"}
>player p2 {"name":"Bob","team":"<packed team>"}
>p1 move 1
>p2 switch 2
```

Link Battle starts without Team Preview. Use `Teams.pack` to produce the packed strings. The stream emits `update`, `sideupdate` and `end` messages; see the original [simulation protocol](https://github.com/smogon/pokemon-showdown/blob/master/sim/SIM-PROTOCOL.md).

## Directory layout

```text
battle-core/
  sim/             Battle, BattleStream, Dex, Teams, validation and mechanics
  data/            battle data, English text and eight generation mods
  lib/             stream and utility helpers only
  config/          manual-team format catalog
battle-text/        MIT-licensed BattleTextParser with English tables
examples/           basic battle and sample teams
tests/              automated tests, audit, smoke scripts and local web page
tools/              build cleanup
licenses/           upstream license copies
```

The simulator's `sim`, data tables and mod inheritance remain based on the original implementation. See [ARCHITECTURE.md](ARCHITECTURE.md) for dependency and removal details.
For the purpose, parent mod and linked formats of each remaining folder in `data/mods/`, see [MODS.md](MODS.md).

## License and attribution

The copied simulator, battle data and the specific client `battle-text-parser.ts` file carry MIT license notices. The parser's own upstream header explicitly says `@license MIT`; the broader client repository uses AGPL, and its license is included for reference in `licenses/`. The project keeps the upstream source headers and the original [MIT license](LICENSE). See [NOTICE.md](NOTICE.md) for precise origins and revisions.

Pokémon and related names belong to their respective owners. This is an independent integration project and is not an official Pokémon product.
