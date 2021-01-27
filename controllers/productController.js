const { Router } = require("express");
const productService = require('../services/productService');
const { validateProduct } = require('./helpers/productHelpers')
const router = Router();

router.get('/', (req, res) => {
    let products = productService.getAll();

    res.render('home', { title: 'Home', products });
});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' })
});

router.post('/create', validateProduct, (req, res) => {

    productService.create(req.body)
    res.redirect('/products')

});


router.get('/details/:id', (req, res) => {

    let one = productService.getOne(req.params.id)

    res.render('details', { title: 'Product Details', one })
})

module.exports = router;