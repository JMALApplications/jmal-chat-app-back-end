const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization
        const decodedToken = jwt.verify(token, process.env.JWT_KEY)
        req.userData = decodedToken;
        next()
    } catch (error) {
        return res.status(401).json({
            message: "Authorization failed"
        })
    }
}