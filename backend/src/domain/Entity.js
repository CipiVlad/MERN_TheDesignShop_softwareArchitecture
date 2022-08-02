function makeEntity({
    _id,
    ProductName,
    Company,
    Price,
    ProductLink,
    LinkShop
}){

    if(ProductName < 1){
        throw new Error('Product Name must be at least one character.')
    }
    return {

        _id,
        ProductName,
        Company,
        Price,
        ProductLink,
        LinkShop
    }
}

module.exports ={
    makeEntity
}