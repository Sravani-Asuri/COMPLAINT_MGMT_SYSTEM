const user_model=require('../schemas/user');
const admin_model=require('../schemas/admin');

const validateUser = ((req,res)=> {
    user_model.findOne({email : req.body.mail , password : req.body.password}, (err, user) => {
        if(err){
            console.log(err)
        }
        else {
            const data = {
                status : 200,
                user : user
            }
            //console.log(user[0]);
            res.json(data)
        }
    })
})

const validateAdmin = ((req,res) => {
    admin_model.findOne({email : req.body.mail , password : req.body.password}, (err, admin) => {
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

module.exports={
    validateUser,validateAdmin
}