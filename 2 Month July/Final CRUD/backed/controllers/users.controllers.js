const users = require("../models/users.models");



const createUsers = async (req, res) => {
    try {
        const { name, email, mobileNO, age } = req.body;

        const usersData = await users({
            name,
            email,
            mobileNO,
            age
        })

        await usersData.save()

        res.status(201).json({ data: usersData, message: "created users" });

    } catch (error) {
        console.log(error)
    }
}

const getAllUsers = async (req, res) => {
    try {

        const allusersData = await users.find()
        res.status(201).json({ data: allusersData, message: "Get All Users Data" });
    } catch (error) {
        console.log(error);
    }
}

const deleteUsers = async (req, res) => {
    try {

        const { usersId } = req.body;
        await users.findByIdAndDelete({ id: usersId })
        res.status(201).json({ message: "Users Deleted" });
    } catch (error) {
        console.log(error)
    }
}

const updateUsers = async (req, res) => {
    try {
res.status(201).json({ message: "We are working on this Api" });
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