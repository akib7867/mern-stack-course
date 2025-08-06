// 1./api/user/birthday           ===> POST
// 2./api/user/profile/:userId    ===> GET
// 3./api/user/profile/:userId    ===> PUT
// 4./api/user/profile/:userId    ===> DELETE

const User = require("../../model/user/user.model")


const getUserProfile = async (req, res) => {
    try {
        console.log(req.user.userId, "User-Id")

        const userData = await User.findById(req.user.userId)


        res.status(201).json({  message: "User Registered Successfully" , userData })



    } catch (error) {

    }
}

module.exports = {
    getUserProfile
}

