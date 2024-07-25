// script.js
let startTime;
let updatedTime;
let difference;
let timerInterval;
let savedTime = 0;
let running = false;

const timeDisplay = document.getElementById('time-display');
const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const resetButton = document.getElementById('reset-button');

function startStopwatch() {
    if (!running) {
        startTime = new Date().getTime() - savedTime;
        timerInterval = setInterval(updateTime, 1000);
        running = true;
    }
}

function pauseStopwatch() {
    if (running) {
        clearInterval(timerInterval);
        savedTime = difference;
        running = false;
    }
}

function resetStopwatch() {
    clearInterval(timerInterval);
    savedTime = 0;
    running = false;
    timeDisplay.textContent = "00:00:00";
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    timeDisplay.textContent = hours + ":" + minutes + ":" + seconds;
}

startButton.addEventListener('click', startStopwatch);
pauseButton.addEventListener('click', pauseStopwatch);
resetButton.addEventListener('click', resetStopwatch);
