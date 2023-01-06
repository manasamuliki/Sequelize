
// Import product, review controllers
const productController = require('../controllers/productController.js')
const reviewController = require('../controllers/reviewController.js')

// Router

const router = require('express').Router()

// Using the routers

router.post('/addProduct', productController.addProduct)

router.get('/allProducts', productController.getAllProducts)

// Review url and controller

router.post('/addReview', reviewController.addReview)

router.get('/allReviews', reviewController.getAllReviews)

// get product reviews
router.get('/getProductReviews', productController.getProductReviews)



// product router
router.get('/:id', productController.getOneProduct)

router.put('/:id', productController.updateProduct)

router.delete('/:id', productController.deleteProduct)

module.exports = router

