/**************************************************
** GAME KEYBOARD CLASS
**************************************************/
const Keys = function(up, left, right, down) {
	var up = up || false,
		left = left || false,
		right = right || false,
		down = down || false;

	var onKeyDown = function(e) {
		var that = this,
			c = e.which;
		switch (c) {
			// Controls
			case 72: // h
			case 65: // a
			case 37: // Left
				that.left = true;
				break;
			case 75: // k
			case 87: // w
			case 38: // Up
				that.up = true;
				break;
			case 76: // l
			case 68: // d
			case 39: // Right
				that.right = true; // Will take priority over the left key
				break;
			case 74: // j
			case 83: // s
			case 40: // Down
				that.down = true;
				break;
		};
	};

	var onKeyUp = function(e) {
		var that = this,
			c = e.which;
		switch (c) {
			case 72: // h
			case 65: // a
			case 37: // Left
				that.left = false;
				break;
			case 75: // k
			case 87: // w
			case 38: // Up
				that.up = false;
				break;
			case 76: // l
			case 68: // d
			case 39: // Right
				that.right = false;
				break;
			case 74: // j
			case 83: // s
			case 40: // Down
				that.down = false;
				break;
		};
	};

	var check = function(e) {
		return this.left || this.right || this.up || this.down;
	}

	return {
		up: up,
		left: left,
		right: right,
		down: down,
		onKeyDown: onKeyDown,
		onKeyUp: onKeyUp,
		check: check
	};
};

export default Keys;
