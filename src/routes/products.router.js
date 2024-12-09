import express from "express"
import ProductController from "../controller/productController.js"
const router = express.Router()
const productController = new ProductController

router.get("/", productController.getProducts)
router.post("/", productController.addProduct)
router.put("/", productController.updatePrice)

export default router