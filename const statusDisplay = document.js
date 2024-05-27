const timeDisplay = document.getElementById("time");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

let startTime;
let interval;

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

function startTimer() {
    if (!startTime) {
        startTime = Date.now();
        interval = setInterval(updateTime, 1000);
        startButton.disabled = true;
    }
}

function stopTimer() {
    if (startTime) {
        clearInterval(interval);
        interval = null;
        startButton.disabled = false;
    }
}

function resetTimer() {
    stopTimer();
    startTime = null;
    updateTimeDisplay(0);
}

function updateTime() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;
    updateTimeDisplay(elapsedTime);
}

function updateTimeDisplay(elapsedTime) {
    const seconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    const displayTime = `${pad(hours)}:${pad(minutes % 60)}:${pad(seconds % 60)}`;
    timeDisplay.textContent = displayTime;
}

function pad(number) {
    return number.toString().padStart(2, "0");
}