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
                    $("<h4>").text(notesData[i].title),
                    $(`<p>`).text(notesData[i].text)
                );
                noteList.append(listItem);
            }
        });
}

function getNewNotesArray(deletedNoteTitle) {
    $.ajax({
            url: "/api/notes",
            method: "GET"
        })
        .then(function(notesData) {
            console.log(deletedNoteTitle);
            // filter notes that don't include the note being clicked on
            var newNotesArray = notesData.filter(x => {
                return x.title != deletedNoteTitle;
            })
            console.log(newNotesArray);
            postNewNotesArray(newNotesArray);
        })
}

function clearNotes() {
    $.ajax({
        url: "/api/clear",
        method: "GET"
    }).then(handleClearNote());
}

function handleClearNote() {
    alert("Clearing...");
    $("#noteList").empty();
}

// trying to replace current db.json
function postNewNotesArray(newNotesArray) {
    alert("Refreshing notes...");
    $.ajax({
        url: "/api/notes",
        method: "GET"
    }).then(function(oldNoteArray) {
        oldNoteArray = newNotesArray;
    })
}


$(document).on("click", ".list-group-item", function(e) {
    console.log(this);
    $(this).append(
        $(`<button class="delete-button">`).text("Delete")
    );
});

$(document).on("click", ".delete-button", function(e) {
    e.stopPropagation();
    var deletedNoteTitle = e.target.parentElement.firstElementChild.innerText;
    console.log(deletedNoteTitle);
    e.target.parentElement.remove();
    getNewNotesArray(deletedNoteTitle);
});


$(".clear-button").on("click", clearNotes);

renderNotes();