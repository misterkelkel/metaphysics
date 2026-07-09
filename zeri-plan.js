(() => {
  'use strict';

  const LS = window.localStorage;

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
      en: { optimal: "🌟 Dynamic Business Catalyst Active. Highly recommended for launching retail store operations, commercial promotions, and grand openings.", neutral: "Standard Commercial Maintenance Mode. Suitable for baseline administrative setup, marketing review, or backend inventory mapping.", avoid: "⚠️ Structural Business Block. Energy friction increases customer dispute rates or sudden financial drainage. Defer main launch items." },
      zh: { optimal: "🌟 商业爆点大吉时。极利店铺开张、公司成立、商业促销宣发，能有效凝聚客源财气。", neutral: "常规业务维护期。适合处理内部行政事务、筹备营销物料或整理后台数据。", avoid: "⚠️ 商业运营受阻。气场极易引发经营不顺或意外财务漏失。重要开张开业事宜建议延期。" }
    },
    contract: {
      en: { optimal: "🌟 Structural Lock-In Window Active. Ideal for signing agreements, locking long-term deals, and executing financial partnerships.", neutral: "Standard Procedural Review. Fine for reviewing legal clauses, redrafting files, or informal conceptual alignment syncs.", avoid: "⚠️ Legal Vulnerability Alert. Heightened risk of hidden clauses, contractual misunderstandings, or partner friction down the line." },
      zh: { optimal: "🌟 契约锁结大吉时。最宜签订商业合同、确立长期战略合作、以及落印具有法律效力的框架协议。", neutral: "常规法务审核期。适合修改条款细节、核对文本数据或进行口头意向碰头。", avoid: "⚠️ 签约合作高风险。此日容易隐藏合同条款漏洞，或引发合作方后续违约变卦。重要印信签署建议避开。" }
    },
    deployment: {
      en: { optimal: "🌟 Stable Code Release Pipeline Active. Favorable for deploying infrastructure updates, rolling production code, or cloud migrations.", neutral: "Standard Development Status. Best applied to sandbox debugging, routine system optimization testing, or localized config tweaks.", avoid: "⚠️ Critical Release Downtime Spike. High occurrence of production server locks, build system failures, or data pipeline timeouts." },
      zh: { optimal: "🌟 系统发布黄金期。极利核心功能代码上线、生产环境部署、域名解析变更、及服务器主线升级。", neutral: "常规迭代测试期。适合在沙箱环境联调、修复已知系统缺陷或执行本地化配置优化。", avoid: "⚠️ 部署故障高发期。极易引发生产环境死锁、未知底层崩盘或云端管道中断。重要发布务必进行风控阻断。" }
    },
    kickoff: {
      en: { optimal: "🌟 Peak Initiation Vector Active. Outstanding momentum for starting major construction, breaking ground, or initializing core project phases.", neutral: "Standard Development Tracking. Safe for regular tasks, routine sprint plannings, and operational updates.", avoid: "⚠️ Structural Disruption Risk. High probability of site complications, structural delays, or immediate project scope friction." },
      zh: { optimal: "🌟 核心动土开工大吉。极利大型工程开工、打破僵局、或项目全新大版本研发的正式启动。", neutral: "常规业务推进期。适合安排日常研发迭代、召开常规例会及团队内部分工。", avoid: "⚠️ 项目启动阻力高。气场动荡，极易遭遇进度无限拖延、需求变更或执行层严重阻滞。" }
    },
    negotiation: {
      en: { optimal: "🌟 Harmonized Communication Channel Active. Promotes cognitive alignment, persuasive leverage, and mutually favorable deal closures.", neutral: "Standard Alignment Operations. Suitable for general conversations, status reporting, or clarifying technical specifications.", avoid: "⚠️ High Friction/Stalemate Risk. High likelihood of misaligned terms, intense negotiation gridlock, or defensive pushback." },
      zh: { optimal: "🌟 商务谈判黄金期。贵人相助，磁场极利达成共识、签署备忘录及拿下战略融资点。", neutral: "常规沟通接洽期。适合日常业务汇报、技术细节对接或例行商务拜访。", avoid: "⚠️ 谈判博弈摩擦高。双方极易陷入僵局或条款分歧，重要商务会谈或利益博弈建议规避。" }
    },
    purchase: {
      en: { optimal: "🌟 Wealth Reception Gateway Active. Favorable for high-value asset acquisitions, collecting vehicles, or closing property purchases with clean value retention.", neutral: "Routine Resource Procurement. Safe for ordering standard consumables, checking inventory, or evaluating market quotes.", avoid: "⚠️ Asset Depletion Risk. Increased probability of hidden defects, purchasing buyer's remorse, or hidden transaction overheads." },
      zh: { optimal: "🌟 资产置办纳吉时。极利购买大件设备、企业资产采购、或者大额资产资金的交割回笼。", neutral: "例行物资采购期。适合清点办公物料、核对供应商报价或支付常规账单项。", avoid: "⚠️ 资产破耗风险高。极易遭遇设备隐藏缺陷、购买后贬值、或产生不可预测的额外沉没成本。" }
    },
    wedding: {
      en: { optimal: "🌟 Double Harmony Aura Active. Exceptional energy for sealing marital bonds, family blessings, and smooth event execution.", neutral: "Domestic Alignment Status. Good for routine family planning discussions, wedding decor staging layout, or checking guest registries.", avoid: "⚠️ Relational Turbulence Hazard. Underlying atmospheric clash increases stress, logistical errors, or long-term relational friction." },
      zh: { optimal: "🌟 佳期合婚大吉。天意祥和，最宜举办结婚典礼、大宴亲朋，能凝聚长久家族福泽气运。", neutral: "家庭事务筹备期。适合核对来宾名单、筹备典礼道具或排演婚礼流程细节。", avoid: "⚠️ 情感磁场起伏。此日容易引发筹备争执、现场调度失误，或给长远家庭相处带来隐形摩擦。" }
    },
    rom: {
      en: { optimal: "🌟 Immutable Covenant Alignment. Highly favorable for cementing legal contracts, civil agreements, and locking institutional foundations.", neutral: "Administrative Contract Checking. Safe for reviewing registry forms, submitting basic verification slips, or processing general identification proofs.", avoid: "⚠️ Institutional Vulnerability. Higher risk of administrative issues, contractual delays, or baseline alignment strain." },
      zh: { optimal: "🌟 契约缔结黄金日。最宜政府进行婚姻注册、法律公证登记，确立稳固的法定伴侣基础。", neutral: "法务事务处理期。适合在系统内填报资料、核对证件信息或咨询注册登记流程。", avoid: "⚠️ 登记效率受阻。容易遭遇系统延迟、资料缺漏审批受阻、或双方基础心意出现迟疑波动。" }
    },
    engagement: {
      en: { optimal: "🌟 Ritual Respect Channel Active. Smoothes family communications, respect displays, and the seamless transition of matrimonial assets.", neutral: "Customary Routine Management. Fine for buying ceremonial clothing, packaging gift materials, or arranging family travel schedules.", avoid: "⚠️ Familial Miscommunication Risk. Heightened chance of domestic misunderstandings, protocol slip-ups, or logistical strain." },
      zh: { optimal: "🌟 纳采完聘大吉。两家结好，进行过大礼、提亲订盟能大幅降低沟通障碍，促进礼金嫁妆等大宗往来顺利通达。", neutral: "礼品物资采购期。适合挑选手信礼品、订购糕点礼盒或编排家庭会面行程。", avoid: "⚠️ 礼法沟通易生嫌隙。长辈沟通极易产生言语误会或规矩冲撞，导致订盟氛围陷入僵局。" }
    },
    bed: {
      en: { optimal: "🌟 Vitality Anchor Window. Excellent for stabilizing space health metrics, marital bliss vectors, and promoting restful longevity.", neutral: "Domestic Furniture Shifting. Suitable for minor textile swaps, routine mattress rotations, or clearing standard closet clutter.", avoid: "⚠️ Spatial Disruption Hazard. Instability vectors can introduce physical restlessness, vitality drainage, or spatial disharmony." },
      zh: { optimal: "🌟 安床祈福绝佳时。最宜主卧新床定位、安放寝具，可有效稳固卧房气场，促进夫妻感情与安宁长寿。", neutral: "卧房清理维护期。适合更换床单被套、调整房间软装、或清理常规衣柜杂物。", avoid: "⚠️ 睡眠磁场受扰。此日安床容易引发心神不宁、失眠多梦，甚至给长远健康磁场带来慢性消耗。" }
    },
    move: {
      en: { optimal: "🌟 Spatial Harmonization Window Active. Perfect for moving into a new residence, shifting furniture, or activating home energy systems.", neutral: "Standard Logistic Coordination. Suitable for packing crates, cataloging appliances, or tracking asset arrival intervals.", avoid: "⚠️ Spatial Instability Hazard. Heightened probability of logistics delays, damaged cargo, or creating energetic strain inside the home." },
      zh: { optimal: "🌟 进宅入宅黄金期。宜乔迁新居、写字楼搬迁、大型新资产落位，可快速激活空间的蓬勃气场。", neutral: "搬家打包准备期。适合分类物品、打标签、清点包装箱、或对接搬家公司运力。", avoid: "⚠️ 磁场动荡避迁。搬迁过程容易遭遇物品损毁、意外延误、或导致空间长远运势不稳。" }
    },
    renovation: {
      en: { optimal: "🌟 Purification & Reset Vector Active. Perfect for internal layouts, clearing outdated structures, drilling, and resetting spatial energy flows cleanly.", neutral: "Design & Sourcing Mode. Safe for planning color charts, reviewing layout maps, and selecting supply textures.", avoid: "⚠️ Structural Integrity Clash. High probability of electrical hazards, layout errors, or worker management friction." },
      zh: { optimal: "🌟 空间修造大吉。宜室内大翻修、墙体钻孔、布局调整，能彻底清除旧格局的沉闷，引入清新气流。", neutral: "图纸物料审核期。适合审核施工设计图、看样选材、或与工长进行常规方案沟通。", avoid: "⚠️ 施工安全红线期。此日动工容易遭遇意外水火电击安全隐患、施工失误、或与装修方产生严重扯皮。" }
    }
  };

  const BRANCH_CYCLE = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
  const CLASH_PAIRS = new Map([
    ["Rat", "Horse"], ["Horse", "Rat"], ["Ox", "Goat"], ["Goat", "Ox"],
    ["Tiger", "Monkey"], ["Monkey", "Tiger"], ["Rabbit", "Rooster"], ["Rooster", "Rabbit"],
    ["Dragon", "Dog"], ["Dog", "Dragon"], ["Snake", "Pig"], ["Pig", "Snake"]
  ]);

  function getTrueZodiacBranch(dobString) {
    if (!dobString) return "";
    const parts = dobString.split('-');
    if (parts.length < 3) return "";

    let year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10); 
    const day = parseInt(parts[2], 10);

    // Lichun Shift: If born before Feb 4, anchor back into the previous energetic cycle
    if (month === 1 || (month === 2 && day < 4)) {
      year = year - 1;
    }

    const idx = ((year - 4) % 12 + 12) % 12;
    return BRANCH_CYCLE[idx];
  }

  function getStableOfficer(date) {
    const referenceDate = new Date(2026, 2, 1);
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

    const c1Name = document.getElementById('comp1Name')?.value.trim() || 'Partner 1';
    const c1Dob = document.getElementById('comp1Dob')?.value;
    const c2Name = document.getElementById('comp2Name')?.value.trim() || 'Partner 2';
    const c2Dob = document.getElementById('comp2Dob')?.value;

    const companions = [];
    if (c1Dob) companions.push({ name: c1Name, branch: getTrueZodiacBranch(c1Dob) });
    if (c2Dob) companions.push({ name: c2Name, branch: getTrueZodiacBranch(c2Dob) });

    for (let i = 0; i < 7; i++) {
      const d = new Date(start);
      d.setDate(d.getDate() + i);
      const o = getStableOfficer(d);

      const dayIdx = ((Math.floor((d.getTime() - new Date(2000, 0, 1).getTime()) / 86400000) % 12) + 12) % 12;
      const dayBranch = BRANCH_CYCLE[dayIdx];

      const clashedNames = [];
      companions.forEach(c => {
        if (CLASH_PAIRS.get(dayBranch) === c.branch) {
          clashedNames.push(c.name);
        }
      });
      const hasClash = clashedNames.length > 0;

      let isOptimal = false;
      let isAvoid = false;

      // Mapping logic blocks across all 12 precision states
      if (['launch', 'deployment', 'kickoff'].includes(activity)) {
        if (['开', '成'].includes(o.zh)) isOptimal = true;
        if (['破', '闭'].includes(o.zh)) isAvoid = true;
      } else if (['contract', 'rom', 'negotiation'].includes(activity)) {
        if (['定', '成'].includes(o.zh)) isOptimal = true;
        if (['破', '危'].includes(o.zh)) isAvoid = true;
      } else if (['move', 'renovation', 'bed'].includes(activity)) {
        if (['除', '定'].includes(o.zh)) isOptimal = true;
        if (['破', '收'].includes(o.zh)) isAvoid = true;
      } else if (['wedding', 'engagement'].includes(activity)) {
        if (['定', '成', '开'].includes(o.zh)) isOptimal = true;
        if (['破', '危', '闭'].includes(o.zh)) isAvoid = true;
      } else if (activity === 'purchase') {
        if (['收', '成'].includes(o.zh)) isOptimal = true;
        if (['破', '耗', '闭'].includes(o.zh)) isAvoid = true;
      }

      const dayCard = document.createElement('div');
      dayCard.className = 'planner-card';
      dayCard.style.padding = '1.25rem';
      dayCard.style.removeAttribute = 'margin-bottom';
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

      const adviceDict = ZE_RI_ADVICE[activity] || ZE_RI_ADVICE['launch'];
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
          ? `⚠️ 属相冲煞警告：此日与伴侣（${clashedNames.join(', ')}）生肖产生正面冲突，不建议进行重大活动。` 
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

    Object.keys(STORAGE_MAP).forEach(key => {
      const el = document.getElementById(STORAGE_MAP[key]);
      const val = LS.getItem(key);
      if (el && val) el.value = val;
    });

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