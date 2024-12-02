import express from "express";
import ProductModel from "../model/product.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
	const { category } = req.query
	try {
		if (!category) {
			const products = await ProductModel.find()
			return res.send(products)
		} else {
			const productsCategory = await ProductModel.find({ category })
			res.send(productsCategory)
		}
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
})

router.post("/", async (req, res) => {
	const { productName, price, category } = req.body
	try {
		const productExist = await ProductModel.findOne({ productName })
		if (productExist) {
			return res.send("El producto ya existe")
		}
		const newProduct = await ProductModel.create({ productName, price, category })
		res.send(newProduct)
	} catch (error) {

	}
})

router.put("/:pid", async (req, res) => {
	const productId = req.params.pid
	const newPrice = req.body.price
	try {
		const product = await ProductModel.findByIdAndUpdate(productId, { price: newPrice }, { new: true })
		if (!product) {
			return res.send("El producto no existe")
		}
		res.send("Precio cambiado con exito")
	} catch (error) {

	}

})

export default router