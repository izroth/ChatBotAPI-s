const chatbots = require('../../models/chatbot');

const CreateChatbot = async (req, res) => {
    try{
        // const userid = req.params.id;
        const chatbotid = req.params.chatbotid;
        const chatbot = await chatbots.findOne({where: {id: chatbotid}});
        if(!chatbot){
            return res.status(400).json({message: 'Chatbot not found'});
        }
        res.status(200).json({chatbot});

    }
    catch(err){
        console.log(err);
        res.status(500).json({message: 'Internal server error'});
    }
}
module.exports = CreateChatbot;