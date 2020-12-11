const MongoClient = require('mongodb').MongoClient;
const format = require('util').format;

MongoClient.connect('mongodb://127.0.0.1:27017', (err, db) => {
    if (!err)
        console.log("Connected to Mongo")
    else
        throw err;
    db.close();
})