const Furniture = require('../Models/Furniture')

exports.getAll = () => Furniture.find();

exports.create = (furnitureData) => Furniture.create(furnitureData);