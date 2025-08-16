//1. /api/auth/register              ==>POST
//2. /api/auth/login                 ==>POST
//3. /api/auth/forgot-password       ==>POST
//4. /api/auth/resent-password       ==>POST
//5. /api/auth/change-password       ==>POST



const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const User = require("../../model/user/user.model");
const { generateToken } = require("../../utils/jwtFunctions");


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "akibjavedalase@gmail.com",
        pass: "jobw tngz mrma lqgo"
    },
});

const loginUser = async (req, res) => {
    try {

        const { email, password } = req.body;
        const userData = await User.findOne({ email })


        if (!userData) {
            return res.status(201).json({ message: "User NOt found in db" })
        }

        const isPasswordIsTrue = await bcrypt.compare(password, userData.password)


        if (!isPasswordIsTrue) {
            return res.status(201).json({ message: "Password is Wrong" })
        }

        const token = generateToken(userData._id)
        res.status(201).json({ message: "Login Successful", token: token })



    } catch (error) {
        console.log(error,message)
        res.json({message:error.message})
    }

}

const registerUser = async (req, res) => {
    try {
        const { fullName, userName, email, password, mobileNo } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await User({ fullName, userName, email, password: hashedPassword, mobileNo });

        await newUser.save();
        res.status(201).json({ user: newUser, message: "User Registered Successfully" })


    } catch (error) {
        console.log(error)
    }
}


const forgotpassword = async (req, res) => {
    try {
        const { email } = req.body
        const userData = await User.findOne({ email })

        if (!userData) {
            return res.status(201).json({ message: "User NOt found in db" })
        }

        const Otp = Math.floor(10000 + Math.random() * 1000)

        userData.resetOtp = Otp
        userData.resetOtpExpiration = Date.now() + 10 * 60 * 1000;    //10 Minutes expiration

        await userData.save();

        const mailOptions = {
            from: "akibjavedalase@gmail.com",
            to: email,
            subject: "Password resent OTP",
            text: `Your OTP for password reset is: ${Otp}.It will expire in 10 minutes.`,
        };

        await transporter.sendMail(mailOptions);

        res.status(201).json({ message: "Otp send to email", Otp: Otp })

    } catch (error) {
        console.log(error)
    }
};


const verifyOtp = async (req, res) => {
    try {
        const { email, Otp } = req.body

        const userData = await User.findOne({ email })



        if (!userData) {
            return res.status(201).json({ message: "User NOt found in db" })
        }

        if (Otp !== userData?.resetOtp) {
            return res.status(201).json({ message: "Otp is invalid" })
        }

        if (userData.resetOtpExpiration < Date.now()) {
            return res.status(201).json({ message: "Otp has expired" })
        }
        const token = generateToken(userData._id)
        return res.status(201).json({ message: "Otp verified successfully", token: token })
    } catch (error) {

    }
}

const resentpassword = async (req, res) => {
    try {
        const { token, newPassword } = req.body
        let decode

        try {
            decode = jwt.verify(token, "JWT_SECRET");
        } catch (error) {
            return res.status(201).json({ message: "token is not valid", error: error.message })
        }

        const userData = await User.findById(decode.userId)

        if (!userData) {
            return res.status(201).json({ message: "User NOt found in db" })
        }

        userData.password = newPassword

        userData.save();

        return res.status(201).json({ message: "Password reset successfully" })

    } catch (error) {
        console.log(error)
    }
}

const changepassword = async (req, res) => {

    try {

    } catch (error) {

    }
}


module.exports = {
    loginUser,
    registerUser,
    forgotpassword,
    verifyOtp,
    resentpassword,
    changepassword
}

