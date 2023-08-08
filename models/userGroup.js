const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../db/connect');

const UserGroups = sequelize.define('UserGroups',{
    id:{
        type:Sequelize.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true

    },

})

module.exports = UserGroups