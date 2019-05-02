const SPOTestnet = artifacts.require('./SPOTestnet.sol');
const SPO = artifacts.require('./SPO.sol');

module.exports = (deployer) => {
  deployer.deploy(SPO);
  deployer.deploy(SPOTestnet);
};
