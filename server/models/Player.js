class Player {
  constructor({ id, x, y }) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.color = '#'+Math.floor(Math.random()*16777215).toString(16);
    this.moveAmount = 10;
    this.fireDelay = 5000;
    this.lastFiredTimestamp = 0;
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
