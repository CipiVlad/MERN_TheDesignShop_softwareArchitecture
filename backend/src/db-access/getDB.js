const dotenv = require('dotenv');
const {MongoClient} = require('mongodb');

dotenv.config();

const url = process.env.DB_URL;
const client = new MongoClient(url);

let _db;

// function getDB() {
//     return new Promise((resolve, reject) => {
//         if (!_db) {
//             client.connect()
//             .then(connectedClient => {
//                 const db = connectedClient.db(process.env.DB_NAME || "myFirstDatabase")
//                 _db = db;
//                 return resolve(_db);
//             })
//             .catch(err =>reject(err))
//         }else {
//             return resolve(_db)
//         }
//     })
// }

async function getDB(){
    if (_db) {
        return _db
    }
    const connectedClient = await client.connect()
    const db = await connectedClient.db(process.env.DB_NAME || "myFirstDatabase")
    _db = db;
    return _db    
}


function getREG() {
    return new Promise((resolve, reject) => {
        if (!_db) {
            client.connect()
            .then(connectedClient => {
                const db = connectedClient.db(process.env.DB_NAME_REG || "myFirstDatabase")
                _db = db;
                return resolve(_db);
            })
            .catch(err =>reject(err))
        }else {
            return resolve(_db)
        }
    })
}

module.exports ={
    getDB,
    getREG
}