const HackCoinFlip = artifacts.require("HackCoinFlip");

module.exports = function (deployer) {
  deployer.deploy(HackCoinFlip, "0xFe85aC43d4eAdAA5f1f574dA86271434d82C9C40"); // Target Contract
};
