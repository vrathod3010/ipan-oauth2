var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var passport = require('passport');
var passportSetup = require('./config/passport-setup');
var mongoose = require('mongoose');
const keys = require('./config/keys');


app.set("view engine",'ejs');


mongoose.connect(keys.mongodb.dbURI,()=>{
    console.log("connceted to mongofb");
})


app.get('/login',(req,res)=>{
    res.render('login');
});

app.get('/google',passport.authenticate('google',{
    scope: ['profile']
}));

app.get('/google/callback',passport.authenticate('google'),(req,res)=>{
    res.send("callback comes here");
});

app.get('/logout',(req,res)=>{
    res.send("logging out"); 
});
app.get("/",function(req,res){
    res.render("home");
});

app.listen(port);