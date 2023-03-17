const express = require("express");
const router = express.Router();
const {
    getUserByEmail, getUserById, getUsers, addUser, deleteUser, editUser, makeAdmin
} = require("../controllers/User.controller");

router.get("/", getUsers);
router.get("/email/:email", getUserByEmail);
router.get("/:userId", getUserById);
router.post("/", addUser);
router.put("/:userId", editUser);
router.put("/make-admin/:email", makeAdmin);
router.delete("/:userId", deleteUser);

module.exports = router;
