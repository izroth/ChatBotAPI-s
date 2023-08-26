const convserations = require('../../models/conversation');

const Deleteconversation = async (req, res) => {
    try{
        const conversationid = req.params.conversationid;
        const conversation = await convserations.findOne({where: {id: conversationid}});
        if(!conversation){
            return res.status(400).json({message: 'Conversation not found'});
        }
        await conversation.destroy();
        res.status(200).json({message: 'Conversation deleted'});

    }
    catch(err){
        console.log(err);
        res.status(500).json({message: 'Internal server error'});
    }
}
module.exports = Deleteconversation;
