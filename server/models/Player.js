const mazeM = JSON.parse("[[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,1,1,1,1,1,-1,1,1,1,-1,-1,-1,-1,-1,1,1,1,-1,1,-1,-1,-1,-1,-1,-1,-1,1,1,1,1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,1,1,1,1,-1,-1],[-1,-1,-1,1,-1,1,-1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,1,-1,-1,-1,-1],[-1,1,1,1,-1,1,1,1,1,1,1,1,-1,-1,-1,1,1,1,1,1,-1,-1,-1,-1,-1,1,1,1,-1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,1,1,1,-1,-1],[-1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,1,-1,-1],[-1,1,0,1,0,1,0,1,0,1,0,1,0,1,-1,1,-1,1,1,1,1,1,-1,1,1,1,1,1,1,1,-1,-1,-1,1,-1,1,-1,1,-1,-1,-1,-1,-1,1,1,1,-1,1,-1,-1],[-1,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,1,-1,1,-1,-1,-1,-1,-1,-1,-1,1,-1,1,-1,1,-1,-1,-1,1,-1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,-1,1,-1,-1],[-1,1,0,1,0,1,0,1,0,1,0,1,0,1,-1,1,1,1,-1,-1,-1,-1,-1,1,1,1,-1,1,-1,1,-1,1,1,1,1,1,1,1,-1,1,1,1,1,1,-1,1,-1,1,-1,-1],[-1,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,-1,-1,-1],[-1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,-1,1,-1,1,1,1,-1,1,1,1,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,-1,-1],[-1,0,0,0,0,0,0,0,0,0,0,1,0,0,-1,1,-1,-1,-1,1,-1,-1,-1,-1,-1,1,-1,1,-1,1,-1,-1,-1,1,-1,-1,-1,-1,-1,1,-1,1,-1,-1,-1,-1,-1,1,-1,-1],[-1,1,0,1,0,1,0,1,0,1,0,1,1,1,-1,1,-1,1,-1,1,1,1,1,1,-1,1,-1,1,-1,1,-1,1,1,1,-1,1,-1,1,1,1,-1,1,-1,1,-1,1,1,1,-1,-1],[-1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,1,-1,1,-1,-1,-1,1,-1,1,-1,-1,-1,1,-1,1,-1,1,-1,-1,-1,-1],[-1,1,1,1,-1,1,-1,1,-1,1,1,1,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,-1,1,1,1,1,1,1,1,1,1,-1,1,-1,1,1,1,-1,1,1,1,-1,1,-1,-1],[-1,-1,-1,1,-1,1,-1,1,-1,1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,-1,1,-1,1,-1,-1,-1,-1,-1,1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,1,-1,1,-1,-1,-1,1,-1,-1],[-1,1,1,1,-1,1,1,1,1,1,-1,1,1,1,1,1,-1,1,-1,1,-1,1,1,1,1,1,-1,1,1,1,1,1,1,1,-1,1,-1,1,1,1,-1,1,1,1,-1,1,-1,1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,-1,-1,1,-1,1,-1,-1,-1,1,-1,-1,-1,-1,-1,1,-1,-1,-1,-1,-1,1,-1,1,-1,-1],[-1,1,1,1,-1,1,-1,1,1,1,-1,1,-1,1,1,1,-1,1,1,1,-1,1,-1,1,-1,1,-1,1,-1,1,1,1,-1,1,-1,1,1,1,1,1,-1,1,1,1,1,1,1,1,-1,-1],[-1,-1,-1,1,-1,1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,1,-1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,1,1,1,-1,1,1,1,1,1,-1,1,1,1,1,1,1,1,-1,1,-1,1,1,1,-1,1,-1,1,1,1,-1,1,-1,1,-1,1,-1,1,1,1,1,1,-1,1,-1,1,-1,1,-1,-1],[-1,1,-1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,1,-1,1,-1,1,-1,1,-1,-1,-1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,-1,-1,1,-1,1,-1,1,-1,-1],[-1,1,1,1,1,1,1,1,1,1,-1,1,1,1,-1,1,-1,1,1,1,-1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,-1,1,-1,1,1,1,1,1,-1,1,1,1,-1,-1],[-1,1,-1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,1,-1,1,-1,1,-1,-1],[-1,1,-1,1,1,1,-1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,-1,1,1,1,-1,1,1,1,-1,1,-1,1,-1,1,1,1,-1,1,1,1,-1,1,-1,-1],[-1,-1,-1,1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,-1,-1,1,-1,1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,-1,-1,-1,1,-1,-1,-1,-1],[-1,1,1,1,1,1,-1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,-1,1,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,1,1,-1,1,1,1,-1,-1],[-1,1,-1,-1,-1,1,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,1,-1,-1,-1,1,-1,1,-1,1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,-1,-1],[-1,1,1,1,-1,1,-1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,-1,1,-1,1,1,1,-1,1,-1,1,-1,1,1,1,1,1,1,1,-1,1,1,1,-1,-1],[-1,-1,-1,1,-1,1,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,-1,-1,1,-1,-1,-1,1,-1,1,-1,-1,-1,1,-1,1,-1,-1,-1,1,-1,-1,-1,-1],[-1,1,1,1,-1,1,-1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,-1,1,1,1,-1,1,-1,1,-1,1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,-1],[-1,1,-1,-1,-1,1,-1,-1,-1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,1,-1,-1,-1,1,-1,1,-1,1,-1,1,-1,-1,-1,1,-1,-1],[-1,1,-1,1,1,1,1,1,-1,1,-1,1,-1,1,1,1,-1,1,-1,1,1,1,1,1,1,1,1,1,-1,1,1,1,1,1,1,1,1,1,-1,1,-1,1,-1,1,-1,1,1,1,-1,-1],[-1,1,-1,1,-1,1,-1,-1,-1,1,-1,1,-1,-1,-1,1,-1,1,-1,1,-1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,1,-1,1,-1,1,1,1,-1,1,1,1,1,1,1,1,1,1,-1,1,-1,1,1,1,-1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,-1,-1],[-1,1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,1,-1,-1,-1,1,-1,1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,-1,-1],[-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,-1,1,-1,1,1,1,-1,1,-1,-1,-1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,-1,-1],[-1,-1,-1,1,-1,1,-1,-1,-1,1,-1,1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,-1,-1],[-1,1,1,1,-1,1,1,1,-1,1,-1,1,-1,1,1,1,1,1,1,1,-1,1,-1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,-1,-1],[-1,-1,-1,1,-1,1,-1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,-1,-1],[-1,1,-1,1,1,1,-1,1,1,1,1,1,-1,1,0,1,0,1,0,1,1,1,1,1,-1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,-1,-1],[-1,1,-1,1,-1,-1,-1,-1,-1,1,-1,-1,-1,0,0,0,0,0,0,1,-1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,1,-1,1,1,1,-1,1,1,1,1,1,-1,1,0,1,0,1,0,1,-1,1,1,1,1,1,-1,1,1,1,-1,1,-1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,-1],[-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,-1,-1,1,-1,-1,-1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,1,-1,1,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1],[-1,1,1,1,-1,1,-1,1,-1,1,-1,1,1,1,-1,1,1,1,1,1,-1,1,1,1,1,1,1,1,-1,1,1,1,-1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,-1],[-1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,1,-1,1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1],[-1,1,1,1,1,1,-1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,-1,1,-1,1,-1,1,1,1,-1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,-1],[-1,-1,-1,1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,-1,1,-1,-1,-1,1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1],[-1,1,1,1,1,1,-1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,-1,1,1,1,1,1,-1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,-1],[-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]]");

tileSize = 25;
nTiles = 50;

isWall = function({ x, y }) {
	x = Math.floor(x/tileSize);
	y = Math.floor(y/tileSize);
	if (x < 0 || y < 0 || x >= nTiles || y >= nTiles) return false;
	return mazeM[x][y] == -1;
}

class Player {
  constructor({ id, x, y }) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.color = '#'+Math.floor(Math.random()*16777215).toString(16);
    this.moveAmount = 10;
    this.fireDelay = 1000;
    this.lastFiredTimestamp = 0;
  }
  move(keys) {
    var prevX = this.x, prevY = this.y;
    // Up key takes priority over down
    if (keys.up) {
      this.y -= this.moveAmount;
    } else if (keys.down) {
      this.y += this.moveAmount;
    }

    if (isWall({ x: prevX, y: this.y })) {
      this.y = prevY;
    }

    // Left key takes priority over right
    if (keys.left) {
      this.x -= this.moveAmount;
    } else if (keys.right) {
      this.x += this.moveAmount;
    }

    if (isWall({ x: this.x, y: prevY })) {
      this.x = prevX;
    }
    return (prevX != this.x || prevY != this.y) ? true : false;
  }
}

export default Player;
