const fs = require('fs');
var data = fs.readFileSync(__dirname + '/../data/productos.json');

const jsonProducts = JSON.parse(data)

const getProduct = async (productId) => {
    const productReg = await jsonProducts.filter(i => i.id == productId)
    return productReg
}

module.exports = {
    getProduct
}