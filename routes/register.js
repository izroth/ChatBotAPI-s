const express = require('express');
const router = express.Router();
const CreateUser = require('../controllers/Users/CreateUser');
const LoginUser = require('../controllers/Users/LoginUser');

const ListUsers = require('../controllers/Users/ListUser');

const GetSingleUser = require('../controllers/Users/GetsingleUser');

router.post('/', CreateUser);
router.post('/login', LoginUser);


router.get('/ListUsers', ListUsers);
router.get('/GetSingleUser/:id', GetSingleUser);

module.exports = router;