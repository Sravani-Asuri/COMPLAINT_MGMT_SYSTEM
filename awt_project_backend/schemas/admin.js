const mongoose=require('mongoose');

const admin_schema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})

const admin_model=new mongoose.model('admin_model',admin_schema);

module.exports=admin_model;