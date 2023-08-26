const convserations = require('../../models/conversation');

const Updateconversationstatus = async (req, res) => {
    try{
        const conversationid = req.params.conversationid;
        const conversation = await convserations.findOne({where: {id: conversationid}});
        if(!conversation){
            return res.status(400).json({message: 'Conversation not found'});
        }
        conversation.status = req.body.status;
        await conversation.save();
        res.status(200).json({conversation});

    }
    catch(err){
        console.log(err);
        res.status(500).json({message: 'Internal server error'});
    }
}
module.exports = Updateconversationstatus;

