const { ShopDAO } = require("../db-access");
const {makeEntity} = require('../domain/Entity')

function addProductToShop({ProductName,Company,Price,ProductLink,LinkShop }){
    const oneProduct = makeEntity({ProductName,Company,Price,ProductLink,LinkShop})
    return ShopDAO.addProduct(oneProduct)
}
 module.exports ={
    addProductToShop
 }