import ProductModel from "../model/product.model.js"

class ProductRepository {

    async getProducts(category) {
        try {
            if (!category) {
                const products = await ProductModel.find()
                if (products.length === 0) throw new Error("Products not found.")
                return products
            }
            const productsCategory = await ProductModel.find({ category })
            if (productsCategory.length === 0) throw new Error("Products not found.")
            return productsCategory
        } catch (error) {
            throw error
        }
    }

    async addProduct(productName, price, category) {
        try {
            const productExist = await ProductModel.findOne({ productName })
            if (productExist) {
                throw new Error("Product already exist.")
            }
            const newProduct = await ProductModel.create({ productName, price, category })
            return newProduct
        } catch (error) {
            throw error
        }
    }

    async updatePrice(pid, newPrice) {
        try {
            const product = await ProductModel.findByIdAndUpdate(pid, { price: newPrice }, { new: true })
            if (!product) throw new Error("Product not found.")
            return product
        } catch (error) {
            throw error
        }
    }
}

export default ProductRepository