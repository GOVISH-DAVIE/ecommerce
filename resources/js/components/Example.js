import React from 'react';
import ReactDOM from 'react-dom';
import Axios from "axios"; 
// export const Sidebar = () => <ul>
//     <li><a href='new'>new Property</a></li>
//     <li><a href='properties'>Properties</a></li>
//     <li><a href='order'>Orders</a></li>
// </ul>
export const url = '/api/';
export const makeid = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

var token = '7eLqJxu79G948Pc21nZN7EP3xw8DNxpiHc7siAZdUQ61qdpRTff7gw6wX12g'

function AdminProductForm() {
    let fileRef = React.createRef()
    let sampleDisplay = React.createRef()
    let finalPrintDisplay = React.createRef()
    let finalPrint = React.createRef()
    let formRef = React.createRef()
    const handleSubmit = (e) => {
        let fd = new FormData(e.target)
        Axios.post(
            url + 'form', fd,
            {
                headers: {
                    'Accept': 'Application/json',
                    'Authorization': `Bearer 7eLqJxu79G948Pc21nZN7EP3xw8DNxpiHc7siAZdUQ61qdpRTff7gw6wX12g`
                }
            }

        ).then(value => {
            console.log(value);
            window.location.href = '/properties'
        })
            .catch(err => {
                console.log(err);
            })
            ;

        return e.preventDefault();
    }

    const handleFinalPrint = () => {
        finalPrintDisplay.current.innerHTML = ''
        for (let index = 0; index < finalPrint.current.files.length; index++) {
            var reader = new FileReader();

            reader.onloadend = (e) => {
                var img = document.createElement('img')
                let l = makeid(4);
                img.setAttribute("id", l);
                img.setAttribute('width', 100)
                img.src = reader.result
                finalPrintDisplay.current.appendChild(img)
                document.getElementById(l).src = e.target.result;

            }
            reader.readAsDataURL(finalPrint.current.files[index])

        }
    }
    const handleImgs = () => {
        sampleDisplay.current.innerHTML = ''
        for (let index = 0; index < fileRef.current.files.length; index++) {
            var reader = new FileReader();

            reader.onloadend = (e) => {
                var img = document.createElement('img')
                let l = makeid(4);
                img.setAttribute("id", l);
                img.setAttribute('width', 100)
                img.src = reader.result
                sampleDisplay.current.appendChild(img)
                document.getElementById(l).src = e.target.result;

            }
            reader.readAsDataURL(fileRef.current.files[index])

        }
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className='col-md-4 sidebar shadow'>
                    <br />
                    <ul>
                        <li><a href='new'>new Property</a></li>
                        <li><a href='properties'>Properties</a></li>
                        <li><a href='order'>Orders</a></li>
                    </ul>
                </div>
                <div className="col-md-8">
                    <div className="card">
                        <div className='container'>
                            <form ref={formRef} onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="amount">Amount</label>
                                    <input type="text" name='amount' className="form-control" id="amount" placeholder="Amount" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" name='title' className="form-control" id="title" placeholder="Title" />
                                </div>
                                {/* stories
                                area
                                bath
                                bedroom
                                length
                                width */}
                                <div className='row'>
                                    <div className='col-sm-6 col-md-4' >
                                        <div className="form-group">
                                            <label htmlFor="Stories">Stories</label>
                                            <input type="text" name='stories' className="form-control" id="Stories" placeholder="Stories" />
                                        </div>
                                    </div>
                                    <div className='col-sm-6 col-md-4' >
                                        <div className="form-group">
                                            <label htmlFor="Area">Area(sq)</label>
                                            <input type="text" name='area' className="form-control" id="Area" placeholder="Area" />
                                        </div>
                                    </div>
                                    <div className='col-sm-6 col-md-4' >
                                        <div className="form-group">
                                            <label htmlFor="Bedroom">Bedroom</label>
                                            <input type="text" name='bedroom' className="form-control" id="Bedroom" placeholder="Bedroom" />
                                        </div>
                                    </div>


                                </div>
                                <div className='row'>
                                    <div className='col-sm-6 col-md-4' >
                                        <div className="form-group">
                                            <label htmlFor="Length">Length</label>
                                            <input type="text" name='length' className="form-control" id="Length" placeholder="Length" />
                                        </div>
                                    </div>
                                    <div className='col-sm-6 col-md-4' >
                                        <div className="form-group">
                                            <label htmlFor="Width">Width</label>
                                            <input type="text" name='width' className="form-control" id="Width" placeholder="Width" />
                                        </div>
                                    </div>
                                    <div className='col-sm-6 col-md-4' >
                                        <div className="form-group">
                                            <label htmlFor="Bath">Bath</label>
                                            <input type="text" name='bath' className="form-control" id="Bath" placeholder="Bath" />
                                        </div>
                                    </div>


                                </div>

                                <div className="form-group">
                                    <label htmlFor="files">Upload Image</label>
                                    <input type="file" ref={fileRef} onChange={handleImgs} name='files[]' multiple className="form-control-file" id="files" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="files">Final Print</label>
                                    <input type="file" ref={finalPrint} onChange={handleFinalPrint} name='finalPrint' multiple={false} className="form-control-file" id="files" />
                                </div>


                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <div ref={sampleDisplay} id='sample'></div>
                        <hr />
                        <br />
                        <div ref={finalPrintDisplay}  ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminProductForm;

if (document.getElementById('example')) {
    ReactDOM.render(<AdminProductForm />, document.getElementById('example'));
}
