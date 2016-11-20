var Sequelize = require('sequelize');

var connection = new Sequelize('burgers_db', 'root', 'chicago5');

var burger = connection.define('burger',{
	burger_name: Sequelize.STRING,
	devoured: Sequelize.TEXT
});


connection.sync().then(function(){
	burger.create({
		burger_name: pickles,
		devoured: yes
	});
});







	// burger.findById(2).then(function(burger){
		// console.log(burger.dataValues);
	// });
// });