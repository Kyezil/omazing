import Bullet from './Bullet';

class Player extends createjs.Shape {
  constructor({ id, x, y, color }, graphic) {
  	super(new createjs.Graphics().beginFill(color).drawCircle(0,0,10));
    this.id = id;
    this.color = color;
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 20;
    this.velx = 0;
    this.vely = 0;
    this.fireDelay = 1000;
    this.lastFiredTimestamp = 0;
  }
  bounds() {
    return {
      x: this.x-this.width/2,
      y: this.y-this.height/2,
      width: this.width,
      height: this.height
    }
  }
  setPos({x, y}) {
  	if (x != undefined) this.x = x;
  	if (y != undefined) this.y = y;
    super.setBounds(x-10, y-10, 20, 20);
  }
  fireBullet(angle) {
    return new Bullet({ playerId: this.id, x: this.x, y: this.y, color: this.color, angle })
  }
  collidesWith(object) {
    if (Math.abs(object.bounds().x - this.bounds().x)*2 <= (this.bounds().width + object.bounds().width)
    && Math.abs(object.bounds().y - this.bounds().y)*2 <= (this.bounds().height + object.bounds().height)) {
      return true;
    }
    return false;
  }
}

export default Player;
