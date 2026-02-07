/* 💥 HEART RAIN */
const canvas = document.getElementById("rain");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let hearts = Array(120).fill().map(() => ({
  x: Math.random()*canvas.width,
  y: Math.random()*canvas.height,
  v: Math.random()*2+1
}));

function rain() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.font = "20px Arial";
  hearts.forEach(h => {
    ctx.fillText("💔", h.x, h.y);
    h.y += h.v;
    if (h.y > canvas.height) h.y = 0;
  });
  requestAnimationFrame(rain);
}
rain();

/* 🌪 SHAKE */
function shake() {
  document.body.classList.toggle("shake");
}

/* 🎭 FACE SCAN */
function faceScan() {
  faceResult.innerText = "Scan complete: You look single 😌";
}

/* 🧬 LOVE DETECTOR */
function detectLove() {
  loveResult.innerText = "Love detected: 0%. Peace: 100%";
}

/* 🩻 X-RAY */
function xray() {
  xrayResult.innerText = "Heart status: Protected by logic 🛡";
}

/* 📊 QUIZ */
function quiz() {
  const s = Math.floor(Math.random()*101);
  quizResult.innerText = `Single level: ${s}%`;
}

/* 🤖 BOT */
function bot() {
  const replies = [
    "Ignore Valentine’s Day.",
    "Buy snacks.",
    "Peace is attractive.",
    "Capitalism detected."
  ];
  botReply.innerText = replies[Math.floor(Math.random()*replies.length)];
}

/* 🧠 PWA */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}

