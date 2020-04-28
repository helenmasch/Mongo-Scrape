var mongoose = require("mongoose");

// schema constructor
var Schema = mongoose.Schema;

// create new UserSchema object
var ArticleSchema = new Schema({
    // title required in string
    title: {
        type: String,
        required: true
    },
    // link required in string
    link: {
        type: String,
        required: true
    },
    // note is the object that stores a Note id
    // links the ObjectId to Note model and allows us to populate the Article with the associated Note
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

// creates the model from schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;