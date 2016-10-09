class Bullet extends createjs.Shape {
  constructor({ playerId, x, y, angle, color, timestamp = Date.now() }) {
  	super(new createjs.Graphics().beginFill(color).drawCircle(0,0,5));
    this.playerId = playerId;
    this.color = color;
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 10;
    this.startX = x;
    this.startY = y;
    this.angle = angle;
    this.timestamp = timestamp;
    this.speed = 300;
  }
  bounds() {
    return {
      x: this.x-this.width/2,
      y: this.y-this.height/2,
      width: this.width,
      height: this.height
    }
  }
}

export default Bullet;
