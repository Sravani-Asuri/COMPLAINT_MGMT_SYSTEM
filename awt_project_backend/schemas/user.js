const mongoose=require('mongoose');

const user_schema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})

const user_model=new mongoose.model('user_model',user_schema);

module.exports=user_model;