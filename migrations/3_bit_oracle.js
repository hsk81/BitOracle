const BitLibrary = artifacts.require("./BitLibrary.sol");
const BitOracle = artifacts.require("./BitOracle.sol");

module.exports = deployer => {
  deployer.link(BitLibrary, BitOracle);
  deployer.deploy(BitOracle);
};
