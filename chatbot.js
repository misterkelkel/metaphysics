/* metaphysics.it.com chatbot — Phase 1, scripted, local-only */

(function(){
  if(window.__mppChatLoaded) return;
  window.__mppChatLoaded = true;

  const css = `
  #mpp-chat-launcher{
    position:fixed; right:18px; bottom:18px; z-index:1100;
    width:52px; height:52px; border-radius:50%;
    background:linear-gradient(180deg, var(--accent), var(--accent-2));
    color:#fff; border:none; box-shadow:0 10px 20px rgba(0,0,0,.35);
    font-size:22px; cursor:pointer;
  }
  #mpp-chat-panel{
    position:fixed; right:18px; bottom:80px; z-index:1100;
    width:min(92vw, 360px); height:min(78vh, 520px);
    background:var(--surface); border:1px solid var(--border);
    border-radius:20px; display:none; flex-direction:column;
    box-shadow:0 20px 40px rgba(0,0,0,.5);
  }
  #mpp-chat-panel.open{ display:flex; }
  #mpp-chat-header{
    padding:14px 16px; border-bottom:1px solid var(--border);
    display:flex; align-items:center; justify-content:space-between;
  }
  #mpp-chat-header strong{ font-size:.95rem; }
  #mpp-chat-close{ background:transparent; color:var(--muted); border:none; font-size:1.1rem; cursor:pointer; width:32px; height:32px; border-radius:10px; }
  #mpp-chat-close:hover{ background:var(--surface-2); color:var(--text); }
  #mpp-chat-messages{ flex:1; overflow:auto; padding:12px 14px; display:flex; flex-direction:column; gap:.6rem; }
  #mpp-chat-input-row{ padding:10px 12px; border-top:1px solid var(--border); display:flex; gap:.5rem; }
  #mpp-chat-input{ flex:1; }
  #mpp-chat-send{ width:auto; padding:.6rem .8rem; }
  .mpp-bubble{ padding:10px 12px; border-radius:14px; font-size:.9rem; line-height:1.45; max-width:100%; word-wrap:break-word; }
  .mpp-bot{ background:var(--surface-2); border:1px solid var(--border); align-self:flex-start; }
  .mpp-user{ background:linear-gradient(180deg, var(--accent), var(--accent-2)); color:#fff; align-self:flex-end; }
  .mpp-tool{ display:inline-flex; gap:.35rem; flex-wrap:wrap; margin-top:.4rem; }
  .mpp-tool a{
    display:inline-block; padding:.35rem .6rem; border-radius:10px;
    border:1px solid var(--border); background:var(--chip-bg);
    color:var(--text); text-decoration:none; font-size:.82rem;
  }
  `;

  const panel = document.createElement("div");
  panel.id = "mpp-chat-panel";
  panel.innerHTML = `
    <div id="mpp-chat-header">
      <strong>Metaphysics assistant</strong>
      <button id="mpp-chat-close" type="button" aria-label="Close">✕</button>
    </div>
    <div id="mpp-chat-messages"></div>
    <div id="mpp-chat-input-row">
      <input id="mpp-chat-input" type="text" placeholder="Ask about BaZi, officers, zodiac..." />
      <button id="mpp-chat-send" type="button">Send</button>
    </div>
  `;
  document.body.appendChild(panel);

  const launcher = document.createElement("button");
  launcher.id = "mpp-chat-launcher";
  launcher.type = "button";
  launcher.textContent = "💬";
  launcher.title = "Chat";
  document.body.appendChild(launcher);

  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  const messages = document.getElementById("mpp-chat-messages");
  const input = document.getElementById("mpp-chat-input");
  const send = document.getElementById("mpp-chat-send");
  const openBtn = document.getElementById("mpp-chat-launcher");
  const closeBtn = document.getElementById("mpp-chat-close");
  const box = document.getElementById("mpp-chat-panel");

  const name = (localStorage.getItem("mpp.name")||"").trim();
  const dob = localStorage.getItem("mpp.dob");
  const gender = localStorage.getItem("mpp.gender");
  const job = localStorage.getItem("mpp.job");

  function animalName(){
    if(!dob) return null;
    const y = new Date(dob+"T00:00:00").getFullYear();
    if(!y) return null;
    const animals = ["Rat","Ox","Tiger","Rabbit","Dragon","Snake","Horse","Goat","Monkey","Rooster","Dog","Pig"];
    return animals[((y-4)%12+12)%12];
  }

  function sunSign(){
    if(!dob) return null;
    const d = new Date(dob+"T00:00:00");
    const m = d.getMonth()+1;
    const day = d.getDate();
    const mmdd = String(m).padStart(2,"0")+"-"+String(day).padStart(2,"0");
    const signs=[
      {n:"Capricorn",from:"12-22",to:"01-19"},
      {n:"Aquarius",from:"01-20",to:"02-18"},
      {n:"Pisces",from:"02-19",to:"03-20"},
      {n:"Aries",from:"03-21",to:"04-19"},
      {n:"Taurus",from:"04-20",to:"05-20"},
      {n:"Gemini",from:"05-21",to:"06-20"},
      {n:"Cancer",from:"06-21",to:"07-22"},
      {n:"Leo",from:"07-23",to:"08-22"},
      {n:"Virgo",from:"08-23",to:"09-22"},
      {n:"Libra",from:"09-23",to:"10-22"},
      {n:"Scorpio",from:"10-23",to:"11-21"},
      {n:"Sagittarius",from:"11-22",to:"12-21"}
    ];
    const s = signs.find(x => x.from > x.to ? (mmdd>=x.from || mmdd<=x.to) : (mmdd>=x.from && mmdd<=x.to));
    return s ? s.n : null;
  }

  function natalStar(){
    if(!dob) return null;
    const y = new Date(dob+"T00:00:00").getFullYear();
    if(!y) return null;
    const last = String(y).slice(-1);
    const yang = ["1","3","5","7","9"].includes(last);
    let life = yang ? (Number(last)-2 || 9) : (12-Number(last));
    if(life===5) life = gender==="male" ? 2 : 8;
    life = ((life%10)+10)%10;
    if(life===0) life=9;
    const names = {1:"One",2:"Two",3:"Three",4:"Four",5:"Five",6:"Six",7:"Seven",8:"Eight",9:"Nine"};
    return "Star "+life+" · "+names[life]+"";
  }

  function botReply(text){
    const bubble = document.createElement("div");
    bubble.className = "mpp-bubble mpp-bot";
    bubble.textContent = text;
    messages.appendChild(bubble);
    messages.scrollTop = messages.scrollHeight;
  }
  function userReply(text){
    const bubble = document.createElement("div");
    bubble.className = "mpp-bubble mpp-user";
    bubble.textContent = text;
    messages.appendChild(bubble);
    messages.scrollTop = messages.scrollHeight;
  }
  function toolButtons(html){
    const wrap = document.createElement("div");
    wrap.className = "mpp-tool";
    wrap.innerHTML = html;
    messages.appendChild(wrap);
    messages.scrollTop = messages.scrollHeight;
  }

  function handle(text){
    userReply(text);
    const q = text.toLowerCase().replace(/[^a-z0-9\s]/g,"").trim();
    setTimeout(()=>{
      if(!name && !dob){
        botReply("Hi! If you enter your name and birthday on the homepage, I can give more personal answers.");
        toolButtons(`<a href="index.html">Open homepage →</a>`);
        return;
      }
      if(/\b(zodiac|chinese zodiac|animal|生肖)\b/.test(q)){
        const a = animalName();
        if(a) botReply(`${name ? name+", your " : "Your"} Chinese zodiac is ${a}. It reflects symbolic traits for the birth year. Want a fuller BaZi profile?`);
        else botReply("I can check your Chinese zodiac if you enter your birthday on the homepage.");
        toolButtons(`<a href="bazi.html">BaZi profile →</a><a href="horoscope.html">Horoscope →</a>`);
        return;
      }
      if(/\b(sun sign|western|star sign|horoscope)\b/.test(q)){
        const s = sunSign();
        if(s) botReply(`${name ? name+", your " : "Your"} Western sun sign is ${s}. Want to compare it with your Eastern zodiac?`);
        else botReply("Add your birthday and I can tell your Western sun sign.");
        toolButtons(`<a href="horoscope.html">Horoscope · East + West →</a>`);
        return;
      }
      if(/\b(9 star|ki|nine star|star ki)\b/.test(q)){
        const k = natalStar();
        if(k) botReply(`${name ? name+", your " : "Your"} 9 Star Ki profile is ${k}. This is based on birth year and gender.`);
        else botReply("Enter your birth year on the Flying Stars page to see your 9 Star Ki.");
        toolButtons(`<a href="flying-stars.html">Flying Stars / 9 Star Ki →</a>`);
        return;
      }
      if(/\b(12 daily officers|officers|daily officer|today)\b/.test(q)){
        botReply("The 12 Daily Officers are a traditional calendar guide. Tell me your preferred start date and I can show your 7-day plan.");
        toolButtons(`<a href="index.html">Plan my week →</a>`);
        return;
      }
      if(/\b(plan|week|7 days)\b/.test(q)){
        botReply("I can help with a 7-day officer plan. Use the planner on the homepage and click any day row to choose your start date.");
        toolButtons(`<a href="index.html">Open planner →</a>`);
        return;
      }
      if(/\b(bazi|5 elements|five elements|wood|fire|earth|metal|water)\b/.test(q)){
        botReply("BaZi uses birth year, month, day and time to show your 5 Elements profile. It’s about balance, not prediction.");
        toolButtons(`<a href="bazi.html">BaZi profile →</a>`);
        return;
      }
      if(/\b(flying stars|annual)\b/.test(q)){
        botReply("Flying Stars gives two views: your personal 9 Star Ki and the annual chart for a chosen year.");
        toolButtons(`<a href="flying-stars.html">Flying Stars →</a>`);
        return;
      }
      if(/\b(donate|support|buy me)\b/.test(q)){
        botReply("This project is free while we build it. If you find it useful, you can support it via PayPal or the donate link in the footer.");
        toolButtons(`<a href="#footer">Footer links →</a>`);
        return;
      }
      if(/\b(hello|hi|hey|good morning|good evening)\b/.test(q)){
        const greeting = name ? `Hi ${name}` : "Hi";
        botReply(`${greeting}! I can help with Chinese zodiac, Western sun sign, 9 Star Ki, 12 Daily Officers, or BaZi. What do you want to explore?`);
        return;
      }
      botReply("I can help with BaZi, 12 Daily Officers, 9 Star Ki, or horoscope. Try asking about your profile or today’s plan.");
      toolButtons(`<a href="index.html">Home</a><a href="bazi.html">BaZi</a><a href="flying-stars.html">Flying Stars</a><a href="horoscope.html">Horoscope</a>`);
    }, 350);
  }

  openBtn.addEventListener("click", ()=>{
    box.classList.toggle("open");
    if(box.classList.contains("open") && messages.children.length===0){
      const greeting = name ? `Hi ${name}` : "Hi";
      botReply(`${greeting}! I’m your metaphysics assistant. Ask me about BaZi, 12 Daily Officers, 9 Star Ki, or horoscope.`);
    }
  });
  closeBtn.addEventListener("click", ()=>{
    box.classList.remove("open");
  });
  send.addEventListener("click", ()=>{
    const text = input.value.trim();
    if(!text) return;
    input.value = "";
    handle(text);
  });
  input.addEventListener("keydown", (e)=>{
    if(e.key==="Enter"){
      const text = input.value.trim();
      if(!text) return;
      input.value = "";
      handle(text);
    }
  });
window.mppSpeak = function(text){
  if(!('speechSynthesis' in window)) return alert('Speech is not supported in this browser.');
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.rate = 1;
  u.pitch = 1;
  window.speechSynthesis.speak(u);
};

})();
