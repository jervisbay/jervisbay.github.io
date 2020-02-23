// Define variables
var startTimer = document.querySelector("#timerStart");
var wordScroll = document.querySelector("#wordScrollStart");
var timer = document.querySelector("#timer");

// Define placeholder text to scroll through
var wordStorage = "This is a random list of words that are here just for illustration purposes";

// Splitting placeholder text into an array by spacing
var wordList = wordStorage.split(" ");
var i = 0;

// Define function for countdown timer
function countDown() {
    // Prompt for user input for timer and convert into integer
    var timerInput = prompt("How many seconds would you like to count down to?");
    var timerInteger = parseInt(timerInput);
    timer.textContent = timerInteger;

    // Time interval for countdown
    var timeInterval = setInterval(function() {
        timerInteger--;
        timer.textContent = timerInteger;

        if (timerInteger === 0) {
            timer.textContent = "Time's Up!";
            clearInterval(timeInterval);
        }
    }, 1000);
}


// Define function for word scrolling
function wordScroller() {
    // Prompt for user input for time between word scrolls and convert into integer
    var timeBetweenWords = prompt("How many seconds between words would you like");
    timeBetweenWordsInteger = parseInt(timeBetweenWords) * 1000;
    i = 0;

    // Time interval for scrolling
    var wordInterval = setInterval(function() {
        if (wordList[i] === undefined) {
            clearInterval(wordInterval);
        } else {
            wordContainer.textContent = wordList[i];
            i++;
        }
    }, timeBetweenWordsInteger);
}


// Call functions
startTimer.addEventListener("click", countDown);
wordScroll.addEventListener("click", wordScroller);