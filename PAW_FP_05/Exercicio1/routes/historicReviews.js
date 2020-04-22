const express = require("express")
const router = express.Router()
const path = require('path')
const fs = require("fs")

router.get('/list', (req, res) => {
    const dbPath = path.resolve('db', 'reviews.json');
    const rev = JS0N.parse(fs.readFileSync(dbPath));

    res.render('pages/reviewEmailBook', { list: rev });
});

router.get('/:email/:book', (req, res) => {
    const dbPath = path.resolve('db', 'reviews.json')
    const info = fs.readFileSync(dbPath)
    const rev = JS0N.parse(info)

    let index
    const email = req.params.email
    const book = req.params.book

    for (let i = 0; i < rev.length; i++) {
        if (rev[i].email === email && rev[i].book.replace(/\s/, '') === book.replace(/\s/, '')) {
            index = i

            break;
        }
    }

    res.render('pages/details', { item: rev[index] })
});

module.exports = router