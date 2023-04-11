const { ethers, run, network } = require("hardhat")

// async main

async function main() {
  
  

  const { deployer } = await getNamedAccounts()
  const account = await ethers.getSigner(deployer)
  console.log(account.address)
  const IRC20 = await ethers.getContractAt(
    "IERC20",
    "0x326C977E6efc84E512bB9C30f76E30c160eD06FB"
    )

    const initBal=await IRC20.balanceOf(deployer)
    console.log(initBal);
    
    const AlphaVaultSwap = await ethers.getContractAt(
      "AlphaVaultSwap",
      "0xD0dA6af343B12225AF803CF157DEF8366ae01d32",
      account
      )
      const txResponse =await AlphaVaultSwap.swapExactInputSingle(100000000)
      await txResponse.wait()
    console.log(IRC20. balanceOf(deployer));
}
// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
