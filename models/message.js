const mongoose = require('mongoose');
const messageSchema=new mongoose.Schema({
    messageHead:String,
    to:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    from:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    messageContent:String,
},{timestamps:true});
module.exports=mongoose.model('Message',messageSchema);