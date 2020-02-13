var http =require('http');
var area =require('./area');
var express =require('express');

var hospitalsrout =require('./route/hospitalrecord');

var app=express();

app.use(express.static(__dirname+'/public'));
app.use('/hospitals',hospitalsrout);

app.listen(3000);	

console.log(area.function1(4,5));
console.log(area.function2(6,6));

module.exports =app;