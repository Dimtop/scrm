import React from 'react';
import "../Styles/shared.css";
import "../Styles/clients.css";

import ClientTile from './ClientTile';

class Clients extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            users:[],
            areDataLoaded:false
        }

        this.fetchClients = this.fetchClients.bind(this);
    }

    async componentDidMount(){
        await this.fetchClients();
    }

    fetchClients(){
        return fetch("/api/users/all",{
            method:"get"
        })
        .then(res=>res.json())
        .then(res=>{
            this.setState({users:res.users},()=>{
                this.setState({areDataLoaded:true});
            })
        })
    }


    render(){
        return(

            this.state.areDataLoaded?
                <div id="clientContainer">
                    {
                        this.state.users.map(user=>{
                            return <ClientTile user={user}/>
                        })
                    }
                    <div className="clientTile" style={{backgroundColor:"rgba(78,58,219,1)"}}>
                        <div>
                            <a className="title" style={{color:'white'}} href={"/managerArea/clients/new" }>Προσθήκη νέου</a>
                        </div>
                    </div>
                </div>

            :
            <>
            </>
        );
    }
}


export default Clients;