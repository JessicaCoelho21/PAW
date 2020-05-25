const express = require('express')
const jwt = require('jsonwebtoken')
const sessionRouter = express.Router()

const {
    SESSION_EXPIRATION = 10000,
        JWT_SECRET = 'secret'
} = process.env

const decryptToken = async(token) => {
    return await jwt.verify(token, JWT_SECRET)
}

sessionRouter.post('/login', (req, res) => {
    const user = { id: '123', firstName: 'Edgar' }

    const token = jwt.sign(user, JWT_SECRET, {
        expiresIn: SESSION_EXPIRATION
    })

    res.cookie('x-authentication', token, {
        expires: new Date(Date.now() + SESSION_EXPIRATION),
        secure: false, // set to true if your using https
        httpOnly: true,
    })

    res.send('login')
})

sessionRouter.get('/me', async(req, res) => {
    try {
        const token = req.cookies['x-authentication']
        if (token) {
            const user = await decryptToken(token)
            res.json(user)
        } else {
            res.status(401)
            res.json(null)
        }
    } catch (e) {
        console.log(e.name, e.message)
        res.json(null)
    }
})

sessionRouter.post('/logout', (req, res) => {
    res.clearCookie('x-authentication')
    res.json(null)
})

module.exports = sessionRouter