# Mappa delle mod

Questa pagina descrive le 39 cartelle di `battle-core/data/mods/` nello snapshot indicato in [UPSTREAM.md](UPSTREAM.md). Una **mod** è un insieme di differenze rispetto a un'altra versione dei dati e delle meccaniche di Pokémon Showdown. I format in [`battle-core/config/formats.ts`](battle-core/config/formats.ts) indicano la mod con `mod: 'nome'`; `Dex.forFormat()` la carica. Il campo `inherit` di `scripts.ts` indica la mod madre. Se manca, il Dex usa `base`.

`base` contiene i dati correnti in `battle-core/data/`. `gen9` è un alias di `base`: per questo **non esiste una cartella `gen9/`**. Ogni mod conserva solo i dati o le funzioni che cambia; il resto viene dalla madre. Anche un singolo elemento di una tabella può contenere `inherit: true` per sovrascrivere solo alcuni campi. La logica è in [`battle-core/sim/dex.ts`](battle-core/sim/dex.ts).

```text
gen1 → gen2 → gen3 → gen4 → gen5 → gen6 → gen7 → gen8 → base (= gen9)
```

Per esempio, `gen4ou` seleziona `gen4`. Il Dex applica prima i dati della base e delle mod madri, poi le differenze di `gen4`. `gen9ou` usa direttamente `base`. Le cartelle `gen1`–`gen8` sono quindi tutte necessarie se si vogliono conservare le meccaniche di Gen 1–9, anche quando si usa soltanto un format OU per generazione.

## Catena delle generazioni principali

| Cartella | Serve a | Eredita da | Format che la richiamano, esempi |
| --- | --- | --- | --- |
| `gen1` | Meccaniche e dati della prima generazione: Special unico, critici legati alla Speed e altre regole RBY. | `gen2` | `gen1ou`, Ubers, UU, LC, Custom Game |
| `gen2` | Meccaniche e dati GSC, compresi strumenti, mosse e regole di Gen 2. | `gen3` | `gen2ou`, Ubers, UU, Custom Game |
| `gen3` | Meccaniche e dati ADV; categorie fisica/speciale determinate dal tipo della mossa. | `gen4` | `gen3ou`, Doubles OU, Ubers, Draft |
| `gen4` | Meccaniche e dati DPP, incluso lo split fisico/speciale delle mosse. | `gen5` | `gen4ou`, Doubles OU, VGC 2010 |
| `gen5` | Meccaniche e dati BW/B2W2. | `gen6` | `gen5ou`, Doubles OU, VGC 2013 |
| `gen6` | Meccaniche e dati XY/ORAS, inclusi tipo Folletto e Megaevoluzione. | `gen7` | `gen6ou`, Doubles OU, VGC 2015/2016 |
| `gen7` | Meccaniche e dati SM/USUM, incluse le mosse Z. | `gen8` | `gen7ou`, Doubles OU, VGC 2018/2019 |
| `gen8` | Meccaniche e dati SwSh; è il primo livello sotto la base Gen 9. | `base` implicita | `gen8ou`, National Dex, VGC 2021/2022 |

## Varianti di giochi e periodi

Queste mod partono da una generazione principale e restringono o modificano dati, disponibilità o regole per una specifica uscita. I nomi dei format nella quarta colonna sono esempi effettivamente presenti nello snapshot.

| Cartella | Serve a | Eredita da | Collegamento ai format |
| --- | --- | --- | --- |
| `gen1jpn` | Differenze delle prime versioni giapponesi di Gen 1. | `gen1` | Japanese OU, NC 1997 |
| `gen1stadium` | Regole e correzioni proprie di Pokémon Stadium. | `gen1` | Stadium OU, Stadium Rentals |
| `gen2stadium2` | Regole di Pokémon Stadium 2 e Nintendo Cup 2000. | `gen2` | Stadium OU, NC 2000 |
| `gen3colosseum` | Regole dei format Orre Colosseum e Hoenn Stadium. | `gen3` | Orre Colosseum, Hoenn Stadium |
| `gen3frlg` | Disponibilità di specie, mosse e strumenti dell'era FireRed/LeafGreen. | `gen3` | FRLG OU |
| `gen3rs` | Dati dell'era Ruby/Sapphire prima delle aggiunte successive. | `gen3` | ADV 200, ADV 200 Doubles |
| `gen4pt` | Dati dell'era Platinum. | `gen4` | Platinum OU, VGC 2009 |
| `gen5bw1` | Dati di Black/White prima di Black 2/White 2. | `gen5` | BW1 OU, VGC 2011/2012 |
| `gen6xy` | Dati di X/Y prima di ORAS. | `gen6` | VGC 2014 |
| `gen7letsgo` | Dati e regole di Let's Go Pikachu/Eevee. | `gen7` | Let's Go OU, Doubles OU |
| `gen7sm` | Dati di Sun/Moon prima di Ultra Sun/Ultra Moon. | `gen7` | VGC 2017 |
| `gen8bdsp` | Dati e regole di Brilliant Diamond/Shining Pearl. | `gen8` | BDSP OU, Ubers, Doubles OU |
| `gen8dlc1` | Snapshot di Gen 8 al primo DLC. | `gen8` | Gen 8 DLC 1 National Dex AG, VGC 2020 |
| `gen9dlc1` | Snapshot di Gen 9 al primo DLC; funge anche da livello di ereditarietà. | `gen9` = `base` | Nessun format diretto conservato; serve a `gen9predlc` |
| `gen9predlc` | Dati di Gen 9 precedenti al DLC, applicati sopra lo snapshot `gen9dlc1`. | `gen9dlc1` | VGC 2023 Reg C e Reg D |

## Format speciali di Gen 9

Quando la colonna «Eredita» dice `base`, la cartella non dichiara `inherit` e il Dex usa la base Gen 9. Le descrizioni provengono dai format conservati in `config/formats.ts` e dai rispettivi file della mod.

| Cartella | Serve a | Eredita da | Collegamento ai format |
| --- | --- | --- | --- |
| `biomechmons` | Permette di collocare mosse, abilità e strumenti negli slot normalmente riservati agli altri due tipi. | `base` implicita | Bio Mech Mons |
| `champions` | Dati e regole della famiglia di format Gen 9 Champions. | `base` implicita | Champions OU/UU, BSS, VGC Reg M-C, Draft |
| `championsregmb` | Variante regolamentare M-B dei dati Champions. | `champions` | Champions BSS/VGC Reg M-B, 4v4 Doubles UU |
| `fullpotential` | Calcola gli attacchi usando la statistica più alta del Pokémon, esclusi gli HP. | `base` implicita | Full Potential |
| `gen9deltamon` | Specie, mosse e abilità del format Deltamon ispirato a Deltarune/Undertale. | `base` implicita | Deltamon |
| `linked` | Usa insieme le prime due mosse del set. | `base` implicita | Linked |
| `mixandmega` | Estende le trasformazioni tramite Megapietre e altri strumenti a Pokémon che normalmente non possono usarli. | `base` implicita | Mix and Mega, LC, Doubles |
| `partnersincrime` | In doppio, gli alleati attivi condividono abilità e mosse. | `gen9` = `base` | Partners in Crime |
| `passiveaggressive` | Assegna un tipo ai danni passivi in base al tipo primario della fonte. | `base` implicita | Passive Aggressive |
| `pokebilities` | Attiva contemporaneamente tutte le abilità rilasciate di una specie. | `base` implicita | Pokebilities, Pokebilities AAA |
| `pokemoves` | Trasforma il nome di un Pokémon inserito in uno slot mossa in una mossa utilizzabile. | `base` implicita | Pokemoves |
| `sharedpower` | Condivide l'abilità di un Pokémon entrato in campo con il resto della squadra. | `base` implicita | Shared Power |
| `sharingiscaring` | Condivide gli strumenti fra i Pokémon della stessa squadra. | `gen9` = `base` | Sharing is Caring |
| `teraoverride` | Sostituisce il tipo previsto da certe mosse, abilità e strumenti con il Tera Type dell'utilizzatore. | `base` implicita | Tera Override |
| `thecardgame` | Usa una tabella dei tipi semplificata ispirata al Pokémon Trading Card Game. | `gen9` = `base` | The Card Game |
| `trademarked` | Scambia l'abilità del Pokémon con una mossa di stato che si attiva all'ingresso in campo. | `gen9` = `base` | Trademarked |

## Come capire i collegamenti di una cartella

1. Cerca `mod: 'nomecartella'` in `battle-core/config/formats.ts` per trovare i format che la selezionano.
2. Apri `battle-core/data/mods/nomecartella/scripts.ts`: `inherit` è la mod madre; se manca, la madre è `base`.
3. Gli altri file della cartella, come `moves.ts`, `pokedex.ts`, `learnsets.ts`, `rulesets.ts` o `typechart.ts`, sovrascrivono solo le rispettive tabelle ereditate.
4. `Dex.forFormat('gen4ou')` permette di ispezionare il Dex risultante; `Dex.formats.all()` elenca i format disponibili.

Se servono **solo** i format `gen1ou`–`gen9ou`, le otto cartelle della catena principale e i dati base sono il nucleo. Le varianti e i format speciali si possono valutare separatamente, controllando prima che nessun format che si vuole mantenere li selezioni o li usi come genitore.
