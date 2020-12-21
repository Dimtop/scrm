const PurchaseModel = require("../Models/purchase.model")
const UserModel = require("../Models/user.model");

exports.postPurhase = async(req,res)=>{
    console.log(req.body)
    req.body.date = Date.now();
    req.body.credits = Number(req.body.credits);
    await PurchaseModel.create(req.body);
    var user = await UserModel.findOne({username:req.body.user});
    console.log(user)
    var credits = Number(user.credits) + Number(req.body.credits);
    await UserModel.updateOne({username:req.body.user},{credits:credits})
    res.send({error:null});
}