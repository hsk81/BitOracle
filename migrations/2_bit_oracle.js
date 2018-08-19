var BitOracle = artifacts.require("./BitOracle.sol");

module.exports = deployer => {
  deployer.deploy(BitOracle);
};
