const bodyParser = require("body-parser");
const UserModel = require("../Models/user.model");

exports.postUserLogin = async(req,res)=>{
    console.log(req.body)
    var user = await UserModel.findOne({username:req.body.username,password:req.body.password});
  
    if(user){
        res.send({error:null,username:user.username});
    }
    else{
        res.send({error:"Υπάρχει κάποιο λάθος στο όνομα χρήστη ή στον κωδικό. Παρακαλώ δοκιμάστε ξανά."})
    }
}

exports.getAllUsers = async(req,res)=>{
    var users = await UserModel.find();

    res.send({users:users});
}

exports.getUser = async(req,res)=>{
    var user = await UserModel.findOne({username:req.params.username});

    if(user){
        res.send({error:null,user:user});
    }
    else{
        res.send({error:"Υπήρξε ένα πρόβλημα. Παρακαλώ δοκιμάστε αργότερα."})
    }
}