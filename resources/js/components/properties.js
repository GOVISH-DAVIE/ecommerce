import React from 'react';
import ReactDOM from 'react-dom';
import Axios from "axios";
export const Sidebar = () => <ul>
    <li><a href='new'>new Property</a></li>
    <li><a href='properties'>Properties</a></li>
</ul>
export const Properties = (props) => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className='col-md-4 sidebar shadow'>
                    <br />
                    <Sidebar />
                </div>
                <div className="col-md-8">

                </div>
            </div>
        </div>
    );
}
// export default Properties;

if (document.getElementById('Properties')) {
    ReactDOM.render(<Properties />, document.getElementById('Properties'));
}
