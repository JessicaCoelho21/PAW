const mongoose = require('mongoose')
require('./Product')

const userSchema = new mongoose.Schema({

    name: String,
    username: String,
    password: String,
    role: String,
    updated_at: { type: Date, default: Date.now }
})

userSchema.virtual('products', {
    ref: 'Product',
    localField: '_id',
    foreignField: 'user',
    justOne: false,
    match: { isActive: true }
})

userSchema.pre('save', function(next) {
    if (this.role !== "admin") {
        next()
    } else {
        throw new Error('Not valid')
    }
})

module.exports = mongoose.model('User', userSchema)