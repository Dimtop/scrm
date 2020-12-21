var express = require('express')
var router = express.Router();

const purchaseController = require("../Controllers/purchase.controller");


router.post("/",purchaseController.postPurhase);

module.exports = router;