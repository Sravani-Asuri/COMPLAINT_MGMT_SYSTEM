const express=require('express')
const router=express.Router()
const {add_complaint,get_user_complaints,get_voulenteer_complaints,update_complaint,delete_complaint, free_complaints}=require('../controllers/complaints')

router.post('/add',add_complaint)
router.get('/user_complaints',get_user_complaints)
router.post('/voulenteer_complaints',get_voulenteer_complaints)
router.post('/update_complaint',update_complaint)
router.post('/remove_complaint',delete_complaint)
router.get('/free_complaints',free_complaints);

module.exports=router