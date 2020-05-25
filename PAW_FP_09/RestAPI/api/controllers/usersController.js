const User = require('../models/User')
const Product = require('../models/Product')

const createUser = async(req, res) => {
    const userData = req.body
    const result = await new User(userData).save()
    res.send(result)
}

const getAllUsers = async(req, res) => {
    const userList = await User.find().populate('products')
    res.send(userList)
}

const getUserById = async(req, res) => {
    try {
        const user = await User
            .findById(req.params.userId)
            .catch((e) => {
                return null
            })
        res.send(user)
    } catch (e) {
        console.error(e)
        res.status(404)
        res.send(null)
    }
}

const getUserProducts = async(req, res) => {
    const productList = await Product.find({ "user": req.params.userId })
    res.send(productList)
}

const updateUser = async(req, res, next) => {
    console.log("User set by setUserById", req.user)
    User.findByIdAndUpdate(
        req.params.userId,
        req.body, { new: true },

        function(err, user) {
            if (err) {
                next(err)
            } else {
                res.json(user)
            }
        }
    )
}

const deleteUser = async(req, res) => {
    const deleteUser = await User.findByIdAndRemove(req.params.userId)
    res.send(deleteUser)
}

const setUserById = async(req, _, next) => {
    try {
        const user = await User
            .findById(req.params.userId)
            .catch((e) => {
                return {}
            })

        if (user) {
            req.user = user
            next()
        } else {
            next(new Error('not found'))
        }
    } catch (e) {
        next(e)
    }
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    getUserProducts,
    updateUser,
    deleteUser,
    setUserById
}