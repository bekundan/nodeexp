var express = require('express');
var bodyparse =require('body-parser');

var hospitalrouter =express.Router();

hospitalrouter.use(bodyparse.json());

hospitalrouter.route('/').all((req,res,next)=>{
	res.statusCode=200;
	res.setHeader=('Content-type','text/html');
	next();
}).get((req,res,next)=>{

	res.end("Showing all hospital records");
}).post((req,res,next)=>{

	res.end("Create a new hospital data");
}).put((req,res,next)=>{

	res.end("Update new data");
}).delelte((req,res,next)=>{

	res.end("delelte all records data");
});


module.exports= hospitalrouter;
