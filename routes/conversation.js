const express = require('express');
const router = express.Router();
const Startconversation = require('../controllers/Conversations/Startconversation');
const Listallconversation = require('../controllers/Conversations/Listallconversation');
const GetSingleConversation = require('../controllers/Conversations/Getsingleconversation');
const UpdateConversation = require('../controllers/Conversations/Updateconversationstatus');
const DeleteConversation = require('../controllers/Conversations/Deleteconversatoin');

router.post('/chatbots/:chatbotid/conversations', Startconversation);
router.get('/chatbots/:chatbotid/conversations', Listallconversation);
router.get('/conversations/:conversationid', GetSingleConversation);
router.put('/conversations/:conversationid', UpdateConversation);
router.delete('/conversations/:conversationid', DeleteConversation);


module.exports = router;