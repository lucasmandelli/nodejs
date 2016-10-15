var ws = require('websocket').server;
var http = require('http');

var socket = new ws({
    httpServer: http.createServer().listen(3000)
});

socket.on('request', function(request) {
    var connection = request.accept(null, request.origin);

    console.log('Origin ->', request.origin);

    connection.on('message', function(message) {
        connection.sendUTF('Hello from sercer');
    });

    connection.on('close', function() {
        console.log('Connection is closed');
    });
});