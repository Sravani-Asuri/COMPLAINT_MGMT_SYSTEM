import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import axios from 'axios';

export default function SelectComplaints(){
    const [not_selected_complaints,set_not_selected_complaints]=useState([]);
    let voulenteer=JSON.parse(window.localStorage.getItem("awt_voulenteer"));
    useEffect(()=>{
        axios.get("http://localhost:5000/api/complaints/free_complaints").then((res)=>{
            set_not_selected_complaints(res.data.complaints);
        })
    },[]);
    return(
        <div className='bg-info'>
        <center><h1>SELECT YOUR COMPLAINTS FROM HERE</h1></center>
        <hr className='bg-dark'/>
        <div className='complaints_view_div'>
        {
            not_selected_complaints.map((complaint)=>{
                return(
                    <div key={complaint._id} className='complaints_div'>
                    <img src={`${complaint.image}`} style={{width:'100%',height:'50%',borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}></img>
                    <div style={{display:'flex'}}>
                    <h4 style={{marginRight:'2%'}}>Subject :</h4>
                    <h6 style={{marginTop:'1%'}}>{`${complaint.subject}`}</h6>
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
                    <h4 style={{marginRight:'2%'}}>Mobile:</h4>
                    <h6 style={{marginTop:'1.5%'}}>{`${complaint.mobile}`}</h6>
                    </div>
                    <button style={{backgroundColor:'skyblue',borderRadius:'3px',boxShadow:'1px 1px 3px blue',width:'50%',fontSize:'1.5rem'}} onClick={()=>{
                        let obj={...complaint,voulenteer_id:`${voulenteer._id}`,voulenteer_name:`${voulenteer.name}`,voulenteer_mail:`${voulenteer.email}`}
                        axios.post("http://localhost:5000/api/complaints/update_complaint",obj).then((res)=>{
                            if(res.status==200)
                            {
                            alert("this complained was assigned to you succesfully");
                            window.location.reload();
                            }
                        })
                    }}>select</button>
                    </div>
                )
            })
        }
        </div>
        </div>
    )
}