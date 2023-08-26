const users = require('../../models/users');

const UpdateUser = async (req, res) => {
    try{
        const name = req.body.name;

    }
    catch(err){
        console.log(err);
        res.status(500).json({message: 'Internal server error'});
    }
}
module.exports = UpdateUser;