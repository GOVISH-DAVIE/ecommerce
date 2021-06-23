import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';


const ClientHome = (props) => {
    const [properties, setProperties] = useState([])
    useEffect(() => setProperties(JSON.parse(props.clienthome))  , [])
    return (<div className='container'>'client'
        <div className='row'> {
            properties.map((value, index) => <div key={index} className='col-md-4'>
                <div className="card "  >
                    <img className="card-img-top" src={`/storage/${value['finalimage']}`} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{value['Title']}</h5>
                        <h5 className="card-title">KEs {value['amount']}</h5>
                        <div className='show'>
                            <a href={'/index/' + value['id']} className=" col-sm-12 btn btn-primary">View</a>
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

    const element = document.getElementById('ClientHome')
    const props = Object.assign({}, element.dataset)
    ReactDOM.render(<ClientHome {...props} />, element);
}
