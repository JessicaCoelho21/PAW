require('dotenv').config()

const express = require('express')
const { parse } = require('url');
const { parse: parseQuery } = require('querystring')
const fs = require('fs');
const uuidv4 = require('uuid/v4');
const read = require('./myReader');

const PORT = process.env.PORT || 3000
const app = express();

app.use(express.static('view'));
app.use(express.static('Results'));

//Submit and create file with key
app.get('/submission', (req, res) => {

    const q = parse(req.url);
    const query = parseQuery(q.query);

    let data = `{"name":" ${query.name}",
    "age":" ${query.age}",
    "postalCode": ${query.pCode},
    "foodQuality":" ${query.foodQ}",
    "price":" ${query.priceQ}",
    "serviceQuality":" ${query.serviceQ}" `

    const key = uuidv4();

    fs.writeFile(`./Results/${key}.txt`, data, function(err) {
        if (err) {
            throw err;
        }

        console.log('New file');
    });

    res.send(key);
});

//consult results and display
app.get('/consult', (req, res) => {

    const q = parse(req.url);
    const query = parseQuery(q.query);

    read(`./Results/${query.key}.txt`)
        .then((data) => {
            const obj = JSON.parse(data);
            res.send(`
             			<!DOCTYPE html>
                        <html>
                         
            			<head>
             				<meta charset="UTF-8">
            				<meta name="viewport" content="width=device-width, initial-scale=1.0">
             				<title>Formulário de Satisfação do Restaurante X</title>
                         </head>
                         
             			<body>
                             <h1>Opinião de ${obj.name} sobre o nosso estabelecimento</h1>
                             <p>Nome: ${obj.name}</p>
                             <p>Idade: ${obj.age}</p>
                             <p>Código Postal: ${obj.postCode}</p>
                             <p>Qualidade da comida: ${obj.foodQuality}</p>
                             <p>O preço foi adequado à comida servida?: ${obj.price}</p>
                             <p>Qualidade do serviço: ${obj.serviceQuality} </p>
             			</body>
                        </html> `);
        })

    .catch((err) => {
        console.log(err);
        var html = fs.readFileSync('./view/pages/404.html', 'utf8')
        res.send(html)
    })
})

app.listen(PORT, () => {
    console.log('O servidor arrancou: http://127.0.0.1:5000/');
});