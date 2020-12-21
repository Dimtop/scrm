  
const mongoose = require('mongoose');


//Here we are connecting to the database.
module.exports =function connect(dbURI){

    mongoose.connect(dbURI, {useNewUrlParser: true,useUnifiedTopology:true},(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Database connected succesfully.");
        }
    });
}