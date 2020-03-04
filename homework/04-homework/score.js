// Define navigational variables
var submitButton = $("#scoreSubmit");


// Start of document listener
$(document).ready(function() {

    // Get current score from local storage and store as variable
    var newScore = localStorage.getItem("score");

    // Replace placeholder text with score from local storage
    $("#scoreObtained").text(newScore);

    // Function for when submit button is clicked
    submitButton.on("click", function(event) {

        event.preventDefault();

        // Declare variable to store value of name that was inputted in form
        var newUser = $("#name").val();

        // Set item to local storage where each user is a key with the respective score being the value
        localStorage.setItem(newUser, newScore);

        // Clear the local storage key called "score" --> so the only keys left in local storage are different user names
        localStorage.removeItem("score");

        // Direct to high score page
        window.location.href = "highscore.html";


        // End of document listener
    })





















})