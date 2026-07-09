(() => {
  const items = [
      { n:'Establish', en:'Establish', cn:'建', element:'Wood', vibe:'🚀 Launch Day', top:'Start projects',
        note:'One concrete move forward beats scattered planning. Use this energy to begin something visible.',
        workDo:['Kick off the main project','Send the decision you have been delaying','Finalize the contract draft','Run the essential meeting only','锁定时段做 planning, not brainstorming'],
        workAvoid:['Starting arguments','Untested launches','Scope creep','Multitasking without priorities'],
        familyDo:['Family alignment meeting','Set 1-2 shared goals for the week','Assign clear chores'],
        familyAvoid:['Confrontation','Rushed travel','Overloading the calendar'],
        workDoZh:['启动核心项目','推进搁置的决定','定稿合同草稿','只开必要的会议','做规划而非空想'],
        workAvoidZh:['挑起争执','未验证就上线','范围蔓延','无优先级多任务'],
        familyDoZh:['家庭对齐会议','设定1-2个共同周目标','清晰分配家务'],
        familyAvoidZh:['对抗','仓促出行','排满日程'] },
      { n:'Remove', cn:'除', element:'Wood', vibe:'🧹 Clearance Day', top:'Clear backlog',
        note:'Remove friction today so the rest of the week moves smoother.',
        workDo:['Cancel plans that no longer fit','Wipe the backlog, not just move it','Make a payment or settle a small debt','One habit reset: eliminate one distraction','Schedule a short end-of-day reset'],
        workAvoid:['Celebrations','Grand openings','Overpraising unfinished work','New commitments before clearing old ones'],
        familyDo:['Declutter one shared space','End one bad household pattern together','Plan a short, low-pressure trip'],
        familyAvoid:['Big parties','Adding more chores during cleanup','Shaming while organizing'],
        workDoZh:['取消不合适计划','清理积压而非仅仅移动','还债或结清小额债务','改掉一个干扰习惯','安排短时收尾'],
        workAvoidZh:['庆祝','盛大开幕','对未完成的工作过度表扬','不清旧账就接新任务'],
        familyDoZh:['整理一个公共空间','结束一个家庭坏习惯','计划轻松短途出行'],
        familyAvoidZh:['大型派对','清理中再加新家务','整理时互相指责'] },
      { n:'Full', cn:'满', element:'Earth', vibe:'🌾 Payoff Day', top:'Deliver results',
        note:'Collect value now, and reserve new starts for a stronger day.',
        workDo:['Ship the deliverable','Collect payment or confirm receipt','Celebrate a small win publicly','Take a meaningful break after finishing','Document the win for stakeholders'],
        workAvoid:['New contracts','Overcommitting to more work',' Ignoring follow-ups after celebration'],
        familyDo:['Gather for a shared meal','Celebrate a milestone together','Share gratitude around the table'],
        familyAvoid:['Long trips','Big spending','Scheduling heavy events'],
        workDoZh:['交付成果','收款或确认到账','公开庆祝小胜利','完成后 bona fide 休息','为利益相关者记录成果'],
        workAvoidZh:['新合同','过度承诺新工作','庆祝后忽略跟进'],
        familyDoZh:['团聚共餐','共同庆祝里程碑','表达感谢'],
        familyAvoidZh:['长途旅行','大额支出','安排重型活动'] },
      { n:'Balance', cn:'平', element:'Earth', vibe:'⚖️ Rhythm Day', top:'Routine work',
        note:'Stay steady and protect focus from unnecessary noise.',
        workDo:['Protect 90-minute deep-work blocks','Do maintenance and cleanup','Study or read for 20 minutes','Publish if already reviewed'],
        workAvoid:['High-stakes deals','Construction start','Last-minute changes'],
        familyDo:['Keep a steady home routine','Work on one small home project','Schedule low-pressure together time'],
        familyAvoid:['Big events','Weddings','Overloading family calendars'],
        workDoZh:['保护90分钟深度工作','复盘维护和清理','阅读20分钟','复核后发布'],
        workAvoidZh:['高风险交易','开工动土','最后时刻更改'],
        familyDoZh:['保持稳定家庭routine','做一项小家居项目','安排轻松共处时光'],
        familyAvoidZh:['大型活动','婚礼','过度排满家庭日程'] },
      { n:'Stable', cn:'定', element:'Metal', vibe:'🔒 Commitment Day', top:'Agreements',
        note:'Lock terms today and reduce ambiguity for the week.',
        workDo:['Get agreements in writing','Confirm scheduled meetings in advance','Make one steady investment','Finish one pending approval'],
        workAvoid:['Funerals','Risky bets','Unresolved disputes','Verbal promises without backup'],
        familyDo:['Resolve one household commitment','Plan the weekend clearly','Plan one quality-time moment'],
        familyAvoid:['Risk-taking activities','Arguments before leaving home','Ignoring small tensions'],
        workDoZh:['书面确认协议','提前确认会议排程','做一项稳健投资','通过一项待审批事项'],
        workAvoidZh:['丧事','冒险投注','未解决纠纷','无凭证的口头承诺'],
        familyDoZh:['兑现一项家庭承诺','清晰规划周末','计划一次优质共处'],
        familyAvoidZh:['冒险活动','出门前争执','忽视小矛盾'] },
      { n:'Initiate', cn:'执', element:'Metal', vibe:'🛠️ Discipline Day', top:'Follow-through',
        note:'Begin the hard thing that matters most, then protect it.',
        workDo:['Finish a pending commitment','Move approvals forward','Do focused admin work','Write the next action before stopping'],
        workAvoid:['Travel','Funerals','Moving homes','Trying new routines without a reason'],
        familyDo:['A short family ritual or check-in','Clarify house rules calmly','Plan one repeatable habit'],
        familyAvoid:['Travel','Moving homes','Surprising family with big requests'],
        workDoZh:['跟进一项待办','推进审批','做专注行政工作','停止前列出下一步'],
        workAvoidZh:['旅行','丧事','搬家','无理由尝试新routine'],
        familyDoZh:['简短家庭仪式或沟通','平静澄清家规','规划一个可重复习惯'],
        familyAvoidZh:['旅行','搬家','突然提大要求'] },
      { n:'Destruction', cn:'破', element:'Earth', vibe:'🔻 Ending Day', top:'Audits / cleanup',
        note:'Use ending energy to cut losses and reduce future problems.',
        workDo:['Run one focused audit','Release an outdated tool or process','End one bad initiative cleanly','Document what failed and why'],
        workAvoid:['Weddings','Promises','Celebrations','Starting fresh initiatives after cleanup'],
        familyDo:['Resolve one conflict directly','Release one old family grudge','Clean one neglected shared space'],
        familyAvoid:['New promises during cleanup','Celebrating before closing things out','Reopening finished talks'],
        workDoZh:['执行一次专项审计','淘汰旧工具或流程','干净利落结束一个坏项目','记录失败原因'],
        workAvoidZh:['婚礼','承诺','庆祝','清理完立刻开新坑'],
        familyDoZh:['直接化解一个冲突','放下一个家庭怨念','整理一个被忽略的公共空间'],
        familyAvoidZh:['清理时做新承诺','未收尾就庆祝','重提已结束话题'] },
      { n:'Danger', cn:'危', element:'Water', vibe:'⚠️ Caution Day', top:'Risk review',
        note:'Reduce exposure and protect what is already working.',
        workDo:['Review current risks in one list','Do defensive planning for next week','Keep a low profile on big asks','Confirm backups for key work'],
        workAvoid:['New contracts','Long journeys','Big launches','Saying yes to risky favors'],
        familyDo:['Safety checks at home','Keep plans low-key','Be supportive without forcing fixes'],
        familyAvoid:['Big ceremonies','Travel plans','Pushing big family decisions today'],
        workDoZh:['列出当前风险','做下周防御性规划','重大请求保持低调','确认工作备份'],
        workAvoidZh:['新合同','长途旅行','盛大发布','答应高风险请托'],
        familyDoZh:['家庭安全检查','低调安排','支持但不强求解决'],
        familyAvoidZh:['大型仪式','出行','推动家庭大决定'] },
      { n:'Success', cn:'成', element:'Water', vibe:'🎯 Outcome Day', top:'Seal agreements',
        note:'Close deals, complete items, and make wins visible.',
        workDo:['Close the deal or ask for the signature','Ship the completion deliverable','Make one win visible to stakeholders','Celebrate briefly after closing'],
        workAvoid:['Lawsuits','Surgery timing','Conflict','Talking smack about others after winning'],
        familyDo:['Plan a celebration','Merge family schedules for next week','Gather without heavy topics'],
        familyAvoid:['Conflict','Surgery timing talks','Surprise money disputes'],
        workDoZh:['成交或要签名','交付完成品','让成果被利益相关者看见','收尾后小庆祝'],
        workAvoidZh:['诉讼','手术时机讨论','冲突','得胜后贬低他人'],
        familyDoZh:['规划庆祝','合并下一周家庭排程','轻松聚会'],
        familyAvoidZh:['冲突','手术时机话题','突然谈钱伤和气'] },
      { n:'Receive', cn:'收', element:'Metal', vibe:'📬 Closeout Day', top:'Inventory / returns',
        note:'Wrap up and consolidate before you spend energy on new pushes.',
        workDo:['Inventory current assets and returns','Finalize collections or payables','File loose documents','Schedule a brief weekly closeout'],
        workAvoid:['Investments','Moving house','Marriage timing talks','Jumping to new work too early'],
        familyDo:['Sort shared spaces together','Harvest or share one small win','Bond over something simple'],
        familyAvoid:['Investments','Moving homes','Big financial announcements'],
        workDoZh:['盘点资产与退货','收款或付款结清','归档散文件','安排一次周度收尾'],
        workAvoidZh:['投资','搬家','婚嫁时机讨论','过早开新项目'],
        familyDoZh:['共同整理空间','分享一个小成果','简单共处'],
        familyAvoidZh:['投资','搬家','大财务宣布'] },
      { n:'Open', cn:'开', element:'Metal', vibe:'🌅 Opening Day', top:'New business / launch',
        note:'Start what you have been delaying while the path is open.',
        workDo:['Open the delayed initiative','Host a small launch event','Share a public update','Plan travel in short, clear legs'],
        workAvoid:['Big repairs today','Funerals in the family','Dirty launches without checks','Overloading one day'],
        familyDo:['Start a new beginning together','Public family event or acknowledgement','Plan one trip with clear stops'],
        familyAvoid:['Ignoring pending repairs','Burying emotional issues','Overloading family calendar'],
        workDoZh:['开启搁置事项','举办小型启动','公开发布更新','分段计划出行'],
        workAvoidZh:['当天大规模维修','家中丧事','无检查的草率发布','把一天排满'],
        familyDoZh:['共同开始新事项','家庭公开活动或认可','规划分段清晰出行'],
        familyAvoidZh:['忽视待维修','压抑情绪','排满家庭日程'] },
      { n:'Close', cn:'闭', element:'Earth', vibe:'🌙 Finish Day', top:'Finish old tasks',
        note:'Complete quietly and preserve energy for the next opening.',
        workDo:['Finish old tasks cleanly','Do solo deep work','Focus in quiet blocks','Write tomorrow priorities before closing'],
        workAvoid:['Public events','Meetings that open new threads','New openings','Noise after focus time'],
        familyDo:['Rest at home','Keep quiet low-key time','Finish one family matter cleanly','Avoid big requests at night'],
        familyAvoid:['Big meetings','Starting new ventures','Late-night debates','Surprise pressure'],
        workDoZh:['干净利落完成旧任务','独立深度工作','安静专注块','收尾前列出明日优先事项'],
        workAvoidZh:['公开活动','开会开新话题','新开启','专注后制造噪音'],
        familyDoZh:['在家休息','保持安静低压时光','收尾一项家庭事务','晚上不提大请求'],
        familyAvoidZh:['大型会议','开始新事业','深夜争论','施加压力'] }
  ];

  const ORDER = items.map(x => x.cn);
  const WEEKDAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const fmt = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  function animal(y){ const m=['Rat','Ox','Tiger','Rabbit','Dragon','Snake','Horse','Goat','Monkey','Rooster','Dog','Pig']; return m[((y-4)%12+12)%12]; }
  function tzOffsetHours(tz){
    const map = {"UTC+8":8,"UTC+9":9,"UTC+10":10,"UTC-4":-4,"UTC-5":-5,"UTC+0":0,"UTC+1":1,"UTC+5:30":5.5,"UTC+7":7};
    if(tz && map[tz]!==undefined) return map[tz];
    const m = String(tz||"").match(/UTC([+-])(\d+)(?::(\d+))?/);
    if(!m) return 8;
    const sign = m[1]==="+"?1:-1;
    const hh = parseInt(m[2],10); const mm = m[3]?parseInt(m[3],10):0;
    return sign*(hh + mm/60);
  }
  function next7(start){
    const days=[];
    const d=new Date(start);
    d.setHours(0,0,0,0);
    for(let i=0;i<7;i++){ days.push(new Date(d)); d.setDate(d.getDate()+1); }
    return days;
  }
  function officerIndexForDate(y,m,d){ return ((y*13+m)*31+d)%12; }
  function officerForDate(y,m,d){
    const key = `${y}-${String(m).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
    let raw = null;
    const fallback = {"2026-07-05":"开","2026-07-06":"闭","2026-07-07":"闭","2026-07-08":"建","2026-07-09":"除","2026-07-10":"满","2026-07-11":"平","2026-07-12":"定","2026-07-13":"执","2026-07-14":"破","2026-07-15":"危","2026-07-16":"成","2026-07-17":"收","2026-07-18":"开","2026-07-19":"闭","2026-07-20":"建"};
    raw = fallback[key] || null;
    if (!raw && typeof Solar !== "undefined" && Solar && typeof Solar.fromDate === "function") {
      try {
        const dObj = new Date(Date.UTC(y, (m-1), d));
        const s = Solar.fromDate(dObj);
        const l = s.getLunar();
        raw = l.getZhiXing();
      } catch (e) {}
    }
    if (!raw) {
      const monthBuildBase = [2,5,8,11,0,3,6,9];
      const mb = monthBuildBase[((m-1)%12+12)%12] || 0;
      const seq = ((d - mb) % 12 + 12) % 12;
      raw = ORDER[seq];
    }
    const match = items.find(item => item.cn === raw);
    return match || items[officerIndexForDate(y,m,d)%12];
  }

  function ensureExtraArrays(stable){
    stable.workDoZh = stable.workDoZh || [];
    stable.workAvoidZh = stable.workAvoidZh || [];
    stable.familyDoZh = stable.familyDoZh || [];
    stable.familyAvoidZh = stable.familyAvoidZh || [];
  }

  function tailor(stable, job){
    const item = { ...stable };
    ensureExtraArrays(item);
    item.workDo = item.workDo || [];
    item.workAvoid = item.workAvoid || [];
    item.familyDo = item.familyDo || [];
    item.familyAvoid = item.familyAvoid || [];
    const doExtra = [];
    const avoidExtra = [];
    const doExtraZh = [];
    const avoidExtraZh = [];
    const jobLower = (job||'').toLowerCase();
    if (/developer|engineer|dev|product|designer|pm/.test(jobLower)) { /* future branches */ }
    if(/student/.test(jobLower)){ doExtra.push('Review','Deep research','Paper drafting'); avoidExtra.push('Late-night distraction','Unplanned browsing'); doExtraZh.push('复习','深度研究','论文起草'); avoidExtraZh.push('深夜分心','无计划浏览') }
    if(/engineer|developer|dev/.test(jobLower)){ doExtra.push('Deploy','Code review','Bug triage'); avoidExtra.push('Untested changes','Context switching mid-task'); doExtraZh.push('部署','代码审查','缺陷分类'); avoidExtraZh.push('未测试更改','任务中切换上下文') }
    if(/it project manager|itpm|项目/.test(jobLower)){ doExtra.push('Milestone review','Resource rebalancing','Stakeholder alignment'); avoidExtra.push('Status-report noise','Unplanned pivots'); doExtraZh.push('里程碑审查','资源重新平衡','利益相关者对齐'); avoidExtraZh.push('状态报告垃圾信息','未计划紧急转向') }
    if(/product/.test(jobLower)){ doExtra.push('Stakeholder updates','Sprint review','Dependency check'); avoidExtra.push('Scope creep','Meetings without agenda'); doExtraZh.push('利益相关者更新','冲刺审查','依赖检查'); avoidExtraZh.push('范围蔓延','无议程会议') }
    if(/marketing|growth|seo/.test(jobLower)){ doExtra.push('Campaign checks','A/B test review','Audience research'); avoidExtra.push('Vanity metrics','Copying churn without insight'); doExtraZh.push('活动跟踪','A/B测试审查','受众研究'); avoidExtraZh.push('虚荣指标','无洞察复制流失') }
    if(/found|exec|strategy/.test(jobLower)){ doExtra.push('Market entry review','Portfolio check','Risk review'); avoidExtra.push('Speculative bets','Emotional trading'); doExtraZh.push('市场入场','投资组合审查','风险检查'); avoidExtraZh.push('投机性操作','情绪化交易') }
    if(/teach|educator/.test(jobLower)){ doExtra.push('Workshops','Curriculum planning','Grading and feedback'); avoidExtra.push('Unprepared sessions','Last-minute material changes'); doExtraZh.push('研讨会','课程规划','评分和反馈'); avoidExtraZh.push('未准备课程','最后分钟材料变更') }
    if(/creator|design/.test(jobLower)){ doExtra.push('Content production','Concept sketches','Client iteration'); avoidExtra.push('Over-polishing','Deadline scope creep'); doExtraZh.push('创意制作','概念草图','客户迭代'); avoidExtraZh.push('过度打磨','截止日期范围蔓延') }
    if(/ops|manager|operations/.test(jobLower)){ doExtra.push('Inventory restock','Follow-ups','Promotion planning'); avoidExtra.push('Over-promising delivery','Uncategorized inventory'); doExtraZh.push('库存补货','客户跟进','促销规划'); avoidExtraZh.push('过度承诺交付','未分类商品') }
    if(/writer|editor|content/.test(jobLower)){ doExtra.push('Drafting','Editing passes','Publishing plan'); avoidExtra.push('Perfectionism paralysis','Research-free topics'); doExtraZh.push('起草','编辑通过','发布计划'); avoidExtraZh.push('完美主义瘫痪','无研究主题') }
    if(/founder|freelance|remote/.test(jobLower)){ doExtra.push('Review outputs','Follow-up','Plan tomorrow'); avoidExtra.push('Distractions','Untested assumptions'); doExtraZh.push('审查产出','跟进','计划明天'); avoidExtraZh.push('分心','未测试假设') }
    return {
      workDo: [...item.workDo, ...doExtra],
      workAvoid: [...item.workAvoid, ...avoidExtra],
      familyDo: [...item.familyDo],
      familyAvoid: [...item.familyAvoid],
      workDoZh: [...(item.workDoZh||[]), ...doExtraZh],
      workAvoidZh: [...(item.workAvoidZh||[]), ...avoidExtraZh],
      familyDoZh: [...(item.familyDoZh||[])],
      familyAvoidZh: [...(item.familyAvoidZh||[])]
    };
  }

  function tFn(key){
    if(!key) return '';
    if(!window || !window.mppLang || !window.mppLang.t) return key;
    return window.mppLang.t(key);
  }

  const planBtn = document.getElementById('planBtn');
  const weekStartInput = document.getElementById('weekStart');
  const weeklySection = document.getElementById('weekly');
  const weekGrid = document.getElementById('weekGrid');
  const weeklyHeader = document.getElementById('weeklyHeader');
  const weeklyProfile = document.getElementById('weeklyProfile');

  let lastPlanKey = null;

  function doPlan(){
    try {
      console.debug('[debug] doPlan start');
      const nameEl = document.getElementById('visitorName');
      const dobEl = document.getElementById('visitorDob');
      const countryEl = document.getElementById('visitorCountry');
      const jobEl = document.getElementById('visitorJob');
      const tzEl = document.getElementById('visitorTimezone');
      const name = nameEl ? nameEl.value.trim() || localStorage.getItem('mpp.name')?.trim() || '' : '';
      const dob = dobEl ? dobEl.value.trim() || localStorage.getItem('mpp.dob')?.trim() || '' : '';
      const country = countryEl ? countryEl.value.trim() || localStorage.getItem('mpp.country')?.trim() || '' : '';
      const job = jobEl ? jobEl.value.trim() || localStorage.getItem('mpp.job')?.trim() || '' : '';
      const weekRaw = weekStartInput?.value ? new Date(weekStartInput.value) : new Date();
      const tz = (tzEl && tzEl.value) ? tzEl.value : (localStorage.getItem('mpp.tz') || 'UTC+8');
      const planKey = `${name}|${dob}|${country}|${job}|${tz}|${weekStartInput?.value || new Date().toISOString().slice(0,10)}`;
      if (lastPlanKey === planKey && weekGrid && weeklyProfile) {
        if (weeklySection) { weeklySection.style.display = ''; weeklySection.ariaHidden = 'false'; }
        return;
      }
      lastPlanKey = planKey;
      const offset = tzOffsetHours(tz);
      console.debug('[debug] doPlan values:', {name,dob,country,job,tz,weekRaw});
      if(!name || !dob){
        if(weeklySection){ weeklySection.style.display=''; weeklySection.ariaHidden='false'; }
        if(!name) document.getElementById('visitorName')?.focus();
        else document.getElementById('visitorDob')?.focus();
        return;
      }
      const dobY = dob ? Number(String(dob).split('-')[0]) : null;
      const zodiac = dobY ? animal(dobY) : null;
      const profile = [name, country?`· ${country}`:'', job?`· ${job}`:'', zodiac?`· ${zodiac}`:''].filter(Boolean).join(' ');
      if(weeklyProfile) weeklyProfile.innerHTML = `<span class="pill"><strong>${tFn('index_profile_label')}</strong></span> <span class="pill">${profile}</span><span class="pill">${tz}</span>`;
      if (dob && typeof Lunar !== 'undefined' && typeof Solar !== 'undefined') {
        try {
          const parts = String(dob).split('-').map(Number);
          const birthSolar = Solar.fromYmdHms(parts[0], parts[1], parts[2], 12, 0, 0);
          const birthLunar = birthSolar.getLunar();
          const bazi = birthLunar.getBaZi();
          const yearPillar = bazi?.[0] || '';
          const monthPillar = bazi?.[1] || '';
          const dayPillar = bazi?.[2] || '';
          const dayMaster = dayPillar ? dayPillar.charAt(0) : '';
          let leapMarker = '';
          try {
            if (typeof birthLunar.getMonth === 'function' && /^-/.test(String(birthLunar.getMonth()))) leapMarker = '[leap month]';
          } catch (_) { leapMarker = ''; }
          if (weeklyProfile && (yearPillar || monthPillar || dayPillar)) {
            weeklyProfile.innerHTML += ` <span class="pill">BaZi: ${leapMarker}${yearPillar}年 ${monthPillar}月 ${dayPillar}日</span><span class="pill">Day Master: ${dayMaster}</span>`;
          }
        } catch (e) { /* skip bazi if lookup fails */ }
      }
      const start = new Date(weekRaw);
      const days = next7(start);
      const safeGrid = weeklyBreakdowns;
      const summaryEl = weeklyHeader;
      if(!safeGrid || !summaryEl){ console.warn('weekly sections missing'); return; }
      summaryEl.innerHTML = '<table class="week-table"><thead><tr><th>Day / Date</th><th>Day Officer</th><th>Energy Vibe</th><th>Top Auspicious Activity</th></tr></thead><tbody></tbody></table>';
      const tbody = summaryEl.querySelector('tbody');
      safeGrid.innerHTML = '';
      const lang = (window && window.mppLang && typeof window.mppLang.getLang === 'function') ? window.mppLang.getLang() : 'en';
      days.forEach(d => {
        const local = new Date(d);
        const y = local.getFullYear();
        const m = local.getMonth()+1;
        const day = local.getDate();
        const rawStable = officerForDate(y, m, day);
        const stable = rawStable || items[0];
        const tItem = tailor(stable, job || '');
        const officerIndex = items.indexOf(stable);
        const enDo = [...(tItem.workDo||[])];
        const enAvoid = [...(tItem.workAvoid||[])];
        const zhDo = [...(tItem.workDoZh||[])];
        const zhAvoid = [...(tItem.workAvoidZh||[])];
        const zhFamilyDo = [...(tItem.familyDoZh||[])];
        const zhFamilyAvoid = [...(tItem.familyAvoidZh||[])];
        function boldLead(str){ return str ? str.split('. ').map(s=>`<strong>${s}</strong>`).join('. ') : ''; }
        function sentenceFmt(en, zh){
          if(lang==='zh') return zh && zh.length ? zh.join('。')+'。' : '';
          if(!en || !en.length) return '';
          if(en.length===1) return en[0] + '.';
          return en.slice(0,-1).join(', ') + ' and ' + en[en.length-1] + '.';
        }
        const workDoSentence = sentenceFmt(enDo, zhDo);
        const avoidSentence = sentenceFmt(enAvoid, zhAvoid);
        const familyDoSentence = sentenceFmt([...(tItem.familyDo||[])], zhFamilyDo);
        const familyAvoidSentence = sentenceFmt([...(tItem.familyAvoid||[])], zhFamilyAvoid);
        const dayTitle = `${WEEKDAYS[local.getDay()]}, ${fmt(local)}`;
        const officerTitle = `${stable.cn ? stable.cn + ' / ' : ''}${stable.en || ''}`;
        const dayPrologue = tFn('index_cycle_label').replace('{n}', ((officerIndex>=0 ? officerIndex : 0)+1));
        const topActivity = stable.top || (enDo[0] || '');
        const topActivityText = lang === 'zh' ? (zhDo[0] || topActivity) : topActivity;
        if(tbody){
          const tr = document.createElement('tr');
          tr.innerHTML = `<td>${dayTitle}</td><td>${officerTitle}</td><td>${stable.vibe || ''}</td><td>${topActivityText}</td>`;
          tbody.appendChild(tr);
        }
        const doLead = tFn('index_do_today') || 'WHAT TO DO';
        const avoidLead = tFn('index_avoid_today') || 'WHAT TO AVOID';
        const familyTitle = tFn('index_family_label') || 'Family';
        const familyAvoidTitle = tFn('index_family_avoid_label') || 'Family avoid';
        const section = document.createElement('section');
        section.className = 'card day-breakdown';
        section.innerHTML = `
          <h3>${dayTitle} — ${stable.en || ''} ${stable.cn ? '('+stable.cn+')' : ''}</h3>
          <blockquote><strong>The Vibe:</strong> ${stable.note || ''}</blockquote>
          <ul>
            <li><strong>🟢 ${doLead}</strong> ${workDoSentence}</li>
            <li><strong>❌ ${avoidLead}</strong> ${avoidSentence}</li>
            <li><strong>🏠 ${familyTitle}</strong> ${familyDoSentence}</li>
            <li><strong>🚫 ${familyAvoidTitle}</strong> ${familyAvoidSentence}</li>
          </ul>
        `;
        safeGrid.appendChild(section);
      });
      console.debug('[debug] doPlan rendered for week', weekRaw, 'tz', tz, 'rows', safeGrid.children.length);
      const section = weeklySection;
      if(section){
        section.style.display = '';
        section.ariaHidden = 'false';
      }
    } catch (err) {
      console.error('[debug] doPlan error', err);
      throw err;
    }
  }

  planBtn?.addEventListener('click', e => { e.preventDefault(); lastPlanKey = null; doPlan(); });
  const today = new Date();
  if(weekStartInput) weekStartInput.value = fmt(today);
  if(typeof window !== 'undefined'){
    window.__officerPlanApi = {
      doPlan,
      next7,
      officerForDate,
      tailor,
      tzOffsetHours
    };
  }
})();
