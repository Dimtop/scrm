import React from 'react';
import "../Styles/dashboard.css";
import "../Styles/shared.css";


class DashboardTile extends React.Component{
    constructor(props){
        super(props);

    }


    render(){
        return(
            <div className="dashboardTile">
                <div>
                    <a className="title" style={{color:"rgba(78,58,219,1)", cursor:"pointer"}} href={this.props.link}>{this.props.title}</a>
                </div>
            </div>
        );
    }

}

export default DashboardTile;