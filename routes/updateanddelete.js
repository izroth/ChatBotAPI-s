const express = require('express');
const router = express.Router();

const UpdateUser = require('../controllers/Users/UpdateUser');
const DeleteUser = require('../controllers/Users/deleteUser');
const createchatbot = require('../controllers/Chatbots/Createchatbot');
const GetBot = require('../controllers/Chatbots/GetBot');
const SingleChatBots = require('../controllers/Chatbots/SingleChatBots');
const UpdateSingleBot = require('../controllers/Chatbots/UpdateSingleBot');

router.put('/updateuser', UpdateUser);
router.delete('/deleteuser', DeleteUser);
router.post('/:id/createbot', createchatbot);
router.get('/:id/getbot', GetBot);
router.get('/chatbots/:chatbotid', SingleChatBots);
router.put('/chatbots/:chatbotid', UpdateSingleBot);
module.exports = router;