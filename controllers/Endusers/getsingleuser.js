const users = require('../../models/users');

const getsingleuser = async (req, res) => {
    try{
        const id = req.params.id;
        const user = await users.findOne({where: {id: id}  });
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

module.exports = getsingleuser;

