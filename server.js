var express = require("express");
var xphbs = require("express-handlebars");
var logger = require("morgan");
var mongoose = require("mongoose");

// Scraping tools
var axios = require("axios");
var cheerio = require("cheerio");

// require models
var db = require("./models");

var PORT = 3000;

// Express Handlebars
var app = express();
 
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
 
app.get("/", function (req, res) {
    res.render("home");
});
 
app.listen(3000);

// Middleware
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect == Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);
