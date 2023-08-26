const express = require('express');
const  sequelize  = require('./DB/db');
const app = express();
require('./DB/db');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



sequelize.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });

const port = 3000;
app.listen(port, () => console.log(` App listening on port ${port}!`));