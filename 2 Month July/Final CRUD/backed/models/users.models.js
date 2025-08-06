const mongoose = require ("mongoose")

const usersschema = new mongoose.Schema ({
    name : String,
    email : String,
    mobileNO :Number,
    age : Number
})


const users = mongoose.model("users",usersschema);

module.exports = users;