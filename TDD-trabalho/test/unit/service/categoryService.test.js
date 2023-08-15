const fs = require("fs")
const path = require('path')

const { expect } = require('chai');
const { describe, it, beforeEach } = require('mocha');

const CategoryFactory = require("../../../src/factory/categoryFactory");
const CategoryService = require('../../../src/service/categoryService');
const CategoryRepository = require("../../../src/repository/categoryRepository");

const mocks = {
  CATEGORY_LIST: require("../../mock/category/category-list.json"),
  VALID_NEW_CATEGORY: require("../../mock/category/valid-new-category.json"),
}

const DATABASE = {
  CATEGORY: require("../../mock/database/category.db.json")
}

describe("#CATEGORY SUITE TESTS" , () => {  
  let categoryService;
  let categoryFactory;
  let categoryRepository;

  beforeEach((done) => {
    fs.writeFile(
      path
        .resolve(__dirname, "..","..","mock","database","category.db.json"), 
      JSON.stringify(mocks.CATEGORY_LIST), 
      err => {}
    )
    categoryRepository = new CategoryRepository(DATABASE.CATEGORY)
    categoryFactory = new CategoryFactory(categoryRepository)
    categoryService = new CategoryService(categoryFactory)
    done()
  })

  it("should be return a category list", async() => {
    expect(mocks.CATEGORY_LIST).to.deep.equal(await categoryService.findMany())
  })

  it("should be create a category if the informed fields are valid", async() => {
    const {id, ...data } = await categoryService.save(mocks.VALID_NEW_CATEGORY)

    expect(data).to.deep.equal(mocks.VALID_NEW_CATEGORY);
  })

  it("should't allow registering user with the same name")

  it("should be update a category", async() => {
    const result = await categoryService
    .update("139fc80f-e377-46a2-96a9-82581727a609", mocks.VALID_UPDATE_CATEGORY)

  expect(result).to.deep.equal({
    id: "139fc80f-e377-46a2-96a9-82581727a609",
    ...mocks.VALID_UPDATE_CATEGORY
  })
  })

  it("should be delete category", async() => {
    const result = await categoryService
      .delete("139fc80f-e377-46a2-96a9-82581727a609")

    expect(result).to.deep.equal()
  })

})
