var express = require('express');
let bodyParser = require("body-parser"); 

var app = express();

// Use middlewares:
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports ={
    app
}