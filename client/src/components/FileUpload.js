import React, {Fragment, useState} from 'react'
import axios from 'axios'

const FileUpload = () => {

    const [file, setFile]= useState('')
    const [filename, setFilename]= useState('Chose File')

    //state for the uploaded file 
    const [uploadedFile, setUploadedFile] = useState ({});

    const onChange = e =>{
        setFile(e.target.files[0])
        setFile(e.target.files[0].name)
        
    }
    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await axios({
                method: 'post',
                url: 'http://localhost:3000/upload',
                data: formData ,
                headers: {'Content-Type': 'multipart/form-data' }
                })

            const { fileName, filePath}= res.data;
            setUploadedFile({fileName, filePath})

        } catch (err) {
            if (err.response.status === 500){
                console.log('Problem with the server')
            } else {
             
            }           
            
        }
    };

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