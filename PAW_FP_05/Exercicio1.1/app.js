const express = require('express')

const PORT = process.env.PORT || 3000
const app = express();
const indexRouter = require("./routes/index")

app

    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .set('view engine', 'ejs')
    .use("/", indexRouter)
    .use(express.static('public'))

.listen(PORT, () => {
    console.log("Servidor a correr em: http://localhost:3000")
})