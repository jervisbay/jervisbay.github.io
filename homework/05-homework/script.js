// Start of document listener
$(document).ready(function() {

    // Render events from local storage so that prior events appear
    renderEvents();

    // Add done buttons for each event time that has an event filled in
    addDoneButtons();

    // Define function to create the done button once text is entered and submitted
    $(".event-col").on("keypress", function(e) {

        // If keypress ie "enter" (code 13)...
        if (e.which === 13) {

            // Define variable to store value of text within input element
            var event = $("#" + e.target.id);

            // Send variable to local storage with key being the ID (which would show the respective time of day)
            localStorage.setItem(e.target.id, event[0].value);

            // Define variable to store the row that contains the input element where text was being entered
            var selectedInput = e.target.parentElement;

            // If row already has a button element (which would be an additional childNode)...
            if (selectedInput.childNodes[5]) {

                var currentTime = new Date(Date.now());
                var formattedTime = currentTime.getHours() + ":" + currentTime.getMinutes();

                var editTag = $("<p></p>").text("...edited, " + formattedTime);
                editTag.addClass("edited align-items-center");

                $("." + e.target.parentNode.classList[2]).append(editTag);


            }
            // Otherwise...
            else {
                // Create button element
                var doneButton = $("<button>");
                // Add class to created button for manipulation after
                doneButton.addClass("doneButton");
                // Add text to created button element
                doneButton.text("Done!");

                // Append button element to container row
                $("." + e.target.parentElement.classList[2]).append(doneButton);

                // Change background color of the input element in which text was entered
                $("#" + e.target.id).css("background-color", "rgb(171, 207, 171)");
            }
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

    // Define function to add the done button whenever there is text in the input field, whenever page is loaded / refreshed
    function addDoneButtons() {

        if (localStorage.getItem("nineAM") !== null) {
            var doneButton = $("<button>");
            doneButton.addClass("doneButton");
            doneButton.text("Done!");
            $(".nineRow").append(doneButton);
            $("#nineAM").addClass("eventFilled");
        }
        if (localStorage.getItem("tenAM") !== null) {
            var doneButton = $("<button>");
            doneButton.addClass("doneButton");
            doneButton.text("Done!");
            $(".tenRow").append(doneButton);
            $("#tenAM").addClass("eventFilled");
        }
        if (localStorage.getItem("elevenAM") !== null) {
            var doneButton = $("<button>");
            doneButton.addClass("doneButton");
            doneButton.text("Done!");
            $(".elevenRow").append(doneButton);
            $("#elevenAM").addClass("eventFilled");
        }
        if (localStorage.getItem("twelvePM") !== null) {
            var doneButton = $("<button>");
            doneButton.addClass("doneButton");
            doneButton.text("Done!");
            $(".twelveRow").append(doneButton);
            $("#twelvePM").addClass("eventFilled");
        }
        if (localStorage.getItem("onePM") !== null) {
            var doneButton = $("<button>");
            doneButton.addClass("doneButton");
            doneButton.text("Done!");
            $(".oneRow").append(doneButton);
            $("#onePM").addClass("eventFilled");
        }
        if (localStorage.getItem("twoPM") !== null) {
            var doneButton = $("<button>");
            doneButton.addClass("doneButton");
            doneButton.text("Done!");
            $(".twoRow").append(doneButton);
            $("#twoPM").addClass("eventFilled");
        }
        if (localStorage.getItem("threePM") !== null) {
            var doneButton = $("<button>");
            doneButton.addClass("doneButton");
            doneButton.text("Done!");
            $(".threeRow").append(doneButton);
            $("#threePM").addClass("eventFilled");
        }
        if (localStorage.getItem("fourPM") !== null) {
            var doneButton = $("<button>");
            doneButton.addClass("doneButton");
            doneButton.text("Done!");
            $(".fourRow").append(doneButton);
            $("#fourPM").addClass("eventFilled");
        }
    }

    // Define event listener for on click on done button to remove parent text
    $(document).on("click", ".doneButton", function(e) {

        // Removing text from input element (sibling to the done button being clicked)
        this.parentNode.childNodes[3].value = "";

        // Change background color back to white
        $(this.parentNode.childNodes[3]).css("background-color", "white");

        // Remove event from local storage (the input element IDs are being used as keys)
        localStorage.removeItem(this.parentNode.childNodes[3].id)

        if (e.target.nextElementSibling === null) {
            e.target.remove();
        } else {
            e.target.nextElementSibling.remove();
            e.target.remove();
        }

    })


    // Define new day function to clear local storage and reload page to remove coloring and "done" buttons
    $("#start-new-day").on("click", function() {
        localStorage.clear();
        location.reload();
    })






    // End of document listener
});