class Player extends createjs.Shape {
  constructor({ id, x, y, color}, graphic) {
  	super(graphic.beginFill(color));
    this.id = id;
    this.x = x;
    this.y = y;
    this.velx = 0;
    this.vely = 0;
  }
  setPos({x, y}) {
  	if (x != undefined) this.x = x;
  	if (y != undefined) this.y = y;
  }
}

export default Player;
