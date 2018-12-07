const SPO = artifacts.require('./SPO.sol');
const BigNumber = require('bignumber.js');

let spo;
const owner = web3.eth.accounts[0];
const nonOwner = web3.eth.accounts[5];

contract('SPO smart contract', () => {
  before(async () => {
    spo = await SPO.deployed();
  });

  it('has the correct total number of token supply', async () => {
    assert.equal(await spo.totalSupply(), 1.4 * 1e9 * 1e18);
  });
});
