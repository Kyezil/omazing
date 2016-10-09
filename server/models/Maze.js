function rngRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function oneIn(n) {
  return rngRange(0,n) === 0;
}

class Room {
  constructor({x, y, width, height}) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  overlaps(room) {
    return Math.abs(room.x - this.x)*2 <= (this.width + room.width) &&
            Math.abs(room.y - this.y)*2 <= (this.height + room.height);
  }
}

class Maze {
  constructor(n, m) {
    this.size = { n, m };
    this.extraConnectorChange = 20;
    this.roomExtraSize = 1;
    this.windingPercent = 0;
    this.numRoomTries = 20;
  }
  addRooms(regions) {
    const rooms = [];
    for (let i = 0; i < this.numRoomTries; ++i) {
      const size = rngRange(1, 3+this.roomExtraSize)*2 + 1;
      const rectangularity = rngRange(1, 1 + size/2)*3;
      let width = size;
      let height = size;
      if (oneIn(2)) width += rectangularity;
      else height += rectangularity;
      const x = rngRange(0,(this.size.n - width - 1)/2)*2 + 1;
      const y = rngRange(0,(this.size.m - height - 1)/2)*2 +1;
      const room = new Room({x, y, width, height});
      let overlaps = rooms.some((el) => el.overlaps(room));
      if (!overlaps) {
        rooms.push(room);
        for (let j = 0; j < room.width; ++j) {
          for (let k = 0; k < room.height; ++k){
            regions[j+x][k+y] = 0; // floor
          }
        }
      }
    }
  }
  fillMaze(regions) {
    for (let i = 1; i < this.size.n; i += 2) {
      for (let j = 1; j < this.size.m; j += 2) {
        if (regions[i][j] != -1) this.growMaze(regions, i, j);
      }
    }
  }
  growMaze(regions, i, j) {
    const cells = [];
    let lastDir = null;
    regions[i][j] = 1; // path
    cells.push({x: i, y: j});
    while (cells.length > 0) {
      const cell = cells[cells.length - 1];
      // compute possible directions
      const dirs = [];
      for (let i = -1; i <= 1; ++i) {
        for (let j = -1; j <= 1; ++j) {
          if (i == 0 || j == 0) {
            if (this.p_canCarve(regions, cell, i, j)) dirs.push({dx: i, dy: j});
          }
        }
      }
      // prefer carving in same direction if windy
      if (dirs.length > 0) {
        let dir;
        if (dirs.indexOf(lastDir) != -1 && rngRange(1,100) > this.windingPercent) dir = lastDir;
        else {
          const indexRandom = rngRange(0, dirs.length-1);
          dir = dirs[indexRandom];
        }
        const newCell = {x: cell.x + 2*dir.dx, y: cell.y + 2*dir.dy};
        regions[newCell.x][newCell.y] = regions[cell.x + dir.dx][cell.y + dir.dy] = 1;
        cells.push(newCell)
        lastDir = dir;
      } else { // no adjacent cells
        cells.pop();
        lastDir = null;
      }
    }
  }
  p_canCarve(regions, cell, dx, dy) {
    const outerCell = {x: cell.x + 3*dx, y: cell.y + 3*dy}; // if not out of the box
    if (outerCell.x < 0 || outerCell.y < 0 || outerCell.x >= this.size.n || outerCell.y >= this.size.m) return false;
    return (regions[cell.x + 2*dx][cell.y + 2*dy] == -1 && oneIn(1) == 1); // if its wall
  }
  connectRegions(regions) {

  }
  generateMaze() {
    const regs = Array.apply(null, Array(this.size.n)).map(Number.prototype.valueOf, -1);
    const regions = regs.map((i) => regs.slice());
    this.addRooms(regions);
    this.fillMaze(regions);
    //this.connectRegions(regions);
    this.printMatrix(regions);
    return regions;
  }
  printMatrix(regions) {
    for (let i = 0; i < this.size.n; ++i) {
      let str = "";
      for (let j = 0; j < this.size.m; ++j) {
        if (regions[i][j] == 0) str += '.';
        else if (regions[i][j] == 1) str += '.';
        else str += '@';
      }
      console.log(str);
    }
  }
}
