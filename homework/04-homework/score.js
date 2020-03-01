var userNameInput = $("#name");
var submitButton = $("#scoreSubmit");

$(document).ready(function() {


    $("#scoreObtained").text(localStorage.getItem("score"));

    submitButton.on("click", function(event) {
        event.preventDefault();
        var userName = userNameInput.value;
        localStorage.setItem("username", JSON.stringify(userName));

    })





















})