const Furniture = require('../Models/Furniture')

exports.getAll = (ownerId) => {
    let query = Furniture.find();
    if(ownerId){
        query = Furniture.find({_ownerId: ownerId})
    }
    return Furniture.find(query)
 } 

exports.create = (furnitureData) => Furniture.create(furnitureData);

exports.getOne = (furnitureId) => Furniture.findById(furnitureId);

exports.edit = (furnitureId, furnitureData) => Furniture.findByIdAndUpdate(furnitureId, furnitureData);

exports.delete = (furnitureId) => Furniture.findByIdAndDelete(furnitureId);