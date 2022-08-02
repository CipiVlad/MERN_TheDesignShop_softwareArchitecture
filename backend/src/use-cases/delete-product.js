const {ShopDAO} = require('../db-access')


function removeProduct({productId}){
    return ShopDAO.deleteProduct(productId)
}

module.exports ={
    removeProduct,
}