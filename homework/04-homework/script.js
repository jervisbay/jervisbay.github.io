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
    Question: "Where is the 2020 Olympics being hosted?",
    Answers: ["Beijing", "Atlanta", "Paris", "Tokyo"],
    Correct: "Tokyo",
}, {
    Question: "Which movie was the Oscar for Best Movie in 2020?",
    Answers: ["Titanic", "Once Upon a Time in Hollywood", "Parasite", "1917"],
    Correct: "Parasite",
}, {
    Question: "Which team was the UEFA Champions League in 2019?",
    Answers: ["PSG", "Real Madrid", "Liverpool", "Barcelona"],
    Correct: "Liverpool",
}, {
    Question: "Which Coding Bootcamp is the best?",
    Answers: ["Thinkful", "Flatiron School", "General Assembly", "Trilogy / Columbia University"],
    Correct: "Trilogy / Columbia University",
}]

// Define timer for quiz 
var timerCount = 180; // Set to three minutes
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

                // Save current score to local storage
                localStorage.setItem("score", userScore);
                alert("Time's Up!");

                // Go to submit score page
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


            }
        }, 1000); // Time interval set to 1,000 milliseconds or 1 second
    }


    // Define function to generate questions
    function generateQuestions() {

        console.log(questionNumber);
        // If question number is more than 5, stop the quiz and go to submit score page
        if (questionNumber === 5) {
            alert("End of Quiz");
            localStorage.setItem("score", userScore);
            window.location.href = "submitscore.html";
        }
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
        for (i = 0; i < questionsAndAnswers[questionNumber].Answers.length; i++) {
            var answerText = $("<button>"); // Create <button> element
            answerText.addClass("answerContainer"); // Add specific class to created <button> element
            answerText.text(questionsAndAnswers[questionNumber].Answers[i]); // Loop through and add text from answers array, based on current question number
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
                alert("Correct!");

                // Change color of element to green if correct
                // $(".selectContainer").css("background-color", "green"); 

                // Remove the class added so it does not change color any more
                // $(this).removeClass("selectContainer"); 

                userScore += 4; // Add 4 points to user score
                $("#score").text("Score: " + userScore); // Update user score


                questionNumber++; // Increment question number
                questionPause(); // Pause before moving to next question
                quizContainer.empty();
                generateQuestions();

            } else {
                alert("Wrong!");

                // Change color of element to red if wrong
                // $(".selectContainer").css("background-color", "red"); 

                // Remove the class added so it does not change color any more
                // $(this).removeClass("selectContainer"); 

                timerCount -= 10; // Deduct time from timer for wrong answer
                questionNumber++; // Increment question number
                questionPause(); // Pause before moving to next question
                quizContainer.empty();
                generateQuestions();
            }
        })

    }

    // Define function to get to the next question
    function nextQuestion() {
        console.log(questionNumber);
        // If question number is more than 5, stop the quiz and go to submit score page
        if (questionNumber > 5) {
            alert("End of Quiz");
            window.location.href = "submitscore.html";
        }
        // Otherwise generate next set of questions
        else {
            generateQuestions();
        }
    }



    // Call functions

    startButton.on("click", countDown);
    startButton.on("click", generateQuestions);



    // End of document listener
})