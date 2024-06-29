const router = require('express').Router();
const qs = require('querystring')
const furnitureService = require('../services/funitureService');

router.get('/', async(req, res) => {
    const query = qs.parse(req.query.where);
    const ownerId = query._ownerId?.replace(/"/g, '');
    const furnitures = await furnitureService.getAll(ownerId);
    res.json(furnitures)
});

router.post('/', async(req, res, next) => {
    const furnitureData = req.body;
    try {
        const furniture = await furnitureService.create({...furnitureData, owner: req.user._id});
        res.json(furniture); 
    } catch (err) {
        next(err);
    }
});

router.get('/:furnitureId', async(req, res) => {
    const furniture = await furnitureService.getOne(req.params.furnitureId);
    res.json(furniture)
});

router.put('/:furnitureId', async(req, res) => {
    const furnitureData = req.body
    const furniture = await furnitureService.edit(req.params.furnitureId, furnitureData);
    res.json(furniture)
});

router.delete('/:furnitureId', async(req, res) => {
    await furnitureService.delete(req.params.furnitureId);
    res.json({ok: true})
});

module.exports = router;