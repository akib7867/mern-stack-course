const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
    try {
        const token = jwt.sign({  userId }, "JWT_SECRET", {
            expiresIn: "1y",
        });

        return token;
    } catch (error) {
        console.log(error)
    }

};

const verifyToken = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        const token = authHeader.split(" ")[1];
        const decode = jwt.verify(token, "JWT_SECRET");
        req.user = { userId : decode.userId };

        next();

    } catch (error) {
        console.log(error)
    }
}





module.exports = { generateToken, verifyToken };

