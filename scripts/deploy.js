async function main() {
  // if you changed the name of the contract, be sure to update this here!
  const MyToken = await hre.ethers.getContractFactory("Taglines");

  const nft = await MyToken.deploy();

  await nft.deployed();

  console.log("NFT deployed to:", nft.address);
 
  const signer0 = await ethers.provider.getSigner(0);
  await nft.safeMint(await signer0.getAddress(), "ipfs://QmVyc17psCs5RrzNfFR8Zw36kqp3Jwkvu1uBswFP1vVmof");

  console.log("NFT Minted!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });