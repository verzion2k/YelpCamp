<<<<<<< HEAD
var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");

mongoose.connect("mongodb://localhost:27017/yelp_camp", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//   {
//       name: "Granite Hill",
//       image: "https://pixabay.com/get/eb31b30829fd003ed1584d05fb1d4e97e07ee3d21cac104496f6c87fafebb3b1_340.jpg",
//       description: "This is a huge granite hill, no bathrooms. No water. Beautiful granite!"
//   },
//   function(err, campground){
//       if(err){
//           console.log(err);
//       } else {
//           console.log("NEWLY CREATED CAMPGROUND: ");
//           console.log(campground);
//       }
//   }
// );

// app.get("/", function(req, res){
//   res.render("landing"); 
// });

//INDEX - show all campgrounds
app.get("/campgrounds", function(req, res){
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
       if(err){
           console.log(err);
       } else {
           res.render("index", {campgrounds: allCampgrounds});
       }
    });
});

//NEW - show form to create new campground
=======
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

>>>>>>> 6aad036b12b1554e7f81b6a1f1c5a792713afbf5
app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});

<<<<<<< HEAD
//CREATE - add new campground to DB
=======
>>>>>>> 6aad036b12b1554e7f81b6a1f1c5a792713afbf5
app.post("/campgrounds", function(req, res){
   // get data from form and add to campgrounds array
   var name = req.body.name;
   var image = req.body.image;
<<<<<<< HEAD
   var desc = req.body.description;
   var newCampground = {name: name, image: image, description: desc};
   // Create a new campground and save to DB
   Campground.create(newCampground, function(err, newlyCreated){
      if(err){
        console.log(err);
      } else {
        // redirect back to campgrounds page
        res.redirect("/campgrounds");
      }
   });
});

//SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res) {
    //find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            //render show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
=======
   var newwCampground = {name: name, image: image};
   campgrounds.push(newwCampground);
   // redirect back to campgrounds page
   res.redirect("/campgrounds");
>>>>>>> 6aad036b12b1554e7f81b6a1f1c5a792713afbf5
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The YelpCamp server has started.."); 
});