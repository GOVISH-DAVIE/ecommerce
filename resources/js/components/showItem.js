
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Axios from "axios";
import { url } from './Example';
// import Inters from 'intasend-inlinejs-sdk'


export const ShowItem = (props) => {
    return <div className='container'>
        <div class="card  noshadow"  >
            <img class="card-img-top" src="..." alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
</div>
        </div>;
}

        if (document.getElementById('ShowItem')) {
    const element = document.getElementById('ShowItem')
        const props = Object.assign({ }, element.dataset)

        ReactDOM.render(<ShowItem {...props} />, element);
}
