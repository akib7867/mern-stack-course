const express = require("express");
const bodyParser = require("body-parser");
const cors =require("cors");
const connectMongoDb = require("./config/db");
const authRoute =require("./routes/auth.route")
const userRoute =require("./routes/user.route")
const postRoute = require ("./routes/post.route")

const app = express();
const PORT = 9090; 

connectMongoDb()

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth",authRoute)
app.use("/api/user",userRoute)
app.use("/api/post",postRoute)


app.listen(PORT , () => {
    console.log(`Server is running on http://localhost:${PORT}`)

})

