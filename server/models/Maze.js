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
		this.roomExtraSize = -2;
		this.windingPercent = 0;
		this.numRoomTries = 20;
	}
	addRooms(regions) {
		const rooms = [];
		for (let i = 0; i < this.numRoomTries; ++i) {
			const size = rngRange(1, 3+this.roomExtraSize)*2 + 1;
			const rectangularity = rngRange(0, 1 + size/2)*2;
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
	generateMaze() {
		const regs = Array.apply(null, Array(this.size.n)).map(Number.prototype.valueOf, -1);
		const regions = regs.map((i) => regs.slice());
		this.addRooms(regions);
		this.printMatrix(regions);
		return regions;
	}
	printMatrix(regions) {
		for (let i = 0; i < this.size.n; ++i) {
			let str = "";
			for (let j = 0; j < this.size.m; ++j) {
				if (regions[i][j] == 0) str += '.';
				else str += '@';
			}
			console.log(str);
		}
	}
}

