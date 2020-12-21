import React from 'react';
import "../Styles/shared.css";
import "../Styles/clients.css";


class NewClient extends React.Component{

    constructor(props){
        super(props);
    }



    render(){

        return(
            <div className="clientContainer">
            <div>
                <h3 className="title">Username</h3>
            </div>
            <div>
                <input type="text" />
            </div>
            <div>
                <h3 className="title">Password</h3>
            </div>
            <div>
                <input type="password"/>
            </div>
            <div>
                <button className="mainButton">Δημιουργία</button>
            </div>
        </div>
        );
    }
}

export default NewClient;