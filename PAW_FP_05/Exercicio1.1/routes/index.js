const express = require("express")
const router = express.Router()
let fs = require("fs")
let jsonfile = require("jsonfile")

router.get("/", (req, res) => {
    res.render("pages/homepage")
})

router.post("/", (req, res) => {
    //let data = JSON.stringify(req.body)

    let obj = {
        name: req.body.name,
        email: req.body.email,
        book: req.body.book,
        read: req.body.read,
        notread: req.body.notread,
        description: req.body.description
    }

    jsonfile.writeFileSync("reviews.json", obj, { flag: 'a' })

    /*
    fs.writeFileSync("reviews.json", data, function(err) {
        if (err) {
            console.log(err);
        }
    })
    */

    res.render("pages/review", {
        description: req.body.description,
        name: req.body.name,
        email: req.body.email,
        book: req.body.book,
        read: req.body.read,
        notread: req.body.notread
    })
})

module.exports = router