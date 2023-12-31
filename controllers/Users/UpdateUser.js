const users = require('../../models/users');

const UpdateUser = async (req, res) => {
    try{
        const email = req.params.id;
        if(!email){
            return res.status(400).json({message: 'Email not found'});
        }
        const user = await users.findOne({where: {email: email}});
        if(!user){
            return res.status(400).json({message: 'User not found'});
        }
      
        const name = req.body.name;

        if(name){
            user.name = name;
        }
        await user.save();
        res.status(200).json({message: 'User updated',data: {name: user.name}});



    }
    catch(err){
        console.log(err);
        res.status(500).json({message: 'Internal server error'});
    }
}
module.exports = UpdateUser;