const express = require('express');
const router = express.Router();

const UpdateUser = require('../controllers/Users/UpdateUser');

router.put('/updateuser', UpdateUser);
module.exports = router;