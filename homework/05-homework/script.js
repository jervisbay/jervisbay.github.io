// Define array to store all the hours that would show in the schedule, each of these items in the array will be used as part of class and ID tags as well
var hoursArray = ["nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen"];

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

                // Define variable to get current time
                var currentTime = new Date(Date.now());
                var formattedTime = currentTime.getHours() + ":" + currentTime.getMinutes();

                // Define variable to contain edited text and the current time; add class for CSS formatting purpose
                var editTag = $("<p></p>").text("...edited, " + formattedTime);
                editTag.addClass("edited align-items-center");

                // Append variable to the container row
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

                // Change background color to green of the input element in which text was entered
                $("#" + e.target.id).css("background-color", "rgb(171, 207, 171)");
            }
        }
    });


    // Define function to get items from local storage and fill according to time whenever page is loaded
    function renderEvents() {
        var i;
        for (i = 0; i < hoursArray.length; i++) {
            $("#" + hoursArray[i] + "Hour").val(localStorage.getItem(hoursArray[i] + "Hour"));
        }
    }

    // Define function to add the done button whenever there is text in the input field, whenever page is loaded / refreshed
    function addDoneButtons() {

        // Create for loop to go through the hours array
        var i;
        for (i = 0; i < hoursArray.length; i++) {

            // If local storage has a value for respective time key...
            if (localStorage.getItem(hoursArray[i] + "Hour") !== null) {

                // Create and append button to respective container
                var doneButton = $("<button>");
                doneButton.addClass("doneButton");
                doneButton.text("Done!");
                $("." + hoursArray[i] + "Row").append(doneButton);

                // Add class to the input text field to change background color to green
                $("#" + hoursArray[i] + "Hour").addClass("eventFilled");
            }
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

        // If the done button has no next element (which would be the "edited" tag)...
        if (e.target.nextElementSibling === null) {
            // Remove the done button
            e.target.remove();
        }
        // Otherwise...
        else {

            // Remove the next element (which would be the "edited" tag) and the done button itself
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