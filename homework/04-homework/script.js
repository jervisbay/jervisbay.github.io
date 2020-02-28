// Define score variable

var userScore = 0;
var startButton = $("#start-button");
var questionsAndAnswers = [{
    Question: "What is this?",
    1: "xxx",
    2: "yyy",
    3: "zzz",
    4: "aaa",
    Correct: "xxx",
}]

// Define functions
$(document).ready(function() {

    function countDown() {
        console.log("CLICK");
        var timerCount = 180;
        console.log(timerCount);
        $("#displayTimer").text("Time Left: " + timerCount);

        // Time interval for countdown
        var timeInterval = setInterval(function() {
            timerCount--;
            $("#displayTimer").text("Time Left: " + timerCount);

            if (timerCount === 0) {
                displayTimer.textContent = "Time's Up!";
                clearInterval(timeInterval);
            }
        }, 1000);
    }

    function generateQuestions() {
        startButton.hide();
        $(".introText").hide();


    }



    // Call functions

    startButton.on("click", countDown);
    startButton.on("click", generateQuestions);

    // End of document listener
})