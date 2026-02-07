/* 💔 HEART RAIN */
const canvas = document.getElementById("rain");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let hearts = Array(100).fill().map(() => ({
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

/* RANDOM BEHAVIOR */
if (Math.random() > 0.7) {
  document.body.style.filter = "hue-rotate(90deg)";
}

/* BUTTON AVOIDANCE */
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform =
      `translate(${(Math.random()-0.5)*120}px, ${(Math.random()-0.5)*120}px)`;
  });
});

/* MEMORY */
if (localStorage.getItem("visited")) {
  setTimeout(() => alert("You came back."), 2000);
}
localStorage.setItem("visited", "true");

/* SCAN */
function scan() {
  scanResult.innerText = "Status: Emotionally independent.";
}

/* CHAT */
function respond() {
  const replies = [
    "Love is optional.",
    "Peace is permanent.",
    "This system does not celebrate.",
    "Capitalism detected."
  ];
  systemReply.innerText =
    replies[Math.floor(Math.random()*replies.length)];
}

/* COLLAPSE SEQUENCE */
const terminal = document.getElementById("terminal");
const terminalText = document.getElementById("terminalText");

const lines = [
  "BOOTING REALITY ENGINE...",
  "Detecting romantic construct...",
  "Pattern found: Annual emotional loop.",
  "Cause: Social pressure + marketing.",
  "",
  "You are not broken.",
  "The system is.",
  "",
  "Choose wisely."
];

let i = 0;

function startCollapse() {
  terminal.style.display = "block";
  typeLine();
}

function typeLine() {
  if (i < lines.length) {
    terminalText.innerText += lines[i] + "\n";
    i++;
    setTimeout(typeLine, 700);
  }
}

function accept() {
  terminalText.innerText += "\nLoop accepted. See you next year.";
}

function escape() {
  terminalText.innerText +=
    "\nLoop terminated.\nYou are free.";
}

/* REWIND */
setTimeout(() => {
  rewind.style.display = "flex";
  setTimeout(() => rewind.style.display = "none", 2500);
}, 15000);

/* ONE-TIME ENDING */
if (localStorage.getItem("ending")) {
  document.body.innerHTML = "";
  document.body.appendChild(finalEnding);
  finalEnding.style.display = "flex";
} else {
  setTimeout(() => localStorage.setItem("ending", "seen"), 30000);
}
