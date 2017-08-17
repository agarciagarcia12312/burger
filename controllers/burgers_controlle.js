var express = require("express");
var burgers = require("../models/burger.js");
var router = express.Router();



// route that displays all burgers
router.get("/", function(req, res) {
  burgers.selectAll(function(data) {
    var burgerObject = {
      burgers: data
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
  });
});


// rute to add burger
router.post("/", function(req, res) {
	console.log("post Working")
	burgers.insertOne(req.body.name, function(){
	// 	// refreshes page
		res.redirect("/");
	})

});


// route to update burger (devour) property
router.put("/:id", function(req,res) {
	console.log("put Working")
	var ID = "id = " + req.params.id;
	console.log(ID);

	burgers.updateOne(ID, function() {
		// refreshes page
		res.redirect("/")
	});
});

router.delete("/:id", function(req, res) {
	console.log("delete working");
	var ID = "id = " + req.params.id;
	console.log(ID);

	burgers.deleteOne(ID, function() {
		res.redirect("/")
	});
});

module.exports = router;
// Create the router for the app, and export the router at the end of your file.