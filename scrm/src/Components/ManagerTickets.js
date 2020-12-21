import React from 'react';
import "../Styles/shared.css";
import "../Styles/ticket.css";
import Cookies from 'js-cookie';


import TicketTile from './TicketTile';

class ManagerTickets extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            tickets:[],
            managers:[],
            areDateLoaded:false
        }

        this.fetchTickets = this.fetchTickets.bind(this);
    }


    async componentDidMount(){
        await this.fetchTickets();
    }


    fetchTickets(){

        fetch("/api/tickets/byManager?manager=" + decodeURIComponent(Cookies.get("username")) ,{
            method:"get"
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            this.setState({tickets:res.tickets,managers:res.managers},()=>{
                this.setState({areDateLoaded:true})
            })
        })
    }

    render(){

        return(
            this.state.areDateLoaded?
                <div id="ticketsContainer">
                    {
                        this.state.tickets.map((archiveTicket,index)=>{
                            return <TicketTile archiveTicket={archiveTicket} managers={this.state.managers[index]} />
                        })
                    }
                </div>
            :
            <>
            </>
        );
    }
}


export default ManagerTickets;