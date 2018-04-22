const express=require('express');
const app=express();
const mongoose=require('mongoose');
const passport       = require("passport");
const LocalStrategy  = require("passport-local");
const User           = require("./models/user");
const bodyParser     =require('body-parser');
const passconf=require('./conf/passconf');
const authRoutes=require('./routes/authRoutes')
const messagingRoutes=require('./routes/messagingRoutes')

// connecting to mongodb database
mongoose.connect('');
mongoose.Promise = global.Promise;


// config body parser
app.use(bodyParser.json());

// config passport
passconf(passport,app,LocalStrategy,User);

// add authentication routes
app.use(authRoutes)


//adding message routes
app.use(messagingRoutes)

// listening to the server
app.listen(process.env.PORT||3000)