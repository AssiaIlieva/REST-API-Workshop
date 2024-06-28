const router = require('express').Router();
const furnitureService = require('../services/funitureService');

router.get('/', async(req, res) => {
    const furnitures = await furnitureService.getAll();
    res.json(furnitures)
})

router.post('/', async(req, res) => {
    const furnitureData = req.body;
    const furniture = await furnitureService.create(furnitureData);
    res.json(furniture);
})



module.exports = router;