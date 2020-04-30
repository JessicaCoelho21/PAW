const express = require('express')

const productsController = require('./controllers/productController')

const productRouter = express.Router()

productRouter.get('/', productsController.getAllProducts)

productRouter.get('/:productID', productsController.getProductById)

productRouter.post('/', productsController.createProduct)

productRouter.put('/:productId', productsController.updateProduct)

productRouter.delete('/:productId', productsController.deleteProduct)

module.exports = productRouter