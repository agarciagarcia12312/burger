var orm = require("../config/orm.js");

var burgers = {
	selectAll: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},
	insertOne: function(burgerName, cb){
		console.log(burgerName);
		orm.insertOne("burgers", burgerName, function(res) {
			cb(res);
		})
	},
	updateOne: function(id, cb) {
		orm.updateOne("burgers", id, function(res) {
			cb(res);
		})
	},
	deleteOne: function(id, cb) {
		orm.deleteOne("burgers", id, function(res) {
			cb(res);
		})
	}
}

module.exports = burgers;

 // create the code that will call the ORM functions using burger specific input for the ORM
 // Export at the end of the burger.js file.