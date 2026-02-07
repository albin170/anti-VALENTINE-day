/* 💥 HEART RAIN */
const canvas = document.getElementById("rain");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = Array(100).fill().map(() => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  s: Math.random() * 20 + 10,
  v: Math.random() * 2 + 1
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

/* 🔥 RAGE */
let rageCount = 0;
function rage() {
  rageCount++;
  document.getElementById("rage").innerText = rageCount;
}

/* 📊 QUIZ */
function quiz() {
  const score = Math.floor(Math.random() * 101);
  document.getElementById("quizResult").innerText =
    `You are ${score}% single and ${100-score}% unbothered 😎`;
}

/* 🤖 CHATBOT */
function chat() {
  const replies = [
    "Love is optional. Peace is mandatory.",
    "Valentine’s Day detected. Ignoring.",
    "You deserve calm, not chaos.",
    "Buy snacks. Not feelings."
  ];
  document.getElementById("botReply").innerText =
    replies[Math.floor(Math.random()*replies.length)];
}
