# Upstream snapshot

| Component | Source | Revision |
| --- | --- | --- |
| Battle simulator, generation data, English text | https://github.com/smogon/pokemon-showdown | `a5df8274e85b0889bf2a9b3422a08b39732374fc` |
| BattleTextParser | https://github.com/smogon/pokemon-showdown-client/blob/master/play.pokemonshowdown.com/src/battle-text-parser.ts | `f7dac498bb00b920227a32502267d7de358ae965` |

The simulator sources are under `battle-core/`. The client parser is under `battle-text/`. The originals' MIT headers and the MIT license text are retained. The parser imports the simulator Dex and English tables instead of the graphical client Dex.

To review a future update, clone both upstream repositories, inspect changed simulator imports and Dex dynamic file loading, and port only the needed generation mechanics and technical species metadata. Keep the nine local Link Battle formats and their empty rulesets. Update the source notes, then run `npm test` and the Gen 1 through Gen 9 example.
