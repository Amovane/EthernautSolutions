const { web3, dotenv } = require("./common.js");
dotenv.config();
const abi = require("./build/contracts/HackForce.json").abi;

(async () => {
  try {
    const contract = new web3.eth.Contract(
      abi,
      "0xDb9e3B7E43ec8bFF71d12c33e85be59eACe57b34"
    );
    await contract.methods.hack().send({ from: process.env.WALLET_ADDRESS });
    console.log("Done");
  } catch (e) {
    console.log(e.message);
  }
})();
