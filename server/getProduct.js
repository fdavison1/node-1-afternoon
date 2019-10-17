const products = require('./products.json')

const getProduct = (req, res, next) => {
    const id = parseInt(req.params.id)
    const findProduct = products.filter( prodObj => prodObj.id === id)
    if (findProduct.length === 0){
        return res.sendStatus(400)
    }
    res.status(200).send(findProduct)
}

module.exports = getProduct 