const fs = require("fs")
const path = require('path')
const { expect } = require('chai');
const { describe, it, beforeEach } = require('mocha');
const CategoryRepository = require('../../../src/repository/categoryRepository');

const mocks = {
  VALID_NEW_CATEGORY: require("../../mock/category/valid-new-category.json"),
  CATEGORY_LIST: require("../../mock/category/category-list.json"),
  VALID_UPDATE_CATEGORY: require("../../mock/category/valid-update-category.json")
}

describe("#CATEGORY REPOSITORY SUITE TESTS" , () => {  
  let categoryRepository
  const DATABASE = {
    CATEGORY: require("../../mock/database/category.db.json")
  }

  beforeEach((done) => {
    fs.writeFile(
      path
        .resolve(__dirname, "..","..","mock","database","category.db.json"), 
      JSON.stringify(mocks.CATEGORY_LIST), 
      err => {}
    )
    categoryRepository = new CategoryRepository(DATABASE.CATEGORY)
    done()
  })

  it("should be list all categories", async() => {
    const result = await categoryRepository.findMany();
    expect(result).to.deep.equal(mocks.CATEGORY_LIST)
  })

  it("should be save category", async() => {
    const expected = mocks.VALID_NEW_CATEGORY
    const result = await categoryRepository
      .save(mocks.VALID_NEW_CATEGORY)

    expect(result).to.haveOwnProperty("id")
    expect(result).to.haveOwnProperty("name", mocks.VALID_NEW_CATEGORY.name)
  })

  it("should be update category", async() => {
    const result = await categoryRepository
      .update("139fc80f-e377-46a2-96a9-82581727a609", mocks.VALID_UPDATE_CATEGORY)

    expect(result).to.deep.equal({
      id: "139fc80f-e377-46a2-96a9-82581727a609",
      ...mocks.VALID_UPDATE_CATEGORY
    })
  })

  it("should throw error when update invalid category", async() => {
    try {
      const result = await categoryRepository
      .update("139fc80f-e377-46a2-96a9-82581727a123", mocks.VALID_UPDATE_CATEGORY)
    } catch (error) {
      expect(error.message)
        .to.equal(`Category with id "139fc80f-e377-46a2-96a9-82581727a123" not found!`)
    }
  })

  it("should be delete category", async() => {
    const result = await categoryRepository
      .delete("139fc80f-e377-46a2-96a9-82581727a609")

    expect(result).to.deep.equal()
  })

  it("should throw error when delete invalid category", async() => {
    try {
      const result = await categoryRepository
      .delete("139fc80f-e377-46a2-96a9-82581727a123")
    } catch (error) {
      expect(error.message)
        .to.equal(`Category with id "139fc80f-e377-46a2-96a9-82581727a123" not found!`)
    }
  })
})
