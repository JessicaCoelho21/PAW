const express = require("express")
const router = express.Router()
const fs = require("fs")
const path = require('path')
const multer = require('multer')

const upload = multer({ dest: path.resolve('public', 'images') })

function validation(req) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (typeof req.body.name !== 'string' /*|| req.body.name == null*/ ) {
        req.body.name.setCustomValidity('Name invalid')
    } else if (re.test(req.body.email) == false) { //Se o email não cumprir a variável re
        req.body.email.setCustomValidity('Email invalid')
    } else if (typeof req.body.book !== 'string' /*|| req.body.book == null*/ ) {
        req.body.book.setCustomValidity('Book invalid')
    } else if (typeof req.body.description !== 'string' /*|| req.body.description == null*/ ) {
        req.body.description.setCustomValidity('Description invalid')
    }
}

router.get("/", (req, res) => {
    const dbPath = path.resolve('db', 'reviews.json')
    const dataRaw = fs.readFileSync(dbPath) || '[]'
    const data = JSON.parse(dataRaw.toString())

    res.render("pages/homepage", { list: data.reverse() })
})

router.post("/", upload.single('image'), validation, (req, res) => {
    const dbPath = path.resolve('db', 'reviews.json')
    const dataRaw = fs.readFileSync(dbPath) || '[]'
    const data = JSON.parse(dataRaw.toString())

    const newData = [...data, {
        ...req.body,
        image: `/images/${ req.file.filename }`,
    }]

    //data.push(req.body)
    fs.writeFileSync(dbPath, JSON.stringify(newData))

    res.render("pages/review", {
        description: req.body.description,
        name: req.body.name,
        email: req.body.email,
        book: req.body.book,
        read: req.body.read,
        image: `/images/${req.file.filename}`
    })
})

module.exports = router