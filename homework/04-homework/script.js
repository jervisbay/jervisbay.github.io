// Define score variable and other navigational variables

var userScore = 0;
var startButton = $("#start-button");
var mainTextContainer = $(".introText");
var quizContainer = $("#quizQuestions");
var questionNumber = 0;

// Define Array to hold Questions and Answers

var questionsAndAnswers = [{
    Question: "Which Democratic primary states has Joe Biden won?",
    Answers: ["South Carolina", "Nevada", "Iowa", "New Hampshire"],
    Correct: "South Carolina",
}, {
    Question: "Who is this?",
    Answers: ["xxx", "yyy", "bbb", "ccc"],
    Correct: "xxx",
}, {
    Question: "How is this?",
    Answers: ["xxx", "yyy", "bbb", "ccc"],
    Correct: "xxx",
}, {
    Question: "Why is this?",
    Answers: ["xxx", "yyy", "bbb", "ccc"],
    Correct: "xxx",
}, {
    Question: "Where is this?",
    Answers: ["xxx", "yyy", "bbb", "ccc"],
    Correct: "xxx",
}]

// Define timer for quiz 
var timerCount = 10; // Set to three minutes
var pauseCount = 1;


// Define functions
$(document).ready(function() {

    // Define the timer function
    function countDown() {
        $("#displayTimer").text("Time Left: " + timerCount);

        // Time interval for countdown
        var timeInterval = setInterval(function() {
            timerCount--;
            $("#displayTimer").text("Time Left: " + timerCount);

            if (timerCount === 0 || timerCount < 0) {

                clearInterval(timeInterval);
                localStorage.setItem("score", userScore);
                alert("Time's Up!");
                // Need to redirect window to the form page to submit high score
                window.location.href = "submitscore.html";
            }
        }, 1000); // Time interval set to 1,000 milliseconds or 1 second
    }

    // Define the function to pause before moving to next question
    function questionPause() {

        // Time interval for countdown
        var timeInterval = setInterval(function() {
            pauseCount--;
            if (pauseCount === 0) {
                clearInterval(timeInterval);
                nextQuestion(); // Call function to go to next question
            }
        }, 1000); // Time interval set to 1,000 milliseconds or 1 second
    }


    // Define function to generate questions
    function generateQuestions() {

        // Hide the start button and empty the main container holding the introductory text
        startButton.hide();
        mainTextContainer.empty();

        // Create div to hold question
        var questionText = $("<div>");

        // Insert text from questionandanswers array
        questionText.addClass("questionContainer");
        questionText.text(questionsAndAnswers[questionNumber].Question);

        // Append created div to placeholder container
        quizContainer.append(questionText);

        quizContainer.append($("<br>"));

        // Display user score with placeholder zero score 
        $("#score").text("Score: " + userScore);

        // For loop to generate answers
        var i;
        for (i = 0; i < questionsAndAnswers[0].Answers.length; i++) {
            var answerText = $("<button>"); // Create <button> element
            answerText.addClass("answerContainer"); // Add specific class to created <button> element
            answerText.text(questionsAndAnswers[questionNumber].Answers[i]); // Loop through and add text from answers array
            quizContainer.append(answerText); // Append to container
        }

        // Function to check selected answer against correct answer
        $(".answerContainer").on("click", function(e) {

            // Adding class to selected answer (for manipulation later)
            $(this).addClass("selectContainer");

            // Define variable for text content of the selected answer
            var selectedAnswer = e.target.innerHTML;

            // Checking if text content of selected answer matches that of the correct answer based on the questions and answers array
            if (selectedAnswer === questionsAndAnswers[questionNumber].Correct) {
                console.log("Correct");
                $(".selectContainer").css("background-color", "green"); // Change color of element to green if correct
                userScore += 4; // Add 4 points to user score
                $("#score").text("Score: " + userScore); // Update user score
                $(this).removeClass("selectContainer"); // Remove the class added so it does not change color any more
                questionNumber++;
                questionPause(); // Pause before moving to next question

            } else {
                console.log("Wrong");
                $(".selectContainer").css("background-color", "red");
                $(this).removeClass("selectContainer");
                timerCount -= 10;
                questionNumber++;
                questionPause(); // Pause before moving to next question
            }
        })
    }

    // Define function to get to the next question
    function nextQuestion() {
        quizContainer.empty();
        var questionText = $("<div>");

        // Insert text from questionandanswers array
        questionText.addClass("questionContainer");
        questionText.text(questionsAndAnswers[questionNumber].Question);

        // Append created div to placeholder container
        quizContainer.append(questionText);

        quizContainer.append($("<br>"));

        var i;
        for (i = 0; i < questionsAndAnswers[0].Answers.length; i++) {


            var answerText = $("<button>"); // Create <button> element
            answerText.addClass("answerContainer"); // Add specific class to created <button> element
            answerText.text(questionsAndAnswers[questionNumber].Answers[i]); // Loop through and add text from answers array
            quizContainer.append(answerText); // Append to container

        }
        $(".answerContainer").on("click", function(e) {

            // Adding class to selected answer (for manipulation later)
            $(this).addClass("selectContainer");

            // Define variable for text content of the selected answer
            var selectedAnswer = e.target.innerHTML;

            // Checking if text content of selected answer matches that of the correct answer based on the questions and answers array
            if (selectedAnswer === questionsAndAnswers[questionNumber].Correct) {
                console.log("Correct");
                $(".selectContainer").css("background-color", "green"); // Change color of element to green if correct
                userScore += 4; // Add 4 points to user score
                $("#score").text("Score: " + userScore); // Update user score
                $(this).removeClass("selectContainer"); // Remove the class added so it does not change color any more
                questionNumber++;
                questionPause(); // Pause before moving to next question

            } else {
                console.log("Wrong");
                $(".selectContainer").css("background-color", "red");
                $(this).removeClass("selectContainer");
                timerCount -= 10;
                questionNumber++;
                questionPause(); // Pause before moving to next question
            }
        })
    }






    // Call functions

    startButton.on("click", countDown);
    startButton.on("click", generateQuestions);


    // End of document listener
})