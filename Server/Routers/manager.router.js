var express = require('express')
var router = express.Router();

const managerController = require("../Controllers/manager.controller");

router.post("/login",managerController.postManagerLogin);
router.get("/:username",managerController.getManager);


module.exports = router;