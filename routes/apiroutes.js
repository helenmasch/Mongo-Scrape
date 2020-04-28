var db = require("../models")

// Scraping tools
var axios = require("axios");
var cheerio = require("cheerio");
 

function apiRoutes(app) {
    // routes
// adding a GET route for scraping the enews website
app.get("/scrape", function(req, res) {
    // adding body of html with axios
    // DO I ADD THE HTML THATS WITHIN THE H2 CLASS?
    axios.get("https://www.google.com/search?q=tv+news&safe=active&sxsrf=ALeKk03MhFJQktYN7Zmk1VlnSHGBbeNHrA:1588110287287&source=lnms&tbm=nws&sa=X&ved=2ahUKEwjTs6bsi4zpAhUeoXIEHfZ6DEYQ_AUoAXoECBUQAw&biw=1214&bih=610").then(function(response) {
        // load into cheerio
        var $ = cheerio.load(response.data);

        //grabs every h2 within an article tag
        $("div.ZINbbc").each(function(i,element) {
            // save the result object
            var result = {};
              console.log(element)
            var title = $(this).children("kCrYT").find("a").text()

            var summary = $(this).children("kCrYT").find("BNeawe").text()

            var link = $(this).children("kCrYT").find("a").attr("href")

            var image = $(this).children("kCrYT").children("lcJF1d").children("EYOsld").attr("src")

            console.log(title, " ", summary, " ", link, " ", image, " ")
        })

        res.send("scrape complete")
    })
})

app.get("/", function (req, res) {
    res.render("home");
});
 

}

module.exports = apiRoutes;