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
const poemButton = document.querySelector(".poem");
const poem = document.querySelector("#poem");
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

function showPoem() {
  poem.style.visibility = "visible";
}

function hidePoem() {
  poem.style.visibility = "hidden";
}

poemButton.addEventListener("click", showPoem);
poem.addEventListener("click", hidePoem);
wish.addEventListener("click", talking); 
handMove.addEventListener("click", handShake);