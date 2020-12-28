import React, {Fragment, useState} from 'react'

const FileUpload =() => {

    const [file, setFile]= useState('')
    const [filename, setFilename]= useState('Chose File')

    const onChange = e =>{
        setFile(e.target.files[0])
        setFile(e.target.files[0].name)
        
    }
    const onSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
    }

    return (
        <Fragment>
            <form onSubmit={onSubmit}>
            <div className="custom-file mb-4">
  
  <input className="custom-file-input" id="customFile" type="file" 
  onChange={onChange}/>
  <label htmlFor="customFile" className="custom-file-label">{filename}
  </label>
</div>
<input type="submit" value="Upload" className="btn btn-primary btn-block mt-4"/>
            </form>
        </Fragment>
    )
}

export default FileUpload