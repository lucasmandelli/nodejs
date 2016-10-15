var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send('Hello from express-class');
});

app.get('/hello', function(req, res) {
    res.json({
        message: 'Router hello...'
    });
});

app.get('/hello/:name', function(req, res) {
    res.json({
        message: 'Router hello with param: ' + req.params.name
    });
});

app.listen(3000, function(){
    console.log('Started...');
});