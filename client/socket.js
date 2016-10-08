// Hack https://github.com/socketio/socket.io-client/issues/961
import Response from 'meteor-node-stubs/node_modules/http-browserify/lib/response';
if (!Response.prototype.setEncoding) {
  Response.prototype.setEncoding = function(encoding) {
    // do nothing
  }
}

// Socket io client
socket = require('socket.io-client')('http://c89eff27.ngrok.io');

socket.on('connect', function onConnect() {
  console.log('connected');
  this.emit('new player');
});

socket.on('disconnect', function onDisconnect() {
  console.log('disconnected');
});

socket.on('register local player', function onLocalPlayer(player) {
  game.registerLocalPlayer(player);
});

socket.on('register remote player', function onRemotePlayer(player) {
  game.registerRemotePlayer(player);
})

socket.on('player moved', function onMovePlayer({ id, x, y }) {
  console.log('player moved: ', id, x, y);
  if (socket.id == id) {
    game.moveLocalPlayer({ x, y });
    console.log('x: ' + x + ', y: ' + y);
  } else {
    game.moveRemotePlayer({ id, x, y });
  }
});
