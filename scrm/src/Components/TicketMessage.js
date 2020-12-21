import React from 'react';
import "../Styles/shared.css";
import "../Styles/ticket.css";
import Cookies from 'js-cookie';





class TicketMessage extends React.Component{

    constructor(props){
        super(props);
    }



    render(){
        return(

            <div className="ticketMessage">
                <div>
                    <h3 className="title" style={{color:"rgba(78,58,219,1)"}}>{this.props.ticketMessage.author}</h3>
                </div>
                <div>
                    <p className="title" style={{color:"rgba(78,58,219,1)"}}>{this.props.ticketMessage.text}</p>
                </div>
                <div style={{width:"50%"}}>
                {
                    this.props.ticketMessage.files.map(file=>{
                        return <a href={file.link} style={{color:"rgba(78,58,219,1)",fontSize:"1rem"}}>{file.fileName}</a>
                    })
                }
           

                </div>
               
            </div>

        );
    }
}


export default TicketMessage;