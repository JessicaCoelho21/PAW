const createProduct = (req, res) => {
    return {}
}

const getAllProducts = (req, res) => {
    res.send([])
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