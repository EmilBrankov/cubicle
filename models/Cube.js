const Model = require('./Model');

class Cube extends Model{

    constructor(id, name, description, image, level) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.level = level;
    }
}

module.exports = Cube;