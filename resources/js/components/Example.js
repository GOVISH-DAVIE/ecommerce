import React from 'react';
import ReactDOM from 'react-dom';
export const makeid = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


function AdminProductForm() {
    let fileRef = React.createRef()
    let sampleDisplay = React.createRef()
    let finalPrint = React.createRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.files.files)
        var file = e.target.files.files[0]
        var img = document.createElement("img")
        img.setAttribute('width', 100)
        var reader = new FileReader()
        reader.onloadend = function () {
            img.src = reader.result;
        }
        reader.readAsDataURL(file);

        var es = document.getElementById('sample');
        es.appendChild(img);

        return e.preventDefault();
    }

    const handleFinalPrint = () => {
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

                </div>
                <div className="col-md-8">
                    <div className="card">
                        <div className='container'>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="amount">Amount</label>
                                    <input type="text" name='amount' className="form-control" id="amount" placeholder="Amount" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" name='title' className="form-control" id="title" placeholder="Title" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="files">Upload Image</label>
                                    <input type="file" ref={fileRef} onChange={handleImgs} name='files' multiple className="form-control-file" id="files" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="files">Final Print</label>
                                    <input type="file" ref={finalPrint} onChange={handleImgs} name='finalPrint' multiple={false} className="form-control-file" id="files" />
                                </div>


                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <div ref={sampleDisplay} id='sample'></div>
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
