var path = require('path');
var fs = require('fs');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, '../../server')));

app.get('/', function (req, res) {
	res.sendFile(path.resolve('../../server/index.html'));
});

app.listen(8000, function () {
	console.log('running at localhost: 8000');
});
