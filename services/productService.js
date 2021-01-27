const uniqid = require('uniqid');
const Cube = require('../models/Cube');

function create(data) {

    let cube = new Cube(
        uniqid(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel
    );

    console.log(cube);
}

module.exports = {

    create

};