const { Router } = require("express");

const accesoryService = require('../services/accessoryService')
const router = Router();

router.get('/create', (req, res) => {
    res.render('createAccessory')
})

// Validata incoming data
router.post('/create', (req, res) => {
    accesoryService.create(req.body)
    .then(() => res.redirect('/products'))
    .catch(() => res.status(500).end());

})

module.exports = router;