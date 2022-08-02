const express = require("express")
const {showShop} = require("../use-cases/show-shop")
const {addProductToShop} = require('../use-cases/add-product-to-shop')
const {editProductInShop} = require("../use-cases/edit-product-in-shop")
const {removeProduct} = require("../use-cases/delete-product")

const {showDetails} = require("../use-cases/show-details")

const shopRouter = express.Router() // Controller

const { showAllUser } = require("../use-cases/show-all-users")
const { registerUser } = require("../use-cases/register-user")
const {doAuthMiddleware} = require("../auth/doAuthMiddleware")

// registration user
shopRouter.get("/registration/users", doAuthMiddleware, (_, res) => {
    showAllUser()
    .then(users => res.json(users))
    .catch((err) => {
        console.log(err)
        res.status(500).json({ message: err.toString() || "Internal Server Error." })
    })
})
shopRouter.post("/registration/users", (req, res) => {
    registerUser(req.body)
    .then((user) => res.json(user))
    .catch((err) => {
        console.log(err)
        res.status(500).json({ message: err.toString() || "Internal Server Error." })
    })
})
// login user
shopRouter.post("/users/login", (req, res) => {
    loginUser({
        email: req.body.email,
        password: req.body.password
    })
    .then((token) => res.json({ token }))
    .catch((err) => {
        console.log(err)
        res.status(500).json({ message: err.toString() || "Internal Server Error." })
    })
})

// get all products

shopRouter.get('/all',(req, res) => {
    showShop()
    .then(products => res.json(products))
    .catch(err =>{
    console.log(err);
    res.status(500).send({error:"Failed to load all products"})
    })
})

// add a product

shopRouter.post('/add',(req, res) => {
    if(!req.body || !req.body.ProductName){
        res.status(400).json({error:"Please include a Proudct Name"})
        return;
    }
    
    const newProduct = {
        ProductName: req.body.ProductName,
        Company: req.body.Company,
        Price: req.body.Price,
        ProductLink: req.body.ProductLink,
        LinkShop: req.body.LinkShop
    }

    addProductToShop(newProduct)
    .then(addedProduct => res.status(201).json(addedProduct))
    .catch(err =>{
        console.log(err)
        res.status(500).send({error:"Failed to add Product to database"})
    })
})

// shopRouter.get("/details/:id", (req, res) => {
//     const detailProdId = req.params.id;
//     console.log(detailProdId)

//     showDetails(detailProdId).then((details) => res.json(details));
//   });



// get details of one product

shopRouter.get('/details/:id',(req, res) => {

    const productId = req.params.id;
    console.log(productId)
    // const newProductValue = {
    //     ProductName: req.body.ProductName,
    //     Company: req.body.Company,
    //     Price: req.body.Price,
    //     ProductLink: req.body.ProductLink,
    //     LinkShop:req.body.LinkShop,
    //  };

    //  console.log(newProductValue)
    showDetails({productId})
    .then((details )=> res.json(details))
    .catch(err =>{
        console.log(err)
        res.status(500).json({error:"Failed to show details"})
    })

})

// edit product

shopRouter.put('/edit/:id',(req, res) => {

    const productId = req.params.id;
    console.log(productId)
    const newProductValue = {
        ProductName: req.body.ProductName,
        Company: req.body.Company,
        Price: req.body.Price,
        ProductLink: req.body.ProductLink,
        LinkShop:req.body.LinkShop,
     };

    //  console.log(newProductValue)
    editProductInShop({productId, doneValue: newProductValue})
    .then((updatedProduct )=> res.json(updatedProduct))
    .catch(err =>{
        console.log(err)
        res.status(500).json({error:"Failed to update product"})
    })

})


// delete product

shopRouter.delete('/delete/:id',(req, res) => {
    const productId = req.params.id
    removeProduct({productId})    
    .then(removedProduct => res.json({removedProduct}))
    .catch(err =>{
        console.log(err)
        res.status(500).json({error:"Failed to delete product"})
    })
})

module.exports ={
    shopRouter
}