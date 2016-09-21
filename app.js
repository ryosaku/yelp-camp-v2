var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
        {name: "Camp1", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTqg5PsPF91O_Cc_NQWI_r7j7a80eQYHgXOXH9JG8vsSwv5gGY6"},
        {name: "Camp2", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSEKLEv6uusxQ1FBPIkm51K0uahHCE9ehOQfguXh41QgkosTDrfg"},
        {name: "Camp3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeYhJVbHfTExkqvMzudFdX52JR0E6XxbEQaHkX5guo_aqWHCmg8A"}
    ]

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds",{campgrounds:campgrounds});
}); 

app.post("/campgrounds", function(req, res) {
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampgrounds = {name: name, image: image}
    campgrounds.push(newCampgrounds);
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs")
});

app.listen(3000, function() {
    console.log("the yelpcamp server has started");
});


