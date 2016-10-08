import Player from './models/Player';

export class CanvasGame {
	constructor(canvas) {
		window.createjs = createjs;
		window.stage = this.stage = new createjs.Stage(canvas)
		this.tileSize = 20; // size in pixel
		this.nTiles = 100;
		this.pos = {x: 0, y: 0};
		this.size = this.tileSize * this.nTiles;
		this.remotePlayers = {};
		this.localPlayer = null;

		// player graphic
		this.playerShape = new createjs.Graphics();
		this.playerShape.beginFill('red');
		this.playerShape.drawCircle(0,0,10);

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
		this.container.x = this.stage.canvas.width/2 - this.localPlayer.x;
		this.container.y = this.stage.canvas.height/2 - this.localPlayer.y;
		this.container.width = Math.min(this.size, this.stage.canvas.width/2 + this.localPlayer.x);
		this.container.height = Math.min(this.size, this.stage.canvas.height/2 + this.localPlayer.y);

		this.map.graphics.clear();
		this.map.graphics.beginFill('#fff');
		this.map.graphics.drawRect(0,0,this.container.width, this.container.height);
		this.map.graphics.endFill();
	}
	onTick() {
		this.stage.update();
	}
	registerRemotePlayer(p) {
		const newPlayer = new Player(p, this.playerShape);
		this.remotePlayers[p.id] = newPlayer;
		this.container.addChild(newPlayer);
	}
	registerLocalPlayer(p) {
		this.localPlayer = new Player(p, this.playerShape);
		this.container.addChild(this.localPlayer);
		this.updateContainer();
	}
	removePlayer(id) {
		if (id != this.localPlayerId) {
			this.stage.removeChild(this.remotePlayers[id]);
			delete this.remotePlayers[id];
		}
	}
	moveRemotePlayer({id, x, y}) {
		if (this.remotePlayers.hasOwnProperty(id)) {
			this.remotePlayers[id].setPos({x, y});
		} else {
			this.registerRemotePlayer({id, x, y});
		}
	}
	moveLocalPlayer({x, y}) {
		this.localPlayer.setPos({x, y});
		this.updateContainer();
	}
	onResize(event) {
		this.stage.canvas.width = window.innerWidth;
		this.stage.canvas.height = window.innerHeight;

		this.bg.graphics.clear();
		this.bg.graphics.beginFill('#222').drawRect(0,0,this.stage.canvas.width, this.stage.canvas.height);

		if (this.localPlayer !== null)
			this.updateContainer();
	}
}
