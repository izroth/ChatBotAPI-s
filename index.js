const express = require('express');
const  sequelize  = require('./DB/db');
const app = express();
const authenticate = require('./middleware/authenticate');


require('./DB/db');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



sequelize.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });

  const register = require('./routes/register');
  
    app.use('/register', register);

const port = 3000;
app.listen(port, () => console.log(` App listening on port ${port}!`));