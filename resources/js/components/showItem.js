
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Axios from "axios";
import { url } from './Example';
// import Inters from 'intasend-inlinejs-sdk'


export const ShowItem = (props) => {
    const [property, setproperty] = useState(null)
    const [activeImage, setActiveImage] = useState()
    useEffect(() => {
        setproperty(JSON.parse(props.showitemid))
        setActiveImage(JSON.parse(JSON.parse(props.showitemid).images)[0])
        
        
    }, [])
    return property == null?<></>:<div className='container'>
        <div class="card  noshadow"  >
            <img class="card-img-top" src={'/storage/'+activeImage} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">{
                    JSON.stringify(property.finalimage
                        )
                }</p>
                <p class="card-text">{
                    activeImage
                }</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>;
}

if (document.getElementById('ShowItem')) {
    const element = document.getElementById('ShowItem')
    const props = Object.assign({}, element.dataset)

    ReactDOM.render(<ShowItem {...props} />, element);
}
