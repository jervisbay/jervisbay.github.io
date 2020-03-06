var mainContainer = $("#main-container");

// Start of document listner
$(document).ready(function() {

    $(".event-col").on("keypress", function(e) {
        if (e.which === 13) {
            console.log("submit!");
            console.log(e.target.id);
            var event = $("#" + e.target.id);
            console.log(event[0].value);
            localStorage.setItem(e.target.id, event[0].value)
        }

    });



















    // End of document listener
});