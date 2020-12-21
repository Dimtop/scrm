import React from 'react';
import "../Styles/shared.css";
import "../Styles/clients.css";



class Client extends React.Component{



    constructor(props){
        super(props);

        this.state = {
            user:{},
            areDataLoaded:false
        }

        this.fetchClient = this.fetchClient.bind(this);
    }

    async componentDidMount(){
        await this.fetchClient();

        
    }

    fetchClient(){

        var urlToArray  = window.location.href.split("/");
        var urlIndex = urlToArray.indexOf("clients");
        var userID = urlToArray[urlIndex+1];
            console.log(userID)
        return fetch('/api/users/' + userID,{
            method:"get"
        })
        .then(res=>res.json())
        .then(res=>{
            this.setState({user:res.user},()=>{
                this.setState({areDataLoaded:true});
            })
        })
    }

    render(){
        return(
            this.state.areDataLoaded?
            <div className="clientContainer">
                <div>
                    <h3 className="title">Credits</h3>
                </div>
                <div>
                    <input type="number" value={this.state.user.credits} />
                </div>
                <div>
                    <h3 className="title">Username</h3>
                </div>
                <div>
                    <input type="text" value={this.state.user.username} />
                </div>
                <div>
                    <h3 className="title">Password</h3>
                </div>
                <div>
                    <input type="password" value={this.state.user.password} />
                </div>
                <div>
                    <button className="mainButton">Ενημέρωση</button>
                </div>
            </div>
            :
            <>
            </>

        );
    }
}


export default Client;