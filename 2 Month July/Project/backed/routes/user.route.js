const express = require("express");


const { getUserProfile } = require("../controller/users/user.controller");
const { verifyToken } = require("../utils/jwtFunctions");






const router = express.Router();
router.get("/getuserprofile", verifyToken,getUserProfile )



module.exports = router;