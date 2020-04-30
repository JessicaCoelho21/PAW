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

const getProductById = (req, res) => {
    res.send({
        id: req.params.id
    })
}

const updateProduct = (req, res) => {
    return {
        id: req.params.id
    }
}

const deleteProduct = (req, res) => {
    return {
        id: req.params.id
    }
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
}