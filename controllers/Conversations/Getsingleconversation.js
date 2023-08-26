const conversation = require('../../models/conversation');

const GetSingleConversation = async (req, res) => {
    try{
        const conversationid = req.params.conversationid;
        const conversation = await conversation.findOne({where: {id: conversationid}});
        if(!conversation){
            return res.status(400).json({message: 'Conversation not found'});
        }
        res.status(200).json({conversation});

    }
    catch(err){
        console.log(err);
        res.status(500).json({message: 'Internal server error'});
    }
}
module.exports = GetSingleConversation;