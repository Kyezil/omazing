import { Template } from 'meteor/templating';
import { CanvasGame } from './CanvasGame'
import { Keys, Player } from './models';

keys = new Keys();
game = null

// function update() {
//   socket.emit('move player', keys);
//   setTimeout(update, 10);
// }

Template.canvas.onRendered(function canvasOnRendered() {
	const canvas = this.find('#js-canvas-container');
	window.game = game = new CanvasGame(canvas);;
	window.addEventListener('resize', game.onResize.bind(game), false);

  $(window).on('keydown', function(event){
    if (game) {
      keys.onKeyDown(event);
      socket.emit('move player', keys);
    }
  });

  $(window).on('keyup', function(event){
    if (game) {
      keys.onKeyUp(event);
      socket.emit('move player', keys);
    }
  });
});
