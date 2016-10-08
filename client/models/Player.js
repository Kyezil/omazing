import Bullet from './Bullet';

class Player extends createjs.Shape {
  constructor({ id, x, y, color }, graphic) {
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
  fireBullet(angle) {
    socket.emit('fire bullet', new Bullet({ playerId: this.id, x: this.x, y: this.y, angle}));
  }
}

export default Player;
