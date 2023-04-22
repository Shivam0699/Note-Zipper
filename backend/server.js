const express = require("express"); //bringing modules from package.json
const notes = require("./data/notes");
const dotenv = require("dotenv"); //importing the dotenv file

//creating an object of this
const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

//api end point
app.get("/", (req, res) => {
  res.send("API is runnumg..");
});

//creating an api that shows all the notes
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

//creating an api that shows the notes with id 1
app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

//creating web server
// app.listen(5000, console.log("Server started on port 5000"));

app.listen(PORT, console.log("Server started on port " + PORT));
