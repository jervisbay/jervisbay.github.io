function renderNotes() {
    $.ajax({
            url: "/api/notes",
            method: "GET"
        })
        .then(function(notesData) {
            console.log(notesData);

            for (var i = 0; i < notesData.length; i++) {
                var noteList = $("#noteList");
                var listItem = $("<li class='list-group-item mt-4'>");
                listItem.append(
                    $("<h6>").text(notesData[i].id),
                    $("<h4>").text(notesData[i].title),
                    $(`<p>`).text(notesData[i].text)
                );
                noteList.append(listItem);
            }
        });
}

function getNewNotesArray(deletedNoteID) {
    $.ajax({
            url: "/api/notes/" + deletedNoteID,
            method: "DELETE"
        })
        .then(function(notesData) {
            console.log(notesData);
        })
}

function clearNotes() {
    $.ajax({
        url: "/api/clear",
        method: "DELETE"
    }).then(handleClearNote());
}

function handleClearNote() {
    alert("Clearing...");
    $("#noteList").empty();
}

$(document).on("click", ".list-group-item", function(e) {
    console.log(this);
    $(this).append(
        $(`<button class="delete-button">`).text("Delete")
    );
});

$(document).on("click", ".delete-button", function(e) {
    e.stopPropagation();
    var deletedNoteID = e.target.parentElement.firstElementChild.innerText;
    console.log(deletedNoteID);
    e.target.parentElement.remove();
    getNewNotesArray(deletedNoteID);
});


$(".clear-button").on("click", clearNotes);

renderNotes();