function move(location, actorCoordinates, direction) {
	const y = actorCoordinates.y;
	const x = actorCoordinates.x;
	let move = 1;
	let noMove;
	let breaker = true;

	if (direction === 'left') {
		while (true) {
			if (location[y][x - move] === 'E') {
				move++;
			} else if (location[y][x - move] === 'B' && breaker) {
				noMove = 'border';
				move -= 1;
				breaker = false;
			} else if (location[y][x - move] === 'O' && breaker) {
				noMove = 'obstacle';
				move -= 1;
				breaker = false;
			} else if (move === 0){
				return 'We can\'t move because of ' + noMove;
			} else {
				move -= 1;
				return 'We can make ' + move + ' steps and will stop because of ' + noMove;
			}
		}

	} else if (direction === 'right') {
		while (true) {
			if (location[y][x + move] === 'E') {
				move++;
			} else if (location[y][x + move] === 'B' && breaker) {
				noMove = 'border';
				move -= 1;
				breaker = false;
			} else if (location[y][x + move] === 'O' && breaker) {
				noMove = 'obstacle';
				move -= 1;
				breaker = false;
			} else if (move === 0) {
				return 'We can\'t move because of ' + noMove;
			} else {
				move -= 1;
				return 'We can make ' + move + ' steps and will stop because of ' + noMove;
			}
		}

	} else if (direction === 'up') {
		while (true) {
			if (location[y - move][x] === 'E') {
				move++;
			} else if (location[y - move][x] === 'B' && breaker) {
				noMove = 'border';
				move -= 1;
				breaker = false;
			} else if (location[y - move][x] === 'O' && breaker) {
				noMove = 'obstacle';
				move -= 1;
				breaker = false;
			} else if (move === 0) {
				return 'We can\'t move because of ' + noMove;
			} else {
				move -= 1;
				return 'We can make ' + move + ' steps and will stop because of ' + noMove;
			}
		}

	} else if (direction === 'down') {
		while (true) {
			if (location[y + move][x] === 'E') {
				move++;
			} else if (location[y + move][x] === 'B' && breaker) {
				noMove = 'border';
				move -= 1;
				breaker = false;
			} else if (location[y + move][x] === 'O' && breaker) {
				noMove = 'obstacle';
				move -= 1;
				breaker = false;
			} else if (move === 0) {
				return 'We can\'t move because of ' + noMove;
			} else {
				move -= 1;
				return 'We can make ' + move + ' steps and will stop because of ' + noMove;
			}
		}
	}
}

module.exports = move;