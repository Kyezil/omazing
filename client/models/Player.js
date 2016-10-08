class Player extends createjs.Shape {
  constructor({ id, x, y, color}, graphic) {
  	super(new createjs.Graphics().beginFill(color).drawCircle(0,0,10));
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
  move(keys) {
    var prevX = this.x, prevY = this.y;
    // Up key takes priority over down
    if (keys.up) {
      this.y -= this.moveAmount;
    } else if (keys.down) {
      this.y += this.moveAmount;
    };

    // Left key takes priority over right
    if (keys.left) {
      this.x -= this.moveAmount;
    } else if (keys.right) {
      this.x += this.moveAmount;
    };

    return (prevX != this.x || prevY != this.y) ? true : false;
  }
}

export default Player;
