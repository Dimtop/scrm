var express = require('express')
var router = express.Router();

const ticketMessageController = require("../Controllers/ticketMessage.controller");


router.post("/",ticketMessageController.postTicketMessage);

module.exports = router;