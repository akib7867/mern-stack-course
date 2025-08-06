const express = require("express");

const { verifyToken } = require("../utils/jwtFunctions");
const { getAllPost, createPost, getMyPost } = require("../controller/post/post.controller");


const router = express.Router();

router.post("/create-post", verifyToken ,createPost);
router.get("/get-all-feeds", verifyToken ,getAllPost);
router.get("/get-my-post", verifyToken ,getMyPost);


module.exports = router;