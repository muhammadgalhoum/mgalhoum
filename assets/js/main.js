// overlay and card div
let enterBtn = document.getElementById("leavecard");

function timedscrolltoggle() {
  setTimeout(function () {
    document.body.classList.toggle("noscroll");
  }, 1000);
}

function toggles() {
  document.getElementById("card").classList.toggle("moveout");
  document.getElementById("overlay").classList.toggle("transparent");
}

enterBtn.onclick = function toggleout() {
  timedscrolltoggle();
  toggles();
  document.getElementById("overlay").classList.remove("earlytransition");
}

function togglein() {
  document.body.classList.toggle("noscroll");
  toggles();
  document.getElementById("overlay").classList.toggle("earlytransition");
}

// Typewriter Effect 
let typedTextSpan = document.querySelector(".typed-text");
let cursorSpan = document.querySelector(".cursor");
const textArray = [
  "My name is Muhammad",
  "I'm a Python Web Developer",
  "A Native Front-end Developer",
  "Also available as a Freelancer",
];

const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
    cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
    cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});