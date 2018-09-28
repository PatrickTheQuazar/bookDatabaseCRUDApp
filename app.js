var express = require('express');
var app = express();
app.set("view engine", "ejs");
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/index", function(req, res){
   res.render("books"); 
});

app.get("/index/new", function(req, res){
   res.render("new"); 
});

app.get("*", function(req, res){
    res.send("Uh oh! Page not found!");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("server has started!"); 
});