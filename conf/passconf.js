function passconf(passport,app,LocalStrategy,User) {
    // setting up session control
    app.use(require("express-session")({
        secret: "Hack Me if u can",
        resave: false,
        saveUninitialized: false
    }));
    // config passport to add user to req
    app.use(passport.initialize());
    app.use(passport.session());
    passport.use(new LocalStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());


}
module.exports=passconf