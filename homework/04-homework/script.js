// Define score variable

var userScore = 0;
var startButton = $("#start-button");


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




    // Call functions

    startButton.on("click", countDown);
    startButton.on("click", function() {
        startButton.hide();
        $(".introText").hide();
    });

    // End of document listener
})