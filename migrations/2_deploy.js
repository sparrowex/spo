const SPOTestnet = artifacts.require('./SPOTestnet.sol');

module.exports = (deployer) => {
  deployer.deploy(SPOTestnet);
};
