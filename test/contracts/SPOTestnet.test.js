const SPOTestnet = artifacts.require('./SPOTestnet.sol');
const BigNumber = require('bignumber.js');

let spo;
const owner = web3.eth.accounts[0];

contract('SPOTestnet smart contract', () => {
  before(async () => {
    spo = await SPOTestnet.deployed();
  });

  it('has the correct total number of token supply and correct allocations', async () => {
    assert.equal(await spo.totalSupply(), 1.4 * 1e9 * 1e18);

    assert.equal(await spo.balanceOf('0xCF44ccB8f27aEA1abb054d4Ae89AA00CFbda3603'), 376000000 * 1e18); // ICO
    assert.equal(await spo.balanceOf('0xEd6D7d1Ffb258bB82A6B5Cf2C2377DCAA6A0b533'), 57000000 * 1e18); // Bonus
    assert.equal(await spo.balanceOf('0x1fcE49D845036a54E348fe10Aa6f541DEb48547a'), 70000000 * 1e18); // Advisors
    assert.equal(await spo.balanceOf('0xEf235b3CaAA268C4Db6215879a436Af751A0F729'), 140000000 * 1e18); // Founders
    assert.equal(await spo.balanceOf('0x49035f3a38644d805C8AEdA5eB5fAA5DB54A5fA0'), 70000000 * 1e18); // Employees
    assert.equal(await spo.balanceOf('0xdaBF505B241695788780b12515066746fDD65592'), 337000000 * 1e18); // Reserves Pool
    assert.equal(await spo.balanceOf('0xEf13476b380C31CA6B1FB5C49d5CfCedcdB90b69'), 140000000 * 1e18); // Marketing
    assert.equal(await spo.balanceOf('0xe998a139D865883C8964d34048a9acb75Eb314Ba'), 210000000 * 1e18); // Strategic Partnerships
  });
});
