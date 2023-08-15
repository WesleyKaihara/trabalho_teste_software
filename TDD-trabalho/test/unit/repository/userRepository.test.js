const fs = require("fs")
const path = require('path')

const { expect } = require('chai');
const { describe, it, beforeEach } = require('mocha');

const UserRepository = require('../../../src/repository/userRepository');

const mocks = {
  VALID_NEW_USER: require("../../mock/user/valid-new-user.json"),
  USER_LIST: require("../../mock/user/user-list.json"),
  VALID_UPDATE_USER: require("../../mock/user/valid-update-user.json")
}

describe("#USER REPOSITORY SUITE TESTS" , () => {  
  let userRepository

  const DATABASE = {
    USER: require("../../mock/database/user.db.json")
  }

  beforeEach((done) => {
    fs.writeFileSync(
      path
        .resolve(__dirname, "..","..","mock","database","user.db.json"), 
      JSON.stringify(mocks.USER_LIST), 
      err => {}
    )

    userRepository = new UserRepository(DATABASE.USER)
    done()
  })

  it("should be list all users", async() => {
    const result = await userRepository.findMany();
    expect(result).to.deep.equal(mocks.USER_LIST)
  })

  it("should be save user", async() => {
    const expected = mocks.VALID_NEW_USER
    const { id, ...data} = await userRepository
      .save(mocks.VALID_NEW_USER)

    expect(data).to.deep.equal(expected)
  })

  it("should be update user", async() => {
    const result = await userRepository
      .update("3591a599-b9c9-4018-a6b0-ea1ef029538b", mocks.VALID_UPDATE_USER)

    expect(result).to.deep.equal({
      id: "3591a599-b9c9-4018-a6b0-ea1ef029538b",
      ...mocks.VALID_UPDATE_USER
    })
  })

  it("should throw error when update invalid user", async() => {
    try {
      const result = await userRepository
      .update("139fc80f-e377-46a2-96a9-82581727a123", mocks.VALID_UPDATE_CATEGORY)
    } catch (error) {
      expect(error.message)
        .to.equal(`User with id "139fc80f-e377-46a2-96a9-82581727a123" not found!`)
    }
  })

  it("should be delete user", async() => {
    const result = await userRepository
      .delete("7474631f-e8a2-4910-8ec0-a770a0c6946d")

    expect(result).to.deep.equal()
  })

  it("should throw error when delete invalid user", async() => {
    try {
      const result = await userRepository
      .delete("139fc80f-e377-46a2-96a9-82581727a123")
    } catch (error) {
      expect(error.message)
        .to.equal(`User with id "139fc80f-e377-46a2-96a9-82581727a123" not found!`)
    }
  })

})
