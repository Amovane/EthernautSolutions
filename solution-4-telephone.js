require("dotenv").config();
const fs = require("fs");
const Web3 = require("web3");
const HDWalletProvider = require("@truffle/hdwallet-provider");

const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID;

const infuraURL = `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`;
const privateKey = fs.readFileSync(".privatekey").toString().trim();
const web3 = new Web3(new HDWalletProvider(privateKey, infuraURL));
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
