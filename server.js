var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');


app.use(express.static(__dirname+'/public'));


app.use(errorHandler);
function errorHandler(err,req,res,next){
    console.log(err.stack);
    res.status(500).send('Something broke!!');
}



app.listen(3000);