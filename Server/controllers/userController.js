const router = require('express').Router();
const userService = require('../services/userService')

router.post('/register', async(req, res) => {
    const userData = req.body
    const result = await userService.register(userData)
    res.json(result)
})



module.exports = router;
