//npm run dev

const openweathermaps_key = "85ac8bb43b6886c27b768172c2cab870";

const express = require("express");
const url = require("url");
const fs = require("fs");
const fetch = require("node-fetch");
const { parse } = require('url')
const { parse: parseQuery } = require('querystring')

const app = express();

app.use(express.static("view"));

app.get('/daily', (req, res) => {
    const q = parse(req.url)
    const query = parseQuery(q.query)
    const { lat, lon } = query || {}
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openweathermaps_key}`
    fetch(url)
        .then((r) => r.json())
        .then((r) => {
            console.log(r)
            res.send(r)
        })
})


app.get('/forecast', (req, res) => {
    const q = parse(req.url)
    const query = parseQuery(q.query)
    const { lat, lon } = query || {}
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openweathermaps_key}`
    fetch(url)
        .then((r) => r.json())
        .then((r) => {
            console.log(r)
            res.send(r)
        })
})

app.listen(3000, () => {
    console.log("Servidor a correr em: http://localhost:3000");
});