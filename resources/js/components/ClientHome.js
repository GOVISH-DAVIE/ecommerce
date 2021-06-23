import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Axios from "axios";
import { url } from './Example';


const ClientHome = () => {
    const [properties, setProperties] = useState([])
    useEffect(() => {
        Axios.get(url + 'property').then(
            value => {
                setProperties(value.data)
            }
        )

    })
    return (<div>'client'
        {
            properties.map((value, index) => <div key={index} className="card"  >
                <img className="card-img-top" src={`/storage/${value['finalimage']}`} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{value['Title']}</h5>
                        <h5 className="card-title">{value['finalimage']}</h5>
                         <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
          </div>)
        }
            </div>);
}

        export default ClientHome;

        if (document.getElementById('ClientHome')) {
            ReactDOM.render(<ClientHome />, document.getElementById('ClientHome'));
}
