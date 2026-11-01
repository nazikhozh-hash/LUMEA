/* ============ НАСТРОЙКИ САЙТА ============ */
const SITE = {
  name: 'LUMÉA', tagline: 'магазин корейской косметики',
  heroLabel: 'МАГАЗИН КОРЕЙСКОЙ КОСМЕТИКИ · С 2026 ГОДА',
  heroText: 'Корейский уход Anua, Torriden, Medicube, Skin1004 и других брендов: проверенные формулы с доставкой до двери.',
  heroImg: 'img/banner5.png',            
  bestId: 0,              
  aboutTitle: 'Корейская косметика, которой доверяют',
  aboutText: 'LUMÉA — магазин ухода за кожей из Кореи. Мы работаем только с оригинальной продукцией, быстро доставляем и помогаем подобрать средства под ваш тип кожи.',
  phone: '+7 000 000 00 00', address: 'г. Атырау',
  promo: { LUMEA10: 10 },   
  freeFrom: 30000
};
/* ============ БРЕНДЫ (id, название, цвет плитки) ============ */
const BRANDS = [{ id: 'anua', n: 'Anua', c: '#8fa58a' }, 
                { id: 'torriden', n: 'Torriden', c: '#3f5b6b' }, 
                { id: 'ceuracle', n: 'Dr.Ceuracle', c: '#7a8f5a' }, 
                { id: 'roundlab', n: 'Round Lab', c: '#a8845c' }, 
                { id: 'medicube', n: 'Medicube', c: '#b45a6a' }, 
                { id: 'celimax', n: 'Celimax', c: '#d08a4e' }, 
                { id: 'axisy', n: 'Axis-Y', c: '#5f5a7a' }, 
                { id: 'skin1004', n: 'Skin1004', c: '#4f8a78' }, 
                { id: 'althea', n: 'Dr.Althea', c: '#9a5a52' }, 
                { id: 'skinlab', n: 'Skin&Lab', c: '#6c7c8c' }];
const CATS = [['all', 'Все товары'], ['toner', 'Тонеры'], ['cream', 'Кремы'], ['serum', 'Сыворотки'], ['spf', 'SPF'], ['cleanser', 'Пенки / умывашки']];
/* ============ ТОВАРЫ ============*/
const CATD = { toner: ['Тонер для лица', 'Бетке арналған тонер'], cream: ['Крем для лица', 'Бетке арналған крем'], serum: ['Сыворотка для лица', 'Бетке арналған сарысу'], spf: ['Солнцезащитный крем для лица', 'Бетке арналған күннен қорғайтын крем'], cleanser: ['Пенка для умывания', 'Жууға арналған көбік'], mask: ['Ночная маска для лица', 'Бетке арналған түнгі маска'] };
const EFF = { sooth: ['успокаивает кожу', 'теріні тыныштандырады'], hydr: ['увлажняет', 'ылғалдандырады'], bright: ['выравнивает тон', 'тонды теңестіреді'], pores: ['ухаживает за порами', 'тері тесіктеріне күтім жасайды'], barrier: ['укрепляет барьер кожи', 'тері тосқауылын нығайтады'], lift: ['повышает упругость', 'серпімділікті арттырады'], clean: ['мягко очищает', 'жұмсақ тазалайды'], acne: ['помогает при высыпаниях', 'безеуге қарсы көмектеседі'], exfol: ['мягко отшелушивает', 'жұмсақ пилингтейді'], spf: ['защищает от солнца (SPF 50)', 'күннен қорғайды (SPF 50)'] };
/* Ключевые компоненты — по названию продукта и описанию бренда. Полный состав (INCI) можно вписать в 11-е поле строки товара. */
const COMP = { heart: ['Экстракт хауттюйнии (Heartleaf)', 'Хауттюйния сығындысы (Heartleaf)'], peach: ['Экстракт персика', 'Шабдалы сығындысы'], niac: ['Ниацинамид', 'Ниацинамид'], rice: ['Рисовая вода (рисовые отруби)', 'Күріш суы (күріш кебегі)'], cer: ['Церамид NP', 'Церамид NP'], hyal: ['Гиалуроновая кислота', 'Гиалурон қышқылы'], pan: ['Пантенол', 'Пантенол'], betaine: ['Бетаин', 'Бетаин'], pdrn: ['PDRN (полинуклеотиды)', 'PDRN (полинуклеотидтер)'], barrier: ['Компоненты для укрепления барьера кожи', 'Тері тосқауылын нығайтатын компоненттер'], sea: ['Глубинная морская вода', 'Терең теңіз суы'], aze10: ['Азелаиновая кислота 10%', 'Азелаин қышқылы 10%'], aze: ['Азелаиновая кислота', 'Азелаин қышқылы'], glyc: ['Гликолевая кислота', 'Гликоль қышқылы'], vitc: ['Витамин C', 'C дәрумені'], vitc63: ['Витамин C (63%)', 'C дәрумені (63%)'], cica: ['Центелла азиатская', 'Азиялық центелла'], txa: ['Транексамовая кислота', 'Транексам қышқылы'], collagen: ['Коллаген', 'Коллаген'], marine: ['Морские экстракты', 'Теңіз сығындылары'], pine: ['Экстракт сосны', 'Қарағай сығындысы'], birch: ['Берёзовый сок', 'Қайың шырыны'], probio: ['Пробиотики (Probio-Cica)', 'Пробиотиктер (Probio-Cica)'], noni: ['Экстракт нони', 'Нони сығындысы'], egf: ['EGF', 'EGF'], nad: ['NAD+', 'NAD+'], pept: ['Пептиды', 'Пептидтер'], sa: ['Салициловая кислота (BHA)', 'Салицил қышқылы (BHA)'], uv: ['УФ-фильтры (SPF 50)', 'УФ сүзгілері (SPF 50)'], tint: ['Тонирующие пигменты', 'Тонды пигменттер'] };
const P = [
  'anua|Heartleaf 77% Soothing Toner|9850|toner|250 мл||15|heart|sooth hydr|oily sens acne pore',
  'anua|Peach 77 Niacin Essence Toner|7600|toner|250 мл||20|peach niac|bright hydr|normal combo post hydr',
  'anua|Rice 70 Glow Milky Toner|8100|toner|250 мл|n|0|rice niac cer hyal pan betaine|bright hydr barrier|dry sens normal post hydr',
  'axisy|PDRN Toner|6000|toner|270 мл||0|pdrn|hydr barrier|dry sens aging hydr',
  'celimax|Dual Barrier Toner|6500|toner|150 мл||0|barrier|barrier hydr|dry sens hydr',
  'medicube|PDRN Pink Niacinamide Milky Toner|6400|toner|150 мл|n|0|pdrn niac|hydr bright|dry normal aging post hydr',
  'medicube|Azelaic Acid Niacinamide Clear Toner|8200|toner|250 мл|n|0|aze niac|sooth pores|oily acne post pore sens',
  'roundlab|1025 Dokdo Toner|4200|toner|200 мл||15|sea|clean hydr|oily combo sens pore',
  'skinlab|Glycolic Acid X Vitamin C Calming Toner|6200|toner|180 мл||0|glyc vitc|bright exfol sooth|oily combo post pore',
  'skin1004|Madagascar Centella Toning Toner|4950|toner|210 мл||20|cica|sooth hydr|sens oily combo acne',
  'skin1004|Tone Brightening Boosting Toner|6000|toner|210 мл||0|cica|bright sooth|post normal combo oily',
  'anua|Peach 77 Niacin Enriched Cream|11700|cream|50 мл||10|peach niac|bright hydr|normal combo dry post hydr',
  'anua|Heartleaf 70% Intense Calming Cream|10000|cream|50 мл||0|heart|sooth hydr|sens oily combo acne',
  'axisy|TXA 2.5% Intensive Brightening Cream|5000|cream|50 мл||10|txa|bright|post combo normal',
  'celimax|Dual Barrier Skin Wearable Cream|7000|cream|50 мл||15|barrier|barrier hydr|dry sens normal hydr',
  'celimax|Pore + Dark Spot Brightening Cream|6300|cream|30 мл||0||bright pores|oily combo post pore',
  'althea|147 Barrier Cream|7500|cream|50 мл||20|barrier|barrier hydr|dry sens normal',
  'althea|345 Relief Cream|7500|cream|50 мл||0||sooth barrier|sens dry normal',
  'althea|Aqua Marine Watery Cream|4400|cream|50 мл||25|marine|hydr|oily combo normal hydr',
  'medicube|Collagen Jelly Cream|8200|cream|50 мл||0|collagen|hydr lift|dry aging normal hydr',
  'medicube|Hyaluronic Moisturizing Capsule Cream|8500|cream|55 г||0|hyal|hydr|dry normal hydr',
  'roundlab|Pine Calming Cica Cream|5000|cream|50 мл||15|pine cica|sooth|sens oily combo acne',
  'roundlab|Vita Niacinamide Dark Spot Cream|6500|cream|50 мл||0|niac|bright|post combo normal',
  'roundlab|Birch Juice Moisturizing Cream|7800|cream|80 мл||10|birch|hydr sooth|dry normal sens hydr',
  'skin1004|Probio-Cica Enrich Cream|7800|cream|50 мл||0|probio cica|sooth barrier|sens dry normal',
  'skin1004|Madagascar Centella Soothing Cream|6200|cream|75 мл||0|cica|sooth hydr|sens oily combo acne post',
  'torriden|Dive-In Soothing Cream|6300|cream|100 мл||15|hyal|hydr sooth|dry sens normal hydr',
  'anua|Zero-cast Moisturizing Finish Sunscreen SPF50 PA++++|8000|spf|50 мл||0|uv|spf hydr|dry normal combo',
  'celimax|Dual Barrier Watery Sun SPF50|4800|spf|40 мл||0|uv|spf hydr|sens dry normal',
  'celimax|Pore Dark Spot Brightening Care Sun SPF50|4800|spf|50 мл||0|uv|spf bright|oily combo post pore',
  'ceuracle|SPF 50 PA++++ Sunscreen|7300|spf|50 мл||0|uv|spf|oily sens acne',
  'roundlab|Birch Juice Moisturizing Sunscreen SPF50|4800|spf|50 мл||10|uv birch|spf hydr|dry normal sens hydr',
  'skinlab|Porebarrier Tinted Sunscreen SPF50+ PA++++|7000|spf|50 мл||0|uv tint|spf pores|oily combo pore',
  'skin1004|Hyalu-Cica Water-Fit Sun SPF50|5000|spf|50 мл||0|uv hyal cica|spf hydr|sens combo oily normal hydr',
  'torriden|Dive-In Mild Sun SPF50|6000|spf|60 мл||15|uv hyal|spf hydr|sens dry normal hydr',
  'anua|Azelaic Acid 10 Hyaluron Serum|8000|serum|30 мл|n|0|aze10 hyal niac|sooth acne|sens oily acne post',
  'anua|PDRN Hyaluronic Acid Capsule 100 Serum|9400|serum|30 мл|n|0|pdrn hyal|hydr barrier|dry sens aging hydr',
  'anua|10% Niacinamide + 4% TXA Serum|8000|serum|30 мл||0|niac txa|bright pores|post oily combo pore',
  'celimax|Dual Barrier Boosting Serum|6100|serum|30 мл||20|barrier|barrier hydr|dry sens hydr',
  'celimax|Noni Ampoule Calming+Radiance|8000|serum|50 мл||0|noni|sooth bright|sens normal dry hydr',
  'althea|Aqua Marine Deep Serum|8000|serum|30 мл||25|marine|hydr|oily combo normal hydr',
  'althea|Vitamin C Boosting Serum 63%|6800|serum|30 мл||0|vitc63|bright|post normal combo',
  'medicube|PDRN Pink Peptide Serum|8500|serum|30 мл||0|pdrn pept|lift hydr|dry aging normal',
  'medicube|EGF NAD Firming Serum|7600|serum|30 мл|n|0|egf nad|lift|aging dry normal',
  'skinlab|Barrierderm Milky Serum|6300|serum|50 мл||0|barrier|barrier hydr|dry sens hydr',
  'skin1004|Madagascar Centella Hyalu-Cica First Ampoule|7300|serum|100 мл||15|cica hyal|sooth hydr|sens dry normal hydr',
  'skin1004|Madagascar Centella Hyalu-Cica Blue Serum|6350|serum|50 мл||0|cica hyal|sooth hydr|sens oily combo hydr',
  'skin1004|Madagascar Centella Probio-Cica Intensive Ampoule|7500|serum|95 мл|n|0|cica probio|sooth barrier|sens oily acne post',
  'skin1004|Madagascar Centella Poremizing Fresh Ampoule|7500|serum|100 мл||0|cica|pores clean|oily combo pore acne',
  'torriden|Dive-In Serum|7800|serum|50 мл||0|hyal|hydr|dry normal sens hydr',
  'anua|8 Hyaluronic Acid Hydrating Gentle Foaming Cleanser|5800|cleanser|150 мл||10|hyal|clean hydr|dry sens normal hydr',
  'anua|Heartleaf Quercetinol Pore Deep Cleansing Foam|4700|cleanser|150 мл||0|heart|clean pores|oily acne pore combo',
  'celimax|Dual Barrier Mild Gel Cleanser|5800|cleanser|200 мл||0|barrier|clean barrier|dry sens normal',
  'celimax|The Real Noni Acne Bubble Cleanser|5000|cleanser|155 мл||20|noni|clean acne|oily acne combo pore',
  'ceuracle|5 Alpha Control Clearing Foam|8200|cleanser|200 мл||0||clean pores|oily acne pore',
  'medicube|Zero Pore SA Clear Capsule Cleansing Foam|6500|cleanser|120 мл||0|sa|clean pores exfol|oily acne pore combo',
  'medicube|PDRN Pink Niacinamide Whip Cleanser|7500|cleanser|120 мл|n|0|pdrn niac|clean hydr|dry normal sens post',
  'roundlab|1025 Dokdo Cleanser|3600|cleanser|150 мл||25|sea|clean|normal combo sens oily',
  'skin1004|Madagascar Centella Ampoule Foam|4500|cleanser|125 мл||0|cica|clean sooth|sens oily combo acne',
  'skin1004|Madagascar Centella Hyalu-Cica Sleeping Pack|6000|cream|100 мл|n|0|cica hyal|sooth hydr|sens dry normal hydr'
].map((l, i) => { const r = l.split('|'), e = r[8].split(' '), ck = /Sleeping Pack/.test(r[1]) ? 'mask' : r[3], d = +r[6] || 0, pr = +r[2]; return { id: i, brand: r[0], name: r[1], price: pr, cat: r[3], vol: r[4], isNew: r[5] === 'n', disc: d, old: d ? Math.round(pr / (1 - d / 100) / 100) * 100 : 0, comp: r[7] ? r[7].split(' ') : [], tags: r[9], inci: r[10] || '', img: r[11] || '', art: 'LM' + (100001 + i), desc: CATD[ck][0] + ': ' + e.map(x => EFF[x][0]).join(', '), dk: CATD[ck][1] + ': ' + e.map(x => EFF[x][1]).join(', ') } });
const DELIV = [{ id: 'courier', n: 'Курьерская доставка', d: '5 000 ₸, бесплатно от 30 000 ₸', p: 5000, free: true }, { id: 'post', n: 'Казпочта', d: '3–7 дней', p: 2000 }];
const PAY = [['card', 'Оплата картой онлайн'], ['sbp', 'Система быстрых платежей']];

/* ============ ЛОГИКА ============ */
const $ = s => document.querySelector(s), B = id => BRANDS.find(b => b.id === id), G = id => P[id];
const fmt = n => n.toLocaleString('ru-RU') + ' ₸';
const ls = { get: (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v } catch (e) { return d } }, set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)) } catch (e) { } } };
let cart = ls.get('lm_cart', []), favs = ls.get('lm_fav', []), promo = ls.get('lm_promo', ''), pq = 1, fo = false;
const S0 = () => ({ brand: [], cat: 'all', min: '', max: '', sort: 'rec', q: '', sale: false }); let S = S0();
const ic = { heart: '<svg viewBox="0 0 24 24"><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/></svg>', cart: '<svg viewBox="0 0 24 24"><path d="M5 8h14l-1 12H6zM9 8a3 3 0 0 1 6 0"/></svg>', arr: '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>', back: '<svg viewBox="0 0 24 24"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>' };
ic.copy = '<svg viewBox="0 0 24 24"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h8"/></svg>';
function save() { ls.set('lm_cart', cart); ls.set('lm_fav', favs); ls.set('lm_promo', promo); const n = cart.reduce((a, i) => a + i.q, 0);[['cc', n], ['cf', favs.length]].forEach(([id, v]) => { const e = $('#' + id); e.textContent = v; e.style.display = v ? 'grid' : 'none' }) }
function toast(t) { const e = $('#toast'); e.textContent = T(t); e.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(() => e.classList.remove('on'), 1600) }
const bt = p => `<div class="${p.cat}" style="display:contents"><div class="b" style="--bc:${B(p.brand).c}"><i>${B(p.brand).n.toUpperCase()}</i></div></div>`;
const pic = p => `<img src="${p.img || 'img/' + p.art + '.jpg'}" alt="${p.name}" data-id="${p.id}" onerror="pf(this)" loading="lazy">`;
window.pf = i => { const p = P[i.dataset.id]; if (!p.img && !i.dataset.t) { i.dataset.t = 1; i.src = 'img/' + p.art + '.png' } else i.outerHTML = bt(p) };
const srch = (p, q) => { const h = (p.name + ' ' + p.desc + ' ' + p.dk + ' ' + B(p.brand).n + ' ' + p.art + ' ' + p.comp.map(k => COMP[k].join(' ')).join(' ')).toLowerCase(), k = q.toLowerCase().trim(), z = x => x.replace(/[\s-]/g, ''); return h.includes(k) || z(h).includes(z(k)) };
const newP = () => { const n = P.filter(p => p.isNew), r = [], c = {}; n.forEach(p => { if (!c[p.cat]) { c[p.cat] = 1; r.push(p) } }); n.forEach(p => { if (r.length < 4 && !r.includes(p)) r.push(p) }); return r.slice(0, 4) };
const ingr = p => p.comp.length ? `<div class="mono">Ключевые компоненты</div><ul class="ingl">${p.comp.map(k => `<li>${COMP[k][0]}</li>`).join('')}</ul>${p.inci ? `<div class="mono">INCI</div><p>${p.inci}</p>` : ''}<p class="inn">Полный список ингредиентов (INCI) указан на упаковке: производитель может изменить формулу.</p>` : '<p class="inn">Состав уточняется — смотрите на упаковке товара.</p>';
function cp(v, ok) { const t = document.createElement('textarea'); t.value = v; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); ok() } catch (e) { } t.remove() }
const card = p => `<article class="card" data-go="#/product/${p.id}"><div class="pic ${p.cat}">${pic(p)}${p.isNew ? '<i class="tag">НОВИНКА</i>' : ''}${p.old ? `<i class="tag dk" style="left:auto;right:50px">−${p.disc}%</i>` : ''}<button class="hb ${favs.includes(p.id) ? 'on' : ''}" data-act="fav" data-id="${p.id}" aria-label="В избранное">${ic.heart}</button></div><div class="mono">${B(p.brand).n} · ${p.vol}</div><h3>${p.name}</h3><p>${p.desc}</p><div class="row"><b>${fmt(p.price)}</b>${p.old ? `<s>${fmt(p.old)}</s>` : ''}<button class="cb" data-act="add" data-id="${p.id}" aria-label="В корзину">${ic.cart}</button></div></article>`;
const back = (t = 'Назад') => `<div class="crumb"><button data-act="back">${ic.back} ${t}</button><span>·</span><a href="#/">На главную</a></div>`;
const tile = b => {
  const images = {
    anua: 'img/anua_banner.jpg',
    torriden: 'img/torriden_banner.jpg',
    ceuracle: 'img/dr.ceuracle_banner.jpg',
    roundlab: 'img/roundlab_banner.jpg'
  };

  return `<a class="bt"
    style="--bc:${b.c};
    background-image:linear-gradient(rgba(0,0,0,.12),rgba(0,0,0,.25)),url('${images[b.id] || ''}');
    background-size:cover;
    background-position:center;"
    href="#/catalog?brand=${b.id}">
      <span>${b.n}</span>
      <small>Перейти к бренду →</small>
  </a>`;
};
const head = (l, t, href, m) => `<div class="sh"><div><div class="mono">${l}</div><h2>${t}</h2></div>${href ? `<a class="more" href="${href}">${m} ${ic.arr}</a>` : ''}</div>`;

function home() {
  const b = G(SITE.bestId); return `<div class="w"><section class="hero"><div class="hbox" ${SITE.heroImg ? `style="background-image:url(${SITE.heroImg})"` : ''}><div><div class="big-logo">${SITE.name}</div><div class="mono" style="margin-top:10px">${SITE.heroLabel}</div></div><div><p>${SITE.heroText}</p><a class="btn" href="#/catalog?all">В каталог</a> <a class="btn lt" href="#/brands">Наши бренды</a></div>
<div class="best" data-go="#/product/${b.id}"><div class="pic ${b.cat}">${pic(b)}</div><div style="flex:1"><div class="mono">Бестселлер · ${B(b.brand).n}</div><b style="font-size:13px">${b.name}</b><div style="font-size:12px;margin-top:4px">${fmt(b.price)}</div></div><button class="cb" data-act="add" data-id="${b.id}">${ic.cart}</button></div></div></section>
<section class="sec">${head('Новое в каталоге', 'Новинки', '#/catalog?all', 'Весь каталог')}<div class="grid">${newP().map(card).join('')}</div></section>
<section class="sec">${head('Выгодные предложения', 'Акции', '#/catalog?sale=1', 'Все акции')}<div class="grid">${P.filter(p => p.old).sort((a, b) => b.disc - a.disc).slice(0, 4).map(card).join('')}</div></section>
<section class="sec">${head('Эксклюзивно у нас', 'Бренды', '#/brands', 'Все бренды')}<div class="bg4">${BRANDS.slice(0, 4).map(tile).join('')}</div></section>
<section class="sec" id="about"><div class="about"><div><div class="mono" style="color:#fffa">О нас</div><h2>${SITE.aboutTitle}</h2><p style="margin-top:14px">${SITE.aboutText}</p></div><div class="alogo">${SITE.name}</div></div></section></div>`
}
function about() { return `<div class="w">${back()}<h1>О нас</h1><div class="about sec"><div><h2>${SITE.aboutTitle}</h2></div><p>${SITE.aboutText}<br><br><b>Доставка и оплата:</b> курьер по городу, Казпочта. Оплата картой онлайн или через СБП. Бесплатная курьерская доставка от ${fmt(SITE.freeFrom)}.</p></div></div>` }
function brands() { return `<div class="w">${back()}<h1>Бренды</h1><div class="bg4 sec" style="margin-top:24px">${BRANDS.map(tile).join('')}</div></div>` }
function list() {
  let r = P.filter(p => (!S.brand.length || S.brand.includes(p.brand)) && (S.cat === 'all' || p.cat === S.cat) && (!S.min || p.price >= +S.min) && (!S.max || p.price <= +S.max) && (!S.sale || p.old) && (!S.q || srch(p, S.q)));
  if (S.sort === 'desc') r = [...r].sort((a, b) => b.price - a.price); if (S.sort === 'asc') r = [...r].sort((a, b) => a.price - b.price); return r
}
function catalog() {
  const r = list(), one = S.brand.length === 1 ? B(S.brand[0]).n : '';
  return `<div class="w">${back()}<div class="top"><div><div class="mono">${r.length} товаров</div><h1>${one || (S.sale ? 'Акции' : 'Каталог')}</h1></div><div><button class="btn lt fbtn" data-act="filt" style="border:1px solid var(--ln)">Фильтры</button> <select data-f="sort">${[['rec', 'Рекомендуемые'], ['desc', 'От дорогого к дешёвому'], ['asc', 'От дешёвого к дорогому']].map(o => `<option value="${o[0]}" ${S.sort === o[0] ? 'selected' : ''}>${o[1]}</option>`).join('')}</select></div></div>
<div class="cat"><aside class="fl ${fo ? 'open' : ''}"><h4>Бренд</h4>${BRANDS.map(b => `<label><input type="checkbox" data-f="brand" value="${b.id}" ${S.brand.includes(b.id) ? 'checked' : ''}>${b.n}</label>`).join('')}<h4>Категория</h4>${CATS.map(c => `<label><input type="radio" name="cat" data-f="cat" value="${c[0]}" ${S.cat === c[0] ? 'checked' : ''}>${c[1]}</label>`).join('')}<h4>Цена, ₸</h4><div class="pr"><input type="number" data-f="min" placeholder="от" value="${S.min}"><input type="number" data-f="max" placeholder="до" value="${S.max}"></div><button class="rs" data-act="reset">Сбросить фильтры</button></aside>
<div><input class="sq2" data-f="q" placeholder="Поиск по каталогу" value="${S.q.replace(/"/g, '&quot;')}">${r.length ? `<div class="g3">${r.map(card).join('')}</div>` : '<div class="empty">Ничего не найдено<br><button class="btn" data-act="reset">Сбросить фильтры</button></div>'}</div></div></div>`
}
function product(id) {
  const p = G(id); if (!p) return empty('Товар не найден'); const b = B(p.brand), rel = P.filter(x => x.id !== id && (x.brand === p.brand || x.cat === p.cat)).slice(0, 4);
  return `<div class="w">${back('Назад в каталог')}<div class="pd"><div class="pic ${p.cat}">${pic(p)}</div><div><a class="mono" href="#/catalog?brand=${b.id}">${b.n}</a><h1>${p.name}</h1><div style="color:var(--mut)">${p.desc}</div><div class="price">${fmt(p.price)} ${p.old ? `<s style="font-size:14px;color:var(--mut);font-weight:400">${fmt(p.old)}</s>` : ''}</div><div class="mono">Объём</div><span class="chip">${p.vol}</span>
<div class="buy"><div class="qty"><button data-act="pq" data-d="-1">−</button><span id="pq" style="min-width:14px;text-align:center">${pq}</span><button data-act="pq" data-d="1">+</button></div><button class="btn" data-act="addpq" data-id="${p.id}">В корзину</button><button class="hv ${favs.includes(p.id) ? 'on' : ''}" data-act="fav" data-id="${p.id}" aria-label="В избранное">${ic.heart}</button></div>
<button class="btn lt ingb" data-act="ing">Состав</button><div class="ingp" id="ing" hidden>${ingr(p)}</div>
<div class="info"><div><span>Артикул</span><b>${p.art}<button class="cp" data-act="copy" data-v="${p.art}" aria-label="Copy">${ic.copy}</button></b></div><div><span>Доставка</span><b>В течение 7 рабочих дней</b></div><div><span>Оплата</span><b>Картой онлайн</b></div></div></div></div>
<section class="sec">${head('', 'Вам может понравиться', '#/catalog?all', 'Весь каталог')}<div class="grid">${rel.map(card).join('')}</div></section></div>`
}
function empty(t, l = 'В каталог', h = '#/catalog?all') { return `<div class="w"><div class="empty"><h2>${t}</h2><a class="btn" href="${h}">${l}</a></div></div>` }
function favp() { const r = favs.map(G); return `<div class="w">${back()}<h1>Понравившееся</h1>${r.length ? `<div class="grid sec" style="margin-top:24px">${r.map(card).join('')}</div>` : '<div class="empty">Здесь пока пусто. Нажмите ♡ на товаре, чтобы сохранить его.<br><a class="btn" href="#/catalog?all">В каталог</a></div>'}</div>` }
function tot(del = 0) { const it = cart.filter(i => i.on), sub = it.reduce((a, i) => a + G(i.id).price * i.q, 0), pc = SITE.promo[promo] || 0, d = Math.round(sub * pc / 100); return { it, sub, d, n: it.reduce((a, i) => a + i.q, 0), t: sub - d + del } }
function cartp() {
  if (!cart.length) return empty('Корзина пуста'); const t = tot();
  return `<div class="w">${back()}<div class="mono">${cart.length} товара</div><h1>Корзина</h1><div class="lay"><div><label style="font-size:12px;display:flex;gap:8px;padding:10px 0;border-bottom:1px solid var(--ln)"><input type="checkbox" data-act="selall" ${cart.every(i => i.on) ? 'checked' : ''} style="accent-color:var(--c)">Выбрать все</label>
${cart.map(i => { const p = G(i.id); return `<div class="cartrow"><input type="checkbox" data-act="sel" data-id="${i.id}" ${i.on ? 'checked' : ''}><a class="pic ${p.cat}" href="#/product/${p.id}">${pic(p)}</a><div><div class="mono">${B(p.brand).n} · ${p.vol}</div><a href="#/product/${p.id}" style="font-weight:600">${p.name}</a><div class="qty" style="display:inline-flex;margin-top:8px"><button data-act="qty" data-id="${i.id}" data-d="-1">−</button>${i.q}<button data-act="qty" data-id="${i.id}" data-d="1">+</button></div></div><div style="text-align:right"><b>${fmt(p.price * i.q)}</b><div style="margin-top:8px;display:flex;gap:10px;justify-content:flex-end"><button class="hv ${favs.includes(i.id) ? 'on' : ''}" data-act="fav" data-id="${i.id}" style="width:32px;height:32px">${ic.heart}</button><button class="hv" data-act="del" data-id="${i.id}" style="width:32px;height:32px" aria-label="Удалить">✕</button></div></div></div>` }).join('')}</div>
<div class="dark"><h3>Сумма заказа</h3><div class="l"><span>Товары (${t.n})</span><span>${fmt(t.sub)}</span></div><div class="l"><span>Скидка</span><span>${fmt(t.d)}</span></div><div class="mono" style="color:#fffa">Промокод (попробуйте LUMEA10)</div><div class="promo"><input id="pc" placeholder="Введите код" value="${promo}"><button data-act="promo">OK</button></div><div class="l t"><span>Итого</span><span>${fmt(t.t)}</span></div>${t.it.length ? '<a class="btn lt big" href="#/checkout">Перейти к оформлению</a>' : '<div class="l">Выберите товары</div>'}</div></div></div>`
}
function checkout() {
  const t = tot(); if (!t.it.length) return empty('Нет выбранных товаров', 'В корзину', '#/cart');
  const inp = (l, n, ph, type = 'text', req = 1) => `<label class="f">${l.toUpperCase()}${req ? ' *' : ''}<input type="${type}" name="${n}" placeholder="${ph}" ${req ? 'required' : ''} ${type === 'tel' ? 'pattern="[0-9+()\\- ]{10,}"' : ''}></label>`;
  return `<div class="w">${back()}<h1>Оформление заказа</h1><form id="co" class="lay"><div>
<div class="box"><h3>1 · Личные данные</h3><div class="form">${inp('Имя', 'fn', 'Айгерим')}${inp('Фамилия', 'ln', 'Нурболатова', 'text', 0)}${inp('Отчество', 'mn', 'Необязательно', 'text', 0)}<span></span>${inp('Телефон', 'ph', '+7 (777) 000 00 00', 'tel')}${inp('Электронная почта', 'em', 'name@example.com', 'email')}</div></div>
<div class="box"><h3>2 · Адрес доставки</h3><div class="form">${inp('Город', 'city', 'Атырау')}${inp('Улица', 'st', 'ул. Абая')}${inp('Дом', 'h', '10')}</div></div>
<div class="box"><h3>3 · Способ доставки</h3><div class="form"><div class="opts">${DELIV.map((d, i) => `<label class="opt"><input type="radio" name="del" value="${d.id}" ${i ? '' : 'checked'} required><span>${d.n}<small>${d.d}</small></span></label>`).join('')}</div></div></div>
<div class="box"><h3>4 · Способ оплаты</h3><div class="form"><div class="opts">${PAY.map((d, i) => `<label class="opt"><input type="radio" name="pay" value="${d[0]}" ${i ? '' : 'checked'} required><span>${d[1]}</span></label>`).join('')}</div></div></div>
<label style="font-size:11px;display:flex;gap:8px;margin-bottom:12px"><input type="checkbox" required style="accent-color:var(--c)">Я ознакомлен(а) с Политикой конфиденциальности и даю согласие на обработку персональных данных.</label><button class="btn big" type="submit">Оформить заказ</button></div>
<div class="dark"><h3>Ваш заказ</h3>${t.it.map(i => `<div class="l"><span>${G(i.id).name} × ${i.q}</span><span>${fmt(G(i.id).price * i.q)}</span></div>`).join('')}<div class="l"><span>Скидка</span><span>${fmt(t.d)}</span></div><div class="l"><span>Доставка</span><span id="dl"></span></div><div class="l t"><span>Итого</span><span id="tt"></span></div></div></form></div>`
}
function delc() { const f = $('#co'); if (!f) return; const d = DELIV.find(x => x.id === f.del.value), t = tot(), c = d.free && t.sub - t.d >= SITE.freeFrom ? 0 : d.p; $('#dl').textContent = T(c ? fmt(c) : 'Бесплатно'); $('#tt').textContent = fmt(t.sub - t.d + c); return c }
function done(n) { return `<div class="w"><div class="empty"><h1>Спасибо за заказ!</h1><p style="margin-top:10px">Заказ № ${n} принят. Мы свяжемся с вами для подтверждения.</p><a class="btn" href="#/">На главную</a></div></div>` }

function route(keep) {
  const h = location.hash.slice(1) || '/', [path, qs] = h.split('?'), s = path.split('/').filter(Boolean);
  if (!keep && s[0] === 'catalog' && qs !== undefined) { const u = new URLSearchParams(qs); S = Object.assign(S0(), { brand: u.get('brand') ? u.get('brand').split(',') : [], cat: u.get('cat') || 'all', q: u.get('q') || '', sale: !!u.get('sale'), min: u.get('min') || '', max: u.get('max') || '', sort: u.get('sort') || 'rec' }) }
  if (s[0] !== 'product') pq = 1;
  const v = { '': home, about, brands, catalog, favorites: favp, cart: cartp, checkout, product: () => product(+s[1]), success: () => done(s[1]) }[s[0] || ''];
  $('#app').innerHTML = v ? v() : empty('Страница не найдена', 'На главную', '#/'); document.body.classList.remove('menu');
  if (!keep) scrollTo(0, 0); if (s[0] === 'checkout') delc(); save(); tr($('#app'))
}
const draw = () => route(true);
function sync() { const u = new URLSearchParams(); if (S.brand.length) u.set('brand', S.brand.join(',')); if (S.cat !== 'all') u.set('cat', S.cat); if (S.q) u.set('q', S.q); if (S.sale) u.set('sale', '1'); if (S.min) u.set('min', S.min); if (S.max) u.set('max', S.max); if (S.sort !== 'rec') u.set('sort', S.sort); history.replaceState(null, '', '#/catalog?' + (u.toString() || 'all')) }
function add(id, q = 1) { const i = cart.find(x => x.id === id); i ? i.q += q : cart.push({ id, q, on: true }); save(); toast('Добавлено в корзину') }
document.addEventListener('click', e => { const a = e.target.closest('[data-act]'); if (a && a.type !== 'checkbox') { e.preventDefault(); act(a); return } const g = e.target.closest('[data-go]'); if (g) location.hash = g.dataset.go });
function act(a) {
  const id = +a.dataset.id, d = +a.dataset.d, x = cart.find(i => i.id === id); switch (a.dataset.act) {
    case 'add': add(id); break;
    case 'fav': favs = favs.includes(id) ? favs.filter(f => f !== id) : [...favs, id]; toast(favs.includes(id) ? 'Добавлено в понравившееся' : 'Убрано из понравившегося'); draw(); break;
    case 'back': history.length > 1 ? history.back() : location.hash = '#/'; break;
    case 'menu': document.body.classList.toggle('menu'); break;
    case 'qty': x.q = Math.max(1, x.q + d); draw(); break;
    case 'del': cart = cart.filter(i => i.id !== id); draw(); break;
    case 'pq': pq = Math.max(1, pq + d); $('#pq').textContent = pq; break;
    case 'addpq': add(id, pq); break;
    case 'promo': { const c = $('#pc').value.trim().toUpperCase(); if (!c || SITE.promo[c]) { promo = c; toast(c ? 'Промокод применён' : 'Промокод удалён') } else toast('Промокод не найден'); draw(); break }
    case 'filt': fo = !fo; draw(); break;
    case 'copy': { const v = a.dataset.v, ok = () => toast('Артикул скопирован'); navigator.clipboard ? navigator.clipboard.writeText(v).then(ok, () => cp(v, ok)) : cp(v, ok); break }
    case 'ing': { const e = $('#ing'); e.hidden = !e.hidden; break }
    case 'chat': chatToggle(); break;
    case 'chip': ask(a.dataset.t); break;
    case 'lang': setLang(LANG === 'kk' ? 'ru' : 'kk'); break;
    case 'reset': S = S0(); sync(); draw(); break;
    case 'search': { const i = a.parentElement.querySelector('.sq'); location.hash = '#/catalog?q=' + encodeURIComponent(i.value.trim()); i.value = ''; break }
  }
}
document.addEventListener('change', e => {
  const t = e.target, a = t.dataset.act, f = t.dataset.f;
  if (a === 'sel') { cart.find(i => i.id === +t.dataset.id).on = t.checked; draw() }
  else if (a === 'selall') { cart.forEach(i => i.on = t.checked); draw() }
  else if (f === 'brand') { S.brand = [...document.querySelectorAll('[data-f=brand]:checked')].map(x => x.value); sync(); draw() }
  else if (f) { S[f] = t.value; sync(); draw() }
  else if (t.name === 'del') delc()
});
document.addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.classList.contains('sq')) { location.hash = '#/catalog?q=' + encodeURIComponent(e.target.value.trim()); e.target.value = '' } });
document.addEventListener('submit', e => {
  if (e.target.id !== 'co') return; e.preventDefault(); const f = e.target, n = Date.now().toString().slice(-6);
  const order = { no: n, name: [f.ln.value, f.fn.value, f.mn.value].filter(Boolean).join(' '), phone: f.ph.value, email: f.em.value, address: `${f.city.value}, ${f.st.value}, ${f.h.value}`, delivery: f.del.value, pay: f.pay.value, items: tot().it };
  ls.set('lm_lastorder', order); cart = cart.filter(i => !i.on); save(); location.hash = '#/success/' + n
});


/* ============ ПОМОЩНИК LUMÉA / ТЕХПОДДЕРЖКА ============ */
const SUPPORT = { email: 'support@lumea.kz', hours: { ru: 'ежедневно 10:00–20:00', kk: 'күн сайын 10:00–20:00' } };
const TAGS = P.map(p => p.tags);
const R = { oily: /жирн|майлы|майлан|блеск/, dry: /сух|құрғақ|шелуш/, sens: /чувствит|сезімтал|раздраж|покрасн|қызар/, combo: /комби|смешан|аралас/, normal: /нормальн|қалыпты/ };
const C = { acne: /акне|прыщ|высып|безеу|воспал|угр/, post: /пост[\s-]*акне|след(ы|ов)? от|пятн|дақ|пигмент|тыртық/, pore: /(^|[^а-я])пор(ы|ов|ах|а|ам)?([^а-я]|$)|расширенн|тесік|черн\S* точ|қара нүкт/, aging: /морщин|возраст|антивозраст|упруг|әжім|серпім/, hydr: /увлажн|обезвож|ылғал/ };
const CT = { spf: /spf|солнц|загар|санскрин|күннен қорғ/, toner: /тонер|тоник|пэд|педтер/, serum: /сыворот|ампул|эссенц|сарысу/, cleanser: /пенк|умыва|очищ|көбік|жуғыш|жуын|тазарт/, cream: /крем/ };
const BRX = { anua: /anua|ануа/, torriden: /torriden|торриден/, ceuracle: /ceuracle|сьюрейкл|сьюракл/, roundlab: /round\s*lab|раунд\s*лаб/, medicube: /medicube|медикьюб/, celimax: /celimax|селимакс/, axisy: /axis|аксис/, skin1004: /skin\s*1004|скин\s*1004/, althea: /althea|алтея|альтеа/, skinlab: /skin\s*&\s*lab|skin\s*lab|skinlab|скин\s*лаб|скин\s*энд\s*лаб/ };
const FQ = { dl: /доставк|курьер|самовывоз|жеткіз|өзі алып|срок/, py: /оплат|картой|сбп|наличн|төлем|төле|алғанда/, pm: /промокод|скидк|акци|жеңілдік|купон/, ct: /поддержк|связ(аться|ь)|контакт|оператор|телефон|номер|адрес|график|режим работ|часы работ|байланыс|қолдау|мекенжай|жұмыс уақыт|менеджер/, og: /оригинал|подлинн|подделк|түпнұсқа|жалған|сертификат/, od: /возврат|вернуть|обмен|отследить|статус заказ|где мой заказ|қайтару|айырбас|тапсырыс қайда/ };
const TN = { oily: ['жирная', 'майлы'], dry: ['сухая', 'құрғақ'], sens: ['чувствительная', 'сезімтал'], combo: ['комбинированная', 'аралас'], normal: ['нормальная', 'қалыпты'] };
const CN = { acne: ['акне', 'безеу'], post: ['постакне / пигментация', 'безеуден кейінгі іздер / пигментация'], pore: ['расширенные поры', 'кеңейген тері тесіктері'], aging: ['возрастные изменения', 'жас ұлғаюы белгілері'], hydr: ['увлажнение', 'ылғалдандыру'] };
const ST = { cleanser: ['Очищение', 'Тазалау'], toner: ['Тонер', 'Тонер'], serum: ['Сыворотка', 'Сарысу'], cream: ['Крем', 'Крем'], spf: ['SPF-защита', 'SPF қорғанысы'] };
const TIP = { post: ['При постакне хорошо работают центелла и ниацинамид; используйте SPF каждый день и не выдавливайте высыпания.', 'Безеуден кейінгі іздерге центелла мен ниацинамид жақсы көмектеседі; күн сайын SPF қолданыңыз, безеулерді қыспаңыз.'], dry: ['Сухой коже важны увлажнение и барьерные формулы: гиалуроновая кислота и питательный крем.', 'Құрғақ теріге ылғалдандыру мен қорғаныш формулалар маңызды: гиалурон қышқылы және қоректік крем.'], oily: ['Жирной коже подходят лёгкие текстуры и мягкое очищение — не пересушивайте кожу.', 'Майлы теріге жеңіл құрылымдар мен жұмсақ тазалау қолайлы — теріні артық құрғатпаңыз.'], sens: ['Чувствительной коже подойдут успокаивающие формулы (центелла, цика) без лишней агрессии.', 'Сезімтал теріге тыныштандыратын формулалар (центелла, цика) сай келеді.'], aging: ['Для первых признаков возраста пригодятся пептиды и коллаген, плюс ежедневный SPF.', 'Жас ұлғаюы белгілеріне пептидтер, коллаген және күн сайынғы SPF көмектеседі.'], pore: ['Для расширенных пор помогут тонер-пэды и мягкое регулярное очищение.', 'Тері тесіктері үшін тонер-педтер мен жұмсақ тұрақты тазалау тиімді.'] };
const CH = { ru: ['Подобрать уход для жирной кожи', 'Какой крем подойдёт для сухой кожи?', 'Доставка и оплата', 'Какие бренды есть в каталоге?', 'Связаться с поддержкой'], kk: ['Майлы теріге күтім таңдау', 'Құрғақ теріге қандай крем қолайлы?', 'Жеткізу және төлем', 'Каталогта қандай брендтер бар?', 'Қолдау қызметімен байланысу'] };
const SK = { ru: ['Жирная кожа', 'Сухая кожа', 'Комбинированная кожа', 'Чувствительная кожа', 'Кожа с акне'], kk: ['Майлы тері', 'Құрғақ тері', 'Аралас тері', 'Сезімтал тері', 'Безеулі тері'] };
let RL = 'ru';
const L2 = (a, b) => RL === 'kk' ? b : a, esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])), norm = s => s.toLowerCase().replace(/ё/g, 'е');
const lng = s => /[әіңғүұқөһ]|сәлем|қандай|керек|жеткізу|төлем|көмектес|рахмет|рақмет|күтім|сарысу/.test(s) ? 'kk' : /[а-я]/.test(s) ? 'ru' : LANG;
function parse(s) {
  const a = { types: [], con: [], cat: null, brand: null, cap: null, cheap: /дешев|недорог|бюджетн|арзан/.test(s) };
  for (const k in R) if (R[k].test(s)) a.types.push(k); for (const k in C) if (C[k].test(s)) a.con.push(k);
  for (const k of ['spf', 'toner', 'serum', 'cleanser', 'cream']) if (CT[k].test(s)) { a.cat = k; break }
  for (const k in BRX) if (BRX[k].test(s)) { a.brand = k; break }
  const m = s.match(/(?:до|не дороже|бюджет|дейін)\s*(\d[\d\s]*\d|\d)/) || s.match(/(\d[\d\s]*\d)\s*(?:₸|₸|руб|тг|тенге|дейін)/); if (m && +m[1].replace(/\s/g, '') >= 300) a.cap = +m[1].replace(/\s/g, ''); return a
}
/* Если для товара нет строки в TAGS, теги определяются автоматически по названию и описанию (менее точно). */
const tagsOf = p => TAGS[p.id] ? TAGS[p.id].split(' ') : [...Object.keys(R), ...Object.keys(C)].filter(k => (R[k] || C[k]).test((p.name + ' ' + p.desc).toLowerCase()));
function pick(c, a, n) {
  const sc = p => { const t = tagsOf(p); return a.types.filter(x => t.includes(x)).length * 3 + a.con.filter(x => t.includes(x)).length * 3 }, crit = a.types.length || a.con.length;
  let L = P.filter(p => p.cat === c && (!a.brand || p.brand === a.brand) && (!a.cap || p.price <= a.cap)).map(p => [p, sc(p)]); const g = L.filter(x => !crit || x[1] > 0); if (g.length) L = g;
  return L.sort((x, y) => y[1] - x[1] || (a.cheap ? x[0].price - y[0].price : x[0].id - y[0].id)).slice(0, n).map(x => x[0])
}
const mc = (p, st) => `<a class="mc" href="#/product/${p.id}"><div class="pic ${p.cat}">${pic(p)}</div><div class="mi">${st ? `<span class="mono">${st}</span>` : ''}<b>${p.name}</b><span class="mono">${B(p.brand).n} · ${RL === 'kk' ? p.vol.replace(' шт', ' дана') : p.vol}</span><span>${fmt(p.price)}</span></div><button class="cb" data-act="add" data-id="${p.id}" aria-label="+">${ic.cart}</button></a>`;
function recommend(a) {
  const steps = a.cat ? [a.cat] : ['cleanser', 'toner', 'serum', 'cream', 'spf'], it = [];
  steps.forEach(c => pick(c, a, a.cat ? 3 : 1).forEach(p => it.push([p, a.cat ? '' : ST[c][RL === 'kk' ? 1 : 0]])));
  if (!it.length) return { t: L2('К сожалению, по этим условиям ничего не нашлось. Попробуйте изменить бюджет или категорию.', 'Өкінішке орай, бұл шарттар бойынша ештеңе табылмады. Бюджетті немесе санатты өзгертіп көріңіз.') };
  const i = RL === 'kk' ? 1 : 0, d = a.types.map(x => TN[x][i]).concat(a.con.map(x => CN[x][i])).join(', '), tk = [a.con.some(x => x === 'post' || x === 'acne') ? 'post' : '', ...a.types.filter(x => TIP[x]), ...a.con.filter(x => x === 'aging' || x === 'pore')].filter(Boolean).slice(0, 2);
  return {
    t: i ? `Мәліметіңіз үшін рақмет!${d ? ' (' + d + ')' : ''} Каталогымыздан мына құралдар сай келеді:` : `Спасибо за подробности!${d ? ' (' + d + ')' : ''} Вот что подойдёт из нашего каталога:`, p: it,
    f: tk.map(k => TIP[k][i]).join(' ') + `<small>${L2('Это общие рекомендации, а не медицинская консультация. Новое средство сначала попробуйте на небольшом участке кожи; при сильном воспалении лучше обратиться к дерматологу.', 'Бұл жалпы ұсыныстар, медициналық кеңес емес. Жаңа құралды алдымен теріңіздің шағын бөлігінде сынап көріңіз; қатты қабыну болса, дерматологқа қаралған дұрыс.')}</small>`, c: SK[RL]
  }
}
function respond(raw) {
  const s = norm(raw); RL = lng(s); const a = parse(s), has = a.types.length || a.con.length || a.cat, tel = SITE.phone.replace(/[^+\d]/g, ''), ph = `<a href="tel:${tel}">${SITE.phone}</a>`, H = SUPPORT.hours[RL], kz = RL === 'kk',
    hit = Object.keys(FQ).filter(k => FQ[k].test(s)), rec = has || /подбер|посоветуй|порекоменд|рекоменд|уход|күтім|ұсын|таңдап|подойд|қолайлы/.test(s);
  const ans = {
    dl: () => ({ t: (kz ? 'Жеткізу: ' : 'Доставка: ') + DELIV.map(d => kz ? kk(d.n) + ' — ' + kk(d.d) : d.n + ' — ' + d.d).join('; ') + (kz ? `. Курьерлік жеткізу ${fmt(SITE.freeFrom)}-дан бастап тегін. Тәсілді тапсырыс рәсімдегенде таңдайсыз.` : `. Курьерская доставка бесплатна от ${fmt(SITE.freeFrom)}. Способ выбирается при оформлении заказа.`) }),
    py: () => ({ t: kz ? 'Төлем: ' + PAY.map(x => kk(x[1])).join(', ') + '. Тәсілді тапсырыс рәсімдегенде таңдайсыз.' : 'Оплата: ' + PAY.map(x => x[1].toLowerCase()).join(', ') + '. Способ выбирается при оформлении заказа.' }),
    pm: () => { const c = Object.keys(SITE.promo)[0]; return { t: kz ? `${c} промокоды ${SITE.promo[c]}% жеңілдік береді — оны себетте енгізіңіз. Жеңілдікпен сатылатын тауарлар «Акциялар» бөлімінде.` : `Промокод ${c} даёт скидку ${SITE.promo[c]}% — введите его в корзине. Товары со скидкой собраны в разделе «Акции».`, l: [['Открыть акции', 'Акцияларды ашу', '#/catalog?sale=1']] } },
    ct: () => ({ t: kz ? `LUMÉA қолдау қызметі: тел. ${ph}; мекенжайы: ${kk(SITE.address)}; жұмыс уақыты: ${H}; пошта: ${SUPPORT.email}. Көмектесуге қуаныштымыз!` : `Служба поддержки LUMÉA: тел. ${ph}; адрес: ${SITE.address}; режим работы: ${H}; почта: ${SUPPORT.email}. Будем рады помочь!` }),
    og: () => ({ t: kz ? `Біз тек түпнұсқа өніммен жұмыс істейміз. Белгілі бір тауардың түпнұсқалығын растау керек болса, бізге қоңырау шалыңыз: ${ph}.` : `Мы работаем только с оригинальной продукцией. Если нужно подтвердить подлинность конкретного товара — позвоните нам: ${ph}.` }),
    od: () => ({ t: kz ? `Тапсырыс мәртебесі, қайтару және айырбастау мәселесі бойынша қолдау қызметіне хабарласыңыз: ${ph} (${H}). Оператор барлығын түсіндіреді.` : `По вопросам статуса заказа, возврата и обмена, пожалуйста, свяжитесь с поддержкой: ${ph} (${H}). Оператор всё подскажет.` })
  };
  const brands = () => ({ t: kz ? 'Каталогта мына брендтер бар: ' + BRANDS.map(b => b.n).join(', ') + '. Бренд атын жазыңыз — оның тауарларын көрсетемін.' : 'В каталоге представлены бренды: ' + BRANDS.map(b => b.n).join(', ') + '. Напишите название бренда — покажу его товары.', l: [['Все бренды', 'Барлық брендтер', '#/brands']] });
  const am = s.match(/lm\s*-?\s*(\d{6})/), ap = am && P.find(x => x.art.toLowerCase() === 'lm' + am[1]); if (ap) return { t: L2('Вот товар с этим артикулом:', 'Осы артикулі бар тауар:'), p: [[ap, '']] };
  if (/^(привет|здравств|добрый|салем|сәлем|қайырлы|hello|hi)/.test(s) && s.length < 30 && !rec && !hit.length) return { t: wtext() };
  if (/спасибо|благодар|рахмет|рақмет/.test(s) && !rec && !hit.length) return { t: L2('Пожалуйста! Если появятся вопросы — я всегда на связи.', 'Қуана көмектестім! Сұрақтарыңыз туындаса, мен әрдайым байланыстамын.') };
  if (hit.length && !has) { const r = hit.map(k => ans[k]()); return { t: r.map(x => x.t).join('<br><br>'), l: [].concat(...r.map(x => x.l || [])) } }
  if (/бренд|марк[аиу]|производител/.test(s) && !a.brand && !rec) return brands();
  if (a.brand && !has) { const b = B(a.brand); return { t: kz ? `${b.n} брендінің танымал тауарлары:` : `Популярные товары бренда ${b.n}:`, p: P.filter(p => p.brand === a.brand).slice(0, 4).map(p => [p, '']), l: [['Все товары бренда', 'Бренд тауарларының бәрі', '#/catalog?brand=' + a.brand]] } }
  if (rec) { if (!has && !a.brand) return { t: L2('С удовольствием помогу подобрать уход! Подскажите, пожалуйста, ваш тип кожи (жирная, сухая, комбинированная, чувствительная, нормальная) и есть ли заботы: акне, постакне, пигментация, расширенные поры, возрастные изменения?', 'Күтім таңдауға қуана көмектесемін! Тері түріңізді (майлы, құрғақ, аралас, сезімтал, қалыпты) және мазалайтын мәселелерді (безеу, безеуден кейінгі іздер, пигментация, кеңейген тері тесіктері, жас ұлғаюы) айта аласыз ба?'), c: SK[RL] }; return recommend(a) }
  return { t: L2(`Простите, мне не удалось точно понять вопрос. Я могу подобрать уход по типу кожи, рассказать о доставке, оплате, акциях и брендах. Или свяжитесь с поддержкой: ${ph}.`, `Кешіріңіз, сұрағыңызды нақты түсіне алмадым. Тері түріне қарай күтім таңдай аламын, жеткізу, төлем, акциялар мен брендтер туралы айта аламын. Немесе қолдау қызметіне хабарласыңыз: ${ph}.`) }
}
function wtext() { return L2('Здравствуйте! Я помощник магазина LUMÉA. Помогу подобрать уход из каталога и отвечу на вопросы о доставке, оплате и брендах. Что вас интересует?', 'Сәлеметсіз бе! Мен LUMÉA дүкенінің көмекшісімін. Каталогтан күтім таңдауға көмектесемін, жеткізу, төлем және брендтер туралы сұрақтарға жауап беремін. Не қызықтырады?') }
function rbot(r) { return r.t + (r.p ? `<div class="mcs">${r.p.map(x => mc(x[0], x[1])).join('')}</div>` : '') + (r.f ? `<div class="mf">${r.f}</div>` : '') + (r.l ? `<div class="ls">${r.l.map(x => `<a href="${x[2]}">${RL === 'kk' ? x[1] : x[0]}</a>`).join('')}</div>` : '') }
function bubble(c, h) { const d = document.createElement('div'); d.className = c; d.innerHTML = h; $('#msgs').appendChild(d); $('#msgs').scrollTop = 1e5; return d }
function chips(l) { $('#chips').innerHTML = l.map(t => `<button type="button" data-act="chip" data-t="${esc(t)}">${t}</button>`).join('') }
function ask(t) { t = t.trim(); if (!t) return; bubble('mu', esc(t)); const d = bubble('mb', '<span class="dots"><i></i><i></i><i></i></span>'); setTimeout(() => { const r = respond(t); d.innerHTML = rbot(r); chips(r.c || CH[RL]); $('#msgs').scrollTop = 1e5 }, 550) }
function welcome() { RL = LANG; bubble('mb w', wtext()) }
function chatToggle() { document.body.classList.toggle('chat'); if (document.body.classList.contains('chat')) { if (!$('#msgs').children.length) welcome(); if (innerWidth > 800) setTimeout(() => $('#bi').focus(), 50) } }
function botUI() { const i = LANG === 'kk' ? 1 : 0; RL = LANG; $('#bt').textContent = ['Помощник LUMÉA', 'LUMÉA көмекшісі'][i]; $('#bs').textContent = ['Онлайн · подбор ухода и поддержка', 'Онлайн · күтім таңдау және қолдау'][i]; $('#bi').placeholder = ['Напишите вопрос…', 'Сұрағыңызды жазыңыз…'][i]; $('#fabt').textContent = ['Помощник', 'Көмекші'][i]; chips(CH[LANG]); const m = $('#msgs'); if (m.children.length === 1 && m.firstChild.classList.contains('w')) { m.innerHTML = ''; welcome() } }
document.body.insertAdjacentHTML('beforeend', '<div id="bot"><button class="fab" data-act="chat" aria-label="Chat"><svg viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4z"/></svg><span id="fabt"></span></button><section class="panel" aria-label="Chat"><div class="bh"><div><b id="bt"></b><small id="bs"></small></div><button data-act="chat" aria-label="Close">✕</button></div><div class="msgs" id="msgs"></div><div class="chips" id="chips"></div><form class="bf" id="bf"><input id="bi" autocomplete="off" maxlength="300"><button aria-label="Send">' + ic.arr + '</button></form></section></div>');
document.addEventListener('submit', e => { if (e.target.id === 'bf') { e.preventDefault(); const i = $('#bi'); ask(i.value); i.value = '' } });
addEventListener('hashchange', () => { if (innerWidth <= 800) document.body.classList.remove('chat') });

/* ============ ЯЗЫК (RU / ҚАЗ) ============ */
let LANG = ls.get('lm_lang', 'ru');
const D = {
  'Выгодные предложения': 'Тиімді ұсыныстар', 'Все акции': 'Барлық акциялар', 'Состав': 'Құрамы', 'Ключевые компоненты': 'Негізгі компоненттер', 'Полный список ингредиентов (INCI) указан на упаковке: производитель может изменить формулу.': 'Ингредиенттердің толық тізімі (INCI) қаптамада көрсетілген: өндіруші формуланы өзгертуі мүмкін.', 'Состав уточняется — смотрите на упаковке товара.': 'Құрамы нақтылануда — тауар қаптамасынан қараңыз.', 'Артикул скопирован': 'Артикул көшірілді', 'Артикул': 'Артикул', 'В течение 7 рабочих дней': '7 жұмыс күні ішінде', 'Картой онлайн': 'Картамен онлайн', 'Казпочта': 'Қазпочта', '5 000 ₸, бесплатно от 30 000 ₸': '5 000 ₸, 30 000 ₸-дан бастап тегін', 'г. Атырау': 'Атырау қ.', 'Айгерим': 'Әйгерім', 'Нурланова': 'Нұрланова', 'Атырау': 'Атырау', 'ул. Абая': 'Абай көшесі',
  'Каталог': 'Каталог', 'Бренды': 'Брендтер', 'Акции': 'Акциялар', 'О нас': 'Біз туралы', 'Поиск товаров': 'Тауарларды іздеу',
  'Контакты': 'Байланыс', 'Тех. поддержка': 'Техникалық қолдау', 'Магазин': 'Дүкен', 'Доставка и оплата': 'Жеткізу және төлем', 'Поиск по каталогу': 'Каталог бойынша іздеу', 'Мы в соцсетях': 'Біз әлеуметтік желілерде',
  'Политика конфиденциальности · Согласие на обработку данных · Публичная оферта': 'Құпиялылық саясаты · Деректерді өңдеуге келісім · Жария оферта',
  'магазин корейской косметики': 'корей косметикасының дүкені', 'ул. Кузнецова, 33, офис 129, Санкт-Петербург': 'Кузнецов көшесі, 33, 129-кеңсе, Санкт-Петербург',
  'МАГАЗИН КОРЕЙСКОЙ КОСМЕТИКИ · С 2026 ГОДА': 'КОРЕЙ КОСМЕТИКАСЫНЫҢ ДҮКЕНІ · 2026 ЖЫЛДАН БАСТАП',
  'Корейский уход Anua, Torriden, Medicube, Skin1004 и других брендов: проверенные формулы с доставкой до двери.': 'Anua, Torriden, Medicube, Skin1004 және басқа брендтердің корей күтімі: сенімді формулалар, есігіңізге дейін жеткізу.',
  'В каталог': 'Каталогқа', 'Наши бренды': 'Біздің брендтер', 'Новое в каталоге': 'Каталогтағы жаңалық', 'Новинки': 'Жаңа тауарлар', 'Весь каталог': 'Бүкіл каталог', 'Эксклюзивно у нас': 'Тек бізде', 'Все бренды': 'Барлық брендтер', 'Перейти к бренду →': 'Брендке өту →',
  'Корейская косметика, которой доверяют': 'Сенімге ие корей косметикасы', 'LUMÉA — магазин ухода за кожей из Кореи. Мы работаем только с оригинальной продукцией, быстро доставляем и помогаем подобрать средства под ваш тип кожи.': 'LUMÉA — Кореядан келген тері күтімі дүкені. Біз тек түпнұсқа өніммен жұмыс істейміз, тез жеткіземіз және тері түріңізге сай құралдарды таңдауға көмектесеміз.',
  'Доставка и оплата:': 'Жеткізу және төлем:', 'Новинка': 'Жаңа', 'Назад': 'Артқа', 'На главную': 'Басты бетке', 'Назад в каталог': 'Каталогқа оралу',
  'Объём': 'Көлемі', 'Курьерская доставка': 'Курьерлік жеткізу', 'В течение 2 рабочих дней': '2 жұмыс күні ішінде', 'Оплата': 'Төлем', 'При получении или картой онлайн': 'Алғанда немесе картамен онлайн', 'В корзину': 'Себетке', 'Вам может понравиться': 'Сізге ұнауы мүмкін', 'Товар не найден': 'Тауар табылмады', 'Страница не найдена': 'Бет табылмады',
  'Понравившееся': 'Ұнатқандар', 'Здесь пока пусто. Нажмите ♡ на товаре, чтобы сохранить его.': 'Мұнда әзірге бос. Сақтау үшін тауардағы ♡ түймесін басыңыз.',
  'Ничего не найдено': 'Ештеңе табылмады', 'Сбросить фильтры': 'Сүзгілерді тазалау', 'Фильтры': 'Сүзгілер', 'Рекомендуемые': 'Ұсынылатындар', 'От дорогого к дешёвому': 'Қымбаттан арзанға', 'От дешёвого к дорогому': 'Арзаннан қымбатқа',
  'Категория': 'Санат', 'Цена, ₸': 'Бағасы, ₸', 'от': 'бастап', 'до': 'дейін', 'Все товары': 'Барлық тауарлар', 'Тонеры': 'Тонерлер', 'Кремы': 'Кремдер', 'Сыворотки': 'Сарысулар', 'Пенки / умывашки': 'Көбіктер / жуғыштар',
  'Корзина': 'Себет', 'Корзина пуста': 'Себет бос', 'Выбрать все': 'Барлығын таңдау', 'Сумма заказа': 'Тапсырыс сомасы', 'Скидка': 'Жеңілдік', 'Промокод (попробуйте LUMEA10)': 'Промокод (LUMEA10 қолданып көріңіз)', 'Введите код': 'Кодты енгізіңіз', 'Итого': 'Барлығы', 'Перейти к оформлению': 'Рәсімдеуге өту', 'Выберите товары': 'Тауарларды таңдаңыз', 'Нет выбранных товаров': 'Таңдалған тауарлар жоқ',
  'Оформление заказа': 'Тапсырысты рәсімдеу', '1 · Личные данные': '1 · Жеке деректер', 'Имя': 'Аты', 'Фамилия': 'Тегі', 'Отчество': 'Әкесінің аты', 'Телефон': 'Телефон', 'Электронная почта': 'Электрондық пошта', 'Необязательно': 'Міндетті емес', 'Анна': 'Айгүл', 'Иванова': 'Серікова',
  '2 · Адрес доставки': '2 · Жеткізу мекенжайы', 'Город': 'Қала', 'Улица': 'Көше', 'Дом': 'Үй', 'Санкт-Петербург': 'Астана', 'ул. Кузнецова': 'Абай көшесі', '3 · Способ доставки': '3 · Жеткізу тәсілі', '4 · Способ оплаты': '4 · Төлем тәсілі',
  '490 ₸, бесплатно от 5 000 ₸': '490 ₸, 5 000 ₸-дан бастап тегін', 'Самовывоз': 'Өзі алып кету', 'ул. Кузнецова, 33': 'Кузнецов көшесі, 33', 'Почта России': 'Ресей поштасы', '3–7 дней': '3–7 күн', 'Пункты выдачи': 'Беру пункттері',
  'Оплата картой онлайн': 'Картамен онлайн төлеу', 'Система быстрых платежей': 'Жылдам төлем жүйесі', 'Оплата при получении': 'Алғанда төлеу',
  'Я ознакомлен(а) с Политикой конфиденциальности и даю согласие на обработку персональных данных.': 'Мен Құпиялылық саясатымен таныстым және жеке деректерді өңдеуге келісімімді беремін.', 'Оформить заказ': 'Тапсырыс беру', 'Ваш заказ': 'Сіздің тапсырысыңыз', 'Доставка': 'Жеткізу', 'Бесплатно': 'Тегін', 'Спасибо за заказ!': 'Тапсырысыңыз үшін рақмет!',
  'Добавлено в корзину': 'Себетке қосылды', 'Добавлено в понравившееся': 'Ұнатқандарға қосылды', 'Убрано из понравившегося': 'Ұнатқандардан алынды', 'Промокод применён': 'Промокод қолданылды', 'Промокод удалён': 'Промокод жойылды', 'Промокод не найден': 'Промокод табылмады',
  /* описания товаров (по порядку в списке P) */
  'Успокаивающий тонер с хауттюйнией': 'Хауттюйнияғы тыныштандыратын тонер', 'Пенка для глубокого очищения пор': 'Тері тесіктерін терең тазартатын көбік', 'Сыворотка против пигментации': 'Пигментацияға қарсы сарысу', 'Увлажняющая сыворотка с гиалуроновой кислотой': 'Гиалурон қышқылы бар ылғалдандырғыш сарысу', 'Лёгкий увлажняющий крем для лица': 'Бетке арналған жеңіл ылғалдандырғыш крем', 'Тонер для чувствительной кожи': 'Сезімтал теріге арналған тонер', 'Эссенция с комбучей для сияния кожи': 'Тері жарқырауына арналған комбучалы эссенция', 'Балансирующий успокаивающий тонер': 'Тепе-теңдік беретін тыныштандырғыш тонер', 'Пенка с чайным деревом для жирной кожи': 'Майлы теріге арналған шай ағашы көбігі', 'Увлажняющий тонер с берёзовым соком': 'Қайың шырыны бар ылғалдандырғыш тонер',
  'Увлажняющий солнцезащитный крем': 'Ылғалдандырғыш күннен қорғайтын крем', 'Мягкая пенка для умывания': 'Жуу үшін жұмсақ көбік', 'Тонер-пэды для сужения пор': 'Тері тесіктерін тарылтатын тонер-педтер', 'Крем-желе с коллагеном': 'Коллагенді крем-желе', 'Сыворотка с пептидами и PDRN': 'Пептидтер мен PDRN бар сарысу', 'Ампула с нони для упругости кожи': 'Тері серпімділігіне арналған нони ампуласы', 'Питательный крем с нони': 'Нони қосылған қоректік крем', 'Лёгкий солнцезащитный флюид': 'Жеңіл күннен қорғайтын флюид', 'Сыворотка против тёмных пятен': 'Қара дақтарға қарсы сарысу', 'Очищающий тонер для ежедневного ухода': 'Күнделікті күтімге арналған тазартқыш тонер',
  'Физический солнцезащитный крем': 'Физикалық күннен қорғайтын крем', 'Ампула с центеллой азиатской': 'Азиялық центелласы бар ампула', 'Успокаивающий крем с центеллой': 'Центелласы бар тыныштандырғыш крем', 'Солнцезащитная сыворотка SPF50+': 'SPF50+ күннен қорғайтын сарысу', 'Восстанавливающий крем для чувствительной кожи': 'Сезімтал теріге арналған қалпына келтіретін крем', 'Деликатная пенка для умывания': 'Жуу үшін нәзік көбік', 'Успокаивающий тонер': 'Тыныштандырғыш тонер', 'Барьерный крем для сухой кожи': 'Құрғақ теріге арналған қорғаныш крем', 'Сыворотка с витаминами и центеллой': 'Дәрумендер мен центелласы бар сарысу', 'Успокаивающий солнцезащитный крем': 'Тыныштандырғыш күннен қорғайтын крем'
};
P.forEach(p => { D[p.desc] = p.dk }); Object.values(COMP).forEach(c => { D[c[0]] = c[1] });
const RX = [[/^(\d+) товаров$/, '$1 тауар'], [/^(\d+) товара$/, '$1 тауар'], [/^Товары \((\d+)\)$/, 'Тауарлар ($1)'], [/^Заказ № (\d+) принят\..*$/, '№ $1 тапсырыс қабылданды. Растау үшін сізбен байланысамыз.'], [/^курьер по городу, Казпочта\..* от (.+)\.$/, 'қала бойынша курьер, Қазпочта. Төлем картамен онлайн немесе СБП арқылы. Курьерлік жеткізу $1 бастап тегін.']];
function kk(s) {
  const m = s.match(/^(\s*)([\s\S]*?)(\s*)$/), c = m[2]; if (!c) return s; let r = D[c];
  if (r === undefined && /^[А-ЯЁ][А-ЯЁ ]*( \*)?$/.test(c)) { const st = c.replace(/ \*$/, ''), b = st[0] + st.slice(1).toLowerCase(); if (D[b]) r = D[b].toUpperCase() + (/ \*$/.test(c) ? ' *' : '') }
  if (r === undefined) for (const [re, to] of RX) if (re.test(c)) { r = c.replace(re, to); break }
  if (r === undefined) r = c; return m[1] + r.replace(/(\d) шт(?![а-я])/g, '$1 дана') + m[3]
}
const T = s => LANG === 'kk' ? kk(s) : s;
function tr(root) {
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT); let n; while (n = w.nextNode()) { if (/^(SCRIPT|STYLE)$/.test(n.parentNode.tagName) || n.parentNode.closest('#bot')) continue; if (n.__o === undefined) n.__o = n.nodeValue; const v = LANG === 'kk' ? kk(n.__o) : n.__o; if (n.nodeValue !== v) n.nodeValue = v }
  root.querySelectorAll('[placeholder]').forEach(e => { if (e.closest('#bot')) return; if (e.__p === undefined) e.__p = e.getAttribute('placeholder'); e.placeholder = LANG === 'kk' ? kk(e.__p) : e.__p })
}
function setLang(l) { LANG = l; ls.set('lm_lang', l); document.documentElement.lang = l; document.querySelectorAll('.lg').forEach(b => b.dataset.cur = l); tr(document.body); document.title = SITE.name + ' — ' + T(SITE.tagline); botUI() }

addEventListener('hashchange', () => route());
$('#logo').textContent = SITE.name; $('#fl').textContent = SITE.name; $('#ft').textContent = SITE.tagline; $('#fph').textContent = SITE.phone; $('#fad').textContent = SITE.address; $('#fc').textContent = '© ' + new Date().getFullYear() + ' ' + SITE.name;
$('#fbr').innerHTML = BRANDS.slice(0, 6).map(b => `<a href="#/catalog?brand=${b.id}">${b.n}</a>`).join('');
document.title = SITE.name + ' — ' + SITE.tagline; route(); setLang(LANG);