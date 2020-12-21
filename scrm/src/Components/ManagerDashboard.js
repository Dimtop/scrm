import React from 'react';
import "../Styles/dashboard.css";
import "../Styles/shared.css";

import Cookies from 'js-cookie';
import "core-js/stable";
import "regenerator-runtime/runtime";
import DashboardTile from './DashboardTile';

class ManagerDashboard extends React.Component{
    constructor(props){
        super(props);
        
        this.state ={
            manager:{},
            isManagerFetched:false
        }

        this.fetchManager = this.fetchManager.bind(this);

    }

    async componentDidMount(){
        await this.fetchManager();
    }

    fetchManager(){
        console.log(decodeURIComponent(Cookies.get("username")))
        fetch("/api/managers/" + decodeURIComponent(Cookies.get("username")),{
            method:"get"
        })
        .then(res=>res.json())
        .then(res=>{
            this.setState({manager:res.manager},()=>{
                this.setState({isManagerFetched:true})
            });
        })
    }


    render(){
        return(
        this.state.isManagerFetched?
        <>
        <div>
            <h2 className="title" style={{color: "rgba(78,58,219,1)"}}>{"Διαχειριστής: " + this.state.manager.username}</h2>
        </div>
        <div id="dashboardContainer">
      
            <DashboardTile title="Πελάτες" link={"/managerArea/clients"}/>
            <DashboardTile title="Tickets" link={"/managerArea/tickets"}/>
            <DashboardTile title="Έργα" link={"/managerArea/projects"}/>
        </div>
        </>
        :
        <>
        </>
        );
    }

}

export default ManagerDashboard;