const TicketMessageModel = require("../Models/ticketMessage.model");
const path = require("path");

exports.postTicketMessage = async(req,res)=>{

    var f = req.files;
    var filesForDatabase =[];

    if(f){
        console.log("test")
        
        for(var i=0;i<Object.values(f).length;i++){
            var files = Object.values(f)[i];
            await files.mv(path.join(__dirname,"../Files",Object.values(f)[i].name));

        }

        for(var i=0;i<Object.values(f).length;i++){
            filesForDatabase.push({
                link:process.env.SERVER_URL + "/Files/" + Object.values(f)[i].name,
                fileName:Object.values(f)[i].name
            })
        }
    }

  
    var ticketMessage = {
        ticketID:req.body.ticketID,
        text:req.body.text,
        author:req.body.author,
        files:filesForDatabase
    }

    await TicketMessageModel.create(ticketMessage);
    res.send({error:null})
}