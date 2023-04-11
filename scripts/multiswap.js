const { ethers, run, network } = require("hardhat")

// async main

async function main() {
  
  

  const { deployer } = await getNamedAccounts()
  const account = await ethers.getSigner(deployer)
  console.log(account.address)

    
    const Weth = await ethers.getContractAt(
      "IWETH",
      "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6"
      )
      const initial=Weth.balanceOf(account.address)
    //   const initial_weth=initial.wait(1)
      console.log(initial)


    const AlphaVaultSwap = await ethers.getContractAt(
      "AlphaVaultSwap",
      "0x81e2fEa7825CBeca8d9DD673164822Bcacb1f852",
      account
      )
      const txResponse =await AlphaVaultSwap.swapToWeth(["0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6","0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844"],[50,50])
      await txResponse.wait()

      const final=Weth.balanceOf(account.address)
        // const final_weth=final.wait(1)
      console.log(final)
}
// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
