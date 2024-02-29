
const express =  require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Aluno cadastrado</h1>')
} )
app.use(bodyParser.urlencoded({ extended: true}))

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1 class=" resp">ja cadastrado</h1>')
} )

app.listen(3000)
