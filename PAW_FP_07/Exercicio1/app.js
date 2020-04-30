require('dotenv').config()
const express = require('express')

const apiRouter = require('./api/models')

const app = express()

//Object destructuring ES6
const {
    PORT = 3000
} = process.env

app.use(express.json())

//app.use(apiRouter)
app.use('/api', apiRouter)

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
})