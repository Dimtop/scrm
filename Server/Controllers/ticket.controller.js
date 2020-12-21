
const TicketModel = require("../Models/ticket.model");
const ProjectModel = require("../Models/project.model");
const TicketMessageModel = require("../Models/ticketMessage.model")

exports.getTickets = async(req,res)=>{
    var projects = await ProjectModel.find(req.query);

    var tickets = await TicketModel.find(req.query);
    var managers = [];

    for(ticket of tickets){
        var currProject = projects.find(project=>project.name == ticket.project);

        managers.push(currProject.managers)
    }

    console.log()

    res.send({tickets:tickets,managers:managers});
}

exports.getTicket = async(req,res)=>{

    console.log(req.params.ticketID)
    var ticketMessages = await TicketMessageModel.find({ticketID:req.params.ticketID});

    res.send({ticketMessages:ticketMessages});
}

exports.getTicketByManager = async(req,res)=>{
 
    var tickets = await TicketModel.find();
    var projects = await ProjectModel.find();

    var managers = [];

    projects = projects.filter(project=>{
        if(project.managers.indexOf(req.query.manager)>=0){
            return true;
        }
        return false;
    });
    console.log(req.query.manager)

    tickets = tickets.filter(ticket=>{
        if(projects.map(project=>project.name).indexOf(ticket.project)>=0){
            return true;
        }
        return false;
    })


    for(ticket of tickets){
        var currProject = projects.find(project=>project.name == ticket.project);

        managers.push(currProject.managers)
    }


    res.send({tickets:tickets,managers:managers});
}

exports.postTicket = async(req,res)=>{
    console.log(req.body.project)
    await TicketModel.create(req.body);

    res.send({error:null})
}