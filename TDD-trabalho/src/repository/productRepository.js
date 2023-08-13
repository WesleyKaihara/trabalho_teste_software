const fs = require("fs")
const path = require('path')
const crypto = require('crypto');

class ProductRepository {
  #data = []
  constructor(data) {
    this.#data = data
  }

  async findMany() {
    return this.#data
  }

  async find(id) {
    return await this.#data.find(product => (
      product.id === id
    ))
  }

  async save({ name, description, avaible, brand, value }) {
    const id = crypto.randomUUID();

    const data = { name, description, value, avaible, brand }
    
    this.#data.push({id, ...data })

    return { id, ...data }
  }

  async update(id, newData) {
    if(!await this.find(id)) {
      throw new Error(`Product with id "${id}" not found!`)
    }
    
    this.#data.map((product,idx)=> {
      if(product.id === id) {
        this.#data[idx] = { id, ...newData}
      }
      return product
    })
    return { id, ...newData}
  }

  async delete(id) {
    if(!await this.find(id)) {
      throw new Error(`Product with id "${id}" not found!`)
    }

    this.#data = this.#data
      .filter(product => product.id !== id)
  }
}

module.exports = ProductRepository