const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


const Product = require("./product");
const ProductModel = require("./schemas/productSchema");


const app = express();
app.use(bodyParser.json());
const url = 'mongodb:/localhost:27017/grocery-app';

let product = new Product();

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};  

mongoose.connect(url, options, (error) => {
    if(error) {
        return;
    }
});

app.get('/products', (req, res) => {
    product.getProducts((data) => {
        console.log("callback data", data);

        if(data == null) {
            res.status(400).send("Error 400, Data not found.")
        }
        res.status(200).send(data);
    });
});

app.get("/products/v2", (req,res) => {
    ProductModel.findOne((err, data) => {
        if(err) {
            console.log("Error getting the data");
            res.status(400).send("error, data not found");
        }
        console.log("data", data);
        res.status(200).send(data);
    });
});

app.post("/products/v2", (req, res) => {
   let price = req.body.price;

   console.log("body", req.body);

   let data = {
       "name": req.body.name,
       "price": req.body.price
   };

   console.log("data", data);
   const item = new ProductModel(data);
   item.save(data, (error) => {
       if(!error) {
           console.log("saved item");
           res.status(200).send({});
       }
   });
});

   


app.listen(3000);
