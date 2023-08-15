const fs = require("fs")
const path = require('path')
const crypto = require('crypto');

class UserRepository {
  #data = []
  constructor(data) {
    this.#data = data
  }

  async findMany() {
    return this.#data
  }

  async find(id) {
    return await this.#data.find(user => (
      user.id === id
    ))
  }

  async save({ name, email, telefone, endereco }) {
    const id = crypto.randomUUID();

    this.#data.push({
      id,
      name
    })
    return { id, name, email, telefone, endereco }
  }

  async update(id, newData) {
    if(!await this.find(id)) {
      throw new Error(`User with id "${id}" not found!`)
    }
    
    this.#data.map((user,idx)=> {
      if(user.id === id) {
        this.#data[idx] = { id, ...newData}
      }
      return user
    })
    return { id, ...newData}
  }

  async delete(id) {
    if(!await this.find(id)) {
      throw new Error(`User with id "${id}" not found!`)
    }

    this.#data = this.#data
      .filter(user => user.id !== id)
  }
}

module.exports = UserRepository