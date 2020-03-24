const mongoose = require('mongoose');
var Schema = mongoose.Schema;

let ProductSchema = new Schema( {
    name: String,
    // title: String,
    price: Number,
    // description: String,
    // productImage: String
})

module.exports = mongoose.model('product', ProductSchema);
