const {ShopDAO} = require('../db-access')

// function showDetails() {
//     return ShopDAO
//     .getProductById()
//     .then(items => items.map(item =>({
//         id: item._id,
//         ProductName: item.ProductName,
//         Company: item.Company,
//         Price: item.Price,
//         ProductLink: item.ProductLink,
//         LinkShop: item.LinkShop    
//     })))
 
// }
   
// function showDetails({detailProdId, doneValue}){
//    return ShopDAO.getProductById(detailProdId, doneValue)
// }
function showDetails({productId}){
    return ShopDAO.getProductById(productId) 
    //--> MERKE: FEHLERMEDLUNG "Cannot read properties of undefined (reading 'then)"
    // gelöst mit return vor 'ShopDAO" !!!
 }

module.exports ={
    showDetails
}