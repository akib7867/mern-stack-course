const express = require("express");
const { getUserProfile, updateUserProfile, deleteUser } = require("../controller/users/user.controller");
const { verifyToken } = require("../utils/jwtFunctions");

const router = express.Router();
router.get("/getuserprofile", verifyToken, getUserProfile ),
router.put("/updateUserProfile", verifyToken,updateUserProfile),
router.delete("/deleteUser" , verifyToken , deleteUser)



module.exports = router;