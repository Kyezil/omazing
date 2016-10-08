import { Meteor } from 'meteor/meteor';
import http from 'http';
import socket_io from 'socket.io';
import { Game, Player } from '/libs/models';

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
      game.addPlayer({ player });
      this.emit('create player', { player });
      console.log(game.players.map((el) => el.id));
    })
    client.on('disconnect', function() {
      for (let i = 0; i < game.players.length; i++) {
        const player = game.players[i];
        if (player.id == this.id) {
          console.log('disconnected: ' + this.id);
          game.players.splice(i, 1);
          console.log(game.players.map((el) => el.id));
        }
      }
    })
  });

  try {
    server.listen(PORT);
  } catch (e) {
    console.error(e);
  }
});
