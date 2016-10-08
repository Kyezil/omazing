export class CanvasGame {
	constructor(canvas) {
		window.createjs = createjs;
		window.stage = this.stage = new createjs.Stage(canvas)
		this.tileSize = 20; // size in pixel
		this.nTiles = 100;
		this.pos = {x: 0, y: 0};
		this.size = this.tileSize * this.nTiles;
		createjs.Ticker.addEventListener('tick', this.onTick.bind(this));
		this.createBackground();
		this.createContainer();
		this.onResize();
	}
	createBackground() {
		this.bg = new createjs.Shape();
		this.stage.addChild(this.bg);
	}
	createContainer() {
		this.container = new createjs.Container();
		this.stage.addChild(this.container);
		this.map = new createjs.Shape();
		this.container.addChild(this.map);
	}
	updateContainer() {
		this.container.x = this.stage.canvas.width/2 - this.pos.x;
		this.container.y = this.stage.canvas.height/2 - this.pos.y;
		this.container.width = Math.min(this.size, this.stage.canvas.width/2 + this.pos.x);
		this.container.height = Math.min(this.size, this.stage.canvas.height/2 + this.pos.y);

		this.map.graphics.clear();
		this.map.graphics.beginFill('#fff');
		this.map.graphics.drawRect(0,0,this.container.width, this.container.height);
		this.map.graphics.endFill();
	}
	onTick() {
		this.stage.update();
	}
	setPos({x, y}) {
		this.pos.x = x;
		this.pos.y = y;
		this.updateContainer();
	}
	onResize(event) {
		this.stage.canvas.width = window.innerWidth;
		this.stage.canvas.height = window.innerHeight;

		this.bg.graphics.clear();
		this.bg.graphics.beginFill('#222').drawRect(0,0,this.stage.canvas.width, this.stage.canvas.height);

		this.updateContainer();
	}
}
