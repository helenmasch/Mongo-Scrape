var express = require("express");
var exphbs = require("express-handlebars");
var logger = require("morgan");
var mongoose = require("mongoose");

var PORT =  process.env.PORT || 3000;

// Express Handlebars
var app = express();
 
app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");
 

// Middleware
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

var apiRoutes = require("./routes/apiroutes")

apiRoutes(app)

// Connect == Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);


app.listen(PORT, function(){
    console.log("app is listening on http://localhost:" + PORT)
});