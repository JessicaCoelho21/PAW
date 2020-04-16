const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.render("pages/homepage")
})

router.post("/", (req, res) => {
    console.log(req.body)

    res.render("pages/review", {
        description: req.body.description,
        name: req.body.name,
        email: req.body.email,
        book: req.body.book,
        leu: req.body.read,
        naoleu: req.body.notread
    })
})

module.exports = router