const chatbots = require('../../models/chatbot');

const CreateChatbot = async (req, res) => {
    try{
        const name = req.body.name;
        const description = req.body.description;
        const user_id = req.params.id;

        if(!name || !description){
            return res.status(400).json({message: 'Please enter all fields'});
        }
        const chatbot = await chatbots.create({name: name, description: description, associated_user: user_id});
        res.status(200).json({message: 'Chatbot created', data: {name: chatbot.name, description: chatbot.description}});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: 'Internal server error'});
    }
}

module.exports = CreateChatbot;