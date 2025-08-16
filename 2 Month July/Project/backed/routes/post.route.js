const express = require("express");

const { verifyToken } = require("../utils/jwtFunctions");
const { getAllPost, createPost, getMyPost, updatePost } = require("../controller/post/post.controller");


const router = express.Router();

router.post("/create-post", verifyToken ,createPost);
router.get("/get-all-feeds", verifyToken ,getAllPost);
router.get("/get-my-post", verifyToken ,getMyPost);
router.post("/updatePost" ,verifyToken , updatePost)


module.exports = router;