const Cube = require('../models/Cube');
const productData = require('../data/productData');


async function getAll(query) {

    let result = await Cube.find({}).lean();

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

async function getOne(id) {
    let cube = await Cube.findById(id).lean();
    return cube;
}

function create(data) {

    let cube = new Cube(data);
    return cube.save();
}

module.exports = {
    create,
    getAll,
    getOne,

};