/* bazi-profile.js — companion logic for bazi.html
 * Privacy-first, 100% client-side. Calculates a BaZi-inspired 5-element
 * "Strategic Profile" and renders it into a clean 1-page dashboard.
 * No backend, no upload. All inputs persist in the browser localStorage.
 *
 * Calculation engine preserved from the prior bazi.html:
 *  - Four Pillars (年/月/日/时) from civil date + 真太阳时 (true solar time) hour pillar
 *  - Real 5-element balance from the 8 characters + hidden stems (藏干)
 *  - Month branch (月令) weighted 3x as the seasonal driver
 *  - Exact percentage, truncated to 1 decimal (NO round-up)
 */
(function () {
  'use strict';

  /* ---------- small helpers ---------- */
  const el = (id) => document.getElementById(id);
  const L = () => (window.mppLang && typeof window.mppLang.getLang === 'function') ? window.mppLang.getLang() : 'en';
  const T = (k, vars) => (window.mppLang && typeof window.mppLang.t === 'function') ? window.mppLang.t(k, vars) : (k || '');
  const pct1 = (n) => (Math.floor(n * 10) / 10).toFixed(1); // exact %, 1 forced decimal, no round-up

  const defaultTz = 'UTC+8';
  const TZ_OPTIONS = ['UTC+8', 'UTC-4', 'UTC-5', 'UTC+0', 'UTC+1', 'UTC+5:30', 'UTC+7', 'UTC+9', 'UTC+10'];

  /* ---------- element reference tables ---------- */
  const ELEMENT_ORDER = ['Wood', 'Fire', 'Earth', 'Metal', 'Water'];
  const ELEMENT_COLOR = { Wood: '#81c784', Fire: '#ff8a65', Earth: '#ffd54f', Metal: '#e0e0e0', Water: '#64b5f6' };
  const ELEMENT_ICON = { Wood: '🌿', Fire: '🔥', Earth: '🌏', Metal: '⚙️', Water: '💧' };
  const ELEMENT_DESC = {
    Wood: 'Growth & planning', Fire: 'Visibility & connection',
    Earth: 'Stability & process', Metal: 'Clarity & decisions', Water: 'Reflection & communication'
  };
  const STEM_ELEMENT = { 甲: 'Wood', 乙: 'Wood', 丙: 'Fire', 丁: 'Fire', 戊: 'Earth', 己: 'Earth', 庚: 'Metal', 辛: 'Metal', 壬: 'Water', 癸: 'Water' };
  const BRANCH_ELEMENT = { 子: 'Water', 丑: 'Earth', 寅: 'Wood', 卯: 'Wood', 辰: 'Earth', 巳: 'Fire', 午: 'Fire', 未: 'Earth', 申: 'Metal', 酉: 'Metal', 戌: 'Earth', 亥: 'Water' };
  const STEMS = '甲乙丙丁戊己庚辛壬癸';
  const BRANCHES = '子丑寅卯辰巳午未申酉戌亥';
  const BRANCH_HIDDEN = {
    子: [['Water', 1]], 丑: [['Earth', 1], ['Metal', .5], ['Water', .5]], 寅: [['Wood', 1], ['Fire', .5], ['Earth', .5]],
    卯: [['Wood', 1]], 辰: [['Earth', 1], ['Wood', .5], ['Water', .5]], 巳: [['Fire', 1], ['Earth', .5], ['Metal', .5]],
    午: [['Fire', 1], ['Earth', .5]], 未: [['Earth', 1], ['Fire', .5], ['Wood', .5]], 申: [['Metal', 1], ['Water', .5], ['Earth', .5]],
    酉: [['Metal', 1]], 戌: [['Earth', 1], ['Metal', .5], ['Fire', .5]], 亥: [['Water', 1], ['Wood', .5], ['Fire', .5]]
  };
  const STEM_EN = { 甲: 'Jia', 乙: 'Yi', 丙: 'Bing', 丁: 'Ding', 戊: 'Wu', 己: 'Ji', 庚: 'Geng', 辛: 'Xin', 壬: 'Ren', 癸: 'Gui' };
  const BRANCH_EN = { 子: 'Zi', 丑: 'Chou', 寅: 'Yin', 卯: 'Mao', 辰: 'Chen', 巳: 'Si', 午: 'Wu', 未: 'Wei', 申: 'Shen', 酉: 'You', 戌: 'Xu', 亥: 'Hai' };

  /* ---------- timezone + 真太阳时 (true solar time) ---------- */
  const COUNTRY_LON = {
    'singapore': 103.8, 'malaysia': 101.9, 'indonesia': 106.8, 'thailand': 100.5, 'vietnam': 105.8, 'philippines': 121.0,
    'china': 116.4, '中国': 116.4, 'hong kong': 114.2, '香港': 114.2, 'taiwan': 121.0, '台湾': 121.0,
    'japan': 139.7, '日本': 139.7, 'korea': 126.9, '韩国': 126.9, '朝鲜': 126.9,
    'india': 77.2, '印度': 77.2, 'uk': -0.1, 'britain': -0.1, '英国': -0.1, 'australia': 149.1, '澳洲': 149.1
  };
  function countryLon(c) {
    if (!c) return null;
    const k = String(c).trim().toLowerCase();
    for (const key in COUNTRY_LON) { if (k.indexOf(key) !== -1) return COUNTRY_LON[key]; }
    return null;
  }
  function equationOfTime(date) {
    const start = new Date(date.getUTCFullYear(), 0, 0);
    const N = Math.floor((date - start) / 86400000);
    const B = (2 * Math.PI / 365) * (N - 81);
    return 9.87 * Math.sin(2 * B) - 7.53 * Math.cos(B) - 1.5 * Math.sin(B);
  }
  let _solarHour = 12; // corrected hour (0-23.99) for the Hour Pillar
  function applyTrueSolar(dobStr, tobStr, tz, country) {
    const parts = String(dobStr).split('-').map(Number);
    const y = parts[0], m = parts[1], d = parts[2];
    let h = 12, min = 0;
    if (tobStr) { const p = String(tobStr).split(':'); h = Number(p[0]) || 0; min = Number(p[1]) || 0; }
    let tzOff = 8;
    if (tz && String(tz).indexOf('UTC') === 0) {
      const raw = String(tz).replace('UTC', '');
      const sign = raw.indexOf('-') === 0 ? -1 : 1;
      const pp = raw.replace(/^-/, '').split(':');
      tzOff = sign * (Number(pp[0]) || 0) + (pp[1] ? sign * (Number(pp[1]) / 60) : 0);
    }
    const lon = countryLon(country);
    const offsetH = (lon !== null ? lon / 15 : tzOff) - tzOff + equationOfTime(new Date(Date.UTC(y, m - 1, d, h, min))) / 60;
    _solarHour = (((h + min / 60 + offsetH) % 24) + 24) % 24;
  }

  /* ---------- pillar math (civil calendar, self-contained; no lunar.js needed) ---------- */
  function parseDateTimeInTz(dateStr, timeStr, tz) {
    if (!dateStr) return null;
    const parts = String(dateStr).split('-').map(Number);
    const y = parts[0], m = parts[1], d = parts[2];
    let hours = 12, minutes = 0;
    if (timeStr) {
      const p = String(timeStr).split(':');
      hours = Number(p[0]) || 0; minutes = Number(p[1]) || 0;
    }
    let tzOffsetHours = 8;
    if (tz && String(tz).indexOf('UTC') === 0) {
      const raw = String(tz).replace('UTC', '');
      const sign = raw.indexOf('-') === 0 ? -1 : 1;
      const pp = raw.replace(/^-/, '').split(':');
      tzOffsetHours = sign * (Number(pp[0]) || 0);
      if (pp[1]) tzOffsetHours += sign * (Number(pp[1]) / 60);
    }
    const dt = new Date(Date.UTC(y, m - 1, d, hours, minutes, 0) - tzOffsetHours * 3600000);
    return { date: dt, year: y, month: m, day: d, hours, minutes, utcYear: dt.getUTCFullYear(), utcMonth: dt.getUTCMonth() + 1, utcDate: dt.getUTCDate() };
  }
  function getYearStem(gy) { return STEMS[(((gy - 4) % 60 + 60) % 60) % 10]; }
  function getMonthStem(gy, m) { return STEMS[((STEMS.indexOf(getYearStem(gy)) * 12 + (m % 12)) % 60) % 10]; }
  function getDayStem(gy, m, d) {
    const base = new Date(1900, 0, 1);
    const target = new Date(gy, m - 1, d);
    const diff = Math.floor((target - base) / 86400000);
    return STEMS[(((diff + 9) % 60 + 60) % 60) % 10];
  }
  function getHourStem(dayStem, h) { return STEMS[((STEMS.indexOf(dayStem) * 12 + Math.floor(((h + 1) % 24) / 2)) % 60) % 10]; }
  function getYearBranch(gy) { return BRANCHES[(((gy - 4) % 12 + 12) % 12)]; }
  function getMonthBranch(m) { return BRANCHES[(m % 12)]; }
  function getDayBranch(gy, m, d) {
    const base = new Date(1900, 0, 1);
    const target = new Date(gy, m - 1, d);
    const diff = Math.floor((target - base) / 86400000);
    return BRANCHES[(((diff + 11) % 60 + 60) % 60) % 12];
  }
  function getHourBranch(h) { return BRANCHES[Math.floor(((h + 1) % 24) / 2)]; }
  function animal(y) { return ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'][(((y - 4) % 12 + 12) % 12)]; }

  /* ---------- Day Master strength helpers ---------- */
  function dayMasterInfo(year, month, date) {
    const dayStem = getDayStem(year, month, date);
    const dayBranch = getDayBranch(year, month, date);
    const dmEl = STEM_ELEMENT[dayStem] || 'Wood';
    const idx = STEMS.indexOf(dayStem);          // 0..9
    const polarity = (idx % 2 === 0) ? 'Yang' : 'Yin';
    const polarityZh = (idx % 2 === 0) ? '阳' : '阴';
    return { stem: dayStem, branch: dayBranch, el: dmEl, en: STEM_EN[dayStem], branchEn: BRANCH_EN[dayBranch], polarity, polarityZh, idx };
  }

  /* ---------- Strategic Signature copy ---------- */
  const SIG = {
    Wood: {
      strong: { en: 'Green architect — grow boldly, but finish what you start.', zh: '青木建筑师 — 大胆生长，但务必善始善终。' },
      weak: { en: 'Sprout strategist — protect your energy; delegate the heavy lifting.', zh: '新芽策略师 — 守护精力，把重活交给他人。' }
    },
    Fire: {
      strong: { en: 'Spotlight operator — lead with warmth, watch the burnout.', zh: '聚光指挥 — 以热忱引领，留意过劳。' },
      weak: { en: 'Quiet ember — share your ideas before they cool.', zh: '静默余烬 — 在灵感冷却前说出来。' }
    },
    Earth: {
      strong: { en: 'Ground controller — build systems that outlast the hype.', zh: '大地掌控 — 建立经得起风浪的系统。' },
      weak: { en: 'Steady cultivator — anchor with routine; avoid drift.', zh: '稳健耕者 — 用规律扎根，避免漂浮。' }
    },
    Metal: {
      strong: { en: 'Precision edge — decide fast, execute clean.', zh: '锋利精准 — 果断决策，干净执行。' },
      weak: { en: 'Polished potential — sharpen through structure and practice.', zh: '未磨之锋 — 借结构与练习打磨。' }
    },
    Water: {
      strong: { en: 'Deep strategist — think long, speak with intent.', zh: '深流谋士 — 谋定后动，言出有意。' },
      weak: { en: 'Still pond — gather facts; act before over-thinking.', zh: '静水一潭 — 先聚事实，勿想太久。' }
    }
  };

  /* ---------- per-element action copy (en/zh) ---------- */
  const DOMINANT_EXAMPLE = {
    Wood: { en: 'new starts, planning, greenfield work', zh: '新项目启动、规划、从零搭建' },
    Fire: { en: 'launches, presentations, connecting', zh: '发布、演示、建立连接' },
    Earth: { en: 'building, stabilising, operating', zh: '建设、稳住、运营' },
    Metal: { en: 'decisions, execution, refinement', zh: '决策、执行、打磨' },
    Water: { en: 'research, writing, negotiation', zh: '研究、写作、谈判' }
  };
  const WEAK_TIP = {
    Wood: { en: 'protect your planning rhythm; schedule deep-work blocks.', zh: '守护规划节奏，安排专注时段。' },
    Fire: { en: 'schedule visibility moments — a demo, a post, a 1:1.', zh: '安排亮相时刻：演示、发文、一对一。' },
    Earth: { en: 'lock decisions into systems, budgets, and checklists.', zh: '把决定落进系统、预算与清单。' },
    Metal: { en: 'block decision time; finish one deliverable at a time.', zh: '安排决策时段，一次完成一项交付。' },
    Water: { en: 'protect reflection time — writing, research, strategy.', zh: '守护思考时间：写作、研究、策略。' }
  };

  /* ---------- the main calculation ---------- */
  function compute(name, dob, tob, country, tz, job, gender) {
    const parsed = parseDateTimeInTz(dob, tob, tz);
    if (!parsed) return null;
    applyTrueSolar(dob, tob, tz, country);
    const y = parsed.utcYear, m = parsed.utcMonth, day = parsed.utcDate;

    const ys = getYearStem(y), ms = getMonthStem(y, m), ds = getDayStem(y, m, day), hs = getHourStem(ds, _solarHour);
    const yb = getYearBranch(y), mb = getMonthBranch(m), db = getDayBranch(y, m, day), hb = getHourBranch(_solarHour);
    const PILLAR_STEMS = [hs, ds, ms, ys];        // Hour, Day, Month, Year
    const PILLAR_BRANCHES = [hb, db, mb, yb];
    const BR_W = [1, 1, 3, 1];                    // month branch (月令) drives the season, weighted 3x

    const tally = { Wood: 0, Fire: 0, Earth: 0, Metal: 0, Water: 0 };
    PILLAR_STEMS.forEach(s => { const e = STEM_ELEMENT[s]; if (e) tally[e] += 1; });
    PILLAR_BRANCHES.forEach((b, i) => (BRANCH_HIDDEN[b] || [[BRANCH_ELEMENT[b] || 'Earth', 1]]).forEach((pair) => { tally[pair[0]] += pair[1] * BR_W[i]; }));

    // gentle job nudge (kept tiny so the chart stays birth-driven)
    const j = (job || '').toLowerCase();
    if (/engineer|developer|programmer|coder/.test(j)) tally.Metal += 0.5;
    else if (/teacher|lecturer|tutor|edu/.test(j)) tally.Wood += 0.5;
    else if (/trader|finance|banker|broker/.test(j)) tally.Water += 0.5;
    else if (/designer|artist|creator/.test(j)) tally.Fire += 0.5;
    else if (/project manager|pm|manager/.test(j)) tally.Earth += 0.5;

    const total = Object.values(tally).reduce((a, b) => a + b, 0) || 1;
    const elementCounts = {};
    ELEMENT_ORDER.forEach(e => { elementCounts[e] = Math.floor((tally[e] / total) * 1000) / 10; });

    const sorted = ELEMENT_ORDER.map(e => [e, elementCounts[e]]).sort((a, b) => b[1] - a[1]);
    const strongest = sorted[0];
    const weakest = sorted[sorted.length - 1];

    // Day Master
    const dm = dayMasterInfo(y, m, day);
    const dmShare = elementCounts[dm.el] || 0;
    const genIdx = (ELEMENT_ORDER.indexOf(dm.el) - 1 + 5) % 5;
    const resourceEl = ELEMENT_ORDER[genIdx];
    const strength = dmShare + 0.5 * (elementCounts[resourceEl] || 0);
    const dmStrong = dmShare >= 18;

    // Useful / Taboo God (用神 / 忌神)
    const useful = dmStrong ? weakest[0] : strongest[0];
    const taboo = dmStrong ? strongest[0] : weakest[0];

    // pillars display
    const pillars = [
      { label: '时 Hour', stem: hs, branch: hb },
      { label: '日 Day', stem: ds, branch: db },
      { label: '月 Month', stem: ms, branch: mb },
      { label: '年 Year', stem: ys, branch: yb }
    ];
    const baZi = pillars.map(p => p.stem + p.branch).join(' ');

    return {
      name, dob, tob, country, tz, job, gender,
      zodiacAnimal: animal(y),
      elementCounts, strongest, weakest,
      dm, dmStrong, strength,
      useful, taboo,
      pillars, baZi
    };
  }

  /* ---------- render the 1-page dashboard ---------- */
  let lastProfile = null;

  function signatureText(dmEl, dmStrong) {
    const map = SIG[dmEl] || SIG.Wood;
    const v = dmStrong ? map.strong : map.weak;
    const lang = L();
    if (lang === 'zh') return v.zh;
    if (lang === 'both') return v.en + ' / ' + v.zh;
    return v.en;
  }

  function renderDashboard(p) {
    lastProfile = p;
    const lang = L();
    const zh = (lang === 'zh');
    const both = (lang === 'both');

    // meta line
    const metaBits = [];
    if (p.name) metaBits.push(p.name);
    if (p.job) metaBits.push(p.job);
    if (p.country) metaBits.push(p.country);
    if (p.gender) metaBits.push(p.gender);
    const born = [p.dob, p.tob ? '· ' + p.tob : ''].filter(Boolean).join(' ');
    el('reportMeta').innerHTML = (metaBits.join(' · ') || 'Strategic Profile') +
      (born ? ' &nbsp;·&nbsp; <span data-i18n="bazi_born">' + (both ? 'Born / 生于' : (zh ? '生于' : 'Born')) + '</span> ' + born : '');

    /* ----- Card A: Core Driver ----- */
    const polarityTxt = both ? (p.dm.polarity + ' / ' + p.dm.polarityZh)
      : (zh ? p.dm.polarityZh : p.dm.polarity);
    const elTxt = both ? (p.dm.el + ' / ' + p.dm.el) : p.dm.el; // element name same; keep simple
    const strengthTxt = both ? ('Strong 身强 / Moderate–Weak 身弱').replace('Moderate–Weak 身弱', p.dmStrong ? 'Strong 身强' : 'Moderate–Weak 身弱')
      : (zh ? (p.dmStrong ? '身强' : '身弱') : (p.dmStrong ? 'Strong 身强' : 'Moderate–Weak 身弱'));
    const dmLabel = both ? 'Day Master / 日主' : (zh ? '日主' : 'Day Master');
    const sigLabel = both ? 'Strategic Signature / 战略签名' : (zh ? '战略签名' : 'Strategic Signature');
    const pillarLabel = both ? 'Four Pillars (八字)' : (zh ? '四柱（八字）' : 'Four Pillars (八字)');

    el('segA').innerHTML =
      '<h3>' + (both ? 'Core Driver / 核心驱动' : (zh ? '核心驱动' : 'Core Driver')) + '</h3>' +
      '<div class="dm-badge"><span class="dm-polarity" style="color:' + ELEMENT_COLOR[p.dm.el] + '">' + polarityTxt + ' ' + p.dm.el + '</span>' +
      '<span class="dm-el">' + p.dm.en + p.dm.stem + ' · ' + p.dm.branchEn + p.dm.branch + '</span></div>' +
      '<div class="signature">' + signatureText(p.dm.el, p.dmStrong) + '</div>' +
      '<div class="pillars-line"><strong>' + pillarLabel + ':</strong> ' + p.baZi +
      ' &nbsp;·&nbsp; <span data-i18n="bazi_day_master">' + dmLabel + '</span> ' +
      (both ? ('strength 身强 ' + (p.dmStrong ? 'Strong' : 'Moderate–Weak')) : (zh ? ('强弱：' + (p.dmStrong ? '强' : '弱')) : ('strength: ' + (p.dmStrong ? 'Strong' : 'Moderate–Weak')))) +
      ' (' + pct1(p.strength) + '% of chart)</div>';

    /* ----- Card B: Resource Allocation Matrix ----- */
    const dominantEl = p.strongest[0];
    const bottleneckEl = p.weakest[0];
    const domFlag = both ? 'Dominant / 主导' : (zh ? '主导' : 'Dominant');
    const botFlag = (p.weakest[1] < 8)
      ? (both ? 'Missing — bottleneck / 缺失瓶颈' : (zh ? '缺失 — 瓶颈' : 'Missing — bottleneck'))
      : (both ? 'Bottleneck (needs support) / 瓶颈（需补）' : (zh ? '瓶颈（需补）' : 'Bottleneck (needs support)'));
    let rows = '';
    ELEMENT_ORDER.forEach(e => {
      const score = p.elementCounts[e];
      const isDom = (e === dominantEl);
      const isBot = (e === bottleneckEl) && (dominantEl !== bottleneckEl);
      let flag = '';
      if (isDom) flag = '<span class="flag-dominant">' + domFlag + '</span>';
      else if (isBot) flag = '<span class="flag-bottleneck">' + botFlag + '</span>';
      rows +=
        '<div class="matrix-row">' +
        '<div class="matrix-label">' + ELEMENT_ICON[e] + ' ' + e + '</div>' +
        '<div class="matrix-track"><div class="matrix-fill" style="width:' + score + '%; background:' + ELEMENT_COLOR[e] + '; opacity:.85;"></div></div>' +
        '<div class="matrix-val">' + pct1(score) + '%</div>' +
        (flag ? '<div class="matrix-flag">' + flag + '</div>' : '<div class="matrix-flag"></div>') +
        '</div>';
    });
    const summaryTxt = both
      ? ('Dominant resource: ' + dominantEl + ' (' + pct1(p.strongest[1]) + '%). Systemic bottleneck: ' + bottleneckEl + ' (' + pct1(p.weakest[1]) + '%).')
      : (zh
        ? ('主导资源：' + dominantEl + '（' + pct1(p.strongest[1]) + '%）。系统瓶颈：' + bottleneckEl + '（' + pct1(p.weakest[1]) + '%）。')
        : ('Dominant resource: ' + dominantEl + ' (' + pct1(p.strongest[1]) + '%). Systemic bottleneck: ' + bottleneckEl + ' (' + pct1(p.weakest[1]) + '%).'));
    el('segB').innerHTML =
      '<h3>' + (both ? 'Resource Allocation Matrix / 资源配比矩阵' : (zh ? '资源配比矩阵' : 'Resource Allocation Matrix')) + '</h3>' +
      rows +
      '<div class="matrix-summary">' + summaryTxt + '</div>';

    /* ----- Card C: Tactical Nudges (3 dynamic directives) ----- */
    const ex = DOMINANT_EXAMPLE[p.strongest[0]];
    const wt = WEAK_TIP[p.weakest[0]];
    const n1 = both
      ? ('Lean into your <strong>' + p.strongest[0] + '</strong> edge (' + pct1(p.strongest[1]) + '%) — your default advantage. Schedule ' + ex.en + ' / ' + ex.zh + ' when you need momentum.')
      : (zh
        ? ('发挥你的<strong>' + p.strongest[0] + '</strong>优势（' + pct1(p.strongest[1]) + '%）——这是你的天然长板。需要冲劲时，安排' + ex.zh + '。')
        : ('Lean into your <strong>' + p.strongest[0] + '</strong> edge (' + pct1(p.strongest[1]) + '%) — your default advantage. Schedule ' + ex.en + ' when you need momentum.'));
    const n2 = both
      ? ('Your <strong>' + p.weakest[0] + '</strong> is thin (' + pct1(p.weakest[1]) + '%). Support it deliberately: ' + wt.en + ' / ' + wt.zh + ' Small weekly habits beat occasional big pushes.')
      : (zh
        ? ('你的<strong>' + p.weakest[0] + '</strong>偏弱（' + pct1(p.weakest[1]) + '%）。刻意补足：' + wt.zh + ' 每周小习惯胜过偶尔大动作。')
        : ('Your <strong>' + p.weakest[0] + '</strong> is thin (' + pct1(p.weakest[1]) + '%). Support it deliberately: ' + wt.en + ' Small weekly habits beat occasional big pushes.'));
    const usefulGod = both
      ? ('Favor your Useful God <strong>' + p.useful + '</strong> (用神) in timing &amp; environment; moderate <strong>' + p.taboo + '</strong> (忌神). This keeps the chart from swinging to extremes.')
      : (zh
        ? ('在时机与环境中倾向你的用神<strong>' + p.useful + '</strong>，收敛忌神<strong>' + p.taboo + '</strong>。可防止格局走向极端。')
        : ('Favor your Useful God <strong>' + p.useful + '</strong> in timing &amp; environment; moderate <strong>' + p.taboo + '</strong>. This keeps the chart from swinging to extremes.'));
    el('segC').innerHTML =
      '<h3>' + (both ? 'Tactical Nudges / 战术建议' : (zh ? '战术建议' : 'Tactical Nudges')) + '</h3>' +
      '<ul class="nudges"><li>' + n1 + '</li><li>' + n2 + '</li><li>' + usefulGod + '</li></ul>';

    // reveal report
    const report = el('baziReport');
    if (report) report.style.display = 'block';
    // re-apply data-i18n bits inside the report (for the small labels)
    if (window.mppLang && typeof window.mppLang.applyTranslations === 'function') {
      window.mppLang.applyTranslations(report);
    }
  }

  /* ---------- generate (entry point) ---------- */
  function generate() {
    const name = (el('visitorName').value || '').trim();
    const dob = el('visitorDob').value;
    const tob = el('visitorTob').value;
    const country = (el('visitorCountry').value || '').trim();
    const tz = el('visitorTimezone').value || defaultTz;
    const job = (el('visitorJob').value || '').trim();
    const gender = el('gender').value;

    if (!dob) { alert(T('dob_required') || 'Please enter your date of birth.'); return; }

    const p = compute(name, dob, tob, country, tz, job, gender);
    if (!p) { alert(T('dob_required') || 'Please enter a valid date of birth.'); return; }
    renderDashboard(p);
    // scroll the report into view on small screens
    const report = el('baziReport');
    if (report && report.offsetParent) report.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* ---------- persistence (localStorage) ---------- */
  function persist(key, value) {
    try { if (value) localStorage.setItem(key, value); else localStorage.removeItem(key); } catch (e) {}
  }
  function wirePersistence() {
    const map = {
      visitorName: 'mpp.name', visitorDob: 'mpp.dob', gender: 'mpp.gender',
      visitorJob: 'mpp.job', visitorCountry: 'mpp.country', visitorTimezone: 'mpp.tz', visitorTob: 'mpp.tob'
    };
    Object.keys(map).forEach(id => {
      const node = el(id);
      if (!node) return;
      const save = () => persist(map[id], node.value);
      node.addEventListener('input', save);
      node.addEventListener('change', save);
    });
  }
  function prefill() {
    const map = {
      visitorName: 'mpp.name', visitorDob: 'mpp.dob', gender: 'mpp.gender',
      visitorJob: 'mpp.job', visitorCountry: 'mpp.country', visitorTimezone: 'mpp.tz', visitorTob: 'mpp.tob'
    };
    Object.keys(map).forEach(id => {
      const node = el(id);
      const raw = localStorage.getItem(map[id]);
      if (node && raw !== null && raw.trim() !== '') node.value = raw;
    });
  }
  function setTimezoneOptions() {
    const node = el('visitorTimezone');
    if (!node) return;
    node.innerHTML = '';
    const chosen = localStorage.getItem('mpp.tz') || defaultTz;
    TZ_OPTIONS.forEach(v => {
      const o = document.createElement('option');
      o.value = v; o.textContent = v;
      if (v === chosen) o.selected = true;
      node.appendChild(o);
    });
  }

  /* ---------- init ---------- */
  function init() {
    setTimezoneOptions();
    prefill();
    wirePersistence();
    const gen = el('generateBtn');
    if (gen) gen.addEventListener('click', generate);
    const exp = el('exportPdf');
    if (exp) exp.addEventListener('click', () => { try { window.print(); } catch (e) {} });
  }

  // expose hooks used by lang.js (auto-generate on load + re-apply on language switch)
  window.calc = generate;                                   // legacy global used by lang.js auto-load
  window.__reapplyBazi = function () { if (lastProfile) renderDashboard(lastProfile); };
  window.BaziProfile = { generate: generate, renderDashboard: renderDashboard, compute: compute };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
