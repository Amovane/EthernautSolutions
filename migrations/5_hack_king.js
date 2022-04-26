const HackKing = artifacts.require("HackKing");

module.exports = function (deployer) {
  deployer.deploy(HackKing); // Target Contract
};
