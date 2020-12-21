var express = require('express')
var router = express.Router();

const ticketController = require("../Controllers/ticket.controller");


router.get("/",ticketController.getTickets);
router.get("/byManager",ticketController.getTicketByManager)
router.get("/:ticketID",ticketController.getTicket)
router.post("/",ticketController.postTicket);

module.exports = router;