let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let minutes = 0;
let seconds = 0;
let milliSeconds = 0;

let timer = false;

// hide stop and reset buttons
startApp();

function startApp() {
    // start app with appeared start btn and hide stop and reset btns
    startBtn.style.display = "";
    stopBtn.style.display = "none";
    resetBtn.style.display = "none";
    // initial stop btn
    stopBtn.className = "stop";
    stopBtn.innerHTML = "stop";
}

startBtn.addEventListener('click', function() {
    timer = true;
    // hide start btn after start counting
    document.getElementById("start").style.display = "none";
    stopwatch();
});

stopBtn.addEventListener('click', function() {
    // toggle stop btn      stop -> resume && resume -> stop
    if (timer == true) {
        timer = false;
        // change class of btn and innerHTML
        stopBtn.className = "resume";
        stopBtn.innerHTML = "resume";
    } else {
        timer = true;
        // change class of btn and innerHTML
        stopBtn.className = "stop";
        stopBtn.innerHTML = "stop";
        stopwatch();
    }
});

resetBtn.addEventListener('click', function() {
    timer = false;
    minutes = 0;
    seconds = 0;
    milliSeconds = 0;

    document.getElementById("m").innerHTML = "00";
    document.getElementById("s").innerHTML = "00";
    document.getElementById("ml").innerHTML = "00";

    // display start btn ,and hide stop, reset btns
    startApp();
});

function stopwatch() {
    if (timer) {
        // display stop and reset btns after start counting
        stopBtn.style.display = "";
        resetBtn.style.display = "";

        milliSeconds++;
        if (milliSeconds == 100) {
            seconds++;
            milliSeconds = 0;
        }
        if (seconds == 60) {
            minutes++;
            seconds = 0;
        }

        let minuteStr = minutes.toString().padStart(3, '0');
        let secondStr = seconds.toString().padStart(2, '0');
        let milliStr = milliSeconds.toString().padStart(2, '0');

        console.log(minuteStr);
        console.log(secondStr);
        console.log(milliStr);

        document.getElementById("m").innerHTML = minuteStr;
        document.getElementById("s").innerHTML = secondStr;
        document.getElementById("ml").innerHTML = milliStr;

        setTimeout(stopwatch, 10);
    }
}