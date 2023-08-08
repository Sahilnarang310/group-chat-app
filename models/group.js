const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db/connect");

const Group = sequelize.define("group", {
	id: {
		unique: true,
		primaryKey: true,
		autoIncrement: true,
		type: Sequelize.INTEGER,
	},
	groupName: {
		type: Sequelize.STRING,
	},
	createdBy:{
		type:Sequelize.INTEGER
	} 
   
});

module.exports = Group;
