//RT clock function

const realtimeClock = () => {

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    //Pad the hours, minutes and seconds variables with leading zeros
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    //Display the clock
    document.getElementById("clock").innerHTML = hours + " : " + minutes + " : " + seconds;

    //Asynchronous Timeout function calls realtimeClock and adds 0.5second delay. The rest of our program won’t stop executing during the delay.
    setTimeout(realtimeClock, 500);


    //Creating empty variable for the message
    let greeting = '';


    //Special condition for 403
    if (hours == 4 && minutes == 3) {
        greeting = "The clock is forbidden!";
    }

    //Special condition for 404
    else if (hours == 4 && minutes == 4) {
        greeting = "Clock is not found.";
    }
    //Special condition for 420
    else if (hours == 4 && minutes == 20) {
        greeting = "The clock is behind the thick foggy cloud...";
    }

    //If special conditions are not true
    else if (hours >= 0 && hours < 5 || hours == 23) {
        greeting = "Good Night!";

    }

    else if (hours >= 5 && hours < 11) {
        greeting = "Good Morning!";

    }

    else if (hours >= 11 && hours < 17) {
        greeting = "Good Day!";

    }

    else if (hours >= 17 && hours < 23) {
        greeting = "Good Evening!";

    }

    document.getElementById("greeting").innerHTML = greeting;

}



/* Stopwatch -------------------------------------------------- */

//Hold values in variables

let hours = 0;
let minutes = 0;
let seconds = 0;

//Define variables to hold "display zeros"
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Define variable to hold setInterval() function
let interval = null;

//Stopwatch function
const stopwatch = () => {

    seconds++;

    //Condition for when seconds reach 60, increase minutes etc.

    if (seconds == 60) {
        minutes++;
        seconds = 0;

        if (minutes == 60) {
            hours++;
            minutes = 0;
        }
    }

    //If seconds/minutes/hourse are only one digit, add a leading zero


    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    } else {
        displaySeconds = seconds;
    }

    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    } else {
        displayMinutes = minutes;
    }

    if (hours < 10) {
        displayHours = "0" + hours.toString();
    } else {
        displayHours = hours;
    }

    //Display stopwatch in the display box
    document.getElementById("stopwatchdisplay").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;


}


//Starts the stopwatch when start button is clicked
const start = () => {
    interval = window.setInterval(stopwatch, 1000);
    document.getElementById("startbutton").disabled = true; //Prevents for multiple starts
}

//Stops the stopwatch when stop button is clicked
const pause = () => {
    window.clearInterval(interval);
    document.getElementById("startbutton").disabled = false; //Enables start again
}


//Resets the clock by resetting vars and setting display screen back to zeros
const reset = () => {
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("stopwatchdisplay").innerHTML = "00:00:00";
    document.getElementById("startbutton").disabled = false; //Enables start again
}


/* Timer ------------------------------------------------------------------- */


let downloadTimer = null;

const countdownTimer = () => {

    document.getElementById("timerstart").disabled = true; //Disables start btn, for preventing multiple starts
    
    let minutesToSeconds = 60 * (document.getElementById("inputminutes").value); //Converts input minutes to seconds
    
    let inputseconds = document.getElementById("inputseconds").value; //Input seconds from input

    let timeleft = (minutesToSeconds - (- inputseconds)); //Converted seconds and input seconds together

    downloadTimer = setInterval (() => {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "Finished";
            alert("Time is Over!");
            document.getElementById("timerstart").disabled = false; //Enables start btn again
        } else {
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        }
        timeleft -= 1;
    }, 1000);

}


const timerstop = () => {
    clearInterval(downloadTimer);
    document.getElementById("timerstart").disabled = false; //Enables start btn again
    document.getElementById("countdown").innerHTML = "Finished"; //Set countdown finished
    document.getElementById("inputminutes").value = ""; //Clear inputs
    document.getElementById("inputseconds").value = ""; //Clear inputs

}



/* Switch functions for multifunctional clock modes -------------------------------- */
const switch1 = () => {
    document.getElementById("mainFrameOne").style.display = "block";
    document.getElementById("mainFrameTwo").style.display = "none";
    document.getElementById("mainFrameThree").style.display = "none";
}

const switch2 = () => {
    document.getElementById("mainFrameOne").style.display = "none";
    document.getElementById("mainFrameTwo").style.display = "block";
    document.getElementById("mainFrameThree").style.display = "none";
}

const switch3 = () => {
    document.getElementById("mainFrameOne").style.display = "none";
    document.getElementById("mainFrameTwo").style.display = "none";
    document.getElementById("mainFrameThree").style.display = "block";
}