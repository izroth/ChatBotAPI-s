const { DataTypes } = require('sequelize');
const sequelize = require('../DB/db');

const User = sequelize.define('User', {

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
       
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
        
    },
    jwt: {
        type: DataTypes.STRING,
        allowNull: true
        
    },
    role :{
        type: DataTypes.STRING,
        enum: ['enduser', ''],
        allowNull: true

    }

});

module.exports = User;