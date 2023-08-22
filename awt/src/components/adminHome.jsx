import React from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const AdminHome = () => {
  return (
    <>~
    <h1 className='text-center text-success my-5'>MyTasks</h1>
      <div className='container w-100 '>
        <div className='row'>
          <div className='col-md-6'>
            <div class='card  hover-shadow rounded-4'>
              <img src="https://www.shutterstock.com/image-photo/selecting-person-job-creating-successful-260nw-1208845708.jpg" class='card-img-top' style={{height:'50vh'}}/>
              <div class='card-body'>
                <h5 class='card-title'>select complaints</h5>
                <h6 class='card-text'>add the complaints to monior them</h6>
                <Link to="/select_complaints"><button class='btn btn-primary'>Go</button></Link>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div class='card  hover-shadow rounded-4'>
              <img src="https://miro.medium.com/max/1104/1*x4vbUHv1njGYqVB_1O4Ipg.jpeg" class='card-img-top' style={{height:'50vh'}}/>
              <div class='card-body'>
                <h5 class='card-title'>monitor your complaints</h5>
                <h6 class='card-text'>here you can monitor your complsints that are assigned to you</h6>
                <Link to="/monitor_complaints"><button class='btn btn-primary'>Go</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminHome;