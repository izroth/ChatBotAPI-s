const convserations = require('../../models/conversation');

const Listallconversation = async (req, res) => {
    try{
        const chatbotid = req.params.chatbotid; 
        const user = await convserations.findAll({where: {chatbotId: chatbotid}});
        if(!user){
            return res.status(400).json({message: 'User not found'});
        }
        res.status(200).json({user});

    }
    catch(err){
        console.log(err);
        res.status(500).json({message: 'Internal server error'});
    }
}
module.exports = Listallconversation;
