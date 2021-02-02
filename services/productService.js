const Cube = require('../models/Cube');
const productData = require('../data/productData');
const Accessory = require('../models/Accessory');


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

function getOne(id) {
    return Cube.findById(id).lean();
}

function create(data) {

    let cube = new Cube(data);
    return cube.save();
}

async function attachAccessory(id, accessoryId) {

    let product = await Cube.findById(id);
    let accessory = await Accessory.findById(accessoryId);

    product.accessories.push(accessory);
    console.log(product);
    return product.save();

}

function getOneWithAccessories(id) {
    return Cube.findById(id)
        .populate('accessories')
        .lean();
}

module.exports = {
    create,
    getAll,
    getOne,
    getOneWithAccessories,
    attachAccessory,

};