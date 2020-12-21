const mongoose = require('mongoose');

//Here we define the User Model


const pruchaseSchema = new mongoose.Schema({


    user:{
        type:String
    },
    paymentHash:{
        type:String
    },
    credits:{
        type:Number
    },
    date:{
        type:Date
    }
});


module.exports = mongoose.model("Purchase",pruchaseSchema, "Purchases");