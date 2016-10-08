import { Meteor } from 'meteor/meteor';
import http from 'http';
import socket_io from 'socket.io';
import { Game, Player } from './models';

const PORT = 8080;

Meteor.startup(() => {
  const server = http.createServer();
  const io = socket_io(server);
  const game = new Game();

  io.on('connection', function(client) {
    client.on('new player', function() {
      console.log('new client: ' + this.id );
      const player = new Player({ id: this.id, x: 0, y: 0 });
      console.log(player);
      this.emit('register local player', player);
      this.emit('register remote players', game.players);
      this.broadcast.emit('register remote player', player)
      game.addPlayer(player);
      console.log(game.players);
    });
    client.on('disconnect', function() {
      for (let i = 0; i < game.players.length; i++) {
        const player = game.players[i];
        if (player.id == this.id) {
          console.log('disconnected: ' + this.id);
          game.players.splice(i, 1);
          this.broadcast.emit('remove player', player.id)
          console.log(game.players);
        }
      }
    });
    client.on('move player', function(keys) {
      // console.log('moving player ' + this.id);
      player = game.getPlayer(this.id);
      player.move(keys);
      data = { id: this.id, x: player.x, y: player.y };
      this.emit('player moved', data);
      this.broadcast.emit('player moved', data);
    });
    client.on('fire bullet', function(bullet) {
      player = game.getPlayer(bullet.playerId);
      if (player.lastFiredTimestamp < new Date() - player.fireDelay) {
        this.emit('bullet fired', bullet);
        this.broadcast.emit('bullet fired', bullet);
      }
    });
  });

  try {
    server.listen(PORT);
  } catch (e) {
    console.error(e);
  }
});
