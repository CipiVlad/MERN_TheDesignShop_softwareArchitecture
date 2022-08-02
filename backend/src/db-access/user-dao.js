const { ObjectId } = require("mongodb");
const { getREG } = require("./getDB");

const usersCollectionName = "registration";

async function findAll() {
    const db = await getREG();
    return db.collection(usersCollectionName).find().toArray();
}

function findById(id) {
    return getREG()
    .then(db => db.collection(usersCollectionName).findOne({ _id: ObjectId(id) }))
}

function findByEmail(email) {
    return getREG()
    .then(db => db.collection(usersCollectionName).findOne({ email: email }))
}

function insertOne(userInfo) {
    return getREG()
    .then(db => db.collection(usersCollectionName).insertOne(userInfo))
}

module.exports = {
    findAll,
    findById,
    findByEmail,
    insertOne
}