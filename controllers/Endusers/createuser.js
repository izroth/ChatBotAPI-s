const users = require('../../models/users');

const CreateUser = async (req, res) => {
    try{
        const email = req.body.email;
        const name = req.body.name;
        const password = req.body.password;
        const role = req.body.role;


        if(!email || !name || !password || !role ){
            return res.status(400).json({message: 'Email, name , role and password  are required'});
        }
        const user = await users.findOne({where: {email: email}});
        if(user){
            return res.status(400).json({message: 'User already exists'});
        }
        const newUser = await users.create({email: email, name: name, password: password, role: role});
        res.status(200).json({message: 'User created',data: {email: newUser.email,name: newUser.name,role: newUser.role}});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: 'Internal server error'});
    }
}

module.exports = CreateUser;