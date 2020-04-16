const express = require("express")
const router = express.Router()
let fs = require("fs")
let jsonfile = require("jsonfile")

router.get("/", (req, res) => {
    res.render("pages/homepage")
})

router.post("/", (req, res) => {
    let obj = {
        name: req.body.name,
        email: req.body.email,
        book: req.body.book,
        read: req.body.read,
        description: req.body.description
    }

    jsonfile.writeFileSync("reviews.json", obj, { flag: 'a' })

    res.render("pages/review", {
        description: req.body.description,
        name: req.body.name,
        email: req.body.email,
        book: req.body.book,
        read: req.body.read,
    })
})

module.exports = router