const DATA = [
  { en: "Establish", cn: "建", workDo: ["Start projects","Important decisions","Contracts","Meetings","Planning"], workAvoid: ["Arguments","Untested launches","Scope creep"], familyDo: ["Family meetings","Set goals together","Assign chores"], familyAvoid: ["Confrontation","Rushed travel"], clash: "猪", clashDir: "West", element: "Wood", note: "Good for beginnings and structure. Avoid confrontation.",
    workDoZh: ["启动项目","重要决策","合同","会议","规划"], workAvoidZh: ["争执","未验证上线","范围蔓延"], familyDoZh: ["家庭会议","共同设目标","分配家务"], familyAvoidZh: ["对抗","仓促出行"] },
  { en: "Remove", cn: "除", workDo: ["Cancel bad plans","Clear backlog","Pay debts","Habits reset"], workAvoid: ["Celebrations","Grand openings"], familyDo: ["Declutter home","End bad patterns","Short trips"], familyAvoid: ["Big parties"], clash: "鼠", clashDir: "South", element: "Wood", note: "Best for removal, healing, and endings.",
    workDoZh: ["取消不良计划","清理积压","还债","习惯重置"], workAvoidZh: ["庆祝","盛大开幕"], familyDoZh: ["整理家居","结束坏习惯","短途旅行"], familyAvoidZh: ["大型派对"] },
  { en: "Full", cn: "满", workDo: ["Deliver results","Collect payments","Celebrate wins"], workAvoid: ["New contracts","Overcommit"], familyDo: ["Gather together","Celebrate milestones","Share meals"], familyAvoid: ["Long trips","Big spending"], clash: "牛", clashDir: "East", element: "Earth", note: "Auspicious for rewards and abundance.",
    workDoZh: ["交付成果","收款","庆祝胜利"], workAvoidZh: ["新合同","过度承诺"], familyDoZh: ["团聚","庆祝里程碑","共餐"], familyAvoidZh: ["长途旅行","大额支出"] },
  { en: "Balance", cn: "平", workDo: ["Routine work","Maintenance","Study","Publishing"], workAvoid: ["High-stakes deals","Construction start"], familyDo: ["Steady routine","Home projects","Together time"], familyAvoid: ["Big events","Weddings"], clash: "虎", clashDir: "North", element: "Earth", note: "Neutral day; stay steady and avoid risks.",
    workDoZh: ["常规工作","维护","学习","出版"], workAvoidZh: ["高风险交易","开工动土"], familyDoZh: ["稳定日常","家居项目","共处时光"], familyAvoidZh: ["大型活动","婚礼"] },
  { en: "Stable", cn: "定", workDo: ["Agreements","Scheduling","Steady investments","Meetings"], workAvoid: ["Funerals","Risky bets","Disputes"], familyDo: ["Resolve commitments","Plan ahead","Quality time"], familyAvoid: ["Risk-taking","Arguments"], clash: "兔", clashDir: "West", element: "Metal", note: "Good for settling matters and commitments.",
    workDoZh: ["定约","排程","稳健投资","会议"], workAvoidZh: ["丧事","冒险投注","纠纷"], familyDoZh: ["兑现承诺","提前规划","优质时光"], familyAvoidZh: ["冒险","争执"] },
  { en: "Initiate", cn: "执", workDo: ["Follow-through","Approvals","Administrative work","Offerings"], workAvoid: ["Travel","Funerals","Moving"], familyDo: ["Family rituals","House rules","Planning"], familyAvoid: ["Travel","Moving homes"], clash: "龙", clashDir: "South", element: "Metal", note: "Favors discipline and steady effort.",
    workDoZh: ["跟进","审批","行政工作","祭典"], workAvoidZh: ["旅行","丧事","搬家"], familyDoZh: ["家庭仪式","家规","规划"], familyAvoidZh: ["旅行","搬家"] },
  { en: "Destruction", cn: "破", workDo: ["Problem-solving","Audits","Release old tools","End bad projects"], workAvoid: ["Weddings","Promises","Celebrations"], familyDo: ["Resolve conflicts","Release grudges","Clean up"], familyAvoid: ["New promises","Celebrations"], clash: "蛇", clashDir: "East", element: "Earth", note: "Use carefully; good for endings, not beginnings.",
    workDoZh: ["解决问题","审计","淘汰旧工具","结束不良项目"], workAvoidZh: ["婚礼","承诺","庆祝"], familyDoZh: ["化解冲突","放下怨恨","清理"], familyAvoidZh: ["新承诺","庆祝"] },
  { en: "Danger", cn: "危", workDo: ["Risk review","Defensive planning","Keep low profile"], workAvoid: ["New contracts","Long journeys","Big launches"], familyDo: ["Safety checks","Low-key time","Support"], familyAvoid: ["Big ceremonies","Travel"], clash: "马", clashDir: "North", element: "Water", note: "Keep caution. Do not take chances.",
    workDoZh: ["风险评估","防御性规划","保持低调"], workAvoidZh: ["新合同","长途旅行","盛大发布"], familyDoZh: ["安全检查","低调相处","支持"], familyAvoidZh: ["大型仪式","旅行"] },
  { en: "Success", cn: "成", workDo: ["Business deals","Seal agreements","Completion","Deliveries"], workAvoid: ["Lawsuits","Surgery","Conflict"], familyDo: ["Celebrations","Mergers","Gatherings"], familyAvoid: ["Conflict","Surgery timing"], clash: "羊", clashDir: "West", element: "Water", note: "Auspicious for outcomes and celebrations.",
    workDoZh: ["商业交易","签约","完成","交付"], workAvoidZh: ["诉讼","手术","冲突"], familyDoZh: ["庆祝","合并","聚会"], familyAvoidZh: ["冲突","手术时机"] },
  { en: "Receive", cn: "收", workDo: ["Inventory","Collections","Filing","Returns"], workAvoid: ["Investments","Moving","Marriage timing"], familyDo: ["Sorting home","Harvesting together","Bonding"], familyAvoid: ["Investments","Moving"], clash: "猴", clashDir: "South", element: "Metal", note: "Best for closure and consolidation.",
    workDoZh: ["库存","收款","归档","退货"], workAvoidZh: ["投资","搬家","婚嫁时机"], familyDoZh: ["整理家居","共同收获","感情维系"], familyAvoidZh: ["投资","搬家"] },
  { en: "Open", cn: "开", workDo: ["New business","Opening events","Public launches","Travel"], workAvoid: ["Big repairs","Funerals at family"], familyDo: ["Travel together","New beginnings","Public events with family"], familyAvoid: ["Burying memories","Ignoring repairs"], clash: "鸡", clashDir: "East", element: "Metal", note: "Great for openings, fortune, and travel.",
    workDoZh: ["新业务","开业","公开发布","旅行"], workAvoidZh: ["大型维修","家中丧事"], familyDoZh: ["一起旅行","新起点","家庭公开活动"], familyAvoidZh: ["埋葬回忆","忽视维修"] },
  { en: "Close", cn: "闭", workDo: ["Finish old tasks","Solo work","Quiet focus"], workAvoid: ["Public events","Meetings","New openings"], familyDo: ["Rest at home","Quiet time","Close out family matters"], familyAvoid: ["Big meetings","Starting new ventures"], clash: "狗", clashDir: "North", element: "Earth", note: "Time to finish quietly, not to begin.",
    workDoZh: ["完成旧任务","独立工作","专注安静"], workAvoidZh: ["公开活动","会议","新开启"], familyDoZh: ["在家休息","安静时光","收尾家庭事务"], familyAvoidZh: ["大型会议","开始新事业"] }
];
const ORDER = ["建","除","满","平","定","执","破","危","成","收","开","闭"];
const WEEKDAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function toMonday(d){ const dt=new Date(d); const day=dt.getDay(); const diff=dt.getDate()-day+(day===0?-6:1); dt.setDate(diff); dt.setHours(0,0,0,0); return dt; }
function next7(start){ const out=[]; for(let i=0;i<7;i++){ const d=new Date(start); d.setDate(start.getDate()+i); out.push(d);} return out; }
function fmt(d){ return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`; }
function animal(y){ const m=["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"]; return m[((y-4)%12+12)%12]; }

function tailor(item, job){
  const j=(job||"").toLowerCase();
  let doExtra=[], avoidExtra=[], doExtraZh=[], avoidExtraZh=[];
  if(/student|study|scholar|learner|undergrad/.test(j)){
    doExtra.push("Revision sessions","Research deep dives","Essay drafting");
    avoidExtra.push("Late-night distractions","Unstructured browsing");
    doExtraZh.push("复习","深度研究","论文起草");
    avoidExtraZh.push("深夜分心","无计划浏览");
  } else if(/engineer|developer|programmer|coder|software/.test(j)){
    doExtra.push("Deployments","Code reviews","Bug triage");
    avoidExtra.push("Untested changes","Context switching mid-task");
    doExtraZh.push("部署","代码审查","缺陷分类");
    avoidExtraZh.push("未测试更改","任务中切换上下文");
  } else if(/it project manager|itpm|项目/.test(j)){
    doExtra.push("Milestone reviews","Resource rebalancing","Stakeholder alignment");
    avoidExtra.push("Status-report spam","Unplanned emergency pivots");
    doExtraZh.push("里程碑审查","资源重新平衡","利益相关者对齐");
    avoidExtraZh.push("状态报告垃圾信息","未计划紧急转向");
  } else if(/project manager|pm/.test(j)){
    doExtra.push("Stakeholder updates","Sprint reviews","Dependency checks");
    avoidExtra.push("Scope creep","Meeting without agenda");
    doExtraZh.push("利益相关者更新","冲刺审查","依赖检查");
    avoidExtraZh.push("范围蔓延","无议程会议");
  } else if(/marketer|campaign|seo|growth/.test(j)){
    doExtra.push("Campaign tracking","A/B test reviews","Audience research");
    avoidExtra.push("Vanity metrics","Copy churn without insight");
    doExtraZh.push("活动跟踪","A/B测试审查","受众研究");
    avoidExtraZh.push("虚荣指标","无洞察复制流失");
  } else if(/trader|finance|banker|broker|invest/.test(j)){
    doExtra.push("Market entries","Portfolio reviews","Risk checks");
    avoidExtra.push("Speculative moves","Emotional trading");
    doExtraZh.push("市场入场","投资组合审查","风险检查");
    avoidExtraZh.push("投机性操作","情绪化交易");
  } else if(/teacher|lecturer|tutor|edu/.test(j)){
    doExtra.push("Workshops","Lesson planning","Marking and feedback");
    avoidExtra.push("Unprepared classes","Last-minute material changes");
    doExtraZh.push("研讨会","课程规划","评分和反馈");
    avoidExtraZh.push("未准备课程","最后分钟材料变更");
  } else if(/designer|artist|creator|design/.test(j)){
    doExtra.push("Creative production","Concept sketches","Client iterations");
    avoidExtra.push("Over-polishing","Deadline scope creep");
    doExtraZh.push("创意制作","概念草图","客户迭代");
    avoidExtraZh.push("过度打磨","截止日期范围蔓延");
  } else if(/retail|sales|store|shop/.test(j)){
    doExtra.push("Stock replenishment","Customer follow-ups","Promo planning");
    avoidExtra.push("Overpromising delivery","Unsorted merchandise");
    doExtraZh.push("库存补货","客户跟进","促销规划");
    avoidExtraZh.push("过度承诺交付","未分类商品");
  } else if(/writer|author|blogger|copywriter|writer/.test(j)){
    doExtra.push("Drafting","Editing passes","Publishing schedules");
    avoidExtra.push("Perfectionism paralysis","Unresearched topics");
    doExtraZh.push("起草","编辑通过","发布计划");
    avoidExtraZh.push("完美主义瘫痪","无研究主题");
  } else {
    doExtra.push("Review outputs","Follow-ups","Plan tomorrow");
    avoidExtra.push("Distractions","Untested assumptions");
    doExtraZh.push("审查产出","跟进","计划明天");
    avoidExtraZh.push("分心","未测试假设");
  }
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

const planBtn = document.getElementById("planBtn");
const weekStartInput = document.getElementById("weekStart");
const weeklySection = document.getElementById("weekly");
const weekGrid = document.getElementById("weekGrid");
const weeklyHeader = document.getElementById("weeklyHeader");
const weeklyProfile = document.getElementById("weeklyProfile");

function tFn(key){
  if(!key) return '';
  if(!window || !window.mppLang || !window.mppLang.t) return key;
  return window.mppLang.t(key);
}

function tzOffsetHours(tz){
  const map = {"UTC+8":8,"UTC+9":9,"UTC+10":10,"UTC-4":-4,"UTC-5":-5,"UTC+0":0,"UTC+1":1,"UTC+5:30":5.5,"UTC+7":7};
  if(tz && map[tz]!==undefined) return map[tz];
  const m = String(tz||"").match(/UTC([+-])(\d+)(?::(\d+))?/);
  if(!m) return 8;
  const sign = m[1]==="+"?1:-1;
  const hh = parseInt(m[2],10); const mm = m[3]?parseInt(m[3],10):0;
  return sign*(hh + mm/60);
}

function doPlan(){
  try {
    console.debug("[debug] doPlan start");
    const nameEl = document.getElementById("visitorName");
    const dobEl = document.getElementById("visitorDob");
    const countryEl = document.getElementById("visitorCountry");
    const jobEl = document.getElementById("visitorJob");
    const tzEl = document.getElementById("visitorTimezone");
    const name = nameEl ? nameEl.value.trim() : "";
    const dob = dobEl ? dobEl.value.trim() : "";
    const country = countryEl ? countryEl.value.trim() : "";
    const job = jobEl ? jobEl.value.trim() : "";
    const weekRaw = weekStartInput?.value ? new Date(weekStartInput.value) : new Date();
    const tz = (tzEl && tzEl.value) ? tzEl.value : "UTC+8";
    const offset = tzOffsetHours(tz);
    console.debug("[debug] doPlan values:", {name,dob,country,job,tz,weekRaw});
    if(!name || !dob){
      if(weeklySection) weeklySection.style.display="";
      if(weeklySection) weeklySection.ariaHidden="false";
      if(!name) document.getElementById("visitorName")?.focus();
      else document.getElementById("visitorDob")?.focus();
      return;
    }
    const dobY = dob ? Number(String(dob).split("-")[0]) : null;
    const zodiac = dobY ? animal(dobY) : null;
    const profile = [name, country?`· ${country}`:"", job?`· ${job}`:"", zodiac?`· ${zodiac}`:""].filter(Boolean).join(" ");
    if(weeklyProfile) weeklyProfile.innerHTML = `<span class="pill"><strong>${tFn('index_profile_label')}</strong></span> <span class="pill">${profile}</span><span class="pill">${tz}</span>`;
    if (dob && typeof Lunar !== "undefined" && typeof Solar !== "undefined") {
      try {
        const parts = String(dob).split("-").map(Number);
        const birthSolar = Solar.fromYmdHms(parts[0], parts[1], parts[2], 12, 0, 0);
        const birthLunar = birthSolar.getLunar();
        const bazi = birthLunar.getBaZi();
        const yearPillar = bazi?.[0] || "";
        const monthPillar = bazi?.[1] || "";
        const dayPillar = bazi?.[2] || "";
        const dayMaster = dayPillar ? dayPillar.charAt(0) : "";
        let leapMarker = "";
        try {
          if (typeof birthLunar.getMonth === "function" && /^-/.test(String(birthLunar.getMonth()))) leapMarker = "[leap month]";
        } catch (_) { leapMarker = ""; }
        if (weeklyProfile && (yearPillar || monthPillar || dayPillar)) {
          weeklyProfile.innerHTML += ` <span class="pill">BaZi: ${leapMarker}${yearPillar}年 ${monthPillar}月 ${dayPillar}日</span><span class="pill">Day Master: ${dayMaster}</span>`;
        }
      } catch (e) { /* skip bazi if lookup fails */ }
    }
    const start = new Date(weekRaw);
    const days = next7(start);
    const safeGrid = weekGrid;
    if(!safeGrid){ console.warn("weekGrid missing"); return; }
    safeGrid.innerHTML = '';
    days.forEach((d)=>console.debug("[debug] day loop", fmt(d), officerForDate ? 'officerForDate-ready' : 'missing-officer'));
    const lang = (window && window.mppLang && typeof window.mppLang.getLang === 'function') ? window.mppLang.getLang() : 'en';
    days.forEach(d => {
      const local = new Date(d);
      const y = local.getFullYear(), m = local.getMonth()+1, day = local.getDate();
      const item = officerForDate(y, m, day);
      const stable = item || DATA[0];
      const tItem = tailor(stable, job || "");
      const officerIndex = DATA.indexOf(stable);
      const row = document.createElement("div");
      row.className = "day-row";
      row.style.cursor = "pointer";
      row.title = tFn('index_click_hint');
      let doText = "", avoidText = "", familyDoText = "", familyAvoidText = "";
      const enDo = [...(tItem.workDo||[])];
      const enAvoid = [...(tItem.workAvoid||[])];
      const zhDo = [...(tItem.workDoZh||[])];
      const zhAvoid = [...(tItem.workAvoidZh||[])];
      const zhFamilyDo = [...(tItem.familyDoZh||[])];
      const zhFamilyAvoid = [...(tItem.familyAvoidZh||[])];
      if (lang === 'zh') {
        doText = zhDo.join("。");
        avoidText = zhAvoid.join("。");
        familyDoText = zhFamilyDo.join("。");
        familyAvoidText = zhFamilyAvoid.join("。");
      } else if (lang === 'both') {
        doText = enDo.join(". ") + " / " + zhDo.join("。");
        avoidText = enAvoid.join(". ") + " / " + zhAvoid.join("。");
        familyDoText = [...(tItem.familyDo||[])].join(". ") + " / " + zhFamilyDo.join("。");
        familyAvoidText = [...(tItem.familyAvoid||[])].join(". ") + " / " + zhFamilyAvoid.join("。");
      } else {
        doText = enDo.join(". ");
        avoidText = enAvoid.join(". ");
        familyDoText = [...(tItem.familyDo||[])].join(". ");
        familyAvoidText = [...(tItem.familyAvoid||[])].join(". ");
      }
      row.innerHTML = `
        <div>
          <div class="day-date">${WEEKDAYS[local.getDay()]}, ${fmt(local)}</div>
          <div class="day-officer">${stable.cn ? stable.cn + " / " : ""}${stable.en || ""}</div>
          <div class="day-meta">${tFn('index_cycle_label').replace('{n}', ((officerIndex>=0?officerIndex:0)+1))} · ${stable.note||""}</div>
        </div>
        <div class="lists">
          <div class="list-title" style="margin-bottom:.35rem;">${tFn('index_do_today')}</div>
          <p class="intro" style="margin:0;">${doText}</p>
          <p class="intro" style="margin:.2rem 0 0;color:var(--muted);font-size:.92rem;">${familyDoText}</p>
          <div class="list-title group" style="margin-top:.6rem;margin-bottom:.35rem;">${tFn('index_avoid_today')}</div>
          <p class="intro" style="margin:0;">${avoidText}</p>
          <p class="intro" style="margin:.2rem 0 0;color:var(--muted);font-size:.92rem;">${familyAvoidText}</p>
        </div>
      `;
      row.addEventListener("click", ()=>{
        weekStartInput.value = fmt(start);
        weekStartInput.dispatchEvent(new Event('change'));
        doPlan();
      });
      safeGrid.appendChild(row);
    });
    console.debug("[debug] doPlan rendered for week", weekRaw, "tz",tz,"rows",safeGrid.children.length);
    const section = weeklySection;
    if(section){
      section.style.display = "";
      section.ariaHidden = "false";
    }
  } catch (err) {
    console.error("[debug] doPlan error", err);
    throw err;
  }
}

planBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  doPlan();
});

const today = new Date();
if(weekStartInput) weekStartInput.value = fmt(today);

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
    const ORDER_RAW = ["建","除","满","平","定","执","破","危","成","收","开","闭"];
    const monthBuildBase = [2,5,8,11,0,3,6,9];
    const mb = monthBuildBase[((m-1)%12+12)%12] || 0;
    const seq = ((d - mb) % 12 + 12) % 12;
    raw = ORDER_RAW[seq];
  }
  const match = DATA.find(item => item.cn === raw);
  return match || DATA[officerIndexForDate(y,m,d)%12];
}
