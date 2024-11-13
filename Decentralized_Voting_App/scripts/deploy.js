async function main() {
  // Get the contract factory
  const VotingSystem = await ethers.getContractFactory("VotingSystem");
  
  // Deploy the contract
  const votingSystem = await VotingSystem.deploy();
  // Wait for deployment to complete
  await votingSystem.waitForDeployment();
  
  // Get the deployed contract address
  const address = await votingSystem.getAddress();
  console.log("VotingSystem deployed to:", address);

  // Save the contract address to .env.local
  const fs = require('fs');
  fs.writeFileSync('.env.local', `NEXT_PUBLIC_CONTRACT_ADDRESS=${address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });