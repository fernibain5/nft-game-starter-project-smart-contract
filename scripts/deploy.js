const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["Sparrow Chickie", "Lark Ethel", "Seagull Pixie"],       // Names
      ["https://lk7egz52xtgozctkhmioqr57w2tojspujfgexo7qm6wuiqmlqfsa.arweave.net/Wr5DZ7q8zOyKajsQ6Ee_tqbkyfRJTEu78GetREGLgWQ/0385.png", // Images
      "https://lk7egz52xtgozctkhmioqr57w2tojspujfgexo7qm6wuiqmlqfsa.arweave.net/Wr5DZ7q8zOyKajsQ6Ee_tqbkyfRJTEu78GetREGLgWQ/1069.png", 
      "https://lk7egz52xtgozctkhmioqr57w2tojspujfgexo7qm6wuiqmlqfsa.arweave.net/Wr5DZ7q8zOyKajsQ6Ee_tqbkyfRJTEu78GetREGLgWQ/0904.png"],
      [200, 100, 300],                    // HP values
      [100, 50, 150],                       // Attack damage values
      "Carl the Bot", // Boss name
      "https://image.pngaaa.com/233/4394233-middle.png", // Boss image
      10000, // Boss hp
      50 // Boss attack damage      
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;
    // We only have three characters.
    // an NFT w/ the character at index 2 of our array.
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();
      
  };

  
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();