const mongoose=require('mongoose');

const complaint_schema=new mongoose.Schema({
    image:String,
    name:String,
    location:String,
    mobile:String,
    status:String,
    subject:String,
    description:String,
    voulenteer_id:String,
    voulenteer_name:String,
    voulenteer_mail:String,
    status_bit:Number,
    critical_level:Number,
})

const complaint_model=new mongoose.model('complaint_model',complaint_schema);

module.exports=complaint_model;