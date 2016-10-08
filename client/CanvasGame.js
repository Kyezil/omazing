import createjs from 'createjs-easeljs';

export class CanvasGame {
	constructor(canvas) {
		window.createjs = createjs;
		this.stage = new createjs.Stage(canvas)
		createjs.Ticker.addEventListener(this.onTick);
		this.onResize();
	}
	onTick() {
		this.stage.update();
	}
	onResize(event) {
		this.stage.canvas.width = window.innerWidth;
		this.stage.canvas.height = window.innerHeight;
	}
}
