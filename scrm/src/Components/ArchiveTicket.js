import React from 'react';
import "../Styles/shared.css";
import "../Styles/ticket.css";
import Cookies from 'js-cookie';

import TicketMessage from './TicketMessage';

class ArchiveTicket extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            ticketMessages:[],
            areDataLoaded:false,
            messageText:"",
            files:[]
        }

        this.fetchTicketMessages = this.fetchTicketMessages.bind(this);
        this.handleMessageTextChange = this.handleMessageTextChange.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }

    async componentDidMount(){
        await this.fetchTicketMessages();
      
    }

    fetchTicketMessages(){
        var urlToArray  = window.location.href.split("/");
        var urlIndex = urlToArray.indexOf("tickets");
        var ticketID = urlToArray[urlIndex+1];

        console.log(ticketID)
        fetch("/api/tickets/" + ticketID,{
            method:"get"
        })
        .then(res=>res.json())
        .then(res=>{
            this.setState({ticketMessages:res.ticketMessages},()=>{
                this.setState({areDataLoaded:true});
                console.log(this.state)
            })
        })
    }

    handleMessageTextChange(e){
        this.setState({messageText:e.target.value})
    }
    
    handleFileUpload(e){
        console.log(e.target.files)
        this.setState({files:e.target.files});
    }


    submitMessage(){
        var urlToArray  = window.location.href.split("/");
        var urlIndex = urlToArray.indexOf("tickets");
        var ticketID = urlToArray[urlIndex+1];

        var formData = new FormData();

        Array.from(this.state.files).map(file=>formData.append(file.name,file));
 
        formData.append("text",this.state.messageText);
        formData.append("author",Cookies.get("username"));
        formData.append("ticketID",ticketID);

        fetch("/api/ticketMessages",{
            method:"post",
            body:formData
        })
        .then(res=>res.json())
        .then(res=>{
            location.reload();
        })
    }


    render(){



        return(
            this.state.areDataLoaded?
                <>
                <div className="ticketMesasagesContainer">
                    {
                        this.state.ticketMessages.map(ticketMessage=>{
                            return <TicketMessage ticketMessage={ticketMessage} />
                        })
                    }
                </div>
                <div>
                    <div>
                        <h3 className="title">Γράψτε μια απάντηση</h3>
                    </div>
                    <div>
                        <textarea id="text" name="text" rows="10" cols="100" onChange={e=>this.handleMessageTextChange(e)} />
                    </div>
                    <div>
                        <h3 className="title">Συμπεριλάβετε αρχεία</h3>
                    </div>
                    <div>
                        <input type="file" multiple={true} onChange={e=>this.handleFileUpload(e)}/>
                    </div>
                    <div>
                        <button className="mainButton" onClick={this.submitMessage}>Υποβολή</button>
                    </div>
                </div>
                </>

            :
            <>
            </>

        );
    }
}


export default ArchiveTicket;