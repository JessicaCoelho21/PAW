const express = require('express')

const PORT = process.env.PORT || 3000;
const app = express();
const indexRouter = require("./routes/index");
const reviewsRouter = require("./models/Reviews")
const historicReviewsRouter = require("./routes/historicReviews");

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

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

app

    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .set('view engine', 'ejs')
    .use('/', indexRouter)
    .use(express.static('public'))
    .use('/review', historicReviewsRouter)

.listen(PORT, () => {
    console.log("Servidor a correr em: http://localhost:3000")
})