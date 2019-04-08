var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get("/",function(req,res){
    res.send("welcome to the app on heroku");
});

app.listen(port);