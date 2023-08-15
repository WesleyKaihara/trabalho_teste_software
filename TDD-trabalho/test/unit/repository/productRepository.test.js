const fs = require("fs")
const path = require('path')
const { expect } = require('chai');
const { describe, it, beforeEach } = require('mocha');
const ProductRepository = require('../../../src/repository/productRepository');

const mocks = {
  PRODUCT_LIST: require("../../mock/product/product-list.json"),
  VALID_NEW_PRODUCT: require("../../mock/product/valid-new-product.json"),
  VALID_UPDATE_PRODUCT: require("../../mock/product/valid-update-product.json")
}

describe("#PRODUCT REPOSITORY SUITE TESTS" , () => {  
  let productRepository
  const DATABASE = {
    PRODUCT: require("../../mock/database/product.db.json")
  }

  beforeEach((done) => {
    fs.writeFileSync(
      path
        .resolve(__dirname, "..","..","mock","database","product.db.json"), 
      JSON.stringify(mocks.PRODUCT_LIST), 
      err => {}
    )
    productRepository = new ProductRepository(DATABASE.PRODUCT)
    done()
  })

  it("should be list all products", async() => {
    const result = await productRepository.findMany();
    expect(result).to.deep.equal(mocks.PRODUCT_LIST)
  })

  it("should be save product", async() => {
    const expected = mocks.VALID_NEW_PRODUCT
    const result = await productRepository
      .save(mocks.VALID_NEW_PRODUCT)

    const { id, ...data } = result
    expect(result).to.haveOwnProperty("id")
    expect(data).to.be.deep.equal(mocks.VALID_NEW_PRODUCT)
  })

  it("should be update product", async() => {
    const result = await productRepository
      .update("94ea0963-50d6-4b2a-b6a0-ec77bc553f6a", mocks.VALID_UPDATE_PRODUCT)

    expect(result).to.deep.equal({
      id: "94ea0963-50d6-4b2a-b6a0-ec77bc553f6a",
      ...mocks.VALID_UPDATE_PRODUCT
    })
  })

  it("should throw error when update invalid product", async() => {
    try {
      const result = await productRepository
      .update("139fc80f-e377-46a2-96a9-8258515", mocks.VALID_UPDATE_PRODUCT)
    } catch (error) {
      expect(error.message)
        .to.equal(`Product with id "139fc80f-e377-46a2-96a9-8258515" not found!`)
    }
  })

  it("should be delete product", async() => {
    const result = await productRepository
      .delete("6f0d7309-be4a-4366-939a-841c785d8b72")

    expect(result).to.deep.equal()
  })

  it("should throw error when delete invalid product", async() => {
    try {
      const result = await productRepository
      .delete("139fc80f-e377-46a2-96a9-825817123")
    } catch (error) {
      expect(error.message)
        .to.equal(`Product with id "139fc80f-e377-46a2-96a9-825817123" not found!`)
    }
  })
})
