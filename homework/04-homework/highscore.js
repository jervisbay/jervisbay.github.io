$(document).ready(function() {

    // Get user name from local storage and replace placeholder text
    $("#highScoreName").text(JSON.parse(localStorage.getItem("username")));

    // Get score from local storage and replace placeholder text
    $("#highScoreScore").text(localStorage.getItem("score"));


    // Retry function to go back to initial quiz page
    $("#retry-button").on("click", function() {
        window.location.href = "index.html";

    })








    // End of document listener
})