const express = require('express')
const app = express()
const path = 3000

const path_constructor = require('./inform').path_constructor
const data_route = require('./inform').data_route
const api_route = require('./inform').api_route


app.listen(path, () => {
    console.log("Running app")
})

app.get('/', (req,res) => {
    res.send('Escolha um caminho [all, data, API]')
})

app.get('/data', (req, res) => {
    res.send(data_route)
})

app.get('/all', (req, res) => {
    res.send(path_constructor)
})

app.get('/API', (req, res) => {
    res.send(api_route)
})