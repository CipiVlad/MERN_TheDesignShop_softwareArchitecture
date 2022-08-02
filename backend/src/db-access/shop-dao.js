const {ObjectId} =require('mongodb');
const {getDB} = require('./getDB');


async function getAllProducts(){
    const db = await getDB();
    return db.collection('shop').find().toArray();
}

async function getProductById(id) {
    const db = await getDB();
    return db.collection("shop").findOne({ _id: ObjectId(id)})
}

// function addProduct(product) {
//     return new Promise((resolve, reject) => {
//         getDB()
//         .then(db => db.collection("shop").insertOne(product))
//         .then(result => {
//             if(result.acknowledged === true && result.insertedId) {
//                 return resolve({
//                     _id: result.insertedId,
//                     ...product,
//                 })
//             } else {
//                 // result könnte ein error sein, daher reject...
//                 return reject(result)
//             }
//         }).catch((err) => reject(err))
//     })
// }

async function addProduct(product) {
    const db = await getDB();
   await db.collection("shop").insertOne(product)
}



// function updateProduct(productId, newProductValue) {
//     return new Promise((resolve, reject)=>{
//         getDB()
//         .then(db => db.collection("shop").findOneAndUpdate(
//             {_id: ObjectId(productId)}, // quere /filtern: was soll upgedated werden?
//             {$set:{ 
//                 ProductName: newProductValue.ProductName,
//                 Company: newProductValue.Company,
//                 Price: newProductValue.Price,
//                 ProductLink: newProductValue.ProductLink,
//                 LinkShop: newProductValue.LinkShop        
                        
//             }}, //update Info
//             {returnDocument: "after"}
//         ))
//         .then((result) => {
//             if(result.ok === 1) resolve (result.value)
//             else reject ({msg:"Error updating product"})
//         })
//         .catch((err) => reject("FEHLER",err))
//     })
// }

async function updateProduct(productId,newProductValue){
    const db = await getDB();
    const findProductAndUpdateProduct =db.collection("shop").findOneAndUpdate(
        {_id: ObjectId(productId)}, // quere /filtern: was soll upgedated werden?
        {$set:{ 
            ProductName: newProductValue.ProductName,
            Company: newProductValue.Company,
            Price: newProductValue.Price,
            ProductLink: newProductValue.ProductLink,
            LinkShop: newProductValue.LinkShop        
                    
        }}, //update Info
        {returnDocument: "after"}
    )
    return findProductAndUpdateProduct
}

// function deleteProduct(productId) {
//     return new Promise((resolve, reject) => {
//         getDB()
//         .then(db => db.collection('shop').findOneAndDelete({_id:ObjectId(productId)}))
//         .then(result =>{
//             if(result.ok === 1) resolve(result.value)
//             else reject({msg: "Error deleting product"})
//         })
//         .catch((err)=> reject(err))
//     })
// }

async function deleteProduct(productId){
    const db = await getDB();
    const deleteProduct =db.collection('shop').findOneAndDelete({_id:ObjectId(productId)})
    return deleteProduct
}

module.exports = {
    getAllProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    getProductById
}