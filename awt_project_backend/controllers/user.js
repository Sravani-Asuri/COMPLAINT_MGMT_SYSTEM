const user_model=require('../schemas/user');

const add_user=((req,res)=>{
    const newUser=new user_model(req.body);
    newUser.save().then((response)=>{
        const data={
            status:200,
            description:"created succesfully",
        }
        res.json(data);
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports={
    add_user,
}