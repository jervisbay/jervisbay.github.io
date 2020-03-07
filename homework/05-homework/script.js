var mainContainer = $("#main-container");

// Start of document listner
$(document).ready(function() {

    renderEvents();
    addClearButtons();



    // Define function to create the done button once text is entered and submitted
    // Need to prevent more instances of button creation
    $(".event-col").on("keypress", function(e) {
        if (e.which === 13) {
            console.log("submit!");
            console.log(e.target.id);
            var event = $("#" + e.target.id);
            console.log(event[0].value);
            localStorage.setItem(e.target.id, event[0].value);
            var clearButton = $("<button>");
            clearButton.addClass("clearButton");
            clearButton.text("Done!");
            console.log(e.target.parentNode.classList[2]);
            $("." + e.target.parentNode.classList[2]).append(clearButton);
            $("#" + e.target.id).css("background-color", "rgb(171, 207, 171)");
        }

    });


    // Define function to get items from local storage and fill according to time whenever page is loaded
    function renderEvents() {
        $("#nineAM").val(localStorage.getItem("nineAM"));
        $("#tenAM").val(localStorage.getItem("tenAM"));
        $("#elevenAM").val(localStorage.getItem("elevenAM"));
        $("#twelvePM").val(localStorage.getItem("twelvePM"));
        $("#onePM").val(localStorage.getItem("onePM"));
        $("#twoPM").val(localStorage.getItem("twoPM"));
        $("#threePM").val(localStorage.getItem("threePM"));
        $("#fourPM").val(localStorage.getItem("fourPM"));

    }


    // Define function to add the done button whenever there is text in the input field
    function addClearButtons() {
        console.log("add button");
        if (localStorage.getItem("nineAM") !== null) {
            console.log("nine");
            var clearButton = $("<button>");
            clearButton.addClass("clearButton");
            clearButton.text("Done!");
            $(".nineRow").append(clearButton);
            $("#nineAM").addClass("eventFilled");
        }
        if (localStorage.getItem("tenAM") !== null) {
            console.log("ten");
            var clearButton = $("<button>");
            clearButton.addClass("clearButton");
            clearButton.text("Done!");
            $(".tenRow").append(clearButton);
            $("#tenAM").addClass("eventFilled");
        }
        if (localStorage.getItem("elevenAM") !== null) {
            var clearButton = $("<button>");
            clearButton.addClass("clearButton");
            clearButton.text("Done!");
            $(".elevenRow").append(clearButton);
            $("#elevenAM").addClass("eventFilled");
        }
        if (localStorage.getItem("twelvePM") !== null) {
            var clearButton = $("<button>");
            clearButton.addClass("clearButton");
            clearButton.text("Done!");
            $(".twelveRow").append(clearButton);
            $("#twelvePM").addClass("eventFilled");
        }
        if (localStorage.getItem("onePM") !== null) {
            var clearButton = $("<button>");
            clearButton.addClass("clearButton");
            clearButton.text("Done!");
            $(".oneRow").append(clearButton);
            $("#onePM").addClass("eventFilled");
        }
        if (localStorage.getItem("twoPM") !== null) {
            var clearButton = $("<button>");
            clearButton.addClass("clearButton");
            clearButton.text("Done!");
            $(".twoRow").append(clearButton);
            $("#twoPM").addClass("eventFilled");
        }
        if (localStorage.getItem("threePM") !== null) {
            var clearButton = $("<button>");
            clearButton.addClass("clearButton");
            clearButton.text("Done!");
            $(".threeRow").append(clearButton);
            $("#threePM").addClass("eventFilled");
        }
        if (localStorage.getItem("fourPM") !== null) {
            var clearButton = $("<button>");
            clearButton.addClass("clearButton");
            clearButton.text("Done!");
            $(".fourRow").append(clearButton);
            $("#fourPM").addClass("eventFilled");
        }

    }



    // Need event listener for on click on clear button to remove parent text
    $(".clearButton").on("click", function(e) {
        console.log("clear field");
        console.log(e.target.classList[1]); // Struggling here to traverse to right element


    })


    // Define new day function to clear local storage and reload page to remove coloring and "done" buttons

    $("#start-new-day").on("click", function() {
        localStorage.clear();
        location.reload();
    })










    // End of document listener
});