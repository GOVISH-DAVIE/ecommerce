
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// import Inters from 'intasend-inlinejs-sdk'


export const ShowItem = (props) => {
    const [property, setproperty] = useState(null)
    const [activeImage, setActiveImage] = useState()
    const [finImage, setFinImage] = useState(false)
    useEffect(() => {
        setproperty(JSON.parse(props.showitemid))
        setActiveImage(JSON.parse(JSON.parse(props.showitemid).images)[0])
    }, [])
    const changeActiveImage = im =>{
        setActiveImage(im)
        setFinImage(false)
    }
    return property == null ? <></> : <div className='container'>
        <div className="card  noshadow"  >
            {
                !finImage ? <img className="card-img-top" src={'/storage/' + activeImage} alt="Card image cap" />
                    : <img className="card-img-top" src={'/by.jpg'} alt="Card image cap" />

            } <div className="card-body">
                <h5 className="card-title"><b>{property.Title}</b></h5>

                <div className='row'>
                    {
                        JSON.parse(property.images).map((element) => <div
                            onClick={() => changeActiveImage(element)} key={element} className='smapleImg'>
                            <img style={{ border: activeImage == element ? "solid rgb(86, 109, 56) 2px " : "none" }} src={'/storage/' + element} height={60} width={60} />
                        </div>

                        )

                    }
                    <div onClick={() => setFinImage(true)} className='smapleImg'>
                        <img src={'/storage/' + property.finalimage} height={60} width={60} />
                    </div>
                </div>

            </div>
        </div>
    </div>;
}

if (document.getElementById('ShowItem')) {
    const element = document.getElementById('ShowItem')
    const props = Object.assign({}, element.dataset)

    ReactDOM.render(<ShowItem {...props} />, element);
}
