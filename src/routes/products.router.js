import express from "express"
import ProductController from "../controller/productController.js"
import roleMiddleware from "../middleware/roleMiddleware.js"
const router = express.Router()
const productController = new ProductController

router.get("/", productController.getProducts)
router.post("/", roleMiddleware(["admin"]), productController.addProduct)
router.put("/", roleMiddleware(["admin"]), productController.updatePrice)

export default router