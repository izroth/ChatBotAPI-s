const express = require('express');
const router = express.Router();
const CreatendUser = require('../controllers/Endusers/createuser');

const CreateUser = require('../controllers/Users/CreateUser');
const LoginUser = require('../controllers/Users/LoginUser');

const ListUsers = require('../controllers/Users/ListUser');
const UpdateUser = require('../controllers/Users/UpdateUser');

const GetSingleUser = require('../controllers/Users/GetsingleUser');

router.post('/', CreateUser);
router.post('/login', LoginUser);


router.get('/ListUsers', ListUsers);
router.get('/GetSingleUser/:id', GetSingleUser);

router.put('/UpdateUser/:id', UpdateUser);

router.post('/createuser', CreatendUser);

module.exports = router;