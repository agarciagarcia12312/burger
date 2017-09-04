// set up code to connect node to MySQl
var mySQL = require("mysql");

var connection = mySQL.createConnection({
	port:3306,
	host: "localhost",
	user:"root",
	password: "",
	database: "burgers_db"
});

connection.connect(function(err){
	if (err) {
		console.log(err);
		return;
	}
	console.log("SQL connected as " + connection.threadId);
});



module.exports = connection;


// export the connection