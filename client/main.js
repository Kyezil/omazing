import { Template } from 'meteor/templating';
import { CanvasGame } from './CanvasGame'

Template.canvas.onRendered(function canvasOnRendered() {
	const canvas = this.find('#js-canvas-container');
	this.game = new CanvasGame(canvas);
	window.addEventListener('resize', this.game.onResize.bind(this.game), false);
});
