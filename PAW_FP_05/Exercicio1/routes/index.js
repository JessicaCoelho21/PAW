const express = require("express")
const router = express.Router()
let fs = require("fs")
const path = require('path')

router.get("/", (req, res) => {
    const dbPath = path.resolve('db', 'reviews.json')
    const dataRaw = fs.readFileSync(dbPath) || '[]'
    const data = JSON.parse(dataRaw.toString())

    res.render("pages/homepage", { list: data.reverse() })
})

router.post("/", (req, res) => {
    const dbPath = path.resolve('db', 'reviews.json')
    const dataRaw = fs.readFileSync(dbPath) || '[]'
    const data = JSON.parse(dataRaw.toString())
    data.push(req.body)
    fs.writeFileSync(dbPath, JSON.stringify(data))

    res.render("pages/review", {
        description: req.body.description,
        name: req.body.name,
        email: req.body.email,
        book: req.body.book,
        read: req.body.read,
    })
})

module.exports = router