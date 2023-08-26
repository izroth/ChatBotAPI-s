
const jwt = require('jsonwebtoken');
const users = require('../models/users');

const authenticate = async (req, res, next) => {
    try{
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await users.findOne({where: {id: decoded.id, jwt: token}});
        if(!user){
            throw new Error();
        }
        req.user = user;
        req.token = token;
        next();
    }
    catch(err){
        res.status(401).json({message: 'Please authenticate'});
    }
}

module.exports = authenticate;