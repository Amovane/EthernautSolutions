const dotenv = require("dotenv");
dotenv.config();
const fs = require("fs");
const Web3 = require("web3");
const HDWalletProvider = require("@truffle/hdwallet-provider");

const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID;
const infuraURL = `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`;
const privateKey = fs.readFileSync(".privatekey").toString().trim();
const web3 = new Web3(new HDWalletProvider(privateKey, infuraURL));

module.exports = {
  web3,
  dotenv,
};
