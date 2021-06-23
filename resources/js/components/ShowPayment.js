
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Axios from "axios";
import { url } from './Example';
// import Inters from 'intasend-inlinejs-sdk'


export const ShowPayment = (props) => {
    console.log(JSON.parse(props.showpaymentid));
    // useEffect
    const [price, setprice] = useState(0)
    const [count, setcount] = useState(1)
    const [user, setUser] = useState(null)
    useEffect(() => {
        setprice(parseInt(JSON.parse(props.showpaymentid).amount))
        setUser(JSON.parse(props.authdata))
        window.IntaSend.setup({
            publicAPIKey: "ISPubKey_test_e37f1334-366b-4b5e-9975-7793b6891a00",
            // Optional URL to redirect your clients after payment
            redirectURL: "https://flemingtech.ac.ke/",
            live: false,

        })
    }, [])
    useEffect(() => {
        setprice(count * parseInt(JSON.parse(props.showpaymentid).amount))
    }, [count])
    const onchangeItem = (e) => setcount(e.target.value)


    return user ==null?<></>: <div  >
        <div className="card col-sm-12" >
            <div className="card-body">  
                <h3 className="card-title"><b>KEs {
                    price
                }</b></h3>

                <input type='number' onChange={onchangeItem} value={count} />
                <br />
                <button className="tp_button col-sm-8 shadow" data-api_ref="payment-link" data-phone-number="254796217595"
                    data-email={user.email} data-amount={price} data-currency="KES">Buy Now</button>
 
            </div>
        </div>
    </div>
}

if (document.getElementById('ShowPayment')) {
    const element = document.getElementById('ShowPayment') 
    const props = Object.assign({}, element.dataset)

    ReactDOM.render(<ShowPayment {...props} />, element);
}
