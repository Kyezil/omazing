class Bullet extends createjs.Shape {
  constructor({ playerId, x, y, angle, color, timestamp = Date.now() }) {
  	super(new createjs.Graphics().beginFill(color).drawCircle(0,0,5)).setBounds(x-5, y-5, 10, 10);
    this.playerId = playerId;
    this.color = color;
    this.x = x;
    this.y = y;
    this.startX = x;
    this.startY = y;
    this.angle = angle;
    this.timestamp = timestamp;
    this.speed = 300;
  }
}

export default Bullet;
