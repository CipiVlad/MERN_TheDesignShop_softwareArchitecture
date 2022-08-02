const {ShopDAO} = require('../db-access')

async function showShop() {
    const items = await ShopDAO
        .getAllProducts()
    return items.map(item => ({
        id: item._id,
        ProductName: item.ProductName,
        Company: item.Company,
        Price: item.Price,
        ProductLink: item.ProductLink,
        LinkShop: item.LinkShop
    }))
    
}

module.exports ={
    showShop
}