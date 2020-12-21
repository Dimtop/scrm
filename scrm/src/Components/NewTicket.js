import React from 'react';
import "../Styles/shared.css";
import "../Styles/ticket.css";
import Cookies from 'js-cookie';

class NewTicket extends React.Component{


    constructor(props){
        super(props);

        this.state = {
            projects:[],
            areDataLoaded:false,
            project:"",
            subject:""

        }

        this.fetchProjects = this.fetchProjects.bind(this);
        this.handleTicketProjectChange = this.handleTicketProjectChange.bind(this);
        this.handleTicketSubjectChange = this.handleTicketSubjectChange.bind(this);
        this.createTicket = this.createTicket.bind(this)
    }

    async componentDidMount(){
        await this.fetchProjects();
    }


    fetchProjects(){
        fetch("/api/projects?user=" + Cookies.get("username"),{
            method:"get"
        })
        .then(res=>res.json())
        .then(res=>{
            this.setState({projects:res.projects,project:res.projects[0].name},()=>{
                this.setState({areDataLoaded:true})
            })
        })
    }

    handleTicketProjectChange(e){
        console.log(e.target.value)
        this.setState({project:e.target.value});
    }

    handleTicketSubjectChange(e){
        this.setState({subject:e.target.value});
    }

    createTicket(){
        fetch("/api/tickets",{
            method:"post",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                project:this.state.project,
                subject:this.state.subject,
                user:Cookies.get("username")
            })
        })
        .then(res=>res.json())
        .then(res=>{
            location.replace("/dashboard")
        })
    }


    render(){
        return(
            this.state.areDataLoaded?
            <div id="newTicketContainer">
                <div>
                    <h3 className="title">Έργο</h3>
                </div>
                <div>
                    <select onChange={e=>this.handleTicketProjectChange(e)}>
                        {
                            this.state.projects.map((project,index) =>{
                           
                                    return <option value={project.name}>{project.name}</option>
                               
                        
                     
                            })
                        }
                    </select>
                </div>
                <div>
                    <h3 className="title">Θέμα</h3>
                </div>
                <div>
                    <textarea rows="10" cols="100" onChange={e=>this.handleTicketSubjectChange(e)}/>
                </div>
                <div>
                    <button className="mainButton" onClick={this.createTicket}>Δημιουργία ticket</button>
                </div>
            </div>
        :
        <>
        </>
        );
    }
}


export default NewTicket;