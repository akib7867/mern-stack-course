// 1./api/user/birthday           ===> POST
// 2./api/user/profile/:userId    ===> GET
// 3./api/user/profile/:userId    ===> PUT
// 4./api/user/profile/:userId    ===> DELETE

const User = require("../../model/user/user.model")


const getUserProfile = async (req, res) => {
    try {
        console.log(req.user.userId, "User-Id")

        const userData = await User.findById(req.user.userId)


        res.status(201).json({ message: "User Registered Successfully", userData })



    } catch (error) {

    }
}


const updateUserProfile = async (req, res) => {
    try {
        const userId = req.user.userId
        console.log(userId , "userId")

        const { fullName, userName, mobileNo} = req.body

        const updateUserProfile = await User.findByIdAndUpdate(userId,
            {
                fullName,
                userName,
                mobileNo,
            },
            {
                new: true
            }
        )

        res.status(201).json( { massage: "update user profile successfully" ,userData: updateUserProfile})
    } catch (error) {
        console.log("cannot update user profile")

    }
}

const deleteUser = async (req, res) =>{
    try {
        const userId = req.user.userId

        console.log(userId ,"userId")

        const deleteUser = await User.findByIdAndDelete(userId)

        res.status(201).json({
            
            massage : "user deleted",
            userId : deleteUser
        })
        
    } catch (error) {
        
    }
}

module.exports = {
    getUserProfile,
    updateUserProfile,
    deleteUser
}

