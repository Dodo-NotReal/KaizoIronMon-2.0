# Architecture and extraction

## Simulator dependency boundary

The library retains the original `sim/*.ts` core: `Battle`, `BattleActions`, `BattleQueue`, `Pokemon`, `Side`, `Field`, `PRNG`, `Dex`, `Teams`, `TeamValidator`, `BattleStream` and `getPlayerStreams`. `lib/` contains only `streams.ts`, `utils.ts` and a minimal export file. There are no server, database, network or frontend imports in the simulator boundary. The only runtime npm dependency is `ts-chacha20`, used by the upstream PRNG.

The Dex loads battle tables dynamically by filename (`Abilities`, `Rulesets`, `FormatsData`, `Items`, `Learnsets`, `Moves`, `Natures`, `Pokedex`, `PokemonGoData`, `Scripts`, `Conditions`, `TypeChart`) and scans `data/mods/` at runtime. Those files must be present next to the compiled `sim/` files. The selected 39 mod folders cover all retained format mods plus the `gen9dlc1` parent required by `gen9predlc`. The generation chain from Gen 1 through the base Gen 9 is untouched. All required base battle tables, learnsets, aliases, tags, rulesets and English `data/text` tables are present.

`config/formats.ts` was filtered at the format object level from the pinned upstream list. Formats with a team generator, a random/factory name, generator reference or dependency on a removed format were excluded. The extraction script is `tools/extract-formats.mjs`. The list retains 293 manually supplied team formats. This is a pinned snapshot; it does not update automatically with Showdown.

## Removed code

- Entire `data/random-battles/` tree, generator sets and factory pools.
- Generator-only mod folders: `afd`, `chatbats`, `gen8legends`, `gen9legends`, `gen9mnmlimitedsupply`, `gen9ssb`, `monkeyspaw`, `randomroulette`.
- `Teams.getGenerator`, `Teams.generate`, `Battle.teamGenerator`, the generator fallback in `Battle.getTeam`, generator validation and the unused `RandomTeamsTypes` definitions.
- Random Battle aliases and the generator-only `PotD` rule.
- `sim/tools/` including RandomPlayerAI; server, database, matchmaking, replay viewer, UI, graphics, audio, translations and client Dex.

The general `PRNG` remains because normal battles require randomness. The wrapper and direct `Battle` reject unavailable formats and require explicit player teams. `tools/audit.mjs` checks both source and compiled output for generator files/imports and verifies that Random Battle formats are absent.

## English battle text

The client `BattleTextParser` is copied with its MIT header. Its browser `battle-dex` dependency is replaced by the already included simulator Dex and the original English `data/text` tables. `BattleText.en` is assembled in the parser module. The parser's template lookup and generation-specific English variants remain intact. No DOM, browser global, client rendering module or non-English translation table is included.

The `BattleEngine` wrapper reads original battle updates synchronously, emits one event per protocol line and runs two stateful parsers (P1/P2 perspectives). It caches their text on each event so callers can register after battle creation and still see the opening log. The raw `BattleStream` remains available for consumers that need Showdown's full stream API.

## Scope of verification

Automated tests cover Gen 1, Gen 4 and Gen 9 turns, explicit teams, switches, protocol events, English text, team validation, raw `BattleStream`, unavailable Random Battles, and mod-sourced generation differences (including Bite's Gen 3/Gen 4 category). `examples/generations-test.ts` exercises OU battles for Gen 1 through Gen 9. The complete set of 293 format-specific custom rules is not exhaustively simulated by the test suite; custom formats should be integration-tested with the teams and battle scenarios used by the consuming game.
