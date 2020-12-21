import React from 'react';
import "../Styles/shared.css";
import "../Styles/projects.css";
import Cookies from 'js-cookie';


class ProjectTile extends React.Component{

    constructor(props){
        super(props);

    }





    render(){
        return(
            <div className="projectContainer" onClick={()=>location.replace("/projects/" + this.props.project._id)}>
                <div>
                    <p className="title" style={{color:"rgba(78,58,219,1)"}}>{"Όνομα: " + this.props.project.name}</p>
                </div>
                <div>
                    <p className="title" style={{color:"rgba(78,58,219,1)"}}>{"Πελάτης: " + this.props.project.user}</p>
                </div>
                <div>
                    <p className="title" style={{color:"rgba(78,58,219,1)"}}>{"Διαχειριστές: " + this.props.project.managers.join(", ")}</p>
                </div>
            </div>
        );
    }
}



export default ProjectTile;