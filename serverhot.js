const express = require("express");
const path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());


var tables = [

];

var waitList = [

];


app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req,res){
res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req,res){
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function(req,res){
 return res.json(tables);
});

app.get("/api/waitList", function(req,res){
    return res.json(waitList);
   });

   app.post("/api/tables", function(req,res){
    var newCustomer = req.body;
    if(tables.length >= 5){
        waitList.push(newCustomer);
        console.log(waitList.length);
    }else{
        tables.push(newCustomer);
        res.json(newCustomer);
        console.log(tables.length);
    }
});



app.listen(PORT, function(){
console.log(`Skynet active listening on PORT ${PORT}`);
});





