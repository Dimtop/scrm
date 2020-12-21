const mongoose = require('mongoose');

//Here we define the User Model


const ticketMessageSchema = new mongoose.Schema({

    ticketID:{
        type:String
    },
    author:{
        type:String
    },
    text:{
        type:String
    },
    files:[{
        fileName:{
            type:String
        },
        link:{
            type:String
        }
    }]

});


module.exports = mongoose.model("Ticket Message",ticketMessageSchema, "Ticket Messages");