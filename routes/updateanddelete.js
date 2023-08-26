const express = require('express');
const router = express.Router();

const UpdateUser = require('../controllers/Users/UpdateUser');
const DeleteUser = require('../controllers/Users/deleteUser');

router.put('/updateuser', UpdateUser);
router.delete('/deleteuser', DeleteUser);
module.exports = router;