// Define score variable and other navigational variables

var userScore = 0;
var startButton = $("#start-button");
var mainTextContainer = $(".introText");
var quizContainer = $("#quizQuestions");
var questionsAndAnswers = [{
    Question: "What is this?",
    Answers: ["xxx", "yyy", "bbb", "ccc"],
    Correct: "xxx",
}]
var timerCount = 180;


// Define functions
$(document).ready(function() {

    function countDown() {
        console.log("CLICK");
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
        mainTextContainer.empty();

        // Create div to hold question
        var questionText = $("<div>");

        // Insert text from questionandanswers array
        questionText.text(questionsAndAnswers[0].Question);
        quizContainer.append(questionText);

        quizContainer.append($("<br>"));

        $("#score").text("Score: " + userScore);

        // For loop to generate answers
        var i;
        for (i = 0; i < questionsAndAnswers[0].Answers.length; i++) {
            var answerText = $("<button>"); // Create <button> element
            answerText.addClass("answerContainer"); // Add specific class to created <button> element
            answerText.text(questionsAndAnswers[0].Answers[i]); // Loop through and add text from answers array
            quizContainer.append(answerText); // Append to container

        }

        $(".answerContainer").on("click", function(e) {
            console.log("clicked on answer");
            $(this).addClass("selectContainer");
            console.log(this);

            var selectedAnswer = e.target.innerHTML;
            console.log(selectedAnswer);

            if (selectedAnswer === questionsAndAnswers[0].Correct) {
                console.log("Correct");
                $(".selectContainer").css("background-color", "green");
                userScore += 4;
                $("#score").text("Score: " + userScore);
                $(this).removeClass("selectContainer");

            } else {
                console.log("Wrong");
                $(".selectContainer").css("background-color", "red");
                $(this).removeClass("selectContainer");
                timerCount -= 10;

            }
        })
    }



    // Call functions

    startButton.on("click", countDown);
    startButton.on("click", generateQuestions);


    // End of document listener
})