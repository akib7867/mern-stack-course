// 1 . /api/posts/craete      ===>POST
// 2 ./api/posts/delete      ===>DELETE
// 3 ./api/posts/edit        ===>PUT
// 4 ./api/posts/feed        ===>GET
// 5 ./api/posts/userId      ===>GET

const Post = require("../../model/post/post model");



const createPost = async (req, res) => {
    try {
        const { description, location, active } = req.body;
        const userId = req.user.userId;
       console.log(userId,"userId")
        const newPost = new Post({
            description,
            location,
            active,
            userId,
        });

        await newPost.save();

        res.status(201).json({
            Post: newPost,
            message: "Post is Created"
        })
    } catch (error) {

    }
}

const getAllPost = async (req, res) => {
    try {
        const allPostData = await Post.find()
        res.status(201).json({
            message: " Get all Post Data",
            allPostData: allPostData

        })
    } catch (error) {

    }
}

const getMyPost = async (req, res) => {
    try {
        const userId = req.user.userId
        const postData = await Post.find({ userId })
        res.status(201).json({
            massage: "get all my post",
            myPostData: postData
        })

    } catch (error) {
        console.log(error.massage)
    }
}

module.exports = {
    createPost,
    getAllPost,
    getMyPost
}

