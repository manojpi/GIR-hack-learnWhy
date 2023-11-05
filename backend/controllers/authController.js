const User = require('../model/userModel');
const sendToken = require('../utils/jwtToken');

exports.registerUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        sendToken(user, 200, res);
    } catch(err) {
        res.status(400).json({
            Success: false,
            message: err.message
        })
    }
}

exports.loginUser = async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if(!user){
        return res.status(401).json({
            Success: false,
            message: err.message
        })
    }

    const isPasswordMatched = await user.comparePassword(password);

    if(!isPasswordMatched){
        return res.status(401).json({
            Success: false,
            message: err.message
        })
    }

    sendToken(user, 200, res)
}
exports.getDashboard = (req, res, next) => {
    return res.json({
        Success: true,
        res
    })
}