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

/*
fs.readFile('C:/Projetos/PAW/PAW/PAW_FP_05/Exercicio1/db/reviews.json', 'utf-8', (err, jsonString) => {
    if (err) {
        console.log("File read failed: ", err);
    }

    //console.log('File data: ', jsonString);
    const review = JSON.parse(jsonString);

    for (let i = 0; i < review.length; i++) {
        console.log("Review from ", review[i].email, ": ", review[i].description);
    }
});
*/