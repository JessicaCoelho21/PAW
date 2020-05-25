const express = require('express')
const productsRouter = express.Router()
const fetch = require('node-fetch')
const PORT = 3000

productsRouter.get('/', (req, res) => {
    fetch(`http://localhost:${PORT}/api/products`)
        .then((result) => result.json())
        .then((result) => {
            // console.log(result)
            res.render('../views/ListProduct.ejs', { products: result })
        })
})

module.exports = productsRouter