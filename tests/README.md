# Test-only files

The entire `tests/` directory can be deleted when the test harness is no longer needed. Every file here is test-only:

| File | Purpose |
| --- | --- |
| `engine.test.ts` | Automated simulator and wrapper checks (`npm test`). |
| `audit.mjs` | Source and build checks (`npm test`, `npm run audit`). |
| `generations-smoke.ts` | Manual generation smoke script. |
| `battle-text-smoke.ts` | Manual English battle text smoke script. |
| `tsconfig.json` | Compiles TypeScript tests separately from the production build. |
| `README.md` | This test-only guide. |
| `web/index.html` | Local battle test page. |
| `web/app.js` | Team editor, searchable menus and battle controls. |
| `web/style.css` | Styles for the local page. |
| `web/server.mjs` | Local HTTP server and test battle API (`npm run test:web`). |

The references outside this directory are listed in the root [README](../README.md#removing-the-test-harness-later): `package.json` scripts `test`, `test:web`, `audit`, and descriptions in `README.md` and `ARCHITECTURE.md`. The generated `dist/tests/` directory can be cleared with `npm run build`. Normal builds do not depend on these files. `tools/clean.mjs` and `examples/teams.ts` are used by the normal build or example and should stay.
