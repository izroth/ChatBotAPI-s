const chatbots = require('../../models/chatbot');

const UpdateSingleBot = async (req, res) => {
    try{
        const chatbotid = req.params.chatbotid;
        const name = req.body.name;
        const description = req.body.description;
        const chatbot = await chatbots.findOne({where: {id: chatbotid}});
        if(!chatbot){
            return res.status(400).json({message: 'Chatbot not found'});
        }
        if(!name || !description){
            return res.status(200).json({message: 'Please enter all fields'});
        }
        chatbot.name = name;
        chatbot.description = description;
        await chatbot.save();
        res.status(200).json({message: 'Chatbot updated', data: {name: chatbot.name, description: chatbot.description}});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: 'Internal server error'});
    }
}

module.exports = UpdateSingleBot;