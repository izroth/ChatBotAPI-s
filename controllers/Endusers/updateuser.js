const users = require('../../models/users');

const UpdateUser = async (req, res) => {
    try{
        const id = req.params.id;
        const authenticate_id = req.id;
        if(id != authenticate_id){
            return res.status(400).json({message: 'You are not authorized to update this user'});
        }


        if(!id){
            return res.status(400).json({message: 'Email not found'});
        }
        const user = await users.findOne({where: {id: id}});
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
