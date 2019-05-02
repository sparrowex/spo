const SPO = artifacts.require('./SPO.sol');
const BigNumber = require('bignumber.js');

let spo;
const owner = web3.eth.accounts[0];

contract('SPO (Mainnet) smart contract', () => {
  before(async () => {
    spo = await SPO.deployed();
  });

  it('has the correct total number of token supply and correct allocations', async () => {
    assert.equal(await spo.totalSupply(), 1.4 * 1e9 * 1e18);

    assert.equal(await spo.balanceOf('0x506c8fB175F87C99612D5Cb62BcdDF0490934A41'),  140000000 * 1e18); // Private Sale
    assert.equal(await spo.balanceOf('0xb1b129797cF79e750429A4c4FC793ce6A4D018F8'),  100000000 * 1e18); // Presale
    assert.equal(await spo.balanceOf('0x8C0dfbD4B2352CC0AF81AdcCB88F50e5baA201F4'),  136000000 * 1e18); // Public Sale
    assert.equal(await spo.balanceOf('0xa177fd7586e03013A4d205BAa6aE22A1Df8A84aa'),   57000000 * 1e18); // Bonus
    assert.equal(await spo.balanceOf('0xBa0a1e153a88fE140676B913cc988D27c02e44dB'),   70000000 * 1e18); // Advisors
    assert.equal(await spo.balanceOf('0xC4DB967C9592dE7f574Bc7ECA4Cbda069A77A385'),  140000000 * 1e18); // Founders
    assert.equal(await spo.balanceOf('0xF4B13a7E1Ae1dBe30a991feD1887d21305b7d605'),   70000000 * 1e18); // Employees
    assert.equal(await spo.balanceOf('0x883F593d0D38e7B0A86032853b1121f04a9b0b45'),  337000000 * 1e18); // Reserves
    assert.equal(await spo.balanceOf('0xcBfDB375A83Afd91756AfB3d740Be871A9652beF'),  140000000 * 1e18); // Marketing
    assert.equal(await spo.balanceOf('0xee08909103a90F955D9294d48f18CA6B49813534'),  210000000 * 1e18); // Partnership
  });
});
