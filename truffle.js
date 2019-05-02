module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: 'localhost',
      // port: 9545, // truffle develop
      port: 8545,
      network_id: '*',// Match any network id
    }
  },
  compilers: {
    solc: {
      version: '^0.5.2',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  },
};
