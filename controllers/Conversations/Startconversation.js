const Conversation = require('../../models/conversation');

const StartConversation = async (req, res) => {
    try{
        const userid = req.id;
        const conversation = await Conversation.create({
            chatbotId: req.params.chatbotid,
            userId: userid
        });
        res.status(200).json({conversation});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: 'Internal server error'});
    }
}

module.exports = StartConversation;