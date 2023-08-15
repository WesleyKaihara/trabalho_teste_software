const fs = require("fs")
const path = require('path')

const { expect } = require('chai');
const { describe, it, beforeEach } = require('mocha');

const ProductFactory = require("../../../src/factory/productFactory");
const ProductService = require('../../../src/service/productService');
const ProductRepository = require("../../../src/repository/productRepository");

const mocks = {
  PRODUCT_LIST: require("../../mock/product/product-list.json"),
  VALID_NEW_PRODUCT: require("../../mock/product/valid-new-product.json"),
  VALID_UPDATE_PRODUCT: require("../../mock/product/valid-update-product.json")
}

const DATABASE = {
  PRODUCT: require("../../mock/database/product.db.json")
}

describe("#PRODUCT SERVICE SUITE TESTS" , () => {  
  let productService;
  let productFactory;
  let productRepository;

  beforeEach((done) => {
    fs.writeFile(
      path
        .resolve(__dirname, "..","..","mock","database","product.db.json"), 
      JSON.stringify(mocks.PRODUCT_LIST), 
      err => {}
    )
    productRepository = new ProductRepository(DATABASE.PRODUCT)
    productFactory = new ProductFactory(productRepository)
    productService = new ProductService(productFactory)
    done()
  })

  it("should be return a product list", async() => {
    expect(mocks.PRODUCT_LIST).to.deep.equal(await productService.findMany())
  })

  it("should be create a product if the informed fields are valid", async() => {
    const {id, ...data } = await productService.save(mocks.VALID_NEW_PRODUCT)

    expect(data).to.deep.equal(mocks.VALID_NEW_PRODUCT);
  })

  it("should be update a product", async() => {
    const result = await productService
    .update("94ea0963-50d6-4b2a-b6a0-ec77bc553f6a", mocks.VALID_UPDATE_PRODUCT)

  expect(result).to.deep.equal({
    id: "94ea0963-50d6-4b2a-b6a0-ec77bc553f6a",
    ...mocks.VALID_UPDATE_PRODUCT
  })
  })

  it("should be delete product", async() => {
    const result = await productService
      .delete("94ea0963-50d6-4b2a-b6a0-ec77bc553f6a")

    expect(result).to.deep.equal()
  })

})
