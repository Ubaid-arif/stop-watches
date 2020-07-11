//   Themes
function dark() {
    var dark = document.getElementById('colors')
    dark.style.backgroundColor = 'black'
    // var dark = document.getElementById('min')
    // dark.style.backgroundColor = 'white'
    // dark.style.color = 'black'
    // var dark = document.getElementById('sec')
    // dark.style.backgroundColor = 'white'
    // dark.style.color = 'black'
    // var dark = document.getElementById('msec')
    // dark.style.backgroundColor = 'white'
    // dark.style.color = 'black'
    var dark = document.getElementById('heading')
    dark.style.color = 'white'
    var dark = document.getElementById('themes')
    dark.style.color = 'white'
    var dark = document.getElementById('laps')
    dark.style.color = 'black'
    dark.style.backgroundColor = 'white'
    var dark = document.getElementById('colors')
    dark.style.border = '5px solid white'
    var dark = document.getElementById('me')
    dark.style.color = 'white'
    dark.style.border = '2px solid white'
    
  
}
function light() {
    var light = document.getElementById('colors')
    light.style.backgroundColor = 'white'
    // var light = document.getElementById('min')
    // light.style.backgroundColor = 'black'
    // light.style.color = 'white'
    // var light = document.getElementById('sec')
    // light.style.backgroundColor = 'black'
    // light.style.color = 'white'
    // var light = document.getElementById('msec')
    // light.style.backgroundColor = 'black'
    // light.style.color = 'white'
    var light = document.getElementById('heading')
    light.style.color = 'black'
    var light = document.getElementById('themes')
    light.style.color = 'black'
    var light = document.getElementById('laps')
    light.style.color = 'white'
    light.style.backgroundColor = 'black'
    var light = document.getElementById('colors')
    light.style.border = '5px solid black'
    var light = document.getElementById('me')
    light.style.color = 'black'
    light.style.border = '2px solid black'

    
}

// stopwatch

var min = 00;
var sec = 00;
var msec = 00;
var minHeading = document.getElementById('min')
var secHeading = document.getElementById('sec')
var msecHeading = document.getElementById('msec')
var interval;

function timer() {
    msec++
    msecHeading.innerHTML = msec;
    if (msec >= 100) {
        sec++
        secHeading.innerHTML = sec
        msec = 00;

    }
    else if (sec >= 60) {
        min++
        minHeading.innerHTML = min
        sec = 00
    }
}
// Toggle StartStop 
var startstop = 0;
function startStop() {

    startstop = startstop + 1;

    if (startstop === 1) {
        start();
        var toggle = document.getElementById("start")
        toggle.innerHTML = "Stop";
    } else if (startstop === 2) {
        var toggle = document.getElementById("start")
        toggle.innerHTML = "Start";
        startstop = 0;
        stop();
    }

}

function start() {
    interval = setInterval(timer, 10)
}
function stop() {
    clearInterval(interval)
}
function reset() {
    min = "00"
    sec = "00"
    msec = "00"
    minHeading.innerHTML = "00"
    secHeading.innerHTML = "00"
    msecHeading.innerHTML = "00"
    stop()
}

// lap temporary storage

function Lap() {
    var input = prompt("Enter name")
    var Lap = document.getElementById('lap');
    var Laps = document.getElementById('laps');

    Laps.innerHTML += "<li>" + input + " " + minHeading.innerHTML + ":" + secHeading.innerHTML + ":" + msecHeading.innerHTML + "</li>";
}