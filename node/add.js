/*
exports.addData = function(){    
console.log("in Add Data");   
}

exports.getData=function(){
    console.log("In Get Data");
}
*/
/*
//writing exports only 1 time

var mydata={
addData : function(){    
    console.log("in Add Data");   
},

getData : function(){
    console.log("In Get Data");
}
}

module.exports = mydata;
*/
//======================Another Concept=================================
/*
var database=(function(){
var prodList = [];
var prodId,prodName,prodPrice;
var products=function(id,name,price){   
    this.prodId=id;
    this.prodName=name;
    this.prodPrice=price;
}
setData=function(prod){               //adding object to the array
    prodList.push(prod);
}
displayData=function(){
    for(x in prodList){
        console.log(prodList[x].prodId);
        console.log(prodList[x].prodName);
        console.log(prodList[x].prodPrice);
    }
};

SortPrice=function(){
    for(i=0;i<prodList.length;i++){
        for(j=0;j<prodList.length;j++){
            if(prodList[i].prodId<prodList[j].prodList){
                var temp =  prodList[i];
                prodList[i] = prodList[j];
                prodList[j] = temp;
            }
        }
    }
    
console.log("After Sorting");
displayData();
}

return{                               //giving alias name and returing to the add.js
    display:displayData,
    set:setData,
    prod:products,
    arrange:SortPrice
}
})();
module.exports = database;
*/


