const sendToken = (user, statusCode, res) => {

    const token = user.getJWTtoken();

    if(!token){
        res.status(400).json({
            Success: false,
            message: 'Login first!'
        })
    }

    res.cookie('token', token, {
        expiresIn: process.env.COOKIE_EXPIRE_TIME * 24 * 60 * 60 * 1000,
        httpOnly: true
    })
    res.status(statusCode).json({
        Success: true,
        token,
        user
    })
}

module.exports = sendToken;