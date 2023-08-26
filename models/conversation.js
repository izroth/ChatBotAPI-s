const db  = require('../DB/db');
const { DataTypes } = require('sequelize');

const Conversation = db.define('Conversation', {
    chatbot_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    },
    response: {
        type: DataTypes.STRING,
        
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'incomplete',
        allowNull: false
    }
}
);
module.exports = Conversation;