const BitLibrary = artifacts.require("./BitLibrary.sol");

module.exports = deployer => {
  deployer.deploy(BitLibrary);
};
