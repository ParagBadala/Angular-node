var http= require('http');
var express=require('express'); //using express we can work with any type of request i.e get,post,put,delete.... 
/*
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/plain'});
    res.write("hello world");
    res.end();
}).listen(3000);
*/


/****Another way of performing the above task***********/
var server = function(req,res){
    res.writeHead(200,{'content-Type':'text/plain'});  //its giving instruction to the browser that which type of data server is sending and it is the default value given know and 200 represent its successfull
    res.write("hello world How are you");  //this will write on browser 
    res.end();
}
http.createServer(server).listen(3002);     //creating a server and running it on port 3002

/*********GET REQUEST****************/
var exp=express();
var x=exp.get('/get',function(req,res){
    res.writeHead(200,{'content-Type':'text/html'});  
    res.write("<h1>Get Request</h1>");  
    res.end();
}).listen(3000)


/**************POST REQUEST********************/
var exp=express();
var x=exp.post('/submit',function(req,res){
    res.writeHead(200,{'content-Type':'text/html'});  
    res.write("<h1>Post Request</h1>");  
    res.end();
}).listen(3001)

/****************Querry String********************/
//reading from the url

var exp=express();
var x=exp.get('/get',function(req,res){
    res.writeHead(200,{'content-Type':'text/html'});  
    res.write("<h1>Querry String</h1>"+req.query.id);  
    res.end();
}).listen(3003)



