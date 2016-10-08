class Player {
  constructor({ id, x, y }) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.moveAmount = 10;
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