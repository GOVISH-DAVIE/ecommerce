import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import Axios  from "axios";
import { url } from './Example';


const ClientHome = ()=>{

    useEffect(() => {
        Axios.get(url+'property').then(
            value=>{
                console.log(value);
            }
        )
      
    })
return (<div>'client'</div>);
}

export default ClientHome;

if (document.getElementById('ClientHome')) {
    ReactDOM.render(<ClientHome />, document.getElementById('ClientHome'));
}
