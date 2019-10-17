const express = require('express')
const getProducts = require('./server/getProducts')
const getProduct = require('./server/getProduct')

const app = express()


app.get('/api/products', getProducts)
app.get('/api/product/:id', getProduct)

app.listen(4001, ()=> console.log('listening'))