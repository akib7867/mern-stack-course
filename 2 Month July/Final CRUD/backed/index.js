const express = require("express")
const bodyParser = require("body-parser");
const connectMongoDb = require("./config/db");
const userRoutes = require("./routes/users.routes")
const cors = require("cors");


const app = express();
const PORT = 8080;

connectMongoDb()

app.use(cors());
app.use(bodyParser.json());


app.use("/api",userRoutes)

app.listen ( PORT, () =>{
    console.log(`server is runing on http://localhost:${PORT} `)
}
) 