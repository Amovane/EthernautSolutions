const HackTelephone = artifacts.require("HackTelephone");

module.exports = function (deployer) {
  deployer.deploy(HackTelephone, "0xd62a1076e43c499C96D0aE757fF6cD598d2Fe98F"); // Target Contract
};
