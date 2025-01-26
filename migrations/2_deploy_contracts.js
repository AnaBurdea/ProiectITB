const IBTToken = artifacts.require("IBTToken");

module.exports = function (deployer) {
  deployer.deploy(IBTToken);
};
