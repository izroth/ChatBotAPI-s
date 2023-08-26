const express = require('express');
const router = express.Router();
const CreateUser = require('../controllers/Users/CreateUser');
const LoginUser = require('../controllers/Users/LoginUser');

router.post('/', CreateUser);
router.post('/login', LoginUser);

module.exports = router;