const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({

    userId :{
        type: mongoose.Schema.ObjectId,
        ref:"User",
        require:true,
    },

    description: {
     type: String,
     require : true,
    },

    location:{
        type: String,
        require : true,
    },
    active:{
        type: Boolean,
        default: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },

})

const Post = mongoose.model("Post" ,postSchema);

module.exports = Post;

