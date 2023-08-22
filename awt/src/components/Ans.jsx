import React from "react";
import './ans.css'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Ans = () => {
    return (
        <div className="landingpage">

            
            <div className="bg-overlay"></div>

            <div className="navbar">
                <p className="pp">&nbsp;&nbsp;&nbsp;**CLEANLINESS IS THE ONLY WEAPON THAT CAN FIGHT AGINST MANY DISEASES**    **CLEANLINESS IS THE KEY TO HEALTHY MIND AND BOBY**</p>
                
            </div>

            <div className="home-text">
                <h1>COMPLAINT MANAGEMENT SYSTEM</h1>
                <p>Come live out your complaints with us</p>
                <Link to="/Login"><button class='btn btn-primary'>Make a Complaint</button></Link> 
            </div>

           

        </div>
    )
}

export default Ans;