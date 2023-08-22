const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

const app=express();
const UserApi=require('./routes/user');
const loginApi=require('./routes/login');
const complaintApi=require('./routes/complaints');


app.use(express.json());
app.use(cors());

const CONNECTION_URL='mongodb+srv://sravaniasuri2003:asuri@cluster0.gxvkhqv.mongodb.net/?retryWrites=true&w=majority';
// const CONNECTION_URL='mongodb+srv://revanth:vizag2003@cluster0.mde5ti9.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_URL,(err)=>{
    if(err)
    console.log(err);
    else
    console.log("DB connected");
})

app.listen(5000,()=>{
    console.log("server running");
})

app.use('/api/users',UserApi);
app.use('/api/login',loginApi);
app.use('/api/complaints',complaintApi);