import { Template } from 'meteor/templating';
import { CanvasGame } from './CanvasGame'
import { Keys, Player } from './models';

keys = new Keys();
localPlayer = {};
remotePlayers = [];

// function update() {
//   socket.emit('move player', keys);
//   setTimeout(update, 10);
// }

Template.canvas.onRendered(function canvasOnRendered() {
	const canvas = this.find('#js-canvas-container');
	window.game = this.game = new CanvasGame(canvas);
	window.addEventListener('resize', this.game.onResize.bind(this.game), false);

  $(window).on('keydown', function(event){
    if (localPlayer) {
      keys.onKeyDown(event);
      socket.emit('move player', keys);
    }
  });

  $(window).on('keyup', function(event){
    if (localPlayer) {
      keys.onKeyUp(event);
      socket.emit('move player', keys);
    }
  });
});
