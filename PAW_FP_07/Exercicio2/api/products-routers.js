const express = require('express')

const productsController = require('./controllers/productController')

const productRouter = express.Router()

productRouter.get('/', productsController.getAllProducts)

productRouter.get('/:productID', productsController.getProductById)

productRouter.post('/', productsController.createProduct)

productRouter.put('/:productId', productsController.updateProduct)

productRouter.delete('/:productId', productsController.deleteProduct)

// this will set the product on req.product - for any route that contains :productId
productRouter.param('productId', productsController.setProductById)

module.exports = productRouter