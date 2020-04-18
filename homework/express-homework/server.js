// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");
var storedNotes = require("./Develop/db/db.json");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/styles", express.static(path.join(__dirname, '/Develop/public/')));
app.use("/js", express.static(path.join(__dirname, '/Develop/public/assets/js')));

// Routes
// =============================================================
// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/Develop/public/index.html"));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/Develop/public/notes.html"));
});

app.get("/savednotes", function(req, res) {
    res.sendFile(path.join(__dirname, "/Develop/public/savednotes.html"));
});


// Displays all tables as JSON

app.get("/api/notes", function(req, res) {
    return res.json(storedNotes);
});

app.get("/api/clear", function(req, res) {
    storedNotes = [];
});



// Create New Notes - takes in JSON input
app.post("/api/notes", function(req, res) {

    var newNote = req.body;
    console.log(newNote);
    res.json(newNote);
    storedNotes.push(newNote);

});

app.post("/api/newnotes"),
    function(req, res) {
        storedNotes = req.body;
    }


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
});