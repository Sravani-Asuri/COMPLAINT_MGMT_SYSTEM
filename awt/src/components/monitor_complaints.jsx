import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import axios from 'axios';

const Complaint=(props)=>{
    const [toggle,setToggle]=useState(true);
    const [critical,setCritical]=useState(props.complaint.critical_level);
    const [status,setStatus]=useState(props.complaint.status);
    let voulenteer=JSON.parse(window.localStorage.getItem("awt_voulenteer"));
    let complaint=props.complaint;
    return(
        <div key={complaint._id} className='complaints_div'>
        {toggle?
        <>
        <img src={`${complaint.image}`} style={{width:'100%',height:'50%',borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}></img>
        <div style={{display:'flex'}}>
        <h4 style={{marginRight:'2%'}}>Subject :</h4>
        <h6 style={{marginTop:'1.5%'}}>{`${complaint.subject}`}</h6>
        </div>
        <div style={{display:'flex'}}>
        <h4 style={{marginRight:'2%'}}>Critical_level :</h4>
        <h6 style={{marginTop:'1.5%'}}>{`${complaint.critical_level}`}</h6>
        </div>
        <div style={{display:'flex'}}>
        <h4 style={{marginRight:'2%'}}>Status :</h4>
        <h6 style={{marginTop:'1.5%'}}>{`${complaint.status}`}</h6>
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
            setToggle(false);
        }}>edit</button>
        </>
        :
        <div style={{width:'94%',height:'94%',margin:'3%'}} >
            <div style={{display:'flex',marginBottom:'4%'}}>
            <h6>Critical_level : </h6>
            <input type="number" defaultValue={critical} style={{borderRadius:'4px',width:'14rem',}} onChange={(e)=>{setCritical(e.target.value)}}></input>
            </div>
            <div style={{display:'flex',marginBottom:'4%'}}>
            <h6>Status : </h6>
            <input type="text" style={{borderRadius:'4px',width:'18.4rem'}} defaultValue={status} onChange={(e)=>{setStatus(e.target.value)}}></input>
            </div>
            <div style={{display:'flex',marginBottom:'4%'}}>
                <button style={{backgroundColor:'pale-green',borderRadius:'5px',width:'6rem',marginRight:'1rem'}} onClick={(e)=>{setToggle(true);}}>back</button>
                <button style={{backgroundColor:'pink',borderRadius:'5px',width:'6rem'}} onClick={()=>{
                    let t=parseInt(critical);
                    if(t>10 || t<0)
                    alert("The cricality can only be in range from 0-10");
                    else
                    {
                        if(status.trim()=="")
                        alert("please fill the status field");
                        else
                        {
                        let obj={...complaint,critical_level:critical,status:`${status}`};
                        setStatus("");
                        axios.post('http://localhost:5000/api/complaints/update_complaint',obj).then((res)=>{
                            if((res.status==200))
                            {
                            alert("complaint was updated succesfully");
                            window.location.reload();
                            }
                            else
                            alert("oops something went wrong");
                        })
                        }
                    }
                }}>update</button>
            </div>
            <div style={{display:'flex'}}>
            <button style={{backgroundColor:'tomato',width:'10rem',borderRadius:'4px'}}
            onClick={()=>{
                let obj={...complaint,vouleneteer_name:null,voulenteer_id:null,voulenteer_mail:null};
                axios.post('http://localhost:5000/api/complaints/update_complaint',obj).then((res)=>{
                    if(res.status==200)
                    {
                        alert("complained released succesfully");
                        window.location.reload();
                    }
                    else
                    alert("oops something went wrong");
                })
            }}
            >leave this</button>
            </div>
        </div>
        }
        </div>
    )
}

export default function MonitorComplaints(){
    const [selected_complaints,set_selected_complaints]=useState([]);
    let voulenteer=JSON.parse(window.localStorage.getItem("awt_voulenteer"));
    useEffect(()=>{
        axios.post("http://localhost:5000/api/complaints/voulenteer_complaints",{id:`${voulenteer._id}`}).then((res)=>{
            //console.log(res.data);
            set_selected_complaints(res.data.complaints);
        })
    },[]);
    return(
        <div className='bg-info'>
        <center><h1>MONITOR YOUR COMPLAINTS FROM HERE</h1></center>
        <hr/>
        <div className='complaints_view_div'>
        {
            selected_complaints.map((complaint)=>{
                return <Complaint key={complaint._id} complaint={complaint}/>
            })
        }
        </div>
        </div>
    )
}