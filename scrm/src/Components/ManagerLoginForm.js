import React from 'react';
import "../Styles/loginForm.css";
import "../Styles/shared.css";

import Cookies from 'js-cookie';

class ManagerLoginForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username:"",
            password:"",
            error:""
        }


        this.postUserLogin = this.postUserLogin.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);

    }

    handleUsernameChange(e){

        this.setState({username:e.target.value})
    }

    handlePasswordChange(e){
        console.log(e.target.value)
        this.setState({password:e.target.value})
    }

    postUserLogin(){
       console.log("test")
     fetch("/api/managers/login",{
            method:'post',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                username:this.state.username,
                password:this.state.password
            })
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            if(res.error){
                this.setState({error:res.error})
            }
            else{
                console.log(res)
                Cookies.set("username",res.name);
                Cookies.set("auth",true)
                location.replace("/managerArea/dashboard")
            }
        })
    
    }

    render(){
        return(
        <div id="loginFormContainer">
            <div>
              <h3>Username</h3>
              <input type="text" id="username" name="username" onChange={e=>this.handleUsernameChange(e)}/>
            </div>
            <div>
              <h3>Password</h3>
              <input type="password" id="password" name="password" onChange={e=>this.handlePasswordChange(e)}/>
            </div>
            <div>
              <button  className="mainButton" onClick={this.postUserLogin}>Log in</button>
            </div>
            <div>
                <p className="error">{this.state.error}</p>
            </div>
        </div>

        );
    }

}

export default ManagerLoginForm;