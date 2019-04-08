var express = require('express');
var app = express();
var port = process.env.PORT || 3000;




app.set("view engine",'ejs');


app.get('/login',(req,res)=>{
    res.render('login');
});

app.get('/google',(req,res)=>{
    res.send("logging with google");
});

app.get('/logout',(req,res)=>{
    res.send("logging out"); 
});
app.get("/",function(req,res){
    res.render("home");
});

app.listen(port);