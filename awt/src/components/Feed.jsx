import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';

function Feed() {
  const [mail,setMail]=useState("");
  const [body,setBody]=useState("");
  return (
    
    <center>
      
      <h1 className='text-center text-success my-5 p-4 border border-groove bg-warning'>GIVE YOUR VALUABLE FEEDBACK HERE</h1>
    <Form className='border border-primary w-50 my-5 bg-light'>
      <h4>FEEDBACK DETAILS</h4>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>feedback</Form.Label>
        <Form.Control type="text" placeholder="feed back" onChange={(e)=>{setBody(e.target.value)}}/>
      </Form.Group>
      {/**<a href={`mailto:ch.m.s.revanth@gmail.com?subject=${"just to get in touch"}&body=${email}`}><button onClick={()=>{setEmail("")}} style={{backgroundColor:'#00F5FF',height:'15%',width:'10%',fontSize:'100%',borderRadius:'10px'}}>send email</button></a>
           ch.m.s.revanth@gmail.com*/}
      <a href={`mailto:sravaniasuri2003@gmail.com?subject=${"just to get in touch"}&body=${body}`}><Button className='mb-4 justify-content-center' variant="primary">
        Submit
      </Button></a>
      
    </Form>
    </center>
  );
}

export default Feed;

