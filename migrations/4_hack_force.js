const HackForce = artifacts.require("HackForce");

module.exports = function (deployer) {
  deployer.deploy(HackForce, "0xe42dF44F0ab7F17b85626110680ae608560F22b5"); // Target Contract
};
