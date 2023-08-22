/*
const User = require('../models/user.js')
const Admin = require('../models/admin.js')

const validateUser = ((req,res)=> {
    User.findOne({mobile : req.body.mobile , password : req.body.password}, (err, user) => {
        if(err){
            console.log(err)
        }
        else {
            const data = {
                status : 200,
                user : user
            }
            res.json(data)
        }
    })
})

const validateAdmin = ((req,res) => {
    Admin.findOne({mobile : req.body.mobile , password : req.body.password}, (err, admin) => {
        if(err){
            console.log(err)
        }
        else {
            const data = {
                status : 200,
                admin : admin
            }
            res.json(data)
        }
    })
})

module.exports = {
    validateUser, validateAdmin
}

 */
const complaint_model=require('../schemas/complaints')

const add_complaint=((req,res)=>{
    const newComplaint=new complaint_model(req.body);
    newComplaint.save().then((response)=>{
        let data={
            status:200,
            description:"complaint added",
        }
        res.json(data);
    })
})

const get_user_complaints=((req,res)=>{
    complaint_model.find({critical_level : { $ne :0}},(err,complaints)=>{
        let data={
            status:200,
            complaints :complaints,
        }
        res.json(data);
    })
})

const get_voulenteer_complaints=((req,res)=>{
    complaint_model.find({voulenteer_id:req.body.id},(err,complaints)=>{
        let data={
            status:200,
            complaints:complaints,
        }
        res.json(data);
    })
})

const free_complaints=((req,res)=>{
    complaint_model.find({voulenteer_id : null},(err,complaints1)=>{
        //console.log(complaints1);
        let data={
            status:200,
            complaints:complaints1,
        }
        res.json(data);
    }).catch((err)=>{
        console.log(err);
    })
})

const update_complaint=((req,res)=>{
    let update={
    image:req.body.image,
    name:req.body.name,
    location:req.body.location,
    mobile:req.body.mobile,
    status:req.body.status,
    subject:req.body.subject,
    description:req.body.description,
    voulenteer_id:req.body.voulenteer_id,
    voulenteer_name:req.body.voulenteer_name,
    voulenteer_mail:req.body.voulenteer_mail,
    status_bit:req.body.status_bit,
    critical_level:req.body.critical_level,
    }
    complaint_model.findOneAndUpdate({_id : req.body._id}, update , {
        new : true
    }).then((response) => {
        const data = {
            status : 200,
            description : "Updated successfully"
        }
        res.json(data)
    }).catch((err) => {
        if(err)console.log(err)
    })
})


const delete_complaint = ((req,res) =>{
    const update = {
        status : 1
    }
    complaint_model.findOneAndUpdate({_id : req.body._id} , update , {
        new : true
    }).then((response) => {
        const data = {
            status : 200,
            description : "Completed successfully"
        }
        res.json(data)
    }).catch((err) =>{
        if(err)console.log(err)
    })
})

module.exports={
    add_complaint,get_user_complaints,get_voulenteer_complaints,update_complaint,delete_complaint,free_complaints
}