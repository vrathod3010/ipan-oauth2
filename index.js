const express = require('express');
const app = express();
var port = process.env.PORT || 3000;
const passport = require('passport');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');


// set view engine
app.set("view engine",'ejs');

app.use(passport.initialize());
app.use(passport.session());


mongoose.connect(keys.mongodb.dbURI,()=>{
    console.log("connceted to mongofb");
})


app.get('/login',(req,res)=>{
    res.render('login');
});

// app.get('/google',passport.authenticate('google',{
//     scope: ['profile']
// }));

// app.get('/google/callback',passport.authenticate('google'),(req,res)=>{
//     res.send(req.user);
// });

app.get('/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.get('/logout',(req,res)=>{
    res.send("logging out"); 
});
app.get("/",function(req,res){
    res.render("home");
});

app.listen(port);