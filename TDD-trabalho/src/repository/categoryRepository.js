const fs = require("fs")
const path = require('path')
const crypto = require('crypto');

class CategoryRepository {
  #data = []
  constructor(data) {
    this.#data = data
  }

  async findMany() {
    return this.#data
  }

  async find(id) {
    return await this.#data.find(category => (
      category.id === id
    ))
  }

  async save({ name }) {
    const id = crypto.randomUUID();

    this.#data.push({
      id,
      name
    })
    return { id, name }
  }

  async update(id, newData) {
    if(!await this.find(id)) {
      throw new Error(`Category with id "${id}" not found!`)
    }
    
    this.#data.map((category,idx)=> {
      if(category.id === id) {
        this.#data[idx] = { id, ...newData}
      }
      return category
    })
    return { id, ...newData}
  }

  async delete(id) {
    if(!await this.find(id)) {
      throw new Error(`Category with id "${id}" not found!`)
    }

    this.#data = this.#data
      .filter(category => category.id !== id)
  }
}

module.exports = CategoryRepository