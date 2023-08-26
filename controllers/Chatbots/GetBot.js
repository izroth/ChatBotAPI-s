const chatbots = require('../../models/chatbot');

const CreateChatbot = async (req, res) => {
    try{
        const userid = req.params.id;
        //find all chatbots associated with the user
        const chatbot = await chatbots.findAll({where: {associated_user: userid}});
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