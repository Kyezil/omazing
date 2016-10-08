class Player {
  constructor({ id, x, y }) {
    this.id = id;
    this.x = x;
    this.y = y;
  }
  move(keyCode) {
    switch (keyCode) {
      case 37:
        this.x--;
        break;
      case 38:
        this.y++;
        break;
      case 39:
        this.x++;
        break;
      case 40:
        this.y--;
        break;
      default:
        break;
    }
  }
}

export default Player;
