const Product = require('../models/Product')

const createProduct = async(req, res) => {
    const productData = req.body
    const result = await new Product(productData).save()
    res.send(result)
}

const getAllProducts = async(req, res) => {
    const productList = await Product.find()
    res.send(productList)
}

const getProductById = async(req, res) => {
    try {
        const product = await Product
            .findById(req.params.productId)
            .catch((e) => {
                return null
            })

        res.send(product)
    } catch (e) {
        console.error(e)
        res.status(404)
        res.send(null)
    }
}

const updateProduct = async(req, res) => {
    const oldProduct = await Product.findByIdAndUpdate(
        req.params.productId,
        req.body
    )

    const newProduct = await Product.findById(req.params.productId)

    res.send({
        old: oldProduct,
        new: newProduct
    })
}

const deleteProduct = async(req, res) => {
    const deleteProduct = await Product.findByIdAndRemove(req.params.productId)
    res.send(deleteProduct)
}

const setProductById = async(req, _, next) => {
    try {
        const product = await Product
            .findById(req.params.productId)
            .catch((e) => {
                return null
            })

        if (product) {
            req.product = product
            next()
        } else {
            next(new Error('not found'))
        }
    } catch (e) {
        next(e)
    }
}


module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    setProductById
}