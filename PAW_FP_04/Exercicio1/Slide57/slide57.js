const express = require('express');
const url = require('url');
const fs = require('fs');

const app = express();

app.get('/home', function(req, res) {
    fs.readFile('./slide57.html', function(err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
});

app.get('/resposta', function(req, res) {
    let parsed_url = url.parse(req.url, true);
    console.log(req.url);
    console.log(parsed_url.query.nome);
    console.log(parsed_url.query.idade);
    console.log(parsed_url.query.presente);
    res.send(`<h1> ${parsed_url.query.nome} foi processado! </h1>`);
});

app.listen(3000, () => {
    console.log('Servidor a correr em: http://localhost:3000');
});