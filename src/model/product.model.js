import { Schema, model } from "mongoose"

const productSchema = new Schema({
	productName: String,
	price: Number,
	category: String
})

const ProductModel = model("products", productSchema)

export default ProductModel