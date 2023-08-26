const users = require('../../models/users');

const DeleteUser = async (req, res) => {
    try{
        const email = req.email;
        if(!email){
            return res.status(400).json({message: 'Email not found'});
        }
        const user = await users.findOne({where: {email: email}});
        if(!user){
            return res.status(400).json({message: 'User not found'});
        }
        await user.destroy();
        res.status(200).json({message: 'User deleted'});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: 'Internal server error'});
    }
}

module.exports = DeleteUser;