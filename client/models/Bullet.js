class Bullet {
  constructor({ playerId, x, y, angle }) {
    this.playerId = playerId;
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.timestamp = new Date();
  }
}

export default Bullet;
