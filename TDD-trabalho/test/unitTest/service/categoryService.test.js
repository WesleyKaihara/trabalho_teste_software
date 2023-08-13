const { expect } = require('chai');
const { describe, it, beforeEach } = require('mocha');
const CategoryService = require('../../../src/service/categoryService');

describe("#CATEGORY SUITE TESTS" , () => {  
  let categoryService

  beforeEach((done) => {
    categoryService = new CategoryService()
    done()
  })

  it("should be create a category if the informed fields are valid", () => {
  })

  it("should't allow registering user with the same name")
})