const users = require("../models/users.models");



const createUsers = async (req, res) => {
    try {
        const { name, email, mobileNO, age } = req.body;

        const usersData = await users({
            name,
            email,
            mobileNO,
            age,
        })

        await usersData.save()

        res.status(201).json({ data: usersData, message: "created users" });

    } catch (error) {
        console.log(error)
    }
}

const getAllUsers = async (req, res) => {
    try {

        const allUsersData = await users.find()
        res.status(201).json({ data: allUsersData, message: "Get All Users Data" });
    } catch (error) {
        console.log(error);
    }
}

const deleteUsers = async (req, res) => {
    try {

        const { usersId } = req.query;
        console.log(usersId,"usersId")

        const userData = await users.findOneAndDelete({ _id : usersId })
        console.log(userData, "userData")
        res.status(201).json({ message: "Users Deleted" });
    } catch (error) {
        console.log(error)
    }
}

const updateUsers = async (req, res) => {
    try {
        const {usersId} = req.query;

        const { name, email, mobileNO, age } = req.body;
        const updateusers = await users.findByIdAndUpdate(usersId, {
            name,
            email,
            mobileNO,
            age
        })
        res.status(201).json({ data :updateusers, message: "updated Record" });
    } catch (error) {
        console.log(error)
    }
}



module.exports = {
    createUsers,
    getAllUsers,
    deleteUsers,
    updateUsers
}