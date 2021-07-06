
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
 
    useEffect(() => {

        window.IntaSend.setup({
            publicAPIKey: process.env.MIX_PKEY,
            live: false,
        })
        setprice(parseInt(JSON.parse(props.showpaymentid).amount))
        setUser(JSON.parse(props.authdata))
    }, [])
    useEffect(() => {
        setprice(count * parseInt(JSON.parse(props.showpaymentid).amount))
    }, [count])
    const onchangeItem = (e) => setcount(e.target.value)

 
    // window.addEventListener(onmessage, )

    return user == null ? <></> : <div  >
        <div className="card col-sm-12" >
            <div className="card-body">

                <h3 className="card-title"><b>KEs {
                    price
                }</b></h3>

                <input type='number' onChange={onchangeItem} value={count} />
                <br />
                <button className="tp_button " onClick={
                    () => {window.IntaSend.run({
                        amount: price,
                        currency: "KES", 
                        email: user.email,
                    }) 
                    window.addEventListener('messages', function(e) {
                        console.log(e.data);     
                        if (e.data.message) {
                            console.log(e.data);
                            if (e.data.message.identitier == 'intasend-status-update-cdrtl') {
                                if (e.data.message.state === "COMPLETE") {
                                    // Do something on pay success
                                    // Make sure redirectURL is ommited in 
                                    // your setup function for this to work well
                                }
                            }
                        }
                    }, false)
                    window.addEventListener(onmessage,  function(e) {
                        console.log(e.data);     
                        if (e.data.message) {
                            console.log(e.data);
                            if (e.data.message.identitier == 'intasend-status-update-cdrtl') {
                                if (e.data.message.state === "COMPLETE") {
                                    // Do something on pay success
                                    // Make sure redirectURL is ommited in 
                                    // your setup function for this to work well
                                }
                            }
                        }
                    }, false)
                }
                  
                } data-api_ref="payment-link" data-phone-number="254796217595"
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
