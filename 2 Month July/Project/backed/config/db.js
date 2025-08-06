const mongoose = require("mongoose");


const connectMongoDb = async () => {
try {
    
    await mongoose.connect("mongodb://127.0.0.1:27017/instagram-db")

    console.log("mongoDb conected")

} catch (error) {
    console.log(error)
    
}

};


module.exports = connectMongoDb;