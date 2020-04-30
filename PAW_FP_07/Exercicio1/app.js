require('dotenv').config()
const express = require('express')
var mongoose = require('mongoose');

const apiRouter = require('./api')

const app = express()
mongoose.Promise = global.Promise

const MONGO_DB_HOST = process.env.MONGO_DB_HOST || 'localhost'
const MONGO_DB_PORT = process.env.MONGO_DB_PORT || 27017
const MONGO_DB_NAME = process.env.MONGO_DB_NAME || 'demo'

mongoose
    .connect(
        `mongodb://${ MONGO_DB_HOST }:${ MONGO_DB_PORT }/${ MONGO_DB_PORT }`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

.then((mongoose) => {
    console.log(mongoose.connections)
})

.catch(console.error)

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