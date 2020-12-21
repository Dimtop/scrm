import React from 'react';
import "../Styles/shared.css";
import Cookies from 'js-cookie';



class PaymentFail extends React.Component{

    constructor(props){
        super(props);
    }




    render(){

        return(
            <div>
                <div>
                    <h2 className="title">Η πληρωμή σας δεν μπόρεσε να ολοκληρωθεί.</h2>
                </div>
                <div>
                    <h2 className="title">Παρακαλώ δοκιμάστε ξανά αργότερα.</h2>
                </div>
                <div>
                    <a className="title" href="/">Επιστροφή στην αρχή</a>
                </div>
            </div>

            
        );
    }
}


export default PaymentFail;