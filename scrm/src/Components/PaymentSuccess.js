import React from 'react';
import "../Styles/shared.css";
import Cookies from 'js-cookie';



class PaymentSuccess extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isPaymentDone:false
        }
    }

    async componentDidMount(){
        var query =  new URLSearchParams(window.location.search);
        var storedHash = encodeURI(Cookies.get("paymentHash"));
        var queryHash = encodeURI(query.get("paymentHash"))
        console.log(storedHash);
        console.log(queryHash)
        if(storedHash==queryHash){
            await fetch("/api/purchases",{
                method:"post",
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    credits:  query.get("credits"),
                    user:  query.get("user"),
                    paymentHash:  query.get("paymentHash")
                })
            })
            .then(res=>res.json())
            .then(res=>{
                this.setState({isPaymentDone:true})
            })
        }
    }


    render(){

        return(
            this.state.isPaymentDone?
            <div>
                <div>
                    <h2 className="title">Η πληρωμή σας έγινε με επιτυχία.</h2>
                </div>
                <div>
                    <h2 className="title">Τα credits θα πιστωθούν σύντομα στον λογαριασμό σας.</h2>
                    <h2 className="title">Θα λάβετε αντίστοιχη ενημέρωση μέσω email.</h2>
                </div>
                <div>
                    <a className="title" href="/">Επιστροφή στην αρχή</a>
                </div>
            </div>
            :
            <>
            </>
            
        );
    }
}


export default PaymentSuccess;