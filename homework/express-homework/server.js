// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");
var storedNotes = require("./Develop/db/db.json");


var id;
fs.readFile("./Develop/db/id.txt", "UTF-8", function(err, res) {
    console.log(res);
    id = res;
})


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

app.get("/api/notes", function(req, res) {
    return res.json(storedNotes);
});

app.get("/api/id", function(req, res) {
    return res.json(id);
});

app.delete("/api/notes/:ID", function(req, res) {
    console.log(req.params);
    storedNotes = storedNotes.filter(x => {
        return x.id != req.params.ID;

    })
    fs.writeFile("./Develop/db/db.json", JSON.stringify(storedNotes), function(err, response) {
        res.send("Deleted note with ID: " + req.params.ID);
    })
})

app.delete("/api/clear", function(req, res) {
    storedNotes = [];
    fs.writeFile("./Develop/db/db.json", JSON.stringify(storedNotes), function(err, response) {
        console.log("Cleared all notes");
        fs.writeFile("./Develop/db/id.txt", 1, function(err, idwrite) {
            console.log("Reset ID to 1");
        });
    });
});

// Create New Notes - takes in JSON input
app.post("/api/notes", function(req, res) {
    var newNote = { id: id, ...req.body };
    storedNotes.push(newNote);

    fs.readFile("./Develop/db/db.json", "UTF8", function(err, resp) {
        var dbArray = JSON.parse(resp);
        dbArray.push(newNote);
        dbArray = JSON.stringify(dbArray);
        fs.writeFile("./Develop/db/db.json", dbArray, function(err, response) {
            id++;
            fs.writeFile("./Develop/db/id.txt", id, function(err, respo) {
                res.json(newNote);
            });
        })
    })
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
});