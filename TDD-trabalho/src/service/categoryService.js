class CategoryService {
  constructor(userFactory) {
    this.userFactory = userFactory
  }
  
  findMany() {
    return this.userFactory.getAllCategories()
  }

  save(data) {
    return this.userFactory.saveCategory(data)
  }

  update(id,data) {
    return this.userFactory.updateCategory(id, data)
  }

  delete(id) {
    return this.userFactory.deleteCategory(id)
  }
}

module.exports = CategoryService
