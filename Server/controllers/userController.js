const router = require('express').Router();
const userService = require('../services/userService')

router.post('/register', async(req, res) => {
    const userData = req.body
    const {_id, email, token} = await userService.register(userData)
    res.json({
        _id,
        email,
        accessToken: token,
    })
})



module.exports = router;
