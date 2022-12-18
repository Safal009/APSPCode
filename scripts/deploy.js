const hre = require("hardhat");

async function main() {
  const APSPToken = await hre.ethers.getContractFactory("APSPToken");
  const apspToken = await APSPToken.deploy(100000000, 50);

  await apspToken.deployed();

  console.log("Your token has been deployed", apspToken.address);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
