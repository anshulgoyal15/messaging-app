const express=require('express')
const router=express.Router()
const passport=require('passport')
const User=require('../models/user')

// login route
router.post('/login',passport.authenticate("local"),function (req, res) {
    res.json({message:'login was successful'})
})

// register route
router.post('/register',function (req, res) {
    //creating new user object
    const newUser = new User({
        username: req.body.username,
        firstName:req.body.firstName,
        lastName:req.body.lastName
    });

    //registering user with password
    User.register(newUser,req.body.password,function(err,user){
        if(err){
            console.log(err);
            res.json({message:"register unsuccessful"});
        }
        else{
            passport.authenticate("local")
                console.log(req.body.password);
                res.json({message:"user successfully registered"});
        }});
})
module.exports=router