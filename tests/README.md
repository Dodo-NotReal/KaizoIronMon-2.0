# Test-only files

Everything used only for testing lives in this directory:

- `engine.test.ts`: automated simulator and wrapper checks (`npm test`).
- `audit.mjs`: source/build checks run by `npm test` or `npm run audit`.
- `generations-smoke.ts` and `battle-text-smoke.ts`: manual smoke scripts, compiled by `npm test`.
- `web/`: local team builder, battle test page and its HTTP server (`npm run test:web`).
- `tsconfig.json`: compiles TypeScript tests separately from the production build.

`npm run build` does not depend on this directory. The `test`, `test:web` and `audit` npm scripts are the only root-level entry points that refer to it. `tools/clean.mjs` remains outside because normal builds use it; `examples/teams.ts` remains outside because the public example uses those sample teams.
