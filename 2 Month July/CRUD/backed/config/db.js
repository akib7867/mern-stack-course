
const mongoose = require("mongoose");

const connectMongoDb = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb://127.0.0.1:27017/school-database"
    );

    if (connection) {
      console.log("Connected DB...");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectMongoDb;