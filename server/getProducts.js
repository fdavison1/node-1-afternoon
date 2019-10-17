const products = require('./products.json')

const getProducts = (req, res, next) => {
    if( req.query.price) {
        const stuff = products.filter(obj => obj.price <= parseInt(req.query.price))
        return res.status(200).send(stuff)
    } else {
    res.status(200).send(products)}
}

module.exports = getProducts