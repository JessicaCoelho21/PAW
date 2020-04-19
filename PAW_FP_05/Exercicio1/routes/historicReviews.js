const express = require("express")
const router = express.Router()
let fs = require("fs")
let jsonfile = require("jsonfile")

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