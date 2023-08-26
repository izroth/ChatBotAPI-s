const db  = require('../DB/db');
const { DataTypes } = require('sequelize');

const Chatbot = db.define('Chatbot', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    associated_users: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }


});

module.exports = Chatbot;
