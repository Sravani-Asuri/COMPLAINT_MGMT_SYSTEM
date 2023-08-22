const express=require('express');
const router=express.Router();
const {add_user}=require('../controllers/user');

router.post('/add',add_user);

module.exports=router