
/*
console.log("Welcome TO Node Js");

add.addData();
add.getData();
*/

/*
var add  = require('./add');
var p1 = new add.prod(100,"XYZ",123456);
var p2 = new add.prod(101,"ABC",654321);
var p3 = new add.prod(102,"DEF",321456);

add.set(p1);
add.set(p2);
add.set(p3);
add.display(); 
add.arrange();
*/

/*
//****************=========Buffer Concept============****************

//we need buffer in javascript becz javascript donot have byte concept it only understand string

var buff=new Buffer(18);  //creating buffer
buff.write("Capgemini")  //writing into the buffer
console.log(buff.toString()); //converting to string as toString() convert the buffer content into string format
console.log(buff.toJSON());  //converting the buffer input to JSON format
*/

//******************========Events Concept=======******************

var event = require('events');                  // core module 
var myevent = new event.EventEmitter();         //using EventEmitter() of events module

//registering an event  -- message 
myevent.on('message',function(msg,l){             //callback function taking the arg which is passed by myevent.emit()                 
    console.log("Event One raised with message : "+msg.id+" "+msg.name+l);
    setTimeout(function(){                         //proof of async call as nodejs is async as it not wait to complete the message event and in between only it call the message1 event
        console.log("After Set Timeout of 6 sec");
    },6000);
});

//registering an event  -- message1
myevent.on('message1',function(temp){                             
    console.log("Event Two raised with message : "+temp);
})

//raising an event
myevent.emit('message',{id:100,name:"XYZ"},"capgemini..");
myevent.emit('message1',"node js");









