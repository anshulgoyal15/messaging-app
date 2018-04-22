
isBlocked=function(req,res,next){
    // checking if user is login or not
    if(req.isAuthenticated()){
        console.log(req.user.blockedBY);
        console.log(req.user._id)
        console.log(req.body.to)
        // checking if logged in user is blocked or not
       if(req.user.blockedBY.indexOf(req.body.to)===-1){
         return  next()
       }
       else{
           res.json({message:"you are blocked"})
       }
       }
    else{
        res.json({message:"Login first"})
    }
};
isLogin=function(req,res,next){
    // checking if user is logged in or not
    if(req.isAuthenticated()){
        return next()
    }
    else{
        res.json({message:"Login first"})
    }
}
module.exports={isBlocked,isLogin};