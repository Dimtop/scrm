import React from 'react';
import "../Styles/shared.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Cookies from 'js-cookie';

import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import Tickets from './Tickets';
import ArchiveTicket from './ArchiveTicket';
import NewTicket from './NewTicket';
import BuyCredits from './BuyCredits'
import PaymentSuccess from './PaymentSuccess';
import PaymentFail from './PaymentFail'

import ManagerLoginForm from './ManagerLoginForm';
import ManagerDashboard from './ManagerDashboard';
import Clients from './Clients';
import Client from './Client';
import NewClient from './NewClient';
import ManagerTickets from './ManagerTickets';
import Projects from './Projects';
import Project from './Project'
class App extends React.Component {
  
  constructor(props){
    super(props);
  }

  render(){
    return(

      <div id="appContainer">
        <div >
          <h1 className="title">Softexpert Support System</h1>
          {
            window.location.href.indexOf("managerArea")?
            <h1 className="title">Manager area</h1>
            :
            <></>
          }
        </div>
          <Router>
            <Switch>
                <Route exact path="/">
                  {Cookies.get("auth")?<Redirect to="/dashboard"/>:<LoginForm />}
                </Route>
                <Route exact path="/dashboard">
                  {Cookies.get("auth")?<Dashboard />:<Redirect to="/"/>}
                </Route>
                <Route exact path="/tickets">
                  {Cookies.get("auth")?<Tickets />:<Redirect to="/"/>}
                </Route>
                <Route exact path="/tickets/new">
                  {Cookies.get("auth")?<NewTicket />:<Redirect to="/"/>}
                </Route>
                <Route exact path="/tickets/:ticketID">
                  {Cookies.get("auth")?<ArchiveTicket />:<Redirect to="/"/>}
                </Route>
                <Route exact path="/credits/buy">
                  {Cookies.get("auth")?<BuyCredits />:<Redirect to="/"/>}
                </Route>
                <Route exact path="/payment/success">
                  {Cookies.get("auth")?<PaymentSuccess />:<Redirect to="/"/>}
                </Route>
                <Route exact path="/payment/fail">
                  {Cookies.get("auth")?<PaymentFail />:<Redirect to="/"/>}
                </Route>

                <Route exact path="/managerArea">
                  {Cookies.get("auth")?<Redirect to="/managerArea/dashboard"/>:<ManagerLoginForm />}
                </Route>
                <Route exact path="/managerArea/dashboard">
                  {Cookies.get("auth")?<ManagerDashboard />:<Redirect to="/"/>}
                </Route>
                <Route exact path="/managerArea/clients">
                  {Cookies.get("auth")?<Clients />:<Redirect to="/"/>}
                </Route>
                <Route exact path="/managerArea/clients/new">
                  {Cookies.get("auth")?<NewClient />:<Redirect to="/"/>}
                </Route>
                <Route exact path="/managerArea/clients/:clientID">
                  {Cookies.get("auth")?<Client />:<Redirect to="/"/>}
                </Route>
                <Route exact path="/managerArea/tickets">
                  {Cookies.get("auth")?<ManagerTickets />:<Redirect to="/"/>}
                </Route>

                <Route exact path="/managerArea/projects">
                  {Cookies.get("auth")?<Projects />:<Redirect to="/"/>}
                </Route>
                
                <Route exact path="/managerArea/projects/:projectID">
                  {Cookies.get("auth")?<Project />:<Redirect to="/"/>}
                </Route>
              </Switch>
          </Router>
      </div>
    )
  }
}

export default App;
