const ProjectModel = require("../Models/project.model");


exports.getProjects = async(req,res)=>{
    var projects = await ProjectModel.find(req.query);

    res.send({error:null,projects:projects});
}

exports.getProject = async(req,res)=>{
    var project = await ProjectModel.findOne({_id:req.params.projectID});

    res.send({error:null,project:project});
}


exports.getProjectByManager = async(req,res)=>{
    var projects = await ProjectModel.find();

    projects = projects.filter(project=>{
        if(project.managers.indexOf(req.query.manager)>=0){
            return true;
        }
        return false;
    });

    res.send({error:null,projects:projects})
  
}