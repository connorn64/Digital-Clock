// Clock item
function updateClock () {
    // Variables
    const clock = document.getElementById('clock');
    
    // Get the time from getDate
    const time = new Date();

    // fetching time values from time
    let seconds = time.getSeconds();/* 0secs - 59secs */
    let minutes = time.getMinutes(); /* 0mins - 59mins */
    let hours = time.getHours(); /* 0hrs - 23hrs */

    // Declaring time of day
    let tod = ' AM';

    // Changing to 12
    if (hours == 0) {
        hours = 12;
    }

    // Checking time of day
    if (hours > 12) {
        hours = hours - 12;
        tod = ' PM';
    }

    // Adding 0 before digits below 10
    (hours < 10) ? hours = '0' + hours : hours = hours;
    (minutes < 10) ? minutes = '0' + minutes : minutes = minutes;
    (seconds < 10) ? seconds = '0' + seconds : seconds = seconds;

    // Returning the time in a string
    let realTime = hours + ' : ' + minutes + ' : ' + seconds + tod;
    
    // Storing realTime value into clock div
    clock.innerText = realTime;
}

// Runs function every 1 second
setInterval(updateClock, 1000);