import React from 'react';
import "../Styles/shared.css";
import "../Styles/clients.css";



class ClientTile extends React.Component{

    constructor(props){
        super(props);
    }



    render(){
        return(
            <div className="clientTile">
                <div>
                    <a className="title" style={{color:"rgba(78,58,219,1)"}} href={"/managerArea/clients/" + this.props.user.username}>{this.props.user.username}</a>
                </div>
            </div>

        );
    }
}

export default ClientTile;