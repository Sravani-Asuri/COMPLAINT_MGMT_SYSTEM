import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
const Contact= () => {
  return (
    <>
    <h1 className='text-center text-success my-5 bg-warning'>PUBLIC GRIEVANCE OFFICERS</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div class='card  hover-shadow rounded-4'>
              <img src="data:image/jpeg;base64,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" class='card-img-top' />
              <div class='card-body'>
                <h5 class='card-title'>Shri. Mukul Dixit</h5>
                <h6 class='card-text'>Under Secretary (Public).</h6>
                <h6 class='card-text'>23014155</h6>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div class='card  hover-shadow rounded-4'>
              <img src="data:image/jpeg;base64,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" class='card-img-top' />
              <div class='card-body'>
                <h5 class='card-title'>Riya</h5>
                <h6 class='card-text'>President.</h6>
                <h6 class='card-text'>1235678</h6>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div class='card  hover-shadow rounded-4'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJBJS-VK4uB8BWCGFrn6NP_LVoyWU4ffPqsQ&usqp=CAU" class='card-img-top' />
              <div class='card-body'>
                <h5 class='card-title'>Raj sekhar</h5>
                <h6 class='card-text'>Joint Secretary</h6>
                <h6 class='card-text'>23743139</h6>
              </div>
            </div>
          </div>
          
          </div>
      </div>
    </>
  )
}

export default Contact;