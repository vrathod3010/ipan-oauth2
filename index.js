var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var authRouter = require('./routes/auth-routes');



app.set("view engine",'ejs');

app.use('/auth',authRouter);


app.get("/",function(req,res){
    res.render("home");
});

app.listen(port);