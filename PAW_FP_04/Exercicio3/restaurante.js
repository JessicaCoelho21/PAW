require('dotenv').config()

const express = require('express')
const multer = require('multer')
const bodyParser = require('body-parser')

const fs = require('fs')
    // const { parse } = require('url')
    // const { parse: parseQuery } = require('querystring')

const PORT = process.env.PORT || 3000

// SET STORAGE
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function(req, file, cb) {
        req.uploadedFile = `${ file.originalname }`
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })
const app = express()

// app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// app.use((req, res, next) => {
// 	console.log('LOG:', req.url)
// 	next()
// })


app.use(express.static('public'))
app.use(express.static('uploads'))

// app.use((req, res, next) => {
// 	let data = ''
// 	req.on('data', (chunk) => {
// 		data += chunk
// 	})
// 	req.on('end', (chunk) => {
// 		const jsonData = parseQuery(data)
// 		req.jsonBody = jsonData
// 		next()
// 	})
// })

app.post('/test', (req, res) => {
    console.log(req.body)
})

app.post('/qualify', upload.single('photo'), (req, res) => {
    console.log(req.body)
    res.send(`
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Document</title>
		</head>
		<body>
			<div>Obrigado pelo seu vote de: ${ req.body.vote }</div>
			<img src="${ req.uploadedFile }" />
		</body>
		</html>
	`)
})

// app.get('/weather', (req, res) => {
// 	const q = parse(req.url)
// 	const query = parseQuery(q.query)

// 	setTimeout(() => {
// 		res.send(`
// 			<!DOCTYPE html>
// 			<html lang="en">
// 			<head>
// 				<meta charset="UTF-8">
// 				<meta name="viewport" content="width=device-width, initial-scale=1.0">
// 				<title>Document</title>
// 			</head>
// 			<body>
// 				<h1>Olá ${ query.name }</h1>
// 			</body>
// 			</html>
// 		`)
// 	}, 0)
// })

// app.get('/*', (req, res) => {
// 	const q = parse(req.url)
// 	const filename = q.pathname
// 	console.log(filename)
// 	const data = fs.readFileSync(`public/${ filename === '/' ? 'index.html' : filename }`)
// 	res.send(data.toString())
// })

app.listen(PORT, () => {
    console.log('O servidor arrancou na porta', PORT)
})