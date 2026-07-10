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
  const ACTIVITY_TAG = { launch:'kai', contract:'qian', deployment:'dong', kickoff:'dong', negotiation:'tan', purchase:'jiao', wedding:'jia', rom:'jia', engagement:'jia', bed:'an', move:'ru', renovation:'xiu' };
  const ACTIVITY_LABEL = { launch:{en:'Business Launch',zh:'开业'}, contract:{en:'Contract Signing',zh:'签约'}, deployment:{en:'System Deployment',zh:'部署'}, kickoff:{en:'Project Kickoff',zh:'开工'}, negotiation:{en:'Negotiation',zh:'谈判'}, purchase:{en:'Asset Purchase',zh:'交易'}, wedding:{en:'Wedding',zh:'嫁娶'}, rom:{en:'Legal Registration',zh:'注册结婚'}, engagement:{en:'Engagement',zh:'过大礼'}, bed:{en:'Nuptial Bed',zh:'安床'}, move:{en:'Property Move',zh:'入宅'}, renovation:{en:'Renovation',zh:'修造'} };
  const NOTE_ZH = { '建':'建日主开创。宜启动新项目、开业、开工、签约、嫁娶、入宅、动土；百事可为的开端之日。', '除':'除日主清除。宜除旧布新、解约清账、疗病出行；忌开市、上任、动土。', '满':'满日主圆满。宜嫁娶、开市、交易、移徙、出行；忌动土、修造、安葬。', '平':'平日主平稳。宜修造、嫁娶、动土、造具；忌祈福、求嗣、词讼。', '定':'定日主安定。宜签约、纳财、安床、嫁娶、交易；忌词讼、出行。', '执':'执日主执行。宜修造、纳财、交易、捕捉；忌开市、移徙、嫁娶、出行。', '破':'破日主破除。宜破屋、坏垣、求医治病；忌嫁娶、签约、开市、交易、出行。大事不宜。', '危':'危日主危险。宜安床、祭祀、祈福；忌出行、登高、嫁娶、移徙。宜守不宜攻。', '成':'成日主成就。宜嫁娶、开市、签约、交易、入宅、出行；忌词讼、诉讼。诸事皆成。', '收':'收日主收敛。宜纳财、收购、入学、安床、嫁娶；忌开市、放债、出行。', '开':'开日主开通。宜开业、开市、动工、出行、入学；忌安葬。百事开启之日。', '闭':'闭日主闭合。宜安葬、修造、纳财；忌开市、出行、嫁娶、签约。宜静不宜动。' };
  const SUIT = {
    '建':{good:['kai','qian','dong','jia','ru','xiu'],neutral:['tan','jiao','an'],avoid:[]},
    '除':{good:['jiao'],neutral:['tan','ru','an'],avoid:['kai','dong','jia','xiu']},
    '满':{good:['jia','kai','jiao','ru'],neutral:['tan','an'],avoid:['dong','xiu']},
    '平':{good:['xiu','jia','dong','an'],neutral:['kai','jiao','ru'],avoid:['tan']},
    '定':{good:['qian','jiao','an','jia'],neutral:['kai','ru','dong'],avoid:['tan']},
    '执':{good:['xiu','jiao'],neutral:['tan','dong','an'],avoid:['kai','ru','jia']},
    '破':{good:[],neutral:['xiu','dong'],avoid:['jia','qian','kai','jiao','ru','tan','an']},
    '危':{good:['an'],neutral:['tan','dong','xiu'],avoid:['ru','jia','kai','jiao','qian']},
    '成':{good:['jia','kai','qian','jiao','ru'],neutral:['dong','an'],avoid:['tan']},
    '收':{good:['jiao','an','jia'],neutral:['qian','dong','xiu'],avoid:['kai','ru']},
    '开':{good:['kai','dong','ru'],neutral:['tan','jiao','qian','an','jia','xiu'],avoid:[]},
    '闭':{good:['xiu','jiao'],neutral:['dong','an','tan'],avoid:['kai','ru','jia','qian']}
  };
  function next7(start){
    const days=[];
    const d=new Date(start);
    d.setHours(0,0,0,0);
    for(let i=0;i<7;i++){ days.push(new Date(d)); d.setDate(d.getDate()+1); }
    return days;
  }
  function officerIndexForDate(y,m,d){ return ((y*13+m)*31+d)%12; }
  function officerForDate(y,m,d){
    if (typeof Solar !== "undefined" && Solar && typeof Solar.fromDate === "function") {
      try {
        const dObj = new Date(Date.UTC(y, (m-1), d));
        const raw = Solar.fromDate(dObj).getLunar().getZhiXing();
        const match = items.find(item => item.cn === raw);
        if (match) return match;
      } catch (e) {}
    }
    // Graceful JS-only fallback — only used if the lunar library is unavailable.
    return items[officerIndexForDate(y,m,d) % 12];
  }

  function ensureExtraArrays(stable){
    stable.workDoZh = stable.workDoZh || [];
    stable.workAvoidZh = stable.workAvoidZh || [];
    stable.familyDoZh = stable.familyDoZh || [];
    stable.familyAvoidZh = stable.familyAvoidZh || [];
  }

  function tailor(stable, job, activity){
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

    if (activity === 'launch' || activity === 'contract') {
      doExtra.push('Confirm deal terms before ending the day', 'Protect the messaging story');
      avoidExtra.push('Last-minute scope changes', 'Ignoring hidden dependency risk');
      doExtraZh.push('收尾前确认交易条款','保护叙事主线');
      avoidExtraZh.push('最后时刻改范围','忽略隐藏依赖风险');
    } else if (activity === 'deployment' || activity === 'kickoff') {
      doExtra.push('Run the checklist in order', 'Keep the rollback notes open');
      avoidExtra.push('Unreviewed config changes', 'Overloading the same window');
      doExtraZh.push('按清单执行','保留回滚备注');
      avoidExtraZh.push('未复核配置变更','把同一时段排满');
    } else if (activity === 'negotiation') {
      doExtra.push('Anchor on priority outcomes first', 'Confirm counterpoints in writing');
      avoidExtra.push('Emotional bargaining', 'Weak dependency assumptions');
      doExtraZh.push('先锚定优先结果','书面确认反对方要点');
      avoidExtraZh.push('情绪化议价','弱依赖假设');
    } else if (activity === 'purchase') {
      doExtra.push('Verify receipt and delivery terms', 'Keep backup funding in writing');
      avoidExtra.push('Unverified vendor promises', 'Hidden fees or late clauses');
      doExtraZh.push('核对到帐与交付条款','书面留备份资金');
      avoidExtraZh.push('未核实的供应商承诺','隐藏费用或迟延条款');
    } else if (activity === 'wedding' || activity === 'rom' || activity === 'engagement') {
      doExtra.push('Confirm timeline with both families', 'Keep the guest list tight');
      avoidExtra.push('Surprise pressure on timing', 'Money talk during ceremony');
      doExtraZh.push('与双方家庭确认时间线','精简宾客名单');
      avoidExtraZh.push('在仪式上突然施压','仪式上谈钱');
    } else if (activity === 'bed' || activity === 'move') {
      doExtra.push('Map entry ritual and orientation', 'Keep the first night low-key');
      avoidExtra.push('Heavy setup the first day', 'Unfinished packing fights');
      doExtraZh.push('规划入宅仪式与坐向','首晚保持低压');
      avoidExtraZh.push('首日重度布置','未整理完就争吵');
    } else if (activity === 'renovation') {
      doExtra.push('Split the project in phases', 'Confirm contractor rests');
      avoidExtra.push('Full demolition without backup plan', 'Ignoring safety checks');
      doExtraZh.push('把工程拆期执行','确认工人休息安排');
      avoidExtraZh.push('无后备方案就全面拆改','忽略安全检查');
    }
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
      const jobEl = document.getElementById('visitorJob');
      const countryEl = document.getElementById('visitorCountry');
      const genderEl = document.getElementById('gender');
      const tzEl = document.getElementById('visitorTimezone');
      const activityEl = document.getElementById('zeRiActivity');
      const name = nameEl ? nameEl.value.trim() || localStorage.getItem('mpp.name')?.trim() || '' : '';
      const dob = dobEl ? dobEl.value.trim() || localStorage.getItem('mpp.dob')?.trim() || '' : '';
      const country = countryEl ? countryEl.value.trim() || localStorage.getItem('mpp.country')?.trim() || '' : '';
      const job = jobEl ? jobEl.value.trim() || localStorage.getItem('mpp.job')?.trim() || '' : '';
      const gender = genderEl ? genderEl.value || localStorage.getItem('mpp.gender') || '' : '';
      const weekRaw = weekStartInput?.value ? new Date(weekStartInput.value) : new Date();
      const tz = (tzEl && tzEl.value) ? tzEl.value : (localStorage.getItem('mpp.tz') || 'UTC+8');
      const activity = activityEl ? activityEl.value : '';
      const planKey = `${name}|${dob}|${country}|${job}|${tz}|${gender}|${activity}|${weekStartInput?.value || new Date().toISOString().slice(0,10)}`;
      if (lastPlanKey === planKey && weekGrid && weeklyProfile) {
        if (weeklySection) { weeklySection.style.display = ''; weeklySection.ariaHidden = 'false'; }
        return;
      }
      lastPlanKey = planKey;
      const offset = tzOffsetHours(tz);
      console.debug('[debug] doPlan values:', {name,dob,country,job,gender,tz,activity,weekRaw});
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
      const safeGrid = weekGrid;
      const summaryEl = weeklyHeader;
      if(!safeGrid || !summaryEl){ console.warn('weekly sections missing'); return; }
      safeGrid.innerHTML = '';
      const lang = (window && window.mppLang && typeof window.mppLang.getLang === 'function') ? window.mppLang.getLang() : 'en';
      const isZeRi = !!document.getElementById('zeRiActivity');
      const SHARED_ACTIVITIES = ['wedding','rom','engagement','bed','move'];
      const companion = (() => {
        const el = document.getElementById('companionReport');
        if(!el) return { present:false, shared:false, verdict:null };
        const g = id => document.getElementById(id);
        const cd1 = g('comp1Dob')?.value.trim() || '';
        const cd2 = g('comp2Dob')?.value.trim() || '';
        if(!cd1 || !cd2) return { present:false, shared:false, verdict:null };
        const a1 = animal(Number(cd1.split('-')[0]));
        const a2 = animal(Number(cd2.split('-')[0]));
        const shared = SHARED_ACTIVITIES.includes(activity);
        const clash = {Rat:'Horse',Horse:'Rat',Ox:'Goat',Goat:'Ox',Tiger:'Monkey',Monkey:'Tiger',Rabbit:'Rooster',Rooster:'Rabbit',Dragon:'Dog',Dog:'Dragon',Snake:'Pig',Pig:'Snake'};
        const combine = {Rat:'Ox',Ox:'Rat',Tiger:'Pig',Pig:'Tiger',Rabbit:'Dog',Dog:'Rabbit',Dragon:'Rooster',Rooster:'Dragon',Snake:'Goat',Goat:'Snake',Horse:'Monkey',Monkey:'Horse'};
        let verdict, verdictLabel, noteText;
        if(clash[a1]===a2){ verdict='clash'; verdictLabel='Clash (相冲)'; noteText=`Birth-year animals ${a1} & ${a2} form a direct clash pair. In traditional pairing this flags friction in timing and temperament — not a verdict. Favor Balance or Stable days for shared decisions, and avoid Danger days.`; }
        else if(combine[a1]===a2){ verdict='harmonious'; verdictLabel='Harmonious (六合)'; noteText=`Birth-year animals ${a1} & ${a2} form a natural supporting pair — traditionally seen as compatible timing energy, a good omen for shared milestones. Prioritize Establish or Open days for joint launches.`; }
        else { verdict='neutral'; verdictLabel='Neutral (中和)'; noteText=`Birth-year animals ${a1} & ${a2} neither clash nor form a classic harmony pair. No timing friction flagged — choose dates by activity fit above.`; }
        return { present:true, shared, verdict, verdictLabel, noteText, a1, a2, n1: g('comp1Name')?.value.trim() || 'Partner 1', n2: g('comp2Name')?.value.trim() || 'Partner 2' };
      })();
      if(!isZeRi){
        summaryEl.innerHTML = '<table class="week-table"><thead><tr><th>Day / Date</th><th>Day Officer</th><th>Energy Vibe</th><th>Top Auspicious Activity</th></tr></thead><tbody></tbody></table>';
      } else {
        summaryEl.innerHTML = '';
      }
      const tbody = isZeRi ? null : summaryEl.querySelector('tbody');
      const rows = days.map(d => {
        const local = new Date(d);
        const y = local.getFullYear();
        const m = local.getMonth()+1;
        const day = local.getDate();
        const stable = officerForDate(y, m, day) || items[0];
        const tItem = tailor(stable, job || '', activity);
        const enDo = [...(tItem.workDo||[])];
        const enAvoid = [...(tItem.workAvoid||[])];
        const zhDo = [...(tItem.workDoZh||[])];
        const zhAvoid = [...(tItem.workAvoidZh||[])];
        const zhFamilyDo = [...(tItem.familyDoZh||[])];
        const zhFamilyAvoid = [...(tItem.familyAvoidZh||[])];
        const sentenceFmt = (en, zh) => {
          const enS = (!en || !en.length) ? '' : (en.length===1 ? en[0] + '.' : en.slice(0,-1).join(', ') + ' and ' + en[en.length-1] + '.');
          const zhS = (zh && zh.length) ? zh.join('。') + '。' : '';
          if(lang==='zh') return zhS;
          if(lang==='both') return (zhS && enS) ? zhS + ' ' + enS : (zhS || enS);
          return enS;
        };
        const workDoSentence = sentenceFmt(enDo, zhDo);
        const avoidSentence = sentenceFmt(enAvoid, zhAvoid);
        const familyDoSentence = sentenceFmt([...(tItem.familyDo||[])], zhFamilyDo);
        const familyAvoidSentence = sentenceFmt([...(tItem.familyAvoid||[])], zhFamilyAvoid);
        const dayTitle = `${WEEKDAYS[local.getDay()]} ${fmt(local)}`;
        const officerTitle = `${stable.cn ? stable.cn + ' / ' : ''}${stable.en || ''}`;
        const topActivity = activity ? `${stable.top || enDo[0] || ''} — ${activityLabel(activity, lang)}` : (stable.top || enDo[0] || '');
        const rating = ratingFor(stable.cn, activity);
        let compNote = '';
        if(companion.present && companion.shared){
          if(companion.verdict === 'harmonious' && (stable.cn === '建' || stable.cn === '开')) compNote = lang === 'zh' ? '六合助运，此日尤利二人共举' : 'Harmony (六合) boost — especially favorable for this joint day';
          else if(companion.verdict === 'clash' && (stable.cn === '破' || stable.cn === '危')) compNote = lang === 'zh' ? '相冲之日，二人共事宜缓' : 'Clash (相冲) day — caution for joint timing';
        }
        return { local, stable, enDo, zhDo, workDoSentence, avoidSentence, familyDoSentence, familyAvoidSentence, dayTitle, officerTitle, topActivity, rating, compNote };
      });
      if(isZeRi){ renderZeRi(rows, activity, lang, companion); }
      else { renderIndex(rows); }

      // Companion clash block — only meaningful for shared (relationship/household) activities
      const compReport = document.getElementById('companionReport');
      if (compReport) {
        if (companion.present && companion.shared) {
          compReport.innerHTML = `<section class="card companion-report"><h3>${tFn('zeri_companion_block')} · ${companion.n1} &amp; ${companion.n2}</h3><div class="pill">${companion.a1}</div><div class="pill">${companion.a2}</div><p><strong>${companion.verdictLabel}</strong> — ${companion.noteText}</p></section>`;
        } else {
          compReport.innerHTML = '';
        }
      }

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

  function activityLabel(activity, lang){
    const a = ACTIVITY_LABEL[activity];
    if(!a) return activity;
    return lang === 'zh' ? a.zh : (lang === 'both' ? a.zh + ' / ' + a.en : a.en);
  }
  function ratingFor(cn, activity){
    const tag = ACTIVITY_TAG[activity];
    const suit = SUIT[cn];
    if(!tag || !suit) return 'neutral';
    if(suit.good.includes(tag)) return 'good';
    if(suit.avoid.includes(tag)) return 'avoid';
    return 'neutral';
  }
  function renderIndex(rows){
    if(!weeklyHeader || !weekGrid) return;
    const tbody = weeklyHeader.querySelector('tbody');
    rows.forEach(r => {
      if(tbody){
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${r.dayTitle}</td><td>${r.officerTitle}</td><td>${r.stable.vibe || ''}</td><td>${r.topActivity}</td>`;
        tbody.appendChild(tr);
      }
      const section = document.createElement('section');
      section.className = 'card day-breakdown';
      section.innerHTML = `
        <h3>${r.dayTitle} — ${r.stable.en || r.stable.n || ''} ${r.stable.cn ? '('+r.stable.cn+')' : ''}</h3>
        <blockquote><strong>The Vibe:</strong> ${r.stable.note || ''}</blockquote>
        <ul>
          <li><strong>🟢 ${tFn('index_do_today')}</strong> ${r.workDoSentence}</li>
          <li><strong>❌ ${tFn('index_avoid_today')}</strong> ${r.avoidSentence}</li>
          <li><strong>🏠 ${tFn('index_family_label')}</strong> ${r.familyDoSentence}</li>
          <li><strong>🚫 ${tFn('index_family_avoid_label')}</strong> ${r.familyAvoidSentence}</li>
        </ul>
      `;
      weekGrid.appendChild(section);
    });
  }
  function renderZeRi(rows, activity, lang, companion){
    if(!weeklyHeader || !weekGrid) return;
    const list = document.createElement('div');
    list.className = 'zeri-report';
    const fullTxt = tFn('zeri_full_outlook') || 'Full day outlook';
    rows.forEach(r => {
      const suit = SUIT[r.stable.cn] || { good:[], neutral:[], avoid:[] };
      const goodList = suit.good.map(tag => activityLabelByTag(tag, lang)).filter(Boolean);
      const neutralList = suit.neutral.map(tag => activityLabelByTag(tag, lang)).filter(Boolean);
      const avoidList = suit.avoid.map(tag => activityLabelByTag(tag, lang)).filter(Boolean);
      const noteZh = NOTE_ZH[r.stable.cn] || '';
      const noteEn = r.stable.note || '';
      const note = lang === 'zh' ? noteZh : (lang === 'both' ? noteZh + ' ' + noteEn : noteEn);
      const ratingTxt = lang === 'zh' ? (r.rating === 'good' ? '吉' : r.rating === 'avoid' ? '忌' : '平') : (r.rating === 'good' ? 'Auspicious' : r.rating === 'avoid' ? 'Inauspicious' : 'Neutral');
      const actLabel = activityLabel(activity, lang);
      const summary = lang === 'zh' ? `${actLabel}：${ratingTxt}（${r.stable.cn}日）` : `${actLabel}: ${ratingTxt} (${r.stable.cn} day)`;
      const goodTxt = lang === 'zh' ? '宜' : 'Suitable';
      const neutralTxt = lang === 'zh' ? '平' : 'Moderate';
      const avoidTxt = lang === 'zh' ? '忌' : 'Avoid';
      const li = document.createElement('div');
      li.className = 'zeri-day zr-' + r.rating;
      li.innerHTML = `
        <div class="zeri-day-head">
          <span class="zeri-date">${r.dayTitle}</span>
          <span class="zeri-officer">${r.stable.cn} ${r.stable.en || r.stable.n || ''}</span>
          <span class="zeri-rating">${ratingTxt}</span>
        </div>
        <p class="zeri-summary">${summary}</p>
        <p class="zeri-note">${note}</p>
        ${r.compNote ? `<p class="zeri-companion">${r.compNote}</p>` : ''}
        <details class="zeri-full"><summary>${fullTxt}</summary>
          <div class="zeri-suit"><span class="zeri-tag zr-good">${goodTxt}</span><span class="zeri-items">${goodList.join(' · ') || '—'}</span></div>
          <div class="zeri-suit"><span class="zeri-tag zr-neutral">${neutralTxt}</span><span class="zeri-items">${neutralList.join(' · ') || '—'}</span></div>
          <div class="zeri-suit"><span class="zeri-tag zr-avoid">${avoidTxt}</span><span class="zeri-items">${avoidList.join(' · ') || '—'}</span></div>
        </details>
      `;
      list.appendChild(li);
    });
    weekGrid.appendChild(list);
  }
  function activityLabelByTag(tag, lang){
    const map = { kai:ACTIVITY_LABEL.launch, qian:ACTIVITY_LABEL.contract, dong:ACTIVITY_LABEL.deployment, tan:ACTIVITY_LABEL.negotiation, jiao:ACTIVITY_LABEL.purchase, jia:ACTIVITY_LABEL.wedding, an:ACTIVITY_LABEL.bed, ru:ACTIVITY_LABEL.move, xiu:ACTIVITY_LABEL.renovation };
    const a = map[tag];
    if(!a) return '';
    return lang === 'zh' ? a.zh : (lang === 'both' ? a.zh + '/' + a.en : a.en);
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
    window.__reapplyZeRi = function(){ lastPlanKey = null; doPlan(); };
  }
})();
