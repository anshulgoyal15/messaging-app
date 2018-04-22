const mongoose = require("mongoose");
const passLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required: "Username cannot be empty",
        unique:true,
    },
    password:String,
    firstName:String,
    lastName:String,
    // link message collection
    sendMessages:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Message'
    }],
    //link message collection
    recMessages:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Message'
    }],
    lastSeen:Date,
    blockedBY:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    blocked:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }]
});
// using passport local mongoose
userSchema.plugin(passLocalMongoose);


module.exports = mongoose.model("User",userSchema);