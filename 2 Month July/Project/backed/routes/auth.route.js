const express = require("express");
const { loginUser, registerUser, forgotpassword, verifyOtp, resentpassword, changepassword } = require("../controller/auth/auth.controller");


const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/forgotpassword", forgotpassword);
router.post("/verify-Otp", verifyOtp);
router.post("/resentpassword", resentpassword);
router.post("/changepassword", changepassword);

module.exports = router;

