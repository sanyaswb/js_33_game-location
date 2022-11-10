const { getRandomInt } = require("../system/environment");
const fs = require('fs');

const makeMatrix = () => {
	const matrixLength = getRandomInt(5, 32);
	const rowLength = getRandomInt(5, 32);

	const actorCoordinates = {
		x: getRandomInt(1, rowLength - 2),
		y: getRandomInt(1, matrixLength - 2)
	};

	const matrix = [];

	for (let i = 0; i < matrixLength; i++) {
		const row = [];

		for (let j = 0; j < rowLength; j++) {
			const rand = getRandomInt(1, 4);

			if (i === 0 || j === 0 || i === matrixLength - 1 || j === rowLength - 1) {
				row.push('B');
			} else if (actorCoordinates.x === j && actorCoordinates.y === i) {
				row.push('A');
			} else if (rand === 1) {
				row.push('O');
			} else {
				row.push('E');
			}
		}

		matrix.push(row);
	}

	return {matrix, actorCoordinates};
}

const makeFile = () => {
	let str = 'const locations = [\n\t';

	const amount = 100;

	for (let i = 0; i < amount; i++) {
		str += '{\n\t\t'

		const {matrix, actorCoordinates} = makeMatrix();

		str += 'matrix: [\n\t\t\t';

		for (let i = 0; i < matrix.length; i++) {
			const row = matrix[i];

			str += '[ ';

			for (let j = 0; j < row.length; j++) {
				const item = row[j];

				if (j !== row.length - 1) {
					str += '\'' + item + '\', ';
				} else {
					str += '\'' + item + '\'';
				}
			}

			if (i !== matrix.length - 1) {
				str += ' ],\n\t\t\t';
			} else {
				str += ' ]\n\t\t';
			}
		}

		str += '],\n\t\tactorCoordinates: {x: ' + actorCoordinates.x + ', y: ' + actorCoordinates.y + '}\n\t}';

		if (i === amount - 1) {
			str += '\n];';
		} else {
			str += ',\n\t'
		}
	}

	str += '\n\nmodule.exports = { locations };';

	fs.writeFile('assets/locations.js', new Uint8Array(Buffer.from(str)), (err) => {
		if (err) {
			throw err;
		}

		console.log('success');
	});
}

makeFile();