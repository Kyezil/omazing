import { Template } from 'meteor/templating';
import { CanvasGame } from './CanvasGame'
import { Keys, Player } from './models';

keys = new Keys();
game = null;

function getCursorPosition(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    return { x, y };
}

Template.canvas.onRendered(function canvasOnRendered() {
  const canvas = this.find('#js-canvas-container');
  window.game = game = new CanvasGame(canvas);;
  window.addEventListener('resize', game.onResize.bind(game), false);

  $(window).on('keydown', function(event){
    if (game) {
      keys.onKeyDown(event);
    }
  });

  $(window).on('keyup', function(event){
    if (game) {
      keys.onKeyUp(event);
    }
  });
});

Template.canvas.events({
  'click': function(event, template) {
    pos = getCursorPosition(template.find('#js-canvas-container'), event);
    game.fireBullet(pos);
  }
})
