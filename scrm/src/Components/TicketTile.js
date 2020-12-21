import React from 'react';
import "../Styles/shared.css";
import "../Styles/ticket.css";
import Cookies from 'js-cookie';


class TicketTile extends React.Component{

    constructor(props){
        super(props);

    }





    render(){
        return(
            <div className="archiveTicketContainer" onClick={()=>location.replace("/tickets/" + this.props.archiveTicket._id)}>
                <div>
                    <p className="title" style={{color:"rgba(78,58,219,1)"}}>{"Έργο: " + this.props.archiveTicket.project}</p>
                </div>
                <div>
                    <p className="title" style={{color:"rgba(78,58,219,1)"}}>{"Διαχειριστές: " + this.props.managers.join(", ")}</p>
                </div>
                <div>
                    <p className="title" style={{color:"rgba(78,58,219,1)"}}>{"Θέμα: " + this.props.archiveTicket.subject}</p>
                </div>
            </div>
        );
    }
}



export default TicketTile;