const canMove = require('../index');
const {locations} = require('../assets/locations');

canMove(locations[0].matrix, locations[0].actorCoordinates, 'left');

