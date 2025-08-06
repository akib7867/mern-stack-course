const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userProfile : String,
    fullName : String,
    userName : String,
    email : String,
    mobileNo : Number,
    password : String,
    resetOtp :String,
    resetOtpExpiration : Date

})

const User = mongoose.model("User", userSchema)

module.exports = User;

