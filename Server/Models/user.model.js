const mongoose = require('mongoose');

//Here we define the User Model


const userSchema = new mongoose.Schema({


    username:{
        type:String,
        required:[true,"The users name is required."],
        unique:true
    },
    password:{
        type:String,
        required:[true,"The users password is required."]
    },
    credits:{
        type:Number
    }
});


module.exports = mongoose.model("User",userSchema, "Users");