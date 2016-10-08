// Hack https://github.com/socketio/socket.io-client/issues/961
import Response from 'meteor-node-stubs/node_modules/http-browserify/lib/response';
if (!Response.prototype.setEncoding) {
  Response.prototype.setEncoding = function(encoding) {
    // do nothing
  }
}

// Socket io client
let socket = require('socket.io-client')(`http://a3d47b28.ngrok.io`);

socket.on('connect', function() {
  console.log('Client connected');
  this.emit('new player');
});
socket.on('disconnect', function() {
  console.log('Client disconnected');
});
