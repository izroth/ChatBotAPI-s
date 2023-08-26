const chatbots = require('../../models/chatbot');

const DeleteChatBot = async (req, res) => {
    try{
        const chatbotid = req.params.chatbotid;
        const chatbot = await chatbots.findOne({where: {id: chatbotid}});
        if(!chatbot){
            return res.status(400).json({message: 'Chatbot not found'});
        }
        await chatbot.destroy();
        res.status(200).json({message: 'Chatbot deleted'});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: 'Internal server error'});
    }
}
module.exports = DeleteChatBot;