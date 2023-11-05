const jwt = require('jsonwebtoken');
const User = require('../model/userModel');

const requireAuth = async (req, res, next) => {
    const { token } = req.cookies;
    console.log(token);

    if(!token){
        return res.status(401).json({
            success: false,
            message: 'Login first'
        })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findById(decoded.id);

    next()
}

module.exports = { requireAuth };