import React from 'react';
import "../Styles/shared.css";
import "../Styles/projects.css";



class Project extends React.Component{



    constructor(props){
        super(props);

        this.state = {
            project:{},
            managers:[],
            users:[],
            areDataLoaded:false
        }

        this.fetchProject = this.fetchProject.bind(this);
        this.fetchClients = this.fetchClients.bind(this);
        this.fetchManagers = this.fetchManagers.bind(this);
    }

    async componentDidMount(){
        await this.fetchClients();
       // await this.fetchManagers();
        await this.fetchProject();

        
    }

    fetchProject(){

        var urlToArray  = window.location.href.split("/");
        var urlIndex = urlToArray.indexOf("projects");
        var projectID = urlToArray[urlIndex+1];
       
        return fetch('/api/projects/' + projectID,{
            method:"get"
        })
        .then(res=>res.json())
        .then(res=>{
            this.setState({project:res.project},()=>{
                this.setState({areDataLoaded:true});
            })
        })
    }

    fetchClients(){
        return fetch("/api/users/all",{
            method:"get"
        })
        .then(res=>res.json())
        .then(res=>{
            this.setState({users:res.users})
        })
    }

    fetchManagers(){
        return fetch("/api/managers",{
            method:"get"
        })
        .then(res=>res.json())
        .then(res=>{
            this.setState({managers:res.managers})
        })
    }

    render(){
        console.log(this.state)
        return(
            this.state.areDataLoaded?
            <div>
                <div>
                    <h3 className="title">Όνομα</h3>
                </div>
                <div>
                    <input type="text" value={this.state.project.name} />
                </div>
                <div>
                    <h3 className="title">Πελάτης</h3>
                </div>
                <div>
                <select>
                        {
                            this.state.users.map((user,index) =>{
                           
                                    return <option value={user.username}>{user.username}</option>
                               
                        
                     
                            })
                        }
                    </select>
                </div>
                <div>
                    <button className="mainButton">Ενημέρωση</button>
                </div>
            </div>
            :
            <>
            </>

        );
    }
}


export default Project;