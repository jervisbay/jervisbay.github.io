$(document).ready(function() {
    $("#highScoreName").text(JSON.parse(localStorage.getItem("username")));

    $("#highScoreScore").text(localStorage.getItem("score"));

    $("#retry-button").on("click", function() {
        window.location.href = "index.html";

    })





















})