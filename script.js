let timer;
let seconds = 0;
let progress = 0;
let plantStage = 1;
let musicPlaying = false;

const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const progressBar = document.getElementById("progress");
const plantImage = document.getElementById("plant");
const plantNameInput = document.getElementById("plantName");
const saveNameBtn = document.getElementById("saveName");
const greeting = document.getElementById("greeting");
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

function updateDisplay() {
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;
  timeDisplay.textContent = 
    `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updatePlant() {
  progress = Math.min((seconds / 60) * 5, 100);
  progressBar.style.width = `${progress}%`;

  if (seconds >= 60 && plantStage < 2) {
    plantStage = 2;
    plantImage.src = "images/plant2.png";
  }
  if (seconds >= 120 && plantStage < 3) {
    plantStage = 3;
    plantImage.src = "images/plant3.png";
  }

  saveProgress();
}

function startTimer() {
  if (!timer) {
    timer = setInterval(() => {
      seconds++;
      updateDisplay();
      updatePlant();
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  progress = 0;
  plantStage = 1;
  plantImage.src = "images/plant1.png";
  progressBar.style.width = "0%";
  updateDisplay();
  localStorage.removeItem("plantProgress");
}

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);

function saveProgress() {
  localStorage.setItem("plantProgress", JSON.stringify({
    seconds, plantStage, progress
  }));
}

// 🌿 Save plant name
saveNameBtn.addEventListener("click", () => {
  const name = plantNameInput.value.trim();
  if (name) {
    localStorage.setItem("plantName", name);
    updateGreeting(name);
  }
});

function updateGreeting(name) {
  greeting.textContent = `Say hi to ${name} 🌱`;
}

// 🎵 Toggle music
musicBtn.addEventListener("click", () => {
  if (!musicPlaying) {
    bgMusic.play();
    musicBtn.textContent = "🔇 Stop Music";
  } else {
    bgMusic.pause();
    musicBtn.textContent = "🎵 Play Music";
  }
  musicPlaying = !musicPlaying;
});

// 🍂 Create falling leaves
function createLeaves() {
  const leaves = document.querySelector(".leaves");
  for (let i = 0; i < 10; i++) {
    const leaf = document.createElement("img");
    leaf.src = "images/leaf.png";
    leaf.classList.add("leaf");
    leaf.style.left = Math.random() * 100 + "vw";
    leaf.style.animationDuration = 8 + Math.random() * 4 + "s";
    leaves.appendChild(leaf);
  }
}

// 🌸 Load saved data
window.onload = () => {
  createLeaves();

  const saved = JSON.parse(localStorage.getItem("plantProgress"));
  const savedName = localStorage.getItem("plantName");

  if (saved) {
    seconds = saved.seconds;
    plantStage = saved.plantStage;
    progress = saved.progress;
    plantImage.src = `images/plant${plantStage}.png`;
    progressBar.style.width = `${progress}%`;
    updateDisplay();
  }

  if (savedName) {
    updateGreeting(savedName);
    plantNameInput.value = savedName;
  }
};
