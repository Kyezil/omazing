// Hack https://github.com/socketio/socket.io-client/issues/961
import Response from 'meteor-node-stubs/node_modules/http-browserify/lib/response';
if (!Response.prototype.setEncoding) {
  Response.prototype.setEncoding = function(encoding) {
    // do nothing
  }
}

// Socket io client
socket = require('socket.io-client')('http://e2ff52ae.ngrok.io');

socket.on('connect', function onConnect() {
  console.log('connected');
  this.emit('new player');
});

socket.on('disconnect', function onDisconnect() {
  console.log('disconnected');
});

socket.on('local player', function onCreatePlayer({ player }) {
  localPlayer = player;
  console.log(player);
});

socket.on('player moved', function onMovePlayer({ id, x, y }) {
  console.log('player moved: ', id, x, y);
  if (localPlayer.id == id) {
    localPlayer.x = x;
    localPlayer.y = y;
    console.log('x: ' + x + ', y: ' + y);
  } else {
    for (const remotePlayer of remotePlayers) {
      if (remotePlayer.id == id) {
        remotePlayer.x = x;
        remotePlayer.y = y;
      }
    }
  }
});
