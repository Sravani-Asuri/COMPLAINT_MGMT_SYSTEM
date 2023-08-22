import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio
}
from 'mdb-react-ui-kit';
import '../App.css';
import storage from "../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import axios from "axios";




function Reg_form() {
  const [name,setName]=useState("");
  const [mobile,setMobile]=useState("");
  const [location,setLocation]=useState("");
  const [subject,setSubject]=useState("");
  const [description,setDescription]=useState("");
  const [file,setFile]=useState("");



  {/*************************************UPLOADING COMPLAINT FUNCTIONS*************************************************************** */}

  
  const handleUpload = () => {
    if (!file) {
    alert("Please upload an image first!");
    }
    
    const storageRef = ref(storage, `/files/${file.name}`);
    
            // progress can be paused and resumed. It also exposes progress updates.
            // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);
    
    uploadTask.on(
    "state_changed",
    (snapshot) => {
    const percent = Math.round(
    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    );
    
                    // update progress
    },
    (err) => console.log(err),
    () => {
                    // download url
    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
      axios.post("http://localhost:5000/api/complaints/add",{
        image:`${url}`,
        name:`${name}`,
        location:`${location}`,
        mobile:`${mobile}`,
        status:" ",
        subject:`${subject}`,
        description:`${description}`,
        voulenteer_id:null,
        voulenteer_name:null,
        voulenteer_mail:null,
        status_bit:0,
        critical_level:0,
      }).then((res)=>{
        if(res.status==200)
        {
          alert("complaint was registered succefully , will be assigned a member to solve soon");
          window.location.reload();
        }
        else
        alert("oops something went wrong");
      })
    });
    }
    );
    };
  


  {/*************************************UPLOADING COMPLAINT FUNCTIONS*************************************************************** */}


  return (
    <div style={{height:'100vh',width:'100hw',justifyContent:'center',textAlign:'center',alignItems:'center',display:'flex'}} className="bg-secondary">
    <MDBCard style={{flexDirection:'row',width:'60%'}}>
              <MDBCol style={{height:'100%',width:'50%'}} className="d-none d-md-block">
                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp' alt="Sample photo" className="rounded-start" fluid/>
              </MDBCol>

              <MDBCol style={{height:'100%',width:'50%'}}>

                <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                  <h3 className="mb-5 text-uppercase fw-bold text-success">Complaint registration form</h3>

                  
                  <MDBInput wrapperClass='mb-4' label='name' size='sm' id='form1' type='text' onChange={(e)=>{setName(e.target.value)}}/>

                  <MDBInput wrapperClass='mb-4' label='location' size='sm' id='form3' type='text' onChange={(e)=>{setLocation(e.target.value)}}/>

                  <MDBInput wrapperClass='mb-4' label='subject' size='sm' id='form5' type='text' onChange={(e)=>{setSubject(e.target.value)}}/>
                  <MDBInput wrapperClass='mb-4' aria-multiline label='description' size='sm' id='form6' type='text' onChange={(e)=>{setDescription(e.target.value)}}/>
                  <MDBInput wrapperClass='mb-4' label='mobile' size='sm' id='form6' type='number' onChange={(e)=>{setMobile(e.target.value)}}/>
                  <div style={{display:'flex',flexDirection:'row'}}>
                  <h5>image:</h5>
                  <MDBInput wrapperClass='mb-4' size='sm' id='form6' type='file' accept="/image/*" onChange={(e)=>{setFile(e.target.files[0])}}/>
                  </div>
                  <div className="d-flex justify-content-end pt-3">
                    <MDBBtn color='light' size='lg'>Reset all</MDBBtn>
                    <MDBBtn className='ms-2' color='warning' size='lg' onClick={()=>{
                      if(name.trim()=="" || (mobile.toString()).length!=10 || location.trim()=="" || subject.trim()=="" ||description.trim()=="")
                      alert("please fill all the fields completely");
                      else
                      handleUpload();
                    }}>Submit form</MDBBtn>
                  </div>

                </MDBCardBody>

              </MDBCol>
        </MDBCard>
    </div>
  );
}

export default Reg_form;