const users = require('../../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const createUser = async (req, res) => {
   try{
    const { name, email, password } = req.body;
    if(!name || !email || !password){
        return res.status(400).json({message: 'Please enter all fields'});
    }
    
    const user = await users.findOne({ where: { email: email } });
    if (user) {
        return res.status(400).json({ message: 'User already exists' });
        }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await users.create({ name, email, password: hashedPassword });
        if(!newUser){
            return res.status(400).json({message: 'User not created'});
        }
       
        const token = jwt.sign({id: newUser.id}, process.env.JWT_SECRET, {expiresIn: 3600});
        newUser.jwt = token;
        console.log(token)
        await newUser.save();
        if(!newUser.jwt){
            return res.status(400).json({message: 'Token not created'});
        }

        res.status(200).json({message: 'User created'});
   }
   catch(err){
    console.log(err);
    res.status(500).json({message: 'Internal server error'});
   }
}

module.exports = createUser;

