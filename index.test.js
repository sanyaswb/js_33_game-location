const canMove = require('./index');
const solution = require('./system/solution');
const { getRandomInt } = require('./system/environment');
const { locations } = require('./assets/locations');

test('Функция должна вернуть булиновое значение', () => {
	const res = canMove(locations[0].matrix, locations[0].actorCoordinates, 'left');

	expect(typeof res).toBe('boolean');
});

test('Auto: random outcomes', () => {
	for (let i = 0; i < locations.length; i++) {
		const possibleDirections = ['left', 'right', 'up', 'down'];
		const { matrix, actorCoordinates } = locations[i];
		const direction = possibleDirections[getRandomInt(0, possibleDirections.length - 1)];

		const solutionResult = solution(matrix, actorCoordinates, direction);
		const userResult = canMove(matrix, actorCoordinates, direction);

		expect(userResult).toBe(solutionResult);
	}
});