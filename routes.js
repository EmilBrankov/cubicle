const { Router } = require('express');

const productController = require('./controllers/productController');
const accessoryController = require('./controllers/accessoryContoller');
const aboutController = require('./controllers/aboutController');

const router = Router();

router.use('/', aboutController)
router.use('/products', productController);
router.use('/accessories', accessoryController );
router.get('*', (req, res) => {
    res.render('404')
})


module.exports = router;