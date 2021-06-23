
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
    useEffect(() => {
        setprice(parseInt(JSON.parse(props.showpaymentid).amount))
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


    return <div>
        <div class="card" >
            <div class="card-body">
                <h5 class="card-title">KEs {
                    price
                }</h5>

                <input type='number' onChange={onchangeItem} value={count} />
                <button class="tp_button" data-api_ref="payment-link" data-phone-number="254796217595"
                    data-email="9davidmuia@gmail.com" data-amount={price} data-currency="KES">Pay Now</button>

                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
}

if (document.getElementById('ShowPayment')) {
    const element = document.getElementById('ShowPayment')

    // create new props object with element's data-attributes
    // result: {tsId: "1241"}
    const props = Object.assign({}, element.dataset)

    ReactDOM.render(<ShowPayment {...props} />, element);
}
