var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var passport = require('passport');
var passportSetup = require('./config/passport-setup');


app.set("view engine",'ejs');


app.get('/login',(req,res)=>{
    res.render('login');
});

app.get('/google',passport.authenticate('google',{
    scope: ['profile']
}));

app.get('/google/callback',(req,res)=>{
    res.send("callback comes here");
});

app.get('/logout',(req,res)=>{
    res.send("logging out"); 
});
app.get("/",function(req,res){
    res.render("home");
});

app.listen(port);