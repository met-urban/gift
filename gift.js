const mouth = document.getElementById("mouth");
const teeth = document.getElementById("teeth");
const tongue = document.getElementById("tongue");
const reye = document.getElementById("reye");
const leye = document.getElementById("leye");
const audio = document.querySelector("#audio");
const body = document.querySelector(".body");
const heart = document.querySelector(".heartBody");
const wish = document.querySelector(".wish");
const handMove = document.querySelector(".greet");
const hand = document.getElementById("hand");
const poemButton2024 = document.querySelector(".poem2024");
const poemButton2022 = document.querySelector(".poem2022");
const poemButton2019 = document.querySelector(".poem2019");
const poemButton2018 = document.querySelector(".poem2018");
const poem2024 = document.querySelector("#poem2024");
const poem2022 = document.querySelector("#poem2022");
const poem2019 = document.querySelector("#poem2019");
const poem2018 = document.querySelector("#poem2018");
const head = document.querySelector(".head");
const newHandShake = [
  {transform: "rotate(-10deg)"},
  {transform: "rotate(30deg)"},
  {transform: "rotate(-10deg)"}, 
];
const handTiming = {
  duration: 800,
  iterations: 3,
};


function talk() {
  mouth.style.animation = "mouthMove 1s ease 6";
  teeth.style.animation = "teethMove 1s ease 6";
  tongue.style.animation = "tongue 1s ease 6";
}

function eyeBlink() {
  reye.style.animation = "eyeBlink 0.4s 10s 4";
  leye.style.animation = "eyeBlink 0.4s 10s 4";
}

function talking() {
  audio.play();
  talk();
  eyeBlink();
  hearts();
}

function hearts() {
  heart.style.animation = "heartKiss 0.7s 6s ease 5";
}

function handShake() {
  hand.animate(newHandShake, handTiming);
};

function showPoem2024() {
  poem2024.style.visibility = "visible";
}

function showPoem2022() {
  poem2022.style.visibility = "visible";
}

function showPoem2019() {
  poem2019.style.visibility = "visible";
}

function showPoem2018() {
  poem2018.style.visibility = "visible";
}

function hidePoem() {
  poem2024.style.visibility = "hidden";
  poem2022.style.visibility = "hidden";
  poem2019.style.visibility = "hidden";
  poem2018.style.visibility = "hidden";
}

poemButton2024.addEventListener("click", showPoem2024);
poemButton2022.addEventListener("click", showPoem2022);
poemButton2019.addEventListener("click", showPoem2019);
poemButton2018.addEventListener("click", showPoem2018);
poem2024.addEventListener("click", hidePoem);
poem2022.addEventListener("click", hidePoem);
poem2019.addEventListener("click", hidePoem);
poem2018.addEventListener("click", hidePoem);
wish.addEventListener("click", talking); 
handMove.addEventListener("click", handShake);
