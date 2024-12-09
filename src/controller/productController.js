import ProductRepository from "../repository/productRepository.js"
const productRepository = new ProductRepository

class ProductController {
    async getProducts(req, res) {
        const { category } = req.query
        try {
            const products = await productRepository.getProducts(category)
            const message = category ? `Products from the "${category}" category retrieved successfully.` : "Products retrieved successfully."
            res.status(200).json({status: "success", message, data: products})
        } catch (error) {
            
        }
    }
}