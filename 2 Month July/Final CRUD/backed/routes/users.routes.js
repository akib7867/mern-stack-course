const express = require("express")
const { getAllUsers, createUsers, updateUsers, deleteUsers } = require("../controllers/users.controllers")


const router = express.Router();


router.get("/get-all-users",getAllUsers);
router.post("/create-users",createUsers);
router.put("/update-users",updateUsers);
router.delete("/delete-users", deleteUsers);

module.exports = router;
