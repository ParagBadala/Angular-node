var http = require('http');
var express = require('express');
var parser = require('body-parser');
var exp = express();
var fs = require('fs');
var cors = require('cors');
var MongoClient = require('mongodb').MongoClient;
var dataS = require('./data.json')

exp.get("/rest/api/load",cors(),(req,res)=>{
    console.log('Load Invoked');
   // res.writeHead(200,{'content-Type':'text/json'});  
    //res.write("{msg:'Give Some Rest To the World'}"); 
   res.send({msg:'Give Some Rest To the World'});
   res.end();

   /***************Read from Database**************/

   MongoClient.connect('mongodb://localhost:27017/test',function(err,dbvar){
        if(err) throw err
        var coll = dbvar.db('test')
        coll.collection('parag').find({}).toArray(function(err,result){
            if(err) throw err;
            var dbData = result;
            fs.writeFileSync('data.json',JSON.stringify(dbData))
            console.log("1 document inserted");
            dbvar.close();
        });
        dbvar.close();
    });

});

/****Another way to create a url and then use get or post*****/
exp.route("/rest/api/get",cors()).get((req,res)=>{
    console.log("Get Invoked");
    res.send(JSON.stringify(dataS));
});

exp.use(parser.json());

exp.route("/rest/api/post",cors()).post((req,res)=>{
    console.log(req.body);
    //fs.writeFileSync('demo.json',JSON.stringify(req.body));
    fs.appendFileSync('demo.json',JSON.stringify(req.body))
    res.status(201).send(req.body);

    /*MongoClient.connect('mongodb://localhost:27017/test',function(err,dbvar){
        if(err) throw err
        var coll = dbvar.db('test')
        coll.collection('parag').insert(req.body,true,function(err,res){
            if(err) throw err;
            console.log("1 document inserted");
            dbvar.close();
        });
        dbvar.close();
    })*/


    /*******create Operation *************/

    MongoClient.connect('mongodb://localhost:27017/test',function(err,dbvar){
        if(err) throw err
        var coll = dbvar.db('test')
        coll.collection('parag').insertMany(dataS,true,function(err,res){
            if(err) throw err;
            console.log("1 document inserted");
            dbvar.close();
        });
        dbvar.close();
    });
});

exp.route("/rest/api/get/:name",cors()).get((req,res)=>{
    res.send("Hello World"+req.params['name'])
})

exp.use(cors()).listen(3001,()=>console.log("Running"))

