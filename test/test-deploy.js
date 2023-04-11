const { ethers } = require("hardhat")
const { expect, assert } = require("chai");
const { inputToConfig } = require("@ethereum-waffle/compiler");

// describe("SimpleStorage", () => {})
describe("AlphaVaultSwap", function () {
  let AlphaVaultSwap,alphaVaultSwap;
  // let simpleStorageFactory
  // let simpleStorage
  // let simpleStorageFactory, simpleStorage

  beforeEach(async function () {
    AlphaVaultSwap = await ethers.getContractFactory("AlphaVaultSwap")
    alphaVaultSwap = await AlphaVaultSwap.deploy()
  })
  it("Swap ether with weth",async function(){
    
  })
  // it("Should start with a favorite number of 0", async function () {
  //   const currentValue = await simpleStorage.retrieve()
  //   const expectedValue = "0"
  //   // assert
  //   // expect
  //   assert.equal(currentValue.toString(), expectedValue)
  //   // expect(currentValue.toString()).to.equal(expectedValue)
  // })
  
})
