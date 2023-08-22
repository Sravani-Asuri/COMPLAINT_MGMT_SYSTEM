import React from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const Cards = () => {
  return (
    <>
    <h1 className='text-center text-success my-5 p-4 border border-groove bg-warning'>MyGrievence</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div class='card  hover-shadow rounded-4'>
              <img src="data:image/jpeg;base64,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" class='card-img-top' />
              <div class='card-body'>
                <h5 class='card-title'>Register Complaint</h5>
                <h6 class='card-text'>Register the complaint here.</h6>
                <Link to="/Reg_form"><button class='btn btn-primary'>Go</button></Link>
              </div>
            </div>
          </div>
          
          <div className='col-md-4'>
            <div class='card  hover-shadow rounded-4'>
              <img src="https://cdn.c-zentrix.com/blog-images/6-best-ways-to-collect-customer-feedback-on-instagram.jpeg" class='card-img-top' />
              <div class='card-body'>
                <h5 class='card-title'>Feedback</h5>
                <h6 class='card-text'>Give your feedback.</h6>
                <Link to="/Feed"><button class='btn btn-primary'>Go</button></Link>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div class='card  hover-shadow rounded-4' style={{marginTop:'5%'}}>
              <img src="https://www.cxtoday.com/wp-content/uploads/2021/04/Customer-Complaints.png" class='card-img-top' />
              <div class='card-body'>
                <h5 class='card-title'>complaints</h5>
                <h6 class='card-text'>you can see the complants</h6>
                <Link to="/user_complaints"><button class='btn btn-primary'>Go</button></Link>
              </div>
            </div>
        </div>
        <br/>
          <br/>
          <br/>
          <br/>
          <div className='col-md-4'>
            <div class='card  hover-shadow rounded-4'>
              <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201909/contact-details-3381225_1280.jpeg?size=690:388" class='card-img-top' />
              <div class='card-body'>
                <h5 class='card-title'>Contacts</h5>
                <h6 class='card-text'>Contact here.</h6>
                <Link to="/Contact"><button class='btn btn-primary'>Go</button></Link>
              </div>
            </div>
          </div>
           <br/>
          <div className='col-md-4'>
            <div class='card  hover-shadow rounded-4'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl7plrY_mCsD9eqxAXwIiv_lf83d5otDTBHuJomXYickaqsMFrBokrJ1ELWrl3_C-YuxQ&usqp=CAU0" class='card-img-top' />
              <div class='card-body'>
                <h5 class='card-title'>Help</h5>
                <h6 class='card-text'>Help will help you.</h6>
                <Link to="/Help"><button class='btn btn-primary'>Go</button></Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Cards;