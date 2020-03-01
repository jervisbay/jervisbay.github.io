var submitButton = $("#scoreSubmit");

$(document).ready(function() {


    $("#scoreObtained").text(localStorage.getItem("score"));

    submitButton.on("click", function(event) {

        event.preventDefault();
        var userNameInput = $("#name").val();
        console.log(userNameInput);
        localStorage.setItem("username", JSON.stringify(userNameInput));
        window.location.href = "highscore.html";

    })





















})