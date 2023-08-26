const express = require('express');
const router = express.Router();
const CreateUser = require('../controllers/Users/CreateUser');
const LoginUser = require('../controllers/Users/LoginUser');

const ListUsers = require('../controllers/Users/ListUser');


router.post('/', CreateUser);
router.post('/login', LoginUser);

router.get('/ListUsers', ListUsers);

module.exports = router;