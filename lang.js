(function(){
  const LS_KEY = 'mpp.lang';
  const q = (sel)=> document.querySelector(sel);
  const qa = (sel)=> document.querySelectorAll(sel);

  const I18N = {
    en: {
      langLabel: 'Language',
      english: 'English',
      chinese: '中文',
      both: '中英',
      // index.html
      index_officer_intro: 'What are the 12 Daily Officers?',
      index_officer_intro_desc: 'In traditional 黄历, each day is guided by one of 12 cycling officers — such as Establish, Remove, Full, Balance, Stable, Initiate, Destruction, Danger, Success, Receive, Open and Close. They date back over two millennia and are still used today to choose better timing for decisions, launches, agreements, travel, and family matters. This tool gives you a simple 7-day view so you can plan your week with that traditional rhythm.',
      index_plan_intro: 'Enter your details for a 7-day officer plan.',
      index_name: 'Name',
      index_name_placeholder: 'Your name',
      index_dob: 'Date of birth',
      index_gender: 'Gender',
      index_gender_select: '— select —',
      index_male: 'Male',
      index_female: 'Female',
      index_job: 'Job',
      index_job_placeholder: 'Job title',
      index_country: 'Country',
      index_country_placeholder: 'Country',
      index_timezone: 'Timezone',
      index_week_start: 'Starting from',
      index_plan_btn: 'Plan my 7 days',
      index_do_today: 'Do today',
      index_avoid_today: 'Avoid today',
      index_listen: 'Listen',
      index_ready: 'Ready',
      index_speaking: 'Speaking…',
      index_read_week: 'Read my week aloud',
      index_read_bazi: 'Read BaZi summary',
      index_cycle_label: 'Cycle {n}/12',
      index_clash_label: 'Clash {x}',
      index_direction_label: 'Direction {x}',
      index_classical_note_1: 'The classical Chinese names are ancient, dating back over two millennia.',
      index_classical_note_2: 'Reference: traditional 12 daily officer 黄历 rules.',
      index_classical_note_3: 'Cross-check on',
      index_profile_label: 'Profile',
      index_family_label: 'Family',
      index_family_avoid_label: 'Family avoid',
      zeri_report_title: 'Date Selection Report',
      zeri_full_outlook: 'Full day outlook',
      zeri_companion_block: 'Companion Check',
      index_click_hint: 'Click to set this week as the week start',
      index_zeri_callout: 'Looking for prime timing? Try our new Strategic Date Selection (Ze Ri) tool.',
      index_features_intro: 'Four lightweight tools for reflection: <a class="text-link" href="bazi.html">BaZi / 5 Elements</a>, <a class="text-link" href="flying-stars.html">Flying Stars / 9 Star Ki</a>, <a class="text-link" href="index.html#planBtn">12 Daily Officers weekly planner</a>, and <a class="text-link" href="horoscope.html">Horoscope · East + West</a> overview.',
      index_zeri_feature: '📅 <a class="text-link" href="ze-ri.html">Date Selection (Ze Ri)</a>: Identify optimal, personalized windows for business launches, contract signings, property moves, and deployments.',
      index_love_feature: '💞 <a class="text-link" href="love-meter.html">Love Meter · East + West</a>: A playful couple-compatibility check — Chinese zodiac, Five Elements, and Western sun signs, read toward marriage.',
      name_required: 'Please enter your name.',
      dob_required: 'Please enter your date of birth.',
      birth_year_required: 'Please enter a valid birth year.',
      do_work: 'Do — Work',
      do_family: 'Do — Family',
      avoid_work: 'Avoid — Work',
      avoid_family: 'Avoid — Family',
      officer_establish: 'Establish',
      officer_remove: 'Remove',
      officer_full: 'Full',
      officer_balance: 'Balance',
      officer_stable: 'Stable',
      officer_initiate: 'Initiate',
      officer_destruction: 'Destruction',
      officer_danger: 'Danger',
      officer_success: 'Success',
      officer_receive: 'Receive',
      officer_open: 'Open',
      officer_close: 'Close',
      officer_ref_title: '12 Officers Reference',
      officer_ref_note: 'Use this as a quick reference while planning your week. The weekly plan applies job-specific nuance on top of these daily energies.',
      // about.html
      about_back: '← Back to tools',
      about_title: 'About.metaphysics.it.com',
      about_subtitle: "Why this site exists and who it's built for",
      about_what: 'What this site is',
      about_what_p: 'metaphysics.it.com is a simple, independent guide to traditional Chinese and Western metaphysical tools. The goal is straightforward: help you explore BaZi, 9 Star Ki, 12 Daily Officers, and East-West horoscope without hype, fortune-telling, or sales pressure.',
      about_who: 'Who this is for',
      about_who_1: '<strong>Curious beginners</strong> who want a structured place to learn Eastern and Western frameworks',
      about_who_2: '<strong>Project managers and operators</strong> looking for a lightweight weekly planning lens',
      about_who_3: '<strong>Solo founders, freelancers, and remote workers</strong> who want simple timing checks',
      about_who_4: '<strong>Business travellers</strong> who want a quiet planning ritual before a trip',
      about_who_5: '<strong>Cautious learners</strong> who prefer symbolic guidance over prediction-style content',
      about_how: 'How readings are generated',
      about_how_p1: 'Every reading is generated locally in your browser. No account, no upload, and no backend processing. Core date logic uses lunar calendar translation compatible with traditional 12 Daily Officer and 9 Star Ki references.',
      about_how_p2: 'This is for exploration and reflection, not decision-making. Cross-check important dates with calendar tools and customary local sources.',
      about_coverage: 'Coverage',
      about_coverage_p: 'Current tools cover BaZi-style element balance, 9 Star Ki profiles, annual charts, 7-day officer planning, and a combined Eastern-Western horoscope overview.',
      about_still_help: 'Still need help?',
      about_visit_faq: 'Visit the',
      about_faq_link: 'FAQ',
      about_help_ctx: 'for quick answers.',
      // bazi.html
      bazi_back: '← Back',
      bazi_title: 'BaZi · 5 Elements · Simple profile',
      bazi_intro_1: 'What this page does:',
      bazi_intro_2: 'It turns your birthday and birth time into a simple 5-element profile — <strong>Wood</strong>, <strong>Fire</strong>, <strong>Earth</strong>, <strong>Metal</strong>, and <strong>Water</strong>.',
      bazi_intro_3: 'How to read it:',
      bazi_intro_4: 'The percentages show which element is strongest and which needs more support. Use the guidance as a gentle nudge, not a strict rule.',
      bazi_tob: 'Time of birth',
      bazi_calc: 'Calculate',
      bazi_profile: 'Profile',
      bazi_listen: 'Listen',
      bazi_ready: 'Ready',
      bazi_speaking: 'Speaking…',
      bazi_read_week: 'Read my week aloud',
      bazi_read_bazi: 'Read BaZi summary',
      bazi_how_use: 'How to use this guidance:',
      bazi_guidance: 'Guidance:',
      bazi_how_use_p: 'Think of your strongest element as your natural strength, and your weakest as an area to develop. The suggestions are practical and meant to help you balance decisions in work, family, and personal planning.',
      bazi_enter_birthday: 'Enter your birthday for a personalised nudge.',
      bazi_strongest: 'Strongest',
      bazi_weakest: 'Weakest',
      bazi_tag_strong: 'Strong presence',
      bazi_tag_balanced: 'Balanced',
      bazi_tag_support: 'Needs support',
      bazi_element_wood: 'Wood',
      bazi_element_fire: 'Fire',
      bazi_element_earth: 'Earth',
      bazi_element_metal: 'Metal',
      bazi_element_water: 'Water',
      bazi_pillars_title: 'Four Pillars',
      pillar_hour: 'Hour Pillar',
      pillar_day: 'Day Pillar',
      pillar_month: 'Month Pillar',
      pillar_year: 'Year Pillar',
      pillar_unknown: 'Unknown',
      stem_jia: 'Jia', stem_yi: 'Yi', stem_bing: 'Bing', stem_ding: 'Ding', stem_wu: 'Wu', stem_ji: 'Ji', stem_geng: 'Geng', stem_xin: 'Xin', stem_ren: 'Ren', stem_gui: 'Gui',
      branch_zi: 'Zi', branch_chou: 'Chou', branch_yin: 'Yin', branch_mao: 'Mao', branch_chen: 'Chen', branch_si: 'Si', branch_wu: 'Wu', branch_wei: 'Wei', branch_shen: 'Shen', branch_you: 'You', branch_xu: 'Xu', branch_hai: 'Hai',
      // faq.html
      faq_back: '← Back to tools',
      faq_title: 'Frequently.asked.questions',
      faq_subtitle: 'Quick answers about readings, data, and coverage',
      faq_q1: 'Is this fortune-telling?',
      faq_a1: 'No. The site provides symbolic frameworks for reflection and planning. It does not predict events, outcomes, or luck.',
      faq_q2: 'Do I need to create an account?',
      faq_a2: 'No. Everything runs locally in your browser. No account, no upload, and no backend storage.',
      faq_q3: 'Is my data stored anywhere?',
      faq_a3: 'Only in your browser’s localStorage, if you choose to fill the forms. Clearing browser data removes it. Nothing is uploaded or shared.',
      faq_q4: 'Are the readings accurate?',
      faq_a4: 'Readings are symbolic and culturally derived. Use them as a planning lens, not as factual predictions. For real decisions, use verifiable sources.',
      faq_q5: 'Why Eastern and Western?',
      faq_a5: 'Both traditions are included so you can see two symbolic views of the same birthday. They overlap in some ideas and differ in others. Comparison is the point.',
      faq_q6: 'Can I use this on mobile?',
      faq_a6: 'Yes. The site is mobile-first. Use it on a phone or tablet the same way you would on desktop.',
      faq_still: 'Still need help?',
      faq_visit_about: 'Visit the',
      faq_about_link: 'About page',
      faq_help_ctx: 'for background, or',
      faq_contact: 'contact the creator',
      faq_help_ctx2: 'directly.',
      // flying-stars.html
      stars_back: '← Back',
      stars_title: 'Flying Stars · 9 Star Ki · Annual chart',
      stars_intro_1: 'Two quick views:',
      stars_intro_2: '<strong>9 Star Ki</strong> from your birth year, and the <strong>Annual Flying Stars</strong> chart for the year you choose.',
      stars_name: 'Name',
      stars_birth_year: 'Birth year',
      stars_gender: 'Gender',
      stars_chart_year: 'Annual chart year',
      stars_show_btn: 'Show my stars',
      stars_profile: 'Profile',
      stars_annual_title: 'Annual Flying Stars',
      stars_annual_intro: 'In 玄空飞星, the 9 stars cycle each year through a 3x3 Lo Shu grid. Use this as a simple yearly reference; for real placement, combine it with your actual home facing direction.',
      stars_annual_note: 'In East-West metaphysics, a simpler reading is used here: stars 1/6/3 are taken as stronger, 5/7/8 as caution, 9/2/4 as transitional. This is a simplified view; for real application, use a complete chart with facing direction and floor chart.',
      stars_general: 'General',
      stars_suggested: 'Suggested use',
      stars_element: 'Element',
      stars_today_note: 'Today note',
      stars_star_guidance: 'Your star {n} ({en} {cn}) suggests {trait}. Prefer {bestNew}. Avoid {avoid}.',
      stars_use_best: 'Prefer',
      stars_use_avoid: 'Avoid',
      // horoscope.html
      horo_back: '← Back',
      horo_title: 'Horoscope · East + West',
      horo_intro_1: 'Two views from one birthday:',
      horo_intro_2: 'your Eastern Chinese zodiac animal and your Western sun sign.',
      horo_name: 'Name',
      horo_dob: 'Date of birth',
      horo_gender: 'Gender',
      horo_country: 'Country',
      horo_job: 'Job',
      horo_tob: 'Time of birth',
      horo_show_btn: 'Show my signs',
      horo_east_title: 'Eastern · Chinese zodiac',
      horo_west_title: 'Western · Sun sign',
      horo_general: 'General',
      horo_suggested: 'Suggested use',
      horo_element: 'Element',
      horo_today_note: 'Today note',
      horo_east_use_title: 'Suggested use',
      horo_east_use_body: 'In an Eastern view, birthdays starting from the lunar year shape the {animal} perspective. This is a simple symbolic reading.',
      horo_west_element_body: '{el} signs value {el.toLowerCase()} themes. {body}',
      horo_mix_title: 'East meets West',
      lm_back: '← Back',
      lm_title: 'Love Meter · East + West',
      lm_learn_title: 'How to read this playful meter',
      lm_intro_1: 'Two birthdays, two traditions:',
      lm_intro_2: 'compare your Eastern zodiac and Western signs, then see how the pairing reads toward marriage.',
      lm_p1: 'Person 1',
      lm_p2: 'Partner',
      lm_calc: 'Measure our love',
      lm_temperature: 'Compatibility temperature',
      lm_east_title: 'Eastern · Chinese zodiac',
      lm_west_title: 'Western · Sun signs',
      lm_mix_title: 'The Union · East meets West',
      lm_marriage_note: 'Toward marriage:',
      lm_pick_date: 'Pick your wedding date with Ze Ri →',
      lm_mode_label: 'Show me',
      lm_mode_east: 'East',
      lm_mode_west: 'West',
      lm_mode_both: 'Both'
    },
    zh: {
      langLabel: '语言',
      english: '英文',
      chinese: '中文',
      both: '中英',
      // index.html
      index_officer_intro: '什么是十二建除？',
      index_officer_intro_desc: '在传统黄曆中，每天由十二个循环值班神煞主宰，例如建、除、满、平、定、执、破、危、成、收、开、闭。这些传承两千多年，至今仍被用於選擇更佳时机进行決策、啟動、簽約、出行与家庭要事。本工具提供簡單的七日視圖，讓你按传统節奏規划每週。',
      index_plan_intro: '輸入你的資料，生成七日建除計画。',
      index_name: '姓名',
      index_name_placeholder: '你的姓名',
      index_dob: '出生日期',
      index_gender: '性别',
      index_gender_select: '— 請選擇 —',
      index_male: '男',
      index_female: '女',
      index_job: '職業',
      index_job_placeholder: '職稱',
      index_country: '國家',
      index_country_placeholder: '國家',
      index_timezone: '时區',
      index_week_start: '开始日期',
      index_plan_btn: '开始規划七日',
      index_do_today: '今日宜做',
      index_avoid_today: '今日忌做',
      index_do_work: '宜 — 工作',
      index_avoid_work: '忌 — 工作',
      index_do_family: '宜 — 家庭',
      index_avoid_family: '忌 — 家庭',
      index_listen: '聆聽',
      index_ready: '就緒',
      index_speaking: '朗讀中…',
      index_read_week: '朗讀本週計画',
      index_read_bazi: '朗讀八字摘要',
      index_cycle_label: '循环 {n}/12',
      index_clash_label: '沖 {x}',
      index_direction_label: '方位 {x}',
      index_classical_note_1: '这些古老的中文名稱传承两千多年。',
      index_classical_note_2: '參考：传统十二建除黄曆規则。',
      index_classical_note_3: '交叉查核',
      index_profile_label: '檔案',
      index_family_label: '家庭',
      index_family_avoid_label: '家庭忌',
      zeri_report_title: '择日分析报告',
      zeri_full_outlook: '全天宜忌一览',
      zeri_companion_block: '伴侣合参',
      index_click_hint: '點擊設定本週开始日期',
      index_zeri_callout: '需要選擇吉日良辰？使用全新 擇日 工具。',
      index_features_intro: '四款轻量级反思工具：<a class="text-link" href="bazi.html">八字 · 五行</a>、<a class="text-link" href="flying-stars.html">玄空飞星 · 九星数</a>、<a class="text-link" href="index.html#planBtn">十二建除七日规划</a>，以及<a class="text-link" href="horoscope.html">中西合谱星盘</a>概览。',
      index_zeri_feature: '📅 <a class="text-link" href="ze-ri.html">吉日择选 (择日)</a>：为您筛选最适合商业开张、签约合同、入宅安床以及系统部署的专属吉日良辰。',
      index_love_feature: '💞 <a class="text-link" href="love-meter.html">姻缘温度计 · 东西合拍</a>：趣味情侣合拍测试——中國生肖、五行与西方星座，朝向婚姻解读。',
      name_required: '請輸入你的姓名。',
      dob_required: '請輸入你的出生日期。',
      birth_year_required: '請輸入有效出生年份。',
      do_work: '宜 — 工作',
      do_family: '宜 — 家庭',
      avoid_work: '忌 — 工作',
      avoid_family: '忌 — 家庭',
      officer_establish: '建',
      officer_remove: '除',
      officer_full: '满',
      officer_balance: '平',
      officer_stable: '定',
      officer_initiate: '执',
      officer_destruction: '破',
      officer_danger: '危',
      officer_success: '成',
      officer_receive: '收',
      officer_open: '开',
      officer_close: '闭',
      officer_ref_title: '十二建除速查',
      officer_ref_note: '規划本週时可快速对照，具体建議仍会在你輸入職稱後結合每日能量細化。',
      // about.html
      about_back: '← 返回工具',
      about_title: '关於 metaphysics.it.com',
      about_subtitle: '本站存在的目的与受眾',
      about_what: '本網站是什么',
      about_what_p: 'metaphysics.it.com 是一个簡單、獨立的传统中西玄學工具指南。目標明確：幫助你探索八字、九星、十二建除与中西合譜，无 hype、无算命、无推銷壓力。',
      about_who: '这是为誰而作',
      about_who_1: '<strong>好奇的初學者</strong>想要有結構的地方學習东西方框架',
      about_who_2: '<strong>項目經理和营運者</strong>尋找輕量的每週規划視角',
      about_who_3: '<strong>个人创辦人、自由工作者与遠程工作者</strong>想要簡單的时机檢查',
      about_who_4: '<strong>商務旅行者</strong>在出行前想要安静的規划儀式',
      about_who_5: '<strong>謹慎的學習者</strong>偏好象徵性指引而非預測型内容',
      about_how: '分析如何产生',
      about_how_p1: '每次分析都在你的瀏览器中本地产生。无帳號、无上传、无後端處理。核心日期邏輯使用与传统十二建除和九星參考兼容的農曆轉換。',
      about_how_p2: '这用於探索与反思，而非決策。重要日期請与日曆工具和在地来源交叉查證。',
      about_coverage: '涵蓋範圍',
      about_coverage_p: '目前工具涵蓋八字五行平衡、九星命盤、年盤、七日建除規划，以及中西合併的星盤概览。',
      about_still_help: '仍需要協助？',
      about_visit_faq: '參閱',
      about_faq_link: '常见问题',
      about_help_ctx: '快速解答。',
      // bazi.html
      bazi_back: '← 返回',
      bazi_title: '八字 · 五行 · 簡單命盤',
      bazi_intro_1: '这个页面的功能：',
      bazi_intro_2: '它將你的生日和出生时間轉換为簡單的五行命盤 — <strong>木</strong>、<strong>火</strong>、<strong>土</strong>、<strong>金</strong>和<strong>水</strong>。',
      bazi_intro_3: '如何解讀：',
      bazi_intro_4: '百分比顯示哪个五行最強、哪个需要更多支持。將建議視为溫和提示，而非嚴格規则。',
      bazi_tob: '出生时間',
      bazi_calc: '計算',
      bazi_profile: '檔案',
      bazi_listen: '聆聽',
      bazi_ready: '就緒',
      bazi_speaking: '朗讀中…',
      bazi_read_week: '朗讀本週計画',
      bazi_read_bazi: '朗讀八字摘要',
      bazi_how_use: '如何使用此指引：',
      bazi_guidance: '指引：',
      bazi_how_use_p: '將你最強的元素視为天賦，最弱的視为发展方向。建議務实，幫助你在工作、家庭与个人規划中平衡決策。',
      bazi_enter_birthday: '請輸入生日以獲得个人化提示。',
      bazi_strongest: '最強',
      bazi_weakest: '最弱',
      bazi_tag_strong: '強勢',
      bazi_tag_balanced: '平衡',
      bazi_tag_support: '需要支持',
      bazi_element_wood: '木',
      bazi_element_fire: '火',
      bazi_element_earth: '土',
      bazi_element_metal: '金',
      bazi_element_water: '水',
      bazi_pillars_title: '四柱',
      pillar_hour: '时柱', pillar_day: '日柱', pillar_month: '月柱', pillar_year: '年柱',
      pillar_unknown: '未知',
      stem_jia: '甲', stem_yi: '乙', stem_bing: '丙', stem_ding: '丁', stem_wu: '戊', stem_ji: '己', stem_geng: '庚', stem_xin: '辛', stem_ren: '壬', stem_gui: '癸',
      branch_zi: '子', branch_chou: '丑', branch_yin: '寅', branch_mao: '卯', branch_chen: '辰', branch_si: '巳', branch_wu: '午', branch_wei: '未', branch_shen: '申', branch_you: '酉', branch_xu: '戌', branch_hai: '亥',
      // faq.html
      faq_back: '← 返回工具',
      faq_title: '常见问题',
      faq_subtitle: '关於分析、資料与涵蓋範圍的快速解答',
      faq_q1: '这是算命吗？',
      faq_a1: '不是。本站提供象徵性框架供反思与規划，不預測事件、結果或運氣。',
      faq_q2: '我需要建立帳號吗？',
      faq_a2: '不需要。所有内容都在你的瀏览器中本地運行。无帳號、无上传、无後端儲存。',
      faq_q3: '我的資料儲存在哪裡？',
      faq_a3: '只有在你選擇填寫表單时，才儲存在瀏览器的 localStorage。清除瀏览器資料即可删除，不会上传或分享。',
      faq_q4: '分析準確吗？',
      faq_a4: '分析是象徵性且文化衍生的。請視为規划視角，而非事实預測。真正決策請使用可驗證来源。',
      faq_q5: '为什么包含东西方？',
      faq_a5: '两种传统並列，讓你看见同一个生日的两个象徵观点。它们有重叠也有差异，比較本身就是目的。',
      faq_q6: '手机能用吗？',
      faq_a6: '可以。本站以手机为優先設計，手机与平板的使用方式与桌机相同。',
      faq_still: '仍需要協助？',
      faq_visit_about: '參閱',
      faq_about_link: '关於我们',
      faq_help_ctx: '了解背景，或',
      faq_contact: '直接聯繫作者',
      faq_help_ctx2: '。',
      // flying-stars.html
      stars_back: '← 返回',
      stars_title: '玄空飞星 · 九星數 · 年盤',
      stars_intro_1: '两个快速視角：',
      stars_intro_2: '依據出生年計算的 <strong>九星數</strong>，以及你選擇年份的 <strong>年盤玄空飞星</strong>。',
      stars_name: '姓名',
      stars_birth_year: '出生年',
      stars_gender: '性别',
      stars_chart_year: '年盤年份',
      stars_show_btn: '查詢我的星',
      stars_profile: '檔案',
      stars_annual_title: '玄空飞星',
      stars_annual_intro: '在玄空飞星中，九顆星每年在 3x3 洛书九宮格循环。这裡只用来簡易年度參照；实際應用請結合宅運坐向完整排盤。',
      stars_annual_note: '此處採用簡化解讀：1/6/3 視为較強；5/7/8 視为警示；9/2/4 視为轉折。此为簡化視角；真正應用請使用含坐向与宅盤的完整排盤。',
      stars_general: '總論',
      stars_suggested: '建議用途',
      stars_element: '五行',
      stars_today_note: '当日提示',
      stars_star_guidance: '你的主星 {n}（{cn} · {en}）代表{trait}。宜於{bestNew}；避{avoid}。',
      stars_use_best: '宜於',
      stars_use_avoid: '避',
      // horoscope.html
      horo_back: '← 返回',
      horo_title: '星盤 · 东西方',
      horo_intro_1: '一个生日，两种視角：',
      horo_intro_2: '东方的中國生肖与西方的太阳星座。',
      horo_name: '姓名',
      horo_dob: '出生日期',
      horo_gender: '性别',
      horo_country: '國家',
      horo_job: '職業',
      horo_tob: '出生时間',
      horo_show_btn: '顯示我的星座',
      horo_east_title: '东方 · 中國生肖',
      horo_west_title: '西方 · 太阳星座',
      horo_general: '總論',
      horo_suggested: '建議用途',
      horo_element: '五行',
      horo_today_note: '当日提示',
      horo_east_use_title: '建議用途',
      horo_east_use_body: '从东方观点来看，農曆年开始塑造了{animal}的視角。这是一个簡單的象徵解讀。',
      horo_west_element_body: '{el}星座重視{el}主题。{body}',
      horo_mix_title: '东西方合参',
      lm_back: '← 返回',
      lm_title: '姻缘温度计 · 东西合拍',
      lm_learn_title: '如何读懂这个趣味温度计',
      lm_intro_1: '两个生日，两种传统：',
      lm_intro_2: '比对你们的中國生肖与西方星座，看看这段缘分如何走向婚姻。',
      lm_p1: '本人',
      lm_p2: '伴侣',
      lm_calc: '测一测我们的缘份',
      lm_temperature: '姻缘温度',
      lm_east_title: '东方 · 中國生肖',
      lm_west_title: '西方 · 太阳星座',
      lm_mix_title: '缘分之合 · 东西方合参',
      lm_marriage_note: '走向婚姻：',
      lm_pick_date: '用择日挑选你们的婚期 →',
      lm_mode_label: '显示',
      lm_mode_east: '东方',
      lm_mode_west: '西方',
      lm_mode_both: '东西合参'
    }
  };

  function getLang(){
    const v = localStorage.getItem(LS_KEY);
    if(v==='en'||v==='zh'||v==='both') return v;
    return 'en';
  }
  function setLang(v){ localStorage.setItem(LS_KEY,v); }

  function t(key, vars){
    const lang = getLang();
    const render = (text, varsObj) => {
      if(!text) return '';
      let out = text;
      if(varsObj){
        for(const k in varsObj){ out = out.replace(new RegExp('\\{'+k+'\\}', 'g'), varsObj[k]); }
      }
      return out;
    };
    if(lang === 'both'){
      const enText = render(I18N.en[key] || '');
      const zhText = render(I18N.zh[key] || '');
      if(enText && zhText) return enText + ' / ' + zhText;
      return enText || zhText;
    }
    const dict = I18N[lang] || I18N.en;
    const fallback = I18N.en[key] || '';
    return render(dict[key] || fallback, vars);
  }

  function applyTranslations(root){
    if(!root) root = document;
    qa('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const html = el.getAttribute('data-i18n-html') === '1';
      const text = t(key);
      if(text){
        if(html){
          el.innerHTML = text;
        } else {
          el.textContent = text;
        }
      }
    });
    qa('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const text = t(key);
      if(text) el.placeholder = text;
    });
  }

  function buildToggle(lang){
    const t = I18N[lang] || I18N.en;
    return `<div style="max-width:1100px;margin:0 auto;padding:0 0 8px;display:flex;justify-content:flex-end;"><div><label for="visitorLang" style="font-size:.85rem;color:var(--muted);">${t.langLabel}</label><select id="visitorLang" style="background:var(--surface);color:var(--text);border:1px solid var(--border);border-radius:10px;padding:.35rem .5rem;font-size:.85rem;"><option value="en">${t.english}</option><option value="zh">${t.chinese}</option><option value="both">${t.both}</option></select></div></div>`;
  }

  function applyToggle(root){
    let sel = q('select#visitorLang');
    if(!sel){
      const container = q('header') || q('body');
      if(container){
        const tmp = document.createElement('div');
        tmp.innerHTML = buildToggle(getLang());
        const el = tmp.firstElementChild;
        container.insertBefore(el, container.firstChild);
        sel = q('select#visitorLang');
      }
    }
    if(!sel) return;
    const lang = getLang();
    sel.value = lang;
    sel.addEventListener('change', e=>{
      setLang(e.target.value);
      applyTranslations(document);
      try { typeof window.__reapplyPillars === 'function' && window.__reapplyPillars(); } catch (_){}
      try { typeof window.__reapplyZeRi === 'function' && window.__reapplyZeRi(); } catch (_){}
      try { typeof window.__reapplyLoveMeter === 'function' && window.__reapplyLoveMeter(); } catch (_){}
    });
  }

  function init(){
    applyToggle(document);
    applyTranslations(document);
    if (typeof window.mppSharedProfile !== 'undefined' && typeof window.mppSharedProfile.prefillAllInputs === 'function') {
      window.mppSharedProfile.prefillAllInputs();
      if (/bazi\.html(\?.*)?$/.test(location.pathname) && localStorage.getItem('mpp.name') && localStorage.getItem('mpp.dob')) {
        try { if (typeof calc === 'function') calc(); } catch (e) {}
      }
    }
  }
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  window.mppLang = { t, applyTranslations, getLang, setLang };
  window.mppSharedProfile = (() => {
    const KEYS = {
      name: 'mpp.name',
      dob: 'mpp.dob',
      gender: 'mpp.gender',
      job: 'mpp.job',
      country: 'mpp.country',
      tz: 'mpp.tz',
      tob: 'mpp.tob'
    };
    const idMap = {
      name: 'visitorName',
      dob: 'visitorDob',
      gender: 'gender',
      job: 'visitorJob',
      country: 'visitorCountry',
      tz: 'visitorTimezone',
      tob: 'visitorTob'
    };
    const write = (key, value) => { if (value !== undefined && value !== null && String(value).trim() !== '') localStorage.setItem(key, String(value)); };
    const onChange = (key) => (e) => write(KEYS[key], e.target.value);
    const listeners = {
      visitorName: onChange('name'),
      visitorDob: onChange('dob'),
      gender: onChange('gender'),
      visitorJob: onChange('job'),
      visitorCountry: onChange('country'),
      visitorTimezone: onChange('tz'),
      visitorTob: onChange('tob')
    };
    document.addEventListener('input', (e) => {
      const fn = listeners[e.target && e.target.id];
      if (typeof fn === 'function') fn(e);
    });
    document.addEventListener('change', (e) => {
      const fn = listeners[e.target && e.target.id];
      if (typeof fn === 'function') fn(e);
    });
    return {
      prefillAllInputs() {
        Object.keys(idMap).forEach((field) => {
          const el = document.getElementById(idMap[field]);
          const raw = localStorage.getItem(KEYS[field]);
          if (el && raw !== null && raw.trim() !== '') el.value = raw;
        });
      },
      sync(name, dob, gender, job, country, tz, tob) {
        write(KEYS.name, name);
        write(KEYS.dob, dob);
        write(KEYS.gender, gender);
        write(KEYS.job, job);
        write(KEYS.country, country);
        write(KEYS.tz, tz);
        write(KEYS.tob, tob);
      }
    };
  })();
})();