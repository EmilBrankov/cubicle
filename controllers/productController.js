const { Router } = require("express");
const productService = require('../services/productService');
const accessoryService = require('../services/accessoryService');
const { validateProduct } = require('./helpers/productHelpers')
const router = Router();

router.get('/', (req, res) => {
    productService.getAll(req.query)
    .then(products => {
        res.render('home', { title: 'Home', products });
    })
    .catch(() => res.status(500).end());

});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' })
});

router.post('/create', validateProduct, (req, res) => {
    productService.create(req.body)
    .then(() => res.redirect('/products'))
    .catch(() => res.status(500).end());

});


router.get('/details/:id', async(req, res) => {

    let one = await productService.getOneWithAccessories(req.params.id);


    res.render('details', { title: 'Product Details', one })
});

router.get('/:id/attach', async (req, res) => {
    let one = await productService.getOne(req.params.id);
    let accessories = await accessoryService.getAllUnattached(one.accessories);

    res.render('attachAccessory', {one, accessories})
})

router.post('/:id/attach', (req, res) => {
    productService.attachAccessory(req.params.id, req.body.accessory)
        .then(() => res.redirect(`/products/details/${req.params.id}`))
})

module.exports = router;