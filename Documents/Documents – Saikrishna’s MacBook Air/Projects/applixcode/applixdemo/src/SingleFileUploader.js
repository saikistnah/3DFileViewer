import React,{useState,useRef} from "react";
import axios from 'axios';
import FBXBom from './FBXBom'
import StepViewer from './StepViewer'

const  SingleFileUploader = () => {

  const [file, setFile] = useState()
  const fileUploadRef = useRef();
  const [stepExist,setStepExist] = useState(false);

  const handleChange= async () => {
    const uploadedFile = fileUploadRef.current.files[0];
   // const cachedURL = URL.createObjectURL(uploadedFile);
    setFile(uploadedFile)
    console.log(uploadedFile)
  }

  function handleSubmit(event) {
    
    const url = 'http://localhost:8080/fileupload';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((error) => {
      console.log(error.data);
    },(resp) =>{
      console.log(resp)
      var filepart = file.name
      if(filepart.indexOf(".STEP") !== -1)
        setStepExist(true);
      else
        setStepExist(false);
    });
    event.preventDefault();
    event.nativeEvent.stopImmediatePropagation();

  }

  return (
    <div className="App">
        <form id="fileupload" onSubmit={handleSubmit}>
          <h1>STEP and FBX File Upload and Viewer</h1>
          <input type="file" ref={fileUploadRef} onChange={handleChange}/>
          <button type="submit">Upload</button>
        </form>
        <div> 
        {stepExist ? <StepViewer/> : <FBXBom/>}
        </div>
    </div>
  );
}

export default SingleFileUploader;