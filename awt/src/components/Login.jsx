import React, { useState} from 'react';
import { Link, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import axios from 'axios';


const handleUserLogin=(obj)=>{
  axios.post("http://localhost:5000/api/login/user",obj).then((res)=>{
    if((res.status==200))
    {
      if(res.data.user)
      {
        alert("login succesful");
        localStorage.clear();
        localStorage.setItem("awt_user",JSON.stringify(res.data.user));
        window.location.href="/home";
      }
      else
      alert("entered email or password is wrong");
    }
    else
    alert("oops something went wrong");
  })
}

const handleVoulenteerLogin=(obj)=>{
  axios.post("http://localhost:5000/api/login/admin",obj).then((res)=>{
    if((res.status==200))
    {
      if(res.data.admin)
      {
        alert("login succesful");
        localStorage.clear();
        localStorage.setItem("awt_voulenteer",JSON.stringify(res.data.admin));
        window.location.href="/admin_home";
      }
      else
      alert("entered email or password is wrong");
    }
    else
    alert("oops something went wrong");
  })
}


const add_user=(obj)=>{
  axios.post("http://localhost:5000/api/users/add",obj).then((res)=>{
    if(res.status==200)
    alert("user registeration completed");
    else
    alert("oops something went wrong");
  })
}


function Login() {

  const [justifyActive, setJustifyActive] = useState('tab1');
  const [name,setName]=useState("");
  const [mail,setMail]=useState("");
  const [password,setPassword]=useState("");
  const [adminMail,setAdminMail]=useState("");
  const [adminPassword,setAdminPassword]=useState("");
  const [toggle,setToggle]=useState(true);

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <>
    <div>
    <MDBContainer fluid  className="p-5 my-5 d-flex flex-column w-50 border border-primary bg-light">
      {toggle?
      <>
      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            LOGIN
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            REGISTER
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3">
            <p>SIGN IN</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' onChange={(e)=>{setMail(e.target.value)}}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={(e)=>{setPassword(e.target.value)}}/>
          <button class="btn btn-primary" style={{borderRadius:'3px',marginBottom:'4%',width:'100%'}} onClick={()=>{setToggle(false)}}>LOGIN AS VOLUNTEER</button>
          {/****************************************************************LOGIN FUNCTIONALITY**********************************/}
          <MDBBtn className="mb-4 w-100" onClick={()=>{
            if(mail.trim()=="" || password.trim()=="")
            alert("please fill the fields");
            else{
              let obj={
                mail:`${mail}`,
                password:`${password}`,
              }
              handleUserLogin(obj);
            }
          }}>SIGN IN</MDBBtn>
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

        <div className="text-center mb-3">
            <p>SIGN UP</p>
           </div>
          <MDBInput wrapperClass='mb-3' label='Username' id='form1' type='text' onChange={(e)=>{setName(e.target.value)}}/>
          <MDBInput wrapperClass='mb-3' label='Email' id='form1' type='email' onChange={(e)=>{setMail(e.target.value)}}/>
          <MDBInput wrapperClass='mb-3' label='Password' id='form1' type='password' onChange={(e)=>{setPassword(e.target.value)}}/>

          <MDBBtn className="mb-4 w-100" onClick={()=>{
            if(name.trim()=="" || mail.trim()=="" || password.trim()=="")
            alert("please fill all the fields");
            else
            {
              let obj={
                name:`${name}`,
                email:`${mail}`,
                password:`${password}`,
              }
              add_user(obj);
            }
          }}>SIGN UP</MDBBtn>

        </MDBTabsPane>

      </MDBTabsContent>
      </>
      :
      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3">
            <p>SIGN IN</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' onChange={(e)=>{setAdminMail(e.target.value)}}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={(e)=>{setAdminPassword(e.target.value)}}/>
          <button class="btn btn-primary" style={{borderRadius:'3px',marginBottom:'4%',width:'100%'}} onClick={()=>{setToggle(true)}}>LOGIN AS USER</button>
          {/****************************************************************LOGIN FUNCTIONALITY**********************************/}
          <MDBBtn className="mb-4 w-100" onClick={()=>{
            if(adminMail.trim()=="" || adminPassword.trim()=="")
            alert("please fill the fields");
            else{
              let obj={
                mail:`${adminMail}`,
                password:`${adminPassword}`,
              }
              handleVoulenteerLogin(obj);
            }
          }}>SIGN IN</MDBBtn>
        </MDBTabsPane>
      </MDBTabsContent>
      }
    </MDBContainer>
    </div>
    </>
  );
}

export default Login;