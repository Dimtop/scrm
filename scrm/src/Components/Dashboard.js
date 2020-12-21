import React from 'react';
import "../Styles/dashboard.css";
import "../Styles/shared.css";

import Cookies from 'js-cookie';
import "core-js/stable";
import "regenerator-runtime/runtime";
import DashboardTile from './DashboardTile';

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        
        this.state ={
            user:{},
            isUserFetched:false
        }

        this.fetchUser = this.fetchUser.bind(this);

    }

    async componentDidMount(){
        await this.fetchUser();
    }

    fetchUser(){
        fetch("/api/users/" + Cookies.get("username"),{
            method:"get"
        })
        .then(res=>res.json())
        .then(res=>{
            this.setState({user:res.user},()=>{
                this.setState({isUserFetched:true})
            });
        })
    }


    render(){
        return(
        this.state.isUserFetched?
        <>
        <div>
            <h2 className="title" style={{color: "rgba(78,58,219,1)"}}>{"Χρήστης: " + this.state.user.username}</h2>
        </div>
        <div>
            <h2 className="title" style={{color: "rgba(78,58,219,1)"}}>{"Credits που απομένουν: " + this.state.user.credits}</h2>
        </div>
        <div id="dashboardContainer">
      
            <DashboardTile title="Δημιουργία νέου ticket" link={"/tickets/new"}/>
            <DashboardTile title="Τα tickets μου" link={"/tickets"}/>
            <DashboardTile title="Προαγορά credits" link={"/credits/buy"}/>
        </div>
        </>
        :
        <>
        </>
        );
    }

}

export default Dashboard;