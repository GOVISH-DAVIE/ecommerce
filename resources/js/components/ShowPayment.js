
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Axios from "axios";
import { url } from './Example';
// import Inta/ from 'intasend-inlinejs-sdk'
// import Inters from 'intasend-inlinejs-sdk'


export const ShowPayment = (props) => {
    console.log(JSON.parse(props.showpaymentid));
    // useEffect
    const [price, setprice] = useState(0)
    const [count, setcount] = useState(1)
    const [user, setUser] = useState(null)
    const [transaction, setTransaction] = useState('PENDING')
    const [trackingId, setTrackingId] = useState(null)
    const [provider, setProvider] = useState(null)
    const [account, setAccount] = useState('')

    useEffect(() => {
        //set up
        window.IntaSend.setup({
            publicAPIKey: process.env.MIX_PKEY,
            live: false,
        })
        setprice(parseInt(JSON.parse(props.showpaymentid).amount))
        setUser(JSON.parse(props.authdata))
        bindEvent(window, 'message', function (e) {
            console.log(e);
            if (e.data.message) {
                console.log(e.data.message.provider ) 
                setAccount(e.data.message.account)
                setProvider(e.data.message.provider)
                setTrackingId(e.data.message.tracking_id)
                setTransaction(e.data.message.state )
                if (e.data.message.identitier == 'intasend-status-update-cdrtl') {
                    if (e.data.message.state === "COMPLETE") { 
                        console.log(22); 
                    } 
                    else if(e.data.message.state === "FAILED"){
                        console.log(e.data.message.state    );
                        setTransaction(e.data.message.state )
                        console.log(e.data.message.provider )
                    }
                }
            }
        })
    }, [])
    useEffect(() => {
        setprice(count * parseInt(JSON.parse(props.showpaymentid).amount))
    }, [count])

    const bindEvent = (element, eventName, eventHandler) => {
        if (element.addEventListener) {
            element.addEventListener(eventName, eventHandler, false);
        }
    }
    const onchangeItem = (e) => setcount(e.target.value)

 

    return user == null ? <></> : <div  >
        <div className="card col-sm-12" >
            <div className="card-body">

                <h3 className="card-title"><b>KEs {
                    price
                }</b></h3>

                <input type='number' onChange={onchangeItem} value={count} />
                <br />
                <button className="tp_button " onClick={
                    () => {
                        window.IntaSend.run({
                            amount: price,
                            currency: "KES",
                            email: user.email,
                        })


                    }

                } data-api_ref="payment-link" data-phone-number="254796217595"
                    data-email={user.email} data-amount={price} data-currency="KES">Buy Now</button>

            </div>
            {
                transaction
            }
        </div>
    </div>
}

if (document.getElementById('ShowPayment')) {
    const element = document.getElementById('ShowPayment')
    const props = Object.assign({}, element.dataset)

    ReactDOM.render(<ShowPayment {...props} />, element);
}
