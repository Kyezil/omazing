import { Player } from '/libs/models';

// Hack https://github.com/socketio/socket.io-client/issues/961
import Response from 'meteor-node-stubs/node_modules/http-browserify/lib/response';
if (!Response.prototype.setEncoding) {
  Response.prototype.setEncoding = function(encoding) {
    // do nothing
  }
}

let localPlayer;
let remotePlayers = [];

// Socket io client
let socket = require('socket.io-client')('http://890f20ac.ngrok.io');

socket.on('connect', function onConnect() {
  console.log('connected');
  this.emit('new player');
});

socket.on('disconnect', function onDisconnect() {
  console.log('disconnected');
});

socket.on('create player', function onCreatePlayer({ player }) {
  localPlayer = player;
  console.log(player);
});

socket.on('move', function onMovePlayer({ x, y }) {
  localPlayer.x = x;
  localPlayer.y = y;
  console.log('x: ' + x + ', y: ' + y);
});
