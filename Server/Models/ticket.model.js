const mongoose = require('mongoose');

//Here we define the User Model


const ticketSchema = new mongoose.Schema({


    project:{
        type:String
    },
    user:{
        type:String
    },
    subject:{
        type:String
    }
});


module.exports = mongoose.model("Ticket",ticketSchema, "Tickets");