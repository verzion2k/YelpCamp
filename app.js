var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Salmon Creek", image: "https://farm8.staticflickr.com/7258/7121861565_3f4957acb1.jpg"},
    {name: "Granat Hill", image: "https://farm3.staticflickr.com/2562/3753652224_7ab88a28df.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm1.staticflickr.com/22/31733208_3190a1e982.jpg"}
];

app.get("/", function(req, res){
   res.render("landing"); 
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});

app.post("/campgrounds", function(req, res){
   // get data from form and add to campgrounds array
   var name = req.body.name;
   var image = req.body.image;
   var newwCampground = {name: name, image: image};
   campgrounds.push(newwCampground);
   // redirect back to campgrounds page
   res.redirect("/campgrounds");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The YelpCamp server has started.."); 
});