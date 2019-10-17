const express = require('express')
const app = express()
const products = require('./products.json')

app.get('/api/products', (req, res, next) => {
    res.status(200).send(products)
})

app.listen(4001, ()=> console.log('listening'))