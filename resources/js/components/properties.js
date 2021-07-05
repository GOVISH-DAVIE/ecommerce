import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Axios from "axios";
export const Sidebar = () => <ul>
    <li><a href='new'>new Property</a></li>
    <li><a href='properties'>Properties</a></li>
</ul>
export const Properties = (props) => {
    // const [properties, setProperties] = useState([ ])
    // useEffect(() => setProperties(JSON.parse(props.clienthome))  , [])
    // const [ps, setPs] = useState([])
    // useEffect(() => setPs(JSON.parse(props.clienthome))  , [])
const [state, setstate] = useState( [])
useEffect(() => setstate(JSON.parse(props.propertiesid))  , [])
 
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className='col-md-4 sidebar shadow'>
                    <br />
                    <Sidebar />
                </div>
                <div className="col-md-8">
                  
                <div className='row'> {
            state.map((value, index) => <div key={index} className='col-md-4'>
                <div className="card "  >
                    <img className="card-img-top" src={`/storage/${value['finalimage']}`} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{value['Title']}</h5>
                        <h5 className="card-title">KEs {value['amount']}</h5>
                        <div className='show'>
                            <a href={'/index/' + value['id']} className=" col-sm-12 btn btn-primary">View</a>
                        </div>
                        <div className='show'>
                            <br />
                            <form method='post'  action={'/properties/'+value['id']}>
                                {/* <input name='id' value={value['id']} hidd/sen  /> */}
                                
                                <input name='_method' value={'delete'} hidden  />
                                <input hidden  name="_token" value={props.tk} />
                                <button className=" col-sm-12 btn btn-danger">Delete</button>
                           
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
        </div>

                </div>
            </div>
        </div>
    );
}
// export default Properties;

if (document.getElementById('Properties')) {
    const props = Object.assign({},  document.getElementById('Properties').dataset)
    ReactDOM.render(<Properties {...props} />, document.getElementById('Properties'));
}
