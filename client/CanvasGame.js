export class CanvasGame {
	constructor(canvas) {
		window.createjs = createjs;
		window.stage = this.stage = new createjs.Stage(canvas)
		this.tileSize = 20; // size in pixel
		this.numTiles = 100;
		createjs.Ticker.addEventListener('tick', this.onTick.bind(this));
		this.createBackground()
		this.onResize();
	}
	createBackground() {
		this.bg = new createjs.Shape();
		this.stage.addChild(this.bg);
	}
	onTick() {
		this.stage.update();
	}
	onResize(event) {
		this.stage.canvas.width = window.innerWidth;
		this.stage.canvas.height = window.innerHeight;
		this.center = {
			x: this.stage
		}
		this.bg.graphics.clear();
		this.bg.graphics.beginFill('#222').drawRect(0,0,this.stage.canvas.width, this.stage.canvas.height);
	}
}
