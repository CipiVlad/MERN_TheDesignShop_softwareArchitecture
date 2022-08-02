const {ShopDAO} = require("../db-access")

function editProductInShop({productId, doneValue}){
   return ShopDAO.updateProduct(productId, doneValue) 
   //--> MERKE: FEHLERMEDLUNG "Cannot read properties of undefined (reading 'then)"
   // gelöst mit return vor 'ShopDAO" !!!
}

module.exports ={
    editProductInShop
}