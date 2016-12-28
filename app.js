var express = require("express");
var hbs = require("hbs");
var fs = require("fs");

var app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

// app.use((req, res, next)=>{
//     var log = new Date().toString();

//     fs.appendFile("request.log", log + req.method + req.ip + "\n");
//     next();
// });
// app.use((req, res, next)=>{
//     res.send("website under development");
// });


app.get("/", function(req, res){

 res.render('index', {pageTitle: "index page"});
});
app.get("/about", function(req, res){

 res.send("about page");
});


app.listen(3000, "0.0.0.0", function(){
	console.log("server starting");
});