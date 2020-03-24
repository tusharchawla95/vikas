const MongoClient = require('mongodb').MongoClient;
const ProductSchema = require("./schemas/productSchema");

const url = 'mongodb://localhost:27017';


// class to handle all product related data and operations

class Product {
     getProducts(callback) {
        MongoClient.connect(url, (err, res) => {
            if(res == null) {
                console.log("error connecting...");
                callback(null);
                return;
            }

            let db = client.db("grocery-app");
            let collection = db.collection("product");

            collection.find({}).toArray((err, results) => {
                if(err) {
                    console.log("Error. Data Not Recieved");
                    callback(null);
                    return;
                }
                console.log("results", results);
                callback(results)
                client.close();
            });
        });
    
    }
}

module.exports = Product;