let millisecondsElapsed = 0;
let interval = null;

const time = document.getElementById("time");

function padStart(value) {
    return String(value).padStart(2, "0");
}

function setTime() {
    const totalSeconds = Math.floor(millisecondsElapsed / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const centiseconds = Math.floor((millisecondsElapsed % 1000) / 10);

    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}:${padStart(centiseconds)}`;
}

function timer() {
    millisecondsElapsed += 10;
    setTime();
}

function startClock() {
    if (interval) stopClock();
    interval = setInterval(timer, 10);
}

function stopClock() {
    clearInterval(interval);
}

function resetClock() {
    stopClock();
    millisecondsElapsed = 0;
    setTime();
}