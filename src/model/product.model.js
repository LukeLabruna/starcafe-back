const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
	productName: String,
	price: Number,
	category: String
})

const ProductModel = mongoose.model("products", productSchema)

module.exports = ProductModel