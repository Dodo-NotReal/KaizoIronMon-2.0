# Architecture and extraction

## Simulator dependency boundary

The library retains the original `sim/*.ts` core: `Battle`, `BattleActions`, `BattleQueue`, `Pokemon`, `Side`, `Field`, `PRNG`, `Dex`, `Teams`, `TeamValidator`, `BattleStream` and `getPlayerStreams`. `lib/` contains only `streams.ts`, `utils.ts` and a minimal export file. There are no server, database, network or frontend imports in the simulator boundary. The only runtime npm dependency is `ts-chacha20`, used by the upstream PRNG.

The Dex loads battle tables dynamically by filename (`Abilities`, `Rulesets`, `FormatsData`, `Items`, `Learnsets`, `Moves`, `Natures`, `Pokedex`, `PokemonGoData`, `Scripts`, `Conditions`, `TypeChart`) and scans `data/mods/` at runtime. The eight remaining mod folders form the generation chain from Gen 1 through the base Gen 9. Missing mod tables inherit from the parent Dex.

`config/formats.ts` contains one Link Battle format per generation. All nine use manually supplied teams and an empty `ruleset`. The base `data/rulesets.ts` exports an empty object because the Dex loader adds the named formats to `Dex.data.Rulesets`. Mod-level ruleset files were removed: the loader inherits the base table when a mod has no override. `RuleTable` and `DexFormats.getRuleTable()` remain intact; the Link Battle table has no active entries.

`FormatsData` remains in the loader and in `DexSpecies` because it supplies technical `isNonstandard` metadata, including `Future`, `Past` and `Unobtainable`. Entries containing only competitive tier fields were removed. Empty mod `formats-data.ts` tables were deleted and inherit their parent's data. `species.gen` still comes from Pokédex numbers and form data in `DexSpecies`; generation availability is not filtered yet.

## Removed code

- Entire `data/random-battles/` tree, generator sets and factory pools.
- Generator-only mod folders: `afd`, `chatbats`, `gen8legends`, `gen9legends`, `gen9mnmlimitedsupply`, `gen9ssb`, `monkeyspaw`, `randomroulette`.
- Historical variant and dedicated special mod folders, their associated formats, and their dedicated simulator and text branches.
- Competitive format definitions, ruleset callbacks, tier tags and tier fields (`tier`, `doublesTier`, `natDexTier`).
- `Teams.getGenerator`, `Teams.generate`, `Battle.teamGenerator`, the generator fallback in `Battle.getTeam`, generator validation and the unused `RandomTeamsTypes` definitions.
- Random Battle aliases and the generator-only `PotD` rule.
- `sim/tools/` including RandomPlayerAI; server, database, matchmaking, replay viewer, UI, graphics, audio, translations and client Dex.

The general `PRNG` remains because normal battles require randomness. The wrapper and direct `Battle` reject unavailable formats and require explicit player teams. `tools/audit.mjs` checks both source and compiled output for generator files/imports, verifies the eight generation mod directories and nine empty-rule formats, and checks that tier fields are absent from species data.

## English battle text

The client `BattleTextParser` is copied with its MIT header. Its browser `battle-dex` dependency is replaced by the already included simulator Dex and the original English `data/text` tables. `BattleText.en` is assembled in the parser module. The parser's template lookup and generation-specific English variants remain intact. No DOM, browser global, client rendering module or non-English translation table is included.

The `BattleEngine` wrapper reads original battle updates synchronously, emits one event per protocol line and runs two stateful parsers (P1/P2 perspectives). It caches their text on each event so callers can register after battle creation and still see the opening log. The raw `BattleStream` remains available for consumers that need Showdown's full stream API.

## Scope of verification

Automated tests cover Gen 1–9 Dex loading, species metadata, empty `RuleTable`, moves, damage, switching, fainting, victory, protocol events, English text, optional team validation and raw `BattleStream`. They also check generation-specific data differences (including Bite's Gen 3/Gen 4 category) and `Future` on species from later generations. `examples/generations-test.ts` exercises the nine Link Battle formats.
