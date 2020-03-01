// Define navigational variables
var submitButton = $("#scoreSubmit");

// Define array to store user names and scores
var usersThatPlayed = [];
var scoresThatPlayed = [];

// Start of document listener
$(document).ready(function() {

    // Get current score from local storage
    var newScore = localStorage.getItem("score");

    // Add this new score to array of saved scores --> Can't figure this part out

    // Replace placeholder text with score from local storage
    $("#scoreObtained").text(newScore);

    // Save score to local storage (wanted this to be the new array)
    localStorage.setItem("score", newScore);

    // Function for when submit button is clicked
    submitButton.on("click", function(event) {

        event.preventDefault();

        // Declare variable to store value of name that was inputted in form
        var newUser = $("#name").val();
        console.log(newUser);

        // Add this new user to array of saved users --> Can't figure this part out

        // Save user names to local storage (wanted this to be the new array)
        localStorage.setItem("username", JSON.stringify(newUser));

        // Direct to high score page
        window.location.href = "highscore.html";


        // End of document listener
    })





















})