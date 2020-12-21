const bodyParser = require("body-parser");
const ManagerModel = require("../Models/manager.model");

exports.postManagerLogin = async(req,res)=>{
    console.log(req.body)
    var manager = await ManagerModel.findOne({username:req.body.username,password:req.body.password});
  
    if(manager){
        res.send({error:null,name:manager.name});
    }
    else{
        res.send({error:"Υπάρχει κάποιο λάθος στο όνομα χρήστη ή στον κωδικό. Παρακαλώ δοκιμάστε ξανά."})
    }
}

exports.getManager= async(req,res)=>{
    var manager = await ManagerModel.findOne({name:req.params.username});

    if(manager){
        res.send({error:null,manager:manager});
    }
    else{
        res.send({error:"Υπήρξε ένα πρόβλημα. Παρακαλώ δοκιμάστε αργότερα."})
    }
}
