import React from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const Help = () => {
  return (
    <>
    <h1 className='text-center text-success my-5 p-4 border border-groove bg-warning'>MORE ABOUT US</h1>
      <div className='container my-5 p-3 border border-primary bg-light' style={{fontFamily: 'Droid Sans'}}>
                    <h5> The website viz.‘MyGrievance’ .It serves a platform for public to Lodge grievances related to Central/State Government organizations and to monitor them.<br/><br/>
<h4 text-success>Key Features</h4><br/><br/>
1. Sign Up: One time sign up is required to get User Login.<br/><br/>

2. Dashboard: A Dashboard for lodging and monitoring after login<br/><br/>

3. Grievances lodged by the user is available under categories like Total, Pending, and Disposed.<br/><br/>

4. Facility to send reminder to lodged grievances and feedback for disposed grievances.<br/><br/>

5. Seamless Sign Up.<br/><br/>

6. email acknowledgement at the time of lodging of grievance and its disposal<br/><br/></h5>

      </div>
    </>
  )
}

export default Help;