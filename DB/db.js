const { Sequelize } = require('sequelize');

// Replace with your actual database information
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './DB/db.sqlite', // Path to your SQLite database file
});

module.exports = sequelize;
