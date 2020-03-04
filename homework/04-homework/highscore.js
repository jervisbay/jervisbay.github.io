$(document).ready(function() {

    // Get user name from local storage array and replace placeholder text
    $("#highScoreName1").text(localStorage.key(0));
    $("#highScoreName2").text(localStorage.key(1));
    $("#highScoreName3").text(localStorage.key(2));
    $("#highScoreName4").text(localStorage.key(3));
    $("#highScoreName5").text(localStorage.key(4));

    // Get score from local storage array and replace placeholder text
    $("#highScoreScore1").text(localStorage.getItem(localStorage.key(0)));
    $("#highScoreScore2").text(localStorage.getItem(localStorage.key(1)));
    $("#highScoreScore3").text(localStorage.getItem(localStorage.key(2)));
    $("#highScoreScore4").text(localStorage.getItem(localStorage.key(3)));
    $("#highScoreScore5").text(localStorage.getItem(localStorage.key(4)));

    // Retry function to go back to initial quiz page
    $("#retry-button").on("click", function() {
        window.location.href = "index.html";

    })








    // End of document listener
})