const statKeys = ['hp', 'atk', 'def', 'spa', 'spd', 'spe'];
const statLabels = { hp: 'PS', atk: 'Att', def: 'Dif', spa: 'Att Sp', spd: 'Dif Sp', spe: 'Vel' };
const state = { gen: 9, catalog: null, player: null, opponents: [], session: null, learnsets: new Map() };
let loadVersion = 0;
let choosing = false;

const $ = selector => document.querySelector(selector);
const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[char]);
const options = (values, chosen, empty = '') => `${empty ? `<option value="">${escapeHtml(empty)}</option>` : ''}${values.map(value => `<option value="${escapeHtml(value)}" ${value === chosen ? 'selected' : ''}>${escapeHtml(value)}</option>`).join('')}`;

function notify(message, error = false) {
  const box = $('#notice');
  box.textContent = message;
  box.classList.toggle('error', error);
  box.hidden = !message;
}

async function api(url, init) {
  const response = await fetch(url, init);
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Richiesta non riuscita.');
  return data;
}

function speciesById(id) { return state.catalog.species.find(mon => mon.id === id); }
function speciesByName(name) {
  return state.catalog.species.find(mon => mon.name.toLowerCase() === name.trim().toLowerCase());
}
function emptySet(preferred) {
  const species = state.catalog.species.find(mon => mon.name === preferred) || state.catalog.species[0];
  const iv = state.gen <= 2 ? 30 : 31;
  return {
    species: species.id, name: species.name, level: 50,
    item: '', ability: state.gen >= 3 ? species.abilities[0] || '' : '',
    nature: state.gen >= 3 ? 'Hardy' : '', gender: state.gen >= 2 ? species.gender || '' : '',
    moves: [preferred === 'Pikachu' ? 'Quick Attack' : 'Tackle', '', '', ''],
    evs: Object.fromEntries(statKeys.map(stat => [stat, 0])),
    ivs: Object.fromEntries(statKeys.map(stat => [stat, iv])),
    happiness: 255, shiny: false, dynamaxLevel: 10, gigantamax: false, teraType: '',
  };
}

function adaptSet(set, preferred) {
  const species = speciesById(set?.species);
  if (!species) return emptySet(preferred);
  const moves = set.moves.filter(move => state.catalog.moves.some(option => option.name === move)).slice(0, 4);
  return {
    ...set,
    ability: state.gen >= 3 ? (species.abilities.includes(set.ability) ? set.ability : (species.abilities[0] || '')) : '',
    item: state.gen >= 2 && state.catalog.items.some(item => item.name === set.item) ? set.item : '',
    nature: state.gen >= 3 ? (state.catalog.natures.includes(set.nature) ? set.nature : 'Hardy') : '',
    gender: state.gen >= 2 ? (species.gender || set.gender) : '',
    shiny: state.gen >= 2 && set.shiny,
    happiness: state.gen >= 2 ? set.happiness : 255,
    gigantamax: state.gen === 8 && species.canGigantamax ? set.gigantamax : false,
    moves: [...moves, '', '', '', ''].slice(0, 4),
    ivs: Object.fromEntries(statKeys.map(stat => [stat, state.gen <= 2 ? Math.min(30, set.ivs[stat] - set.ivs[stat] % 2) : set.ivs[stat]])),
  };
}

function field(label, control, wide = false) {
  return `<label class="field ${wide ? 'field-wide' : ''}"><span>${label}</span>${control}</label>`;
}

function renderCard(set, side, index) {
  const species = speciesById(set.species);
  const key = `${side}-${index}`;
  const attr = `data-side="${side}" data-index="${index}"`;
  const input = (name, value, extra = '') => `<input ${attr} data-field="${name}" value="${escapeHtml(value)}" ${extra}>`;
  const select = (name, values, value, empty = '') => `<select ${attr} data-field="${name}">${options(values, value, empty)}</select>`;
  const ability = state.gen >= 3 ? field('Abilità', select('ability', [...new Set(species.abilities)], set.ability)) : '';
  const item = state.gen >= 2 ? field('Strumento', input('item', set.item, 'list="item-list" placeholder="Nessuno"')) : '';
  const nature = state.gen >= 3 ? field('Natura', select('nature', state.catalog.natures, set.nature)) : '';
  const genderChoices = species.gender ? [species.gender] : ['', 'M', 'F'];
  const gender = state.gen >= 2 ? field('Sesso', select('gender', genderChoices, set.gender)) : '';
  const basics = [
    field('Specie / forma', input('species', species.name, 'list="species-list" autocomplete="off"'), true),
    field('Soprannome', input('name', set.name, 'maxlength="18"')),
    field('Livello', input('level', set.level, 'type="number" min="1" max="100"')),
    ability, item, nature, gender,
  ].join('');
  const baseStats = statKeys.map(stat => `<span>${statLabels[stat]} <b>${species.baseStats[stat]}</b></span>`).join('');
  const moveInputs = set.moves.map((move, moveIndex) => field(`Mossa ${moveIndex + 1}`,
    `<input ${attr} data-field="move" data-move="${moveIndex}" list="moves-${key}" value="${escapeHtml(move)}" autocomplete="off" placeholder="${moveIndex ? 'Opzionale' : 'Obbligatoria'}">`)).join('');
  const statInput = kind => `<div class="stat-grid">${statKeys.map(stat => field(statLabels[stat],
    `<input ${attr} data-field="${kind}" data-stat="${stat}" type="number" min="0" max="${kind === 'iv' ? state.gen <= 2 ? 30 : 31 : 255}" step="${kind === 'iv' && state.gen <= 2 ? 2 : 1}" value="${set[kind === 'iv' ? 'ivs' : 'evs'][stat]}">`)).join('')}</div>`;
  const extras = [
    state.gen >= 2 ? field('Amicizia', input('happiness', set.happiness, 'type="number" min="0" max="255"')) : '',
    state.gen >= 2 ? `<label class="check-field"><input ${attr} data-field="shiny" type="checkbox" ${set.shiny ? 'checked' : ''}> Cromatico</label>` : '',
    state.gen === 8 ? field('Livello Dynamax', input('dynamaxLevel', set.dynamaxLevel, 'type="number" min="0" max="10"')) : '',
    state.gen === 8 && species.canGigantamax ? `<label class="check-field"><input ${attr} data-field="gigantamax" type="checkbox" ${set.gigantamax ? 'checked' : ''}> Gigamax</label>` : '',
    state.gen === 9 ? field('Tipo Tera', select('teraType', state.catalog.types, set.teraType, 'Nessuno')) : '',
  ].join('');
  return `<article class="mon-card">
    <div class="card-heading"><h3>${side === 'player' ? 'Pokémon del giocatore' : `Avversario ${index + 1}`}</h3>${side === 'opponent' ? `<button class="remove-button" type="button" data-remove="${index}" ${state.opponents.length === 1 ? 'disabled' : ''}>Rimuovi</button>` : ''}</div>
    <div class="form-grid">${basics}</div>
    <p class="subheading">Statistiche base · Mod Gen ${state.gen}</p><div class="stat-chips">${baseStats}</div>
    <p class="subheading">Mosse</p><div class="move-grid">${moveInputs}</div><datalist id="moves-${key}"></datalist>
    <p class="move-hint" data-learnset="${key}">Caricamento mosse apprese…</p>
    <p class="subheading">EV · 0–255 per statistica</p>${statInput('ev')}
    <p class="subheading">${state.gen <= 2 ? 'DV · valori pari 0–30' : 'IV · 0–31'}</p>${statInput('iv')}
    <div class="form-grid extra-grid">${extras}</div>
  </article>`;
}

async function loadLearnset(side, index) {
  const set = side === 'player' ? state.player : state.opponents[index];
  const gen = state.gen;
  const species = set.species;
  const key = `${gen}:${species}`;
  try {
    if (!state.learnsets.has(key)) {
      const result = await api(`/api/learnset?gen=${gen}&species=${encodeURIComponent(species)}`);
      state.learnsets.set(key, result.moves);
    }
    if (state.gen !== gen || (side === 'player' ? state.player : state.opponents[index])?.species !== species) return;
    const cardKey = `${side}-${index}`;
    const list = document.getElementById(`moves-${cardKey}`);
    const hint = document.querySelector(`[data-learnset="${cardKey}"]`);
    if (list) list.innerHTML = state.learnsets.get(key).map(move => `<option value="${escapeHtml(move)}"></option>`).join('');
    if (hint) hint.textContent = `${state.learnsets.get(key).length} mosse nel pool della specie. Puoi anche digitare un’altra mossa della generazione per un test senza regole competitive.`;
  } catch (error) {
    const hint = document.querySelector(`[data-learnset="${side}-${index}"]`);
    if (hint) hint.textContent = error.message;
  }
}

function renderCards() {
  $('#player-card').innerHTML = renderCard(state.player, 'player', 0);
  $('#opponent-cards').innerHTML = state.opponents.map((set, index) => renderCard(set, 'opponent', index)).join('');
  $('#opponent-count').textContent = `${state.opponents.length} / 6 Pokémon`;
  $('#add-opponent').disabled = state.opponents.length >= 6;
  loadLearnset('player', 0);
  state.opponents.forEach((_, index) => loadLearnset('opponent', index));
}

function renderMod() {
  $('#mod-switch').innerHTML = Array.from({ length: 9 }, (_, index) => index + 1)
    .map(gen => `<button class="mod-button" type="button" data-gen="${gen}" aria-pressed="${gen === state.gen}">Gen ${gen}</button>`).join('');
  $('#mod-badge').textContent = `Mod Gen ${state.gen}`;
  $('#mod-note').textContent = `${state.catalog.species.length} specie e forme · ${state.catalog.moves.length} mosse · ${state.catalog.items.length} strumenti. ${state.gen <= 2 ? 'Gen 1–2: niente abilità o nature; i DV sono pari.' : state.gen === 8 ? 'Gen 8: Dynamax e Gigamax disponibili.' : state.gen === 9 ? 'Gen 9: tipo Tera disponibile.' : 'Abilità e nature disponibili.'}`;
  $('#species-list').innerHTML = state.catalog.species.map(mon => `<option value="${escapeHtml(mon.name)}"></option>`).join('');
  $('#item-list').innerHTML = state.catalog.items.map(item => `<option value="${escapeHtml(item.name)}"></option>`).join('');
}

async function switchGen(gen) {
  if (gen === state.gen && state.catalog) { ++loadVersion; return; }
  const version = ++loadVersion;
  notify('Caricamento della mod…');
  try {
    const previousPlayer = state.player;
    const previousOpponents = state.opponents;
    const catalog = await api(`/api/catalog?gen=${gen}`);
    if (version !== loadVersion) return;
    state.gen = gen;
    state.catalog = catalog;
    state.player = previousPlayer ? adaptSet(previousPlayer, 'Pikachu') : emptySet('Pikachu');
    state.opponents = previousOpponents?.length ? previousOpponents.map(set => adaptSet(set, 'Bulbasaur')) : [emptySet('Bulbasaur')];
    state.session = null;
    $('#battle-panel').hidden = true;
    $('#team-json').hidden = true;
    renderMod();
    renderCards();
    notify('');
  } catch (error) { notify(error.message, true); }
}

function updateField(event) {
  const target = event.target;
  if (!target.dataset.field) return;
  const side = target.dataset.side;
  const index = Number(target.dataset.index);
  const set = side === 'player' ? state.player : state.opponents[index];
  if (!set) return;
  const name = target.dataset.field;
  if (name === 'species') {
    if (event.type !== 'change') return;
    const species = speciesByName(target.value);
    if (!species) { notify('Scegli una specie presente nell’elenco della generazione.', true); target.value = speciesById(set.species).name; return; }
    set.species = species.id;
    set.name = species.name;
    set.ability = state.gen >= 3 ? species.abilities[0] || '' : '';
    set.gender = species.gender || '';
    set.gigantamax = false;
    set.moves = ['', '', '', ''];
    renderCards();
    notify('');
    return;
  }
  if (name === 'move') set.moves[Number(target.dataset.move)] = target.value.trim();
  else if (name === 'ev' || name === 'iv') set[name === 'ev' ? 'evs' : 'ivs'][target.dataset.stat] = Number(target.value);
  else if (target.type === 'checkbox') set[name] = target.checked;
  else if (target.type === 'number') set[name] = Number(target.value);
  else set[name] = target.value;
}

function payloadSet(set) {
  const { dynamaxLevel, gigantamax, teraType, ...common } = set;
  return {
    ...common,
    ...(state.gen === 8 ? { dynamaxLevel, gigantamax } : {}),
    ...(state.gen === 9 ? { teraType } : {}),
  };
}
function payload() { return { gen: state.gen, player: payloadSet(state.player), opponents: state.opponents.map(payloadSet) }; }

function sideHtml(side, label) {
  const mon = side.active;
  const hp = mon ? Math.max(0, Math.min(100, 100 * mon.hp / (mon.maxhp || 1))) : 0;
  return `<div class="battle-side"><strong>${label}: ${escapeHtml(mon?.name || '—')}</strong>
    <span>${mon ? `${mon.hp} / ${mon.maxhp} PS${mon.status ? ` · ${escapeHtml(mon.status)}` : ''}` : 'Nessun Pokémon attivo'}</span>
    <div class="hp-track"><i style="width:${hp}%"></i></div>
    <small>${side.team.map(poke => `${poke.active ? '●' : poke.fainted ? '×' : '○'} ${escapeHtml(poke.name)}`).join(' · ')}</small></div>`;
}

function renderBattle(snapshot, append = false) {
  state.session = snapshot.id;
  $('#battle-panel').hidden = false;
  $('#turn-badge').textContent = snapshot.ended ? 'Conclusa' : `Turno ${snapshot.turn}`;
  $('#battle-status').innerHTML = sideHtml(snapshot.p1, 'Giocatore') + sideHtml(snapshot.p2, 'Avversario');
  const actions = $('#battle-actions');
  if (snapshot.ended) {
    actions.innerHTML = `<strong>Vincitore: ${escapeHtml(snapshot.winner || 'pareggio')}</strong>`;
  } else if (snapshot.p1.request.type === 'move') {
    const special = [
      '<option value="">Mossa normale</option>',
      snapshot.p1.request.canMegaEvo ? '<option value="mega">Megaevoluzione</option>' : '',
      snapshot.p1.request.canMegaEvoX ? '<option value="megax">Megaevoluzione X</option>' : '',
      snapshot.p1.request.canMegaEvoY ? '<option value="megay">Megaevoluzione Y</option>' : '',
      snapshot.p1.request.canUltraBurst ? '<option value="ultra">Ultracristallo</option>' : '',
      snapshot.p1.request.canZMove ? '<option value="zmove">Mossa Z</option>' : '',
      snapshot.p1.request.canDynamax ? '<option value="dynamax">Dynamax</option>' : '',
      snapshot.p1.request.canTerastallize ? '<option value="terastallize">Teracristal</option>' : '',
    ].join('');
    actions.innerHTML = `<label class="field"><span>Opzione speciale</span><select id="special-choice">${special}</select></label>` +
      snapshot.p1.request.moves.map((move, index) => `<button class="button button-secondary" type="button" data-choice="move ${index + 1}" ${move.disabled || move.pp === 0 ? 'disabled' : ''}>${escapeHtml(move.move)}${move.pp === undefined ? '' : ` · ${move.pp} PP`}</button>`).join('');
  } else if (snapshot.p1.request.type === 'switch') {
    actions.innerHTML = snapshot.p1.team.filter(mon => !mon.fainted && !mon.active)
      .map(mon => `<button class="button button-secondary" type="button" data-choice="switch ${mon.index}">Entra ${escapeHtml(mon.name)}</button>`).join('');
  } else {
    actions.textContent = 'Attendi la prossima richiesta del motore.';
  }
  const log = $('#battle-log');
  if (!append) log.innerHTML = '';
  for (const event of snapshot.events) {
    const li = document.createElement('li');
    li.textContent = event.text || event.line;
    log.append(li);
  }
  log.scrollTop = log.scrollHeight;
}

async function startBattle() {
  const button = $('#start-battle');
  button.disabled = true;
  notify('Avvio della battaglia…');
  try {
    const snapshot = await api('/api/battles', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(payload()) });
    renderBattle(snapshot);
    notify('Battaglia avviata. Seleziona una mossa del giocatore.');
    $('#battle-panel').scrollIntoView({ behavior: 'smooth', block: 'start' });
  } catch (error) { notify(error.message, true); }
  finally { button.disabled = false; }
}

async function choose(choice) {
  if (choosing) return;
  choosing = true;
  try {
    notify('Esecuzione del turno…');
    const special = $('#special-choice')?.value || '';
    const fullChoice = choice.startsWith('move') && special ? `${choice} ${special}` : choice;
    const snapshot = await api(`/api/battles/${state.session}/choice`, {
      method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ choice: fullChoice }),
    });
    renderBattle(snapshot, true);
    notify(snapshot.ended ? `Battaglia conclusa: ${snapshot.winner || 'pareggio'}.` : '');
  } catch (error) { notify(error.message, true); }
  finally { choosing = false; }
}

$('#mod-switch').addEventListener('click', event => {
  const button = event.target.closest('[data-gen]');
  if (button) switchGen(Number(button.dataset.gen));
});
for (const host of [$('#player-card'), $('#opponent-cards')]) {
  host.addEventListener('input', updateField);
  host.addEventListener('change', updateField);
}
$('#opponent-cards').addEventListener('click', event => {
  const button = event.target.closest('[data-remove]');
  if (!button || state.opponents.length <= 1) return;
  state.opponents.splice(Number(button.dataset.remove), 1);
  renderCards();
});
$('#add-opponent').addEventListener('click', () => {
  if (state.opponents.length >= 6) return;
  state.opponents.push(emptySet('Bulbasaur'));
  renderCards();
});
$('#show-json').addEventListener('click', () => {
  const pre = $('#team-json');
  pre.textContent = JSON.stringify(payload(), null, 2);
  pre.hidden = !pre.hidden;
});
$('#start-battle').addEventListener('click', startBattle);
$('#battle-actions').addEventListener('click', event => {
  const button = event.target.closest('[data-choice]');
  if (button) choose(button.dataset.choice);
});

switchGen(9);
