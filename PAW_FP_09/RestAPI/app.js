require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
var swaggerUi = require('swagger-ui-express')
var swaggerDocument = require('./swagger.json')

const cors = require('cors')

const apiRouter = require('./api')
const HomeRouter = require('./routes/home')

const app = express()

mongoose.Promise = global.Promise

// Object destructuring ES6
const {
    PORT = 3000,
        MONGO_DB_HOST = 'localhost',
        MONGO_BD_PORT = 27017,
        MONGO_DB_NAME = 'ProductDB'
} = process.env

mongoose
    .connect(
        `mongodb://${ MONGO_DB_HOST }:${ MONGO_BD_PORT }/${ MONGO_DB_NAME }`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        }
    )
    .then((mongoose) => {
        console.log('connected to mongo')
    })
    .catch(console.error)

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json())
app.use(HomeRouter)

//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/api', cors(), apiRouter)

app.listen(PORT, () => {
    console.log(`api doc on http://localhost:${PORT}/api-docs`)
    console.log(`Views on http://localhost:${PORT}/`)
    console.log(`API started on http://localhost:${PORT}/api`)
})