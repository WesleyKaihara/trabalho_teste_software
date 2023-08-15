class ProductService {
  constructor(productFactory) {
    this.productFactory = productFactory
  }
  
  findMany() {
    return this.productFactory.getAllProducts()
  }

  save(data) {
    return this.productFactory.saveProduct(data)
  }

  update(id,data) {
    return this.productFactory.updateProduct(id, data)
  }

  delete(id) {
    return this.productFactory.deleteProduct(id)
  }
}

module.exports = ProductService
