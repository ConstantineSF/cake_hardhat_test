const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function() {

  // it.skip("Should return the new greeting once it's changed", async function() {
  //   const Greeter = await ethers.getContractFactory("Greeter");
  //   const greeter = await Greeter.deploy("Hello, world!");
    
  //   await greeter.deployed();
  //   expect(await greeter.greet()).to.equal("Hello, world!");

  //   await greeter.setGreeting("Hola, mundo!");
  //   expect(await greeter.greet()).to.equal("Hola, mundo!");
  // });

  it("Swap CAKE for BNB", async function() {
  //   const Contract = await ethers.getContractFactory("PancakeRouter")
  //   const contract = await Contract.deploy('0x10ED43C718714eb63d5aA57B78B54704E256024E','0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199')
  //   await contract.deployed();
  //   // await contract.deployed('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266','0x70997970C51812dc3A010C7d01b50e0d17dc79C8')
  // const addr1 = 0x10ED43C718714eb63d5aA57B78B54704E256024E

  //IPancakePair \ name
  const swap_contract = await ethers.getContractFactory("PancakeRouter")
  console.log(await ethers.getContractFactory("PancakeRouter"))
  await swap_contract.deploy('0x10ED43C718714eb63d5aA57B78B54704E256024E','0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199')

  // expect(await swap_contract.allPairsLength()).to.equal(993)
  expect('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266').to.be.properAddress;


  // const contract = await swap_contract.deploy('0x10ED43C718714eb63d5aA57B78B54704E256024E','0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199')
  // console.log(await swap_contract.name())
  //   // const swap_contract2 = await swap_contract.deployed();


  //   const swap_contract = await ethers.getContractFactory("PancakeRouter")
  //   const swap_contract2 = await swap_contract.deployed();
  //   console.log(await swap_contract2.allPairsLength().call())
    // await swap_contract.swapExactTokensForETH('1000000000000000000', '63505238497699588',['0e09fabb73bd3ade0a17ecc321fd13a19e81ce82','bb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'] ,'0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266','1619881590' )
  //   expect(await swap_contract.swapExactTokensForETH()).to.equal("Hola, mundo!");
    
  });

  //Ownable
});
