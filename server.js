var express = require("express");
var override = require("method-override");
var bodyParser = require("body-parser");
// express handlebars require
var mrHandle = require("express-handlebars");
var webRoutes = require("./controllers/burgers_controlle.js");

var port = process.env.PORT || 3000;
var app = express();

// serve static content
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false}));

app.use(override("_method"));

// set up handlebars 
app.engine("handlebars", mrHandle({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use("/", webRoutes);

app.listen(port, function() {
	console.log("listening on pport: " + port);
});






