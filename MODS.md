# Mappa delle mod

In `battle-core/data/mods/` restano otto cartelle: una per ciascuna delle generazioni 1–8. I dati della generazione 9 sono in `battle-core/data/`; il Dex chiama questa base `gen9`, quindi non esiste una cartella `gen9/`.

Una mod contiene le differenze di dati e meccaniche rispetto alla mod da cui eredita. Il campo `inherit` in `scripts.ts` indica la mod madre; quando manca, il Dex usa `base`. Ogni tabella e voce non ridefinita viene ereditata. Il caricamento è implementato in [`battle-core/sim/dex.ts`](battle-core/sim/dex.ts).

```text
gen1 → gen2 → gen3 → gen4 → gen5 → gen6 → gen7 → gen8 → base (= gen9)
```

| Cartella | Serve a | Eredita da | Format di esempio |
| --- | --- | --- | --- |
| `gen1` | Dati e meccaniche RBY, tra cui la statistica Special unica. | `gen2` | `gen1linkbattle` |
| `gen2` | Dati e meccaniche GSC, tra cui strumenti e regole di seconda generazione. | `gen3` | `gen2linkbattle` |
| `gen3` | Dati e meccaniche ADV; la categoria fisica o speciale dipende dal tipo della mossa. | `gen4` | `gen3linkbattle` |
| `gen4` | Dati e meccaniche DPP, con categorie fisica e speciale definite per ogni mossa. | `gen5` | `gen4linkbattle` |
| `gen5` | Dati e meccaniche BW/B2W2. | `gen6` | `gen5linkbattle` |
| `gen6` | Dati e meccaniche XY/ORAS, incluso il tipo Folletto e la Megaevoluzione. | `gen7` | `gen6linkbattle` |
| `gen7` | Dati e meccaniche SM/USUM, incluse le mosse Z. | `gen8` | `gen7linkbattle` |
| `gen8` | Dati e meccaniche SwSh. | `base` implicita | `gen8linkbattle` |

Per esempio, `gen4linkbattle` in [`battle-core/config/formats.ts`](battle-core/config/formats.ts) seleziona `gen4`. Il Dex carica prima la base e la catena delle mod madri, poi applica le differenze di `gen4`. `gen9linkbattle` usa direttamente `base`.

Per trovare i format associati a una cartella, cerca `mod: 'genN'` in `battle-core/config/formats.ts`. Per esaminare la versione effettiva dei dati, usa `Dex.forFormat('gen4linkbattle')`; `Dex.formats.all()` elenca i format disponibili.
