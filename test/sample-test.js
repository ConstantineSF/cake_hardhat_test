const { expect } = require("chai");

describe("Greeter", function() {

  it.skip("Should return the new greeting once it's changed", async function() {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    
    await greeter.deployed();
    expect(await greeter.greet()).to.equal("Hello, world!");

    await greeter.setGreeting("Hola, mundo!");
    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });

  it("Swap CAKE for BNB", async function() {
    const Contract = await ethers.getContractFactory("PancakeRouter")
    const contract = await Contract.deploy('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266','0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')
    await contract.deployed();
    // await contract.deployed('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266','0x70997970C51812dc3A010C7d01b50e0d17dc79C8')

    
  });

  //Ownable
});
