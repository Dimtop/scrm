var express = require('express')
var router = express.Router();

const userController = require("../Controllers/user.controller");

router.post("/login",userController.postUserLogin);
router.get("/all",userController.getAllUsers);
router.get("/:username",userController.getUser);


module.exports = router;