var http = require('http');
var handle = require('./handle');

var server = http.createServer(handle);

require('console-log-hello-world');

server.listen(3000, function() {
    console.log('Server is listening at port 3000');
});


var events = require('events');
var emitter = new events.EventEmitter();

emitter.on('say12', say);

function say() {
    console.log('Im saying...');
}

emitter.emit('say12');