const sequelize = require("../db/connect");
const { Sequelize, DataTypes } = require("sequelize");

const User = sequelize.define("users", {
	id: {
		type: Sequelize.INTEGER,
		unique: true,
		allowNull:false,
		primaryKey:true,
		autoIncrement: true,
	},
	name: {
		type: Sequelize.STRING,
	},
	email: {
		type: Sequelize.STRING,
		unique: true,
	},
	phoneNo: {
		type: Sequelize.BIGINT,
	},
	password:{
		type:Sequelize.STRING
	}
});
(async () => {
	await sequelize.sync(); // This synchronizes the model with the database
  })();

module.exports = User;   


