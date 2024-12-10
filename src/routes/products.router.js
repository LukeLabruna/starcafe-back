import express from "express"
import ProductController from "../controller/productController.js"
import authMiddleware from "../middleware/authMiddleware.js"
import roleMiddleware from "../middleware/roleMiddleware.js"
const router = express.Router()
const productController = new ProductController

router.get("/", productController.getProducts)
router.post("/", authMiddleware, roleMiddleware(["admin"]), productController.addProduct)
router.put("/", authMiddleware, roleMiddleware(["admin"]), productController.updatePrice)

export default router