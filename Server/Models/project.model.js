const mongoose = require('mongoose');

//Here we define the User Model


const projectSchema = new mongoose.Schema({


    name:{
        type:String
    },
    managers:[],
    user:{
        type:String
    }
});


module.exports = mongoose.model("Project",projectSchema, "Projects");