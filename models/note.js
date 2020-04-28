var mongoose = require("mongoose");

// Schema constructor
var Schema = mongoose.Schema;

// create a new NoteSchema object
var NoteSchema = new Schema({
    title: String,
    body: String
});

// creates our model using the schema above
var Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
