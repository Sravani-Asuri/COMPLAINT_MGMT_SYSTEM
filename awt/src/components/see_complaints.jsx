import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import axios from 'axios';

export default function UserComplaints(){
    const [complaints,setComplaints]=useState([]);
    let voulenteer=JSON.parse(window.localStorage.getItem("awt_voulenteer"));
    useEffect(()=>{
        axios.get("http://localhost:5000/api/complaints/user_complaints").then((res)=>{
            setComplaints(res.data.complaints);
        })
    },[]);
    return(
        <div className='bg-info'>
        <center><h1>WATCH STATUS OF YOUR COMPLAINTS</h1></center>
        <hr/>
        <div className='complaints_view_div'>
        {
            complaints.map((complaint)=>{
                return(
                    <div key={complaint._id} className='complaints_div'>
                    <img src={`${complaint.image}`} style={{width:'100%',height:'50%',borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}></img>
                    <div style={{display:'flex'}}>
                    <h4 style={{marginRight:'2%'}}>Subject :</h4>
                    <h6 style={{marginTop:'1.5%'}}>{`${complaint.subject}`}</h6>
                    </div>
                    <div style={{display:'flex'}}>
                    <h4 style={{marginRight:'2%'}}>Description:</h4>
                    <h6 style={{marginTop:'1.5%'}}>{`${complaint.description}`}</h6>
                    </div>
                    <div style={{display:'flex'}}>
                    <h4 style={{marginRight:'2%'}}>Location:</h4>
                    <h6 style={{marginTop:'1.5%'}}>{`${complaint.location}`}</h6>
                    </div>
                    <div style={{display:'flex'}}>
                    <h4 style={{marginRight:'2%'}}>Critical_Level :</h4>
                    <h6 style={{marginTop:'1.5%'}}>{`${complaint.critical_level}`}</h6>
                    </div>
                    <div style={{display:'flex'}}>
                    <h4 style={{marginRight:'2%'}}>Volunteer name :</h4>
                    <h6 style={{marginTop:'1.5%'}}>{`${complaint.voulenteer_name?complaint.voulenteer_name:'no one assiged'}`}</h6>
                    </div>
                    <div style={{display:'flex'}}>
                    <h4 style={{marginRight:'2%'}}>Volunteer mail :</h4>
                    <h6 style={{marginTop:'1.5%'}}>{`${complaint.voulenteer_mail?complaint.voulenteer_mail:'no one assiged'}`}</h6>
                    </div>
                    </div>
                )
            })
        }
        </div>
        </div>
    )
}