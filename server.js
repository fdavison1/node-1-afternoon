const express = require('express')
const getProducts = require('./server/getProducts')

const app = express()
// const products = require('./products.json')

app.get('/api/products', getProducts)

app.get('/api/product/:id', (req, res, next) => {
    const id = parseInt(req.params.id)
    const findProduct = 
})

app.listen(4001, ()=> console.log('listening'))