class ProductFactory {
  constructor(productRepository) {
    this.productRepository = productRepository
  }

  getAllProducts() {
    return this.productRepository.findMany()
  }

  saveProduct(data) {
    return this.productRepository.save({...data})
  }

  updateProduct(id,data) {
    return this.productRepository.update(id, data)
  }

  deleteProduct(id) {
    return this.productRepository.delete(id)
  }
}

module.exports = ProductFactory
