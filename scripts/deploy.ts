import { ethers } from "hardhat";

async function main() {
  // modified for lectureNFT
  const LectureNFT = await ethers.getContractFactory('LectureNFT');
  const contract = await LectureNFT.deploy();
  await contract.deployed();

  console.log(`NFT contract: `, contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
