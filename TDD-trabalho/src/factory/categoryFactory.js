class CategoryFactory {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository
  }

  getAllCategories() {
    return this.categoryRepository.findMany()
  }

  saveCategory(data) {
    return this.categoryRepository.save({...data})
  }

  updateCategory(id,data) {
    return this.categoryRepository.update(id, data)
  }

  deleteCategory(id) {
    return this.categoryRepository.delete(id)
  }
}

module.exports = CategoryFactory
