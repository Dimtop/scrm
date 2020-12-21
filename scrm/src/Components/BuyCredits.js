import React from 'react';
import "../Styles/shared.css";
import Cookies from 'js-cookie';
var CryptoJS = require("crypto-js");

class BuyCredits extends React.Component{

    constructor(props){
        super(props);    

        this.state = {
            credits:0
        }
        
        this.proceedToBuy = this.proceedToBuy.bind(this);
    }


    proceedToBuy(){
        var stripe = Stripe('pk_test_51I0sskESuGEYFRwyIFVRL5Q7ThPotEU67z9cw1QuldYENvJRglRxLZUzP4wvTIkI96eyrAm5e6PBJNAc3dmCJTxg00lyr8Fckc');
        var hash = CryptoJS.AES.encrypt(this.state.credits + Math.random().toString(36).substring(7), 'scrm').toString();
        Cookies.set("paymentHash",hash)

        stripe
            .redirectToCheckout({
                lineItems: [
                // Replace with the ID of your price
                {price: 'price_1I0szOESuGEYFRwyajfNdW44', quantity: this.state.credits},
                ],
                mode: 'payment',
                successUrl: 'http://localhost:8080/payment/success?paymentHash=' +hash +"&credits=" + this.state.credits +"&user=" + Cookies.get("username"),
                cancelUrl: 'https://your-website.com/payment/fail',
            })
            .then(function(result) {
                if(result.error){
                    alert("error")
                }
                else{
                    alert("success")
                }
            });
    }


    render(){
        return (

            <div>
                <div>
                    <h3 className="title">Πόσα credits θέλετε να αγοράσετε;</h3>
                    <p className="title">1 credit = 1 ώρα υποστήριξης</p>
                    <p className="title">1 credit = 25 ευρώ</p>
                </div>
                <div>
                    <input type="number" onChange={e=>this.setState({credits:Number(e.target.value)})}/>
                </div>
                <div>
                    <button class="mainButton" onClick={this.proceedToBuy}>Συνέχεια στην αγορά</button>
                </div>
            </div>
        );
    }
}


export default BuyCredits;