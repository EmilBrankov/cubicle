const Cube = require('../models/Cube');
const productData = require('../data/productData');


function getAll(query) {

    let result = productData.getAll();
    // let result = Cube.getAll();

    if (query.search) {
        result = result.filter(x => x.name.toLowerCase().includes(query.search));
    }
    if (query.from) {
        result = result.filter(x => Number(x.level) >= query.from);
    }
    if (query.to) {
        result = result.filter(x => Number(x.level) <= query.to);
    }
    return result;
}

function getOne(id) {
    // return Cube.getOne(id);
    return productData.getOne(id);
}

function create(data) {

    let cube = new Cube(data);

    // return productData.create(cube)
    return cube.save();
}

module.exports = {
    create,
    getAll,
    getOne,

};