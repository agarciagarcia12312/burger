var connection = require("../config/connections.js");

//==============================================
// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

// =====================================================


// use mehods: selectAll(), insertOne(), updateOne() to retrive and store data in database

var orm = {
	selectAll: function(tableName, cb){
		var queryString ="SELECT * FROM " + tableName +";";
		connection.query(queryString, function(err, results) {
			if (err) {
				throw err;
			}
		cb(results);	
		});
	},

	insertOne: function(tableName, burgerName, cb){
		var queryString = "INSERT INTO " + tableName;
		queryString += " (burger_name) VALUES " + "('" + burgerName.toString() +"');";
		console.log(queryString);

		connection.query(queryString, function(err, results){
			if(err) {
				throw err;
			};
			cb(results);
		})
 		
	},

	updateOne: function(tableName,id, cb){
		var queryString = "UPDATE " + tableName;
		queryString += " SET devoured = true " ;
		queryString += "WHERE " + id +";";
		console.log(queryString);

		connection.query(queryString, function(err, results) {
			if (err) {
				throw err
			}
			cb(results);
		})

	},

	deleteOne: function(tableName, id, cb) {
		var queryString = "DELETE FROM " + tableName;
		queryString += " WHERE " + id +";";
		console.log(queryString);

		connection.query(queryString, function(err, results) {
			if (err) {
				throw err
			}
			cb(results);
		})
	}
}

module.exports  = orm;


// Export the ORM object in module.exports.