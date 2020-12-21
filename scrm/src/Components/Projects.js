import React from 'react';
import "../Styles/shared.css";
import "../Styles/projects.css";
import Cookies from 'js-cookie';

import ProjectTile from './ProjectTile'

class Projects extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            projects:[],
            areDateLoaded:false
        }

        this.fetchProjects = this.fetchProjects.bind(this);
    }


    async componentDidMount(){
        await this.fetchProjects();
    }


    fetchProjects(){

        fetch("/api/projects/byManager?manager=" + decodeURIComponent(Cookies.get("username")) ,{
            method:"get"
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            this.setState({projects:res.projects,managers:res.managers},()=>{
                this.setState({areDateLoaded:true})
            })
        })
    }

    render(){

        return(
            this.state.areDateLoaded?
                <div id="projectsContainer">
                    {
                        this.state.projects.map((project,index)=>{
                            return <ProjectTile project={project} />
                        })
                    }
                    <div className="projectContainer" style={{backgroundColor:"rgba(78,58,219,1)"}}>
                        <div>
                            <a className="title" style={{color:'white'}} href={"/managerArea/projects/new" }>Προσθήκη νέου</a>
                        </div>
                    </div>
                </div>
            :
            <>
            </>
        );
    }
}


export default Projects;