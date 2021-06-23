import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Axios from "axios";
import { url } from './Example';


const ClientHome = () => {
    const [properties, setProperties] = useState([
        {
            "id": 9,
            "amount": "893",
            "Title": "Accounts Manager",
            "images": "[\"ynv3smjdS81624398644.jpg\",\"ZakmzJRRTz1624398644.jpg\",\"P7dhJA2dpN1624398644.jpg\",\"HIWm7wseY51624398644.jpg\",\"Q26BPZtNyF1624398644.jpg\"]",
            "finalimage": "BtgA6U2xhO_1624398644.jpg",
            "created_at": "2021-06-22T21:50:44.000000Z",
            "updated_at": "2021-06-22T21:50:44.000000Z"
        },
        {
            "id": 10,
            "amount": "893",
            "Title": "Accounts Manager",
            "images": "[\"iR4ZzP5Dkd1624398645.jpg\",\"cnmwVqo1YA1624398645.jpg\",\"HgWwMqvLnF1624398645.jpg\",\"j2TTVOPRMj1624398645.jpg\",\"5V2KvuAbdB1624398645.jpg\"]",
            "finalimage": "FshfEZCiDC_1624398645.jpg",
            "created_at": "2021-06-22T21:50:45.000000Z",
            "updated_at": "2021-06-22T21:50:45.000000Z"
        },
        {
            "id": 11,
            "amount": "893",
            "Title": "Accounts Manager",
            "images": "[\"y2JUjXvhdf1624398646.jpg\",\"kqJz2FeP0i1624398646.jpg\",\"Thou3RTWuD1624398646.jpg\",\"VN4UEUMrOA1624398646.jpg\",\"pa8JHUcWtm1624398646.jpg\"]",
            "finalimage": "lsIoBrgrOz_1624398646.jpg",
            "created_at": "2021-06-22T21:50:46.000000Z",
            "updated_at": "2021-06-22T21:50:46.000000Z"
        },
        {
            "id": 12,
            "amount": "893",
            "Title": "Accounts Manager",
            "images": "[\"ibRpQDFRSD1624398646.jpg\",\"aMtqS7nQoS1624398646.jpg\",\"PUbxnOvoMd1624398646.jpg\",\"5It54SFQiI1624398646.jpg\",\"ParnQtUjMP1624398646.jpg\"]",
            "finalimage": "jcbxNNTmHk_1624398646.jpg",
            "created_at": "2021-06-22T21:50:46.000000Z",
            "updated_at": "2021-06-22T21:50:46.000000Z"
        },
        {
            "id": 13,
            "amount": "893",
            "Title": "Accounts Manager",
            "images": "[\"su5m7WjGgk1624398647.jpg\",\"cjOyLu5AhP1624398647.jpg\",\"hSPYSpHSTd1624398647.jpg\",\"ZgGvAkfwKK1624398647.jpg\",\"8DcZEYPaeR1624398647.jpg\"]",
            "finalimage": "2KZk4UTANO_1624398647.jpg",
            "created_at": "2021-06-22T21:50:47.000000Z",
            "updated_at": "2021-06-22T21:50:47.000000Z"
        }
    ])
    useEffect(() => {
        // Axios.get(url + 'property').then(
        //     value => {
        //         console.log(value.data);
        //         setProperties(value.data)
        //     }
        // )

    })
    return (<div className='container'>'client'
        <div className='row'>
            {
                properties.map((value, index) => <div key={index} className='col-md-4'>
                    <div className="card "  >
                        <img className="card-img-top" src={`/storage/${value['finalimage']}`} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{value['Title']}</h5>
                            <h5 className="card-title">KEs {value['amount']}</h5>
                            <div className='show'>
                                <a href={'/index/'+value['id']} className=" col-sm-12 btn btn-primary">View</a>                                                            
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    </div>);
}

export default ClientHome;

if (document.getElementById('ClientHome')) {
    ReactDOM.render(<ClientHome />, document.getElementById('ClientHome'));
}
