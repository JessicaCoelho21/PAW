const express = require('express');
const url = require('url');
const fs = require('fs');

const app = express();

app.get('/*', function(req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;

    console.log("Foi pedido: " + filename);
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });

            return res.end("404 Not Found");
        }

        //res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data);

        return res.end();
    });
});

app.listen(3000);