const sequelize = require('../db/connect');
const {Sequelize, DataTypes} = require('sequelize')

const Chat = sequelize.define('chats',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    message:{
        type:Sequelize.STRING
    },
    name:{
        type:Sequelize.STRING
    },
    type:{
        type:Sequelize.STRING
    }
})

module.exports = Chat;