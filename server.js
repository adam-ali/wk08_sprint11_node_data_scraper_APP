var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');


app.use(express.static(__dirname+'/public'));



app.use(errorHandler);
app.use(bodyParser.urlencoded({
    extended: true
}));
//////////////
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
/////////

function errorHandler(err,req,res,next){
    console.log(err.stack);
    res.status(500).send('Something broke!!');
}



app.listen(3000);