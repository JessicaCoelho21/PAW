const express = require("express")
const router = express.Router()
const path = require('path')
let fs = require("fs")

router.get("/", (req, res) => {
    const dbPath = path.resolve('db', 'reviews.json');
    const rev = JS0N.parse(fs.readFileSync(dbPath));

    res.render("pages/reviewEmailBook", { list: data.reverse() });
});

router.get('/:email/:book', (req, res) => {
    const dbPath = path.resolve('db', 'reviews.json');
    const rev = JS0N.parse(fs.readFileSync(dbPath));

    let index;
    const email = req.params.email;
    const book = req.params.book;

    for (let i = 0; i < reviews.length; i++) {
        if (reviews[i].email === email && reviews[i].book.replace(/\s/, '') === book.replace(/\s/, '')) {
            index = i;
            break;
        }
    }

    res.render('pages/details', { item: reviews[index] });
});

module.exports = router;