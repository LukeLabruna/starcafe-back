import ProductRepository from "../repository/productRepository.js"
const productRepository = new ProductRepository

class ProductController {
    async getProducts(req, res) {
        const { category } = req.query
        try {
            const products = await productRepository.getProducts(category)
            const message = category ? `Products from the "${category}" category retrieved successfully.` : "Products retrieved successfully."
            res.status(200).json({ status: "success", message, data: products })
        } catch (error) {
            if (error.message === "Products not found.") return res.status(404).json({ status: "error", message: error.message })
            res.status(500).json({ status: "error", data: error })
        }
    }
    async addProduct(req, res) {
        const { productName, price, category } = req.body
        try {
            const newProduct = await productRepository.addProduct(productName, price, category)
            res.status(200).json({ status: "success", message: "Product successfully added.", data: newProduct })
        } catch (error) {
            if (error.message === "Product already exist.") return res.status(409).json({ status: "error", message: error.message })
            res.status(500).json({ status: "error", data: error })
        }
    }
    async updatePrice(req, res) {
        const { pid, newPrice } = req.body
        try {
            const product = await productRepository.updatePrice(pid, newPrice)
            res.status(200).json({ status: "success", message: "Product successfully updated.", data: product })
        } catch (error) {
            if (error.message === "Product not found.") return res.status(404).json({ status: "error", message: error.message })
            res.status(500).json({ status: "error", data: error })
        }
    }
}

export default ProductController