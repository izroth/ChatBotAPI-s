const users = require('../../models/users');

const ListUser = async (req, res) => {
    try{
        const user = await users.findAll();
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

module.exports = ListUser;