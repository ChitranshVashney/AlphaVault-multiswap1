// imports
const { findContractDeployer } = require("@alch/alchemy-sdk")
const { deployContract } = require("ethereum-waffle")
const { ethers, run, network } = require("hardhat")


module.exports=async({getNamedAccounts,deployments})=>{
  const{deploy,log}=deployments;
  const{deployer}=await getNamedAccounts()
  const chainId=network.config.chainId;
  const AlphaVault=await deploy("AlphaVaultSwap1",{
    from:deployer,
    args:[],
    log:true,
  })
  const verify = async (contractAddress, args) => {
  console.log("Verifying contract...")
  try {
    await run("verify:verify", {
      address: AlphaVault.address,
      constructorArguments: [],
    })
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified!")
    } else {
      console.log(e)
    }
  }
}
if(true){
await verify(AlphaVault.address,[]);
}
}