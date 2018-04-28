const express = require('express');
const bodyParser = require("body-parser"); 
const cors = require('cors');

const app = express();
app.use(cors());


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

module.exports ={
    app
}