import Bullet from './Bullet';

class Player extends createjs.Shape {
  constructor({ id, x, y, color }, graphic) {
  	super(new createjs.Graphics().beginFill(color).drawCircle(0,0,10)).setBounds(x-10, y-10, 20, 20);
    this.id = id;
    this.color = color;
    this.x = x;
    this.y = y;
    this.velx = 0;
    this.vely = 0;
    this.fireDelay = 1000;
    this.lastFiredTimestamp = 0;
  }
  setPos({x, y}) {
  	if (x != undefined) this.x = x;
  	if (y != undefined) this.y = y;
    super.setBounds(x-10, y-10, 20, 20);
  }
  fireBullet(angle) {
    return new Bullet({ playerId: this.id, x: this.x, y: this.y, color: this.color, angle })
  }
}

export default Player;
