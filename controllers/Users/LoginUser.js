const users = require('../../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const LoginUser = async (req, res) => {
    try{
        const { email, password } = req.body;
        const user = await users.findOne({ where: { email: email } });
        if (!user) {
            return res.status(400).json({ message: 'User does not exist' });
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword){
            return res.status(400).json({message: 'Invalid password'});
        }
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 3600});
        user.jwt = token;
        await user.save();
        if(!user.jwt){
            return res.status(400).json({message: 'Token not created'});
        }
        res.status(200).json({message: 'User logged in'});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: 'Internal server error'});
    }
}
module.exports = LoginUser;