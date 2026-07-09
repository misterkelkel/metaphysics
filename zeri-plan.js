(() => {
  'use strict';

  const LS = window.localStorage;

  // Primary profile keys mirror index.html for instant cross-page sync
  const STORAGE_MAP = {
    'mpp.name': 'visitorName',
    'mpp.job': 'visitorJob',
    'mpp.weekStart': 'weekStart',
    'mpp.lang': 'visitorLang',
    'mpp.zeRiActivity': 'zeRiActivity',
    'mpp.comp1Name': 'comp1Name',
    'mpp.comp1Dob': 'comp1Dob',
    'mpp.comp1Tob': 'comp1Tob',
    'mpp.comp1Gender': 'comp1Gender',
    'mpp.comp2Name': 'comp2Name',
    'mpp.comp2Dob': 'comp2Dob',
    'mpp.comp2Tob': 'comp2Tob',
    'mpp.comp2Gender': 'comp2Gender'
  };

  const OFFICERS_ZH = ["建", "除", "满", "平", "定", "执", "破", "危", "成", "收", "开", "闭"];
  const OFFICERS_EN = [
    "Establish (Jian)", "Remove (Chu)", "Full (Man)", "Balance (Ping)",
    "Stable (Ding)", "Initiate (Zhi)", "Destruction (Po)", "Danger (Wei)",
    "Success (Cheng)", "Receive (Shou)", "Open (Kai)", "Close (Bi)"
  ];

  const ZE_RI_ADVICE = {
    launch: {
      en: {
        optimal: "🌟 Dynamic Business Catalyst Active. Highly recommended for launching retail store operations, commercial promotions, and grand openings.",
        neutral: "Standard Commercial Maintenance Mode. Suitable for baseline administrative setup, marketing review, or backend inventory mapping.",
        avoid: "⚠️ Structural Business Block. Energy friction increases customer dispute rates or sudden financial drainage. Defer main launch items."
      },
      zh: {
        optimal: "🌟 商业爆点大吉时。极利店铺开张、公司成立、商业促销宣发，能有效凝聚客源财气。",
        neutral: "常规业务维护期。适合处理内部行政事务、筹备营销物料或整理后台数据。",
        avoid: "⚠️ 商业运营受阻。气场极易引发经营不顺或意外财务漏失。重要开张开业事宜建议延期。"
      }
    },
    contract: {
      en: {
        optimal: "🌟 Structural Lock-In Window Active. Ideal for signing agreements, locking long-term deals, and executing financial partnerships.",
        neutral: "Standard Procedural Review. Fine for reviewing legal clauses, redrafting files, or informal conceptual alignment syncs.",
        avoid: "⚠️ Legal Vulnerability Alert. Heightened risk of hidden clauses, contractual misunderstandings, or partner friction down the line."
      },
      zh: {
        optimal: "🌟 契约锁结大吉时。最宜签订商业合同、确立长期战略合作、以及落印具有法律效力的框架协议。",
        neutral: "常规法务审核期。适合修改条款细节、核对文本数据或进行口头意向碰头。",
        avoid: "⚠️ 签约合作高风险。此日容易隐藏合同条款漏洞，或引发合作方后续违约变卦。重要印信签署建议避开。"
      }
    },
    move: {
      en: {
        optimal: "🌟 Spatial Harmonization Window Active. Perfect for moving into a new residence, shifting furniture, or activating home energy systems.",
        neutral: "Standard Logistic Coordination. Suitable for packing crates, cataloging appliances, or tracking asset arrival intervals.",
        avoid: "⚠️ Spatial Instability Hazard. Heightened probability of logistics delays, damaged cargo, or creating energetic strain inside the home."
      },
      zh: {
        optimal: "🌟 安居入宅黄金期。最宜搬迁新居、大型家具进场定置、以及举行入宅纳吉仪式。",
        neutral: "常规内政筹备期。适合打包物品、清点家庭资产或对接物流调度安排。",
        avoid: "⚠️ 空间磁场动荡。搬迁过程极易遭遇物品磕碰损坏或进度拖延，甚至给新居气场带来波动压力。"
      }
    },
    deployment: {
      en: {
        optimal: "🌟 Stable Code Release Pipeline Active. Favorable for deploying infrastructure updates, rolling production code, or cloud migrations.",
        neutral: "Standard Development Status. Best applied to sandbox debugging, routine system optimization testing, or localized config tweaks.",
        avoid: "⚠️ Critical Release Downtime Spike. High occurrence of production server locks, build system failures, or data pipeline timeouts."
      },
      zh: {
        optimal: "🌟 系统发布黄金期。极利核心功能代码上线、生产环境部署、域名解析变更、及服务器主线升级。",
        neutral: "常规迭代测试期。适合在沙箱环境联调、修复已知系统缺陷或执行本地化配置优化。",
        avoid: "⚠️ 部署故障高发期。极易引发生产环境死锁、未知底层崩盘或云端管道中断。重要发布务必进行风控阻断。"
      }
    }
  };

  const BRANCH_CYCLE = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
  const CLASH_PAIRS = new Map([
    ["Rat", "Horse"], ["Horse", "Rat"], ["Ox", "Goat"], ["Goat", "Ox"],
    ["Tiger", "Monkey"], ["Monkey", "Tiger"], ["Rabbit", "Rooster"], ["Rooster", "Rabbit"],
    ["Dragon", "Dog"], ["Dog", "Dragon"], ["Snake", "Pig"], ["Pig", "Snake"]
  ]);

  // Bulletproof String Split Parsing to run the Lichun Solar Transition (Feb 4)
  function getTrueZodiacBranch(dobString) {
    if (!dobString) return "";
    const parts = dobString.split('-');
    if (parts.length < 3) return "";

    let year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10); // 1 = January, 2 = February
    const day = parseInt(parts[2], 10);

    // Metaphysical Border Control: Shift backward 1 year if before February 4th
    if (month === 1 || (month === 2 && day < 4)) {
      year = year - 1;
    }

    const idx = ((year - 4) % 12 + 12) % 12;
    return BRANCH_CYCLE[idx];
  }

  function getStableOfficer(date) {
    const referenceDate = new Date(2026, 2, 1); // March 1, 2026 Baseline
    const diffTime = date.getTime() - referenceDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const idx = ((diffDays) % 12 + 12) % 12;
    return { zh: OFFICERS_ZH[idx], en: OFFICERS_EN[idx], idx: idx };
  }

  function getTailoredNudge(officerZh, jobTitle) {
    const job = String(jobTitle || '').toLowerCase();
    const isPM = job.includes('project') || job.includes('manager') || job.includes('pm') || job.includes('nec');
    if (!isPM) return "System Indicator: Standard milestone tracing framework active.";
    
    switch (officerZh) {
      case "建": return "PM Parameter: Establish project governance parameters and set baseline scope alignments.";
      case "平": return "PM Parameter: Resolve team timeline variances and equalize resource scheduling bottlenecks.";
      case "定": return "PM Parameter: Perfect for contract freeze executions and securing customer sign-offs.";
      case "执": return "PM Parameter: Enforce systematic task validation rules and push engineering deployments.";
      case "破": return "PM Parameter: Run hard risk registers, isolate system bugs, and deprecate toxic dependencies.";
      case "成": return "PM Parameter: Deliver key phase milestones and showcase clean approval closures to stakeholders.";
      case "收": return "PM Parameter: Secure project documentation logs and consolidate closure accounts.";
      case "开": return "PM Parameter: Kickoff brand new development sprints or initialize customer configurations.";
      default: return "PM Parameter: Monitor standard pipeline health metrics and run routine risk assessments.";
    }
  }

  function runZeRiCalculation() {
    const startRaw = document.getElementById('weekStart')?.value;
    const langMode = document.getElementById('visitorLang')?.value || 'en';
    const job = document.getElementById('visitorJob')?.value || '';
    const activity = document.getElementById('zeRiActivity')?.value || 'launch';

    if (!startRaw) {
      alert(langMode === 'zh' ? '请选择开始日期' : 'Please select a starting date.');
      return;
    }

    const start = new Date(startRaw);
    start.setHours(0,0,0,0);

    const targetContainer = document.getElementById('weekGrid');
    if (!targetContainer) return;
    targetContainer.innerHTML = '';

    // Extract and process companion inputs natively
    const c1Name = document.getElementById('comp1Name')?.value.trim() || 'Partner 1';
    const c1Dob = document.getElementById('comp1Dob')?.value;
    const c2Name = document.getElementById('comp2Name')?.value.trim() || 'Partner 2';
    const c2Dob = document.getElementById('comp2Dob')?.value;

    const companions = [];
    if (c1Dob) companions.push({ name: c1Name, branch: getTrueZodiacBranch(c1Dob) });
    if (c2Dob) companions.push({ name: c2Name, branch: getTrueZodiacBranch(c2Dob) });

    // Calculate 7-day window framework
    for (let i = 0; i < 7; i++) {
      const d = new Date(start);
      d.setDate(d.getDate() + i);
      const o = getStableOfficer(d);

      // Get current calendar day branch base
      const dayIdx = ((Math.floor((d.getTime() - new Date(2000, 0, 1).getTime()) / 86400000) % 12) + 12) % 12;
      const dayBranch = BRANCH_CYCLE[dayIdx];

      // Scan for companion branch clashes
      const clashedNames = [];
      companions.forEach(c => {
        if (CLASH_PAIRS.get(dayBranch) === c.branch) {
          clashedNames.push(c.name);
        }
      });
      const hasClash = clashedNames.length > 0;

      // Process clean activity rules configuration mappings
      let isOptimal = false;
      let isAvoid = false;

      if (activity === 'launch' || activity === 'deployment') {
        if (o.zh === '开' || o.zh === '成') isOptimal = true;
        if (o.zh === '破' || o.zh === '闭') isAvoid = true;
      } else if (activity === 'contract') {
        if (o.zh === '定' || o.zh === '成') isOptimal = true;
        if (o.zh === '破' || o.zh === '危') isAvoid = true;
      } else if (activity === 'move') {
        if (o.zh === '除' || o.zh === '定') isOptimal = true;
        if (o.zh === '破' || o.zh === '收') isAvoid = true;
      }

      const dayCard = document.createElement('div');
      dayCard.className = 'planner-card';
      dayCard.style.padding = '1.25rem';
      dayCard.style.marginBottom = '1rem';
      dayCard.style.borderRadius = '14px';
      dayCard.style.border = '1px solid var(--border)';
      dayCard.style.background = 'var(--surface)';

      let badgeHtml = '';
      if (isOptimal && !hasClash) {
        dayCard.style.borderColor = 'var(--good)';
        dayCard.style.boxShadow = '0 0 12px rgba(129,199,132,0.1)';
        badgeHtml = `${langMode === 'zh' ? '大吉首选' : 'Optimal Choice'}`;
      } else if (isAvoid || hasClash) {
        dayCard.className += ' clash-card';
        badgeHtml = `${langMode === 'zh' ? '诸事不宜' : 'High Risk Block'}`;
      }

      const formatOptions = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
      const dateString = d.toLocaleDateString(langMode === 'zh' ? 'zh-CN' : 'en-US', formatOptions);

      const topLine = document.createElement('div');
      topLine.style.fontWeight = 'bold';
      topLine.style.fontSize = '1.05rem';
      topLine.style.marginBottom = '0.6rem';

      if (langMode === 'zh') {
        topLine.innerHTML = `${o.zh}日 — ${o.en.split(' ')[0]} ${badgeHtml}${dateString}`;
      } else if (langMode === 'both') {
        topLine.innerHTML = `${o.zh} / ${o.en} ${badgeHtml}${dateString}`;
      } else {
        topLine.innerHTML = `${o.en} ${badgeHtml}${dateString}`;
      }

      const adviceDict = ZE_RI_ADVICE[activity];
      const localAdvice = langMode === 'zh' ? adviceDict.zh : adviceDict.en;
      let targetAdviceText = localAdvice.neutral;

      if (isOptimal && !hasClash) targetAdviceText = localAdvice.optimal;
      else if (isAvoid || hasClash) targetAdviceText = localAdvice.avoid;

      const nudgeText = getTailoredNudge(o.zh, job);
      const detail = document.createElement('div');
      detail.innerHTML = `
        
          ${targetAdviceText}
        
        
          ${nudgeText}
        
      `;

      if (hasClash) {
        const clashDiv = document.createElement('div');
        clashDiv.className = 'clash-alert';
        clashDiv.innerText = langMode === 'zh' 
          ? `⚠️ 属相冲煞警告：此日与伴侣（${clashedNames.join(', ')}）生肖产生正面冲突，不建议举行重大契约或变动项目。` 
          : `⚠️ Personal Clash Alert: This date directly conflicts with ${clashedNames.join(', ')}'s Zodiac branch. Avoid major alignment milestones.`;
        detail.appendChild(clashDiv);
      }

      dayCard.appendChild(topLine);
      dayCard.appendChild(detail);
      targetContainer.appendChild(dayCard);
    }

    const weeklySection = document.getElementById('weekly');
    if (weeklySection) weeklySection.style.display = 'block';
  }

  function init() {
    const planBtn = document.getElementById('planBtn');
    if (planBtn) planBtn.addEventListener('click', runZeRiCalculation);

    // Load saved state values dynamically
    Object.keys(STORAGE_MAP).forEach(key => {
      const el = document.getElementById(STORAGE_MAP[key]);
      const val = LS.getItem(key);
      if (el && val) el.value = val;
    });

    // Persist change values automatically
    Object.keys(STORAGE_MAP).forEach(key => {
      const el = document.getElementById(STORAGE_MAP[key]);
      if (!el) return;
      const saver = (e) => {
        if (e.target.value !== undefined && e.target.value.trim() !== '') {
          LS.setItem(key, e.target.value.trim());
        } else {
          LS.removeItem(key);
        }
      };
      el.addEventListener('input', saver);
      el.addEventListener('change', saver);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

})();