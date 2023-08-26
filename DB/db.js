const { Sequelize } = require('sequelize');


const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './DB/db.sqlite', 
});

module.exports = sequelize;
