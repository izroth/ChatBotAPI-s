const express = require('express');
const router = express.Router();

const deleteUser = require('../controllers/Endusers/deleteuser');
const getsingleuser = require('../controllers/Endusers/getsingleuser');
const updateuser = require('../controllers/Endusers/updateuser');
const listalluser = require('../controllers/Endusers/listalluser');

router.delete('/deleteuser/:id', deleteUser);
router.get('/getsingleuser/:id', getsingleuser);
router.put('/updateuser/:id', updateuser);
router.get('/listalluser', listalluser);

module.exports = router;

