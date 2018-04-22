const express=require('express')
const router=express.Router()
const Message=require('../models/message')
const User=require('../models/user')
const {isBlocked,isLogin}=require('../conf/middleware')
router.post('/sendmessage',isBlocked,function (req, res) {
    //creating message from Message class
  Message.create(req.body,(err,message)=>{
      if(!err){
          // adding sender to message
          message.from=req.user._id
          //adding message to rec inbox
          User.findById(req.body.to).then((foundUser)=>{
              foundUser.recMessages.push(message)
              foundUser.save()
          })
          // adding message to sender sent box
          User.findById(req.user._id).then((founduser)=>{
              founduser.sendMessages.push(message)
          })
          // saving message to db
          message.save(function (err) {
              if(!err){
                  // sending conformation to sender
                  res.json(message)
              }
              else {
                  console.log(err)
              }
          })
      }
      else{
          console.log(err)
      }
  })
})
router.get('/inbox',isLogin,function (req, res) {
    // finding populating the messages
    User.findById(req.user._id).populate({
        path: 'recMessages',
        populate: {
            path: 'from',
            select: 'username',
        }
    }).then((messages)=>{
        // sending messages
        res.json(messages.recMessages);
    });
})
router.put('/block/:username',isLogin,function (req,res){
    User.find({username:req.params.username}).then((founduser)=>{
        if(founduser[0].blockedBY.indexOf(req.user._id)===-1){
            founduser[0].blockedBY.push(req.user);
            founduser[0].save();
            res.json({message:"user blocked"})
        }else{
            res.json({message:"user blocked"})        }
    })
    }
)
module.exports=router