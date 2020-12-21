const mongoose = require('mongoose');

//Here we define the User Model


const managerSchema = new mongoose.Schema({


    name:{
        type:String
    },
    username:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String
    }
});


module.exports = mongoose.model("Manager",managerSchema, "Managers");