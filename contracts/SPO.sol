pragma solidity ^0.5.0;

import 'openzeppelin-solidity/contracts/token/ERC20/ERC20.sol';
import 'openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol';

/**
 * @title Sparrow Options
 * @dev Very simple ERC20 Token example, where all tokens are pre-assigned to the creator.
 * Note they can later distribute these tokens as they wish using `transfer` and other
 * `ERC20` functions.
 */
contract SPO is ERC20, ERC20Detailed {
  uint8 private constant DECIMAL_PLACES = 18;
  uint256 private constant LECONTE = 10 ** uint256(DECIMAL_PLACES); // 1 SPO's base unit (similar to wei of Ether)
  uint256 public constant TOTAL_SUPPLY = 1400000000 * LECONTE; // 1.4 billion SPO

  /**
   * @dev Constructor that gives msg.sender all of existing tokens.
   */
  constructor () public ERC20Detailed('Sparrow Options', 'SPO', DECIMAL_PLACES) {
    // To be updated with actual addresses during actual distribution
    _mint(0xCF44ccB8f27aEA1abb054d4Ae89AA00CFbda3603, 376000000 * LECONTE); // ICO
    _mint(0xEd6D7d1Ffb258bB82A6B5Cf2C2377DCAA6A0b533, 57000000 * LECONTE); // Bonus
    _mint(0x1fcE49D845036a54E348fe10Aa6f541DEb48547a, 70000000 * LECONTE); // Advisors
    _mint(0xEf235b3CaAA268C4Db6215879a436Af751A0F729, 140000000 * LECONTE); // Founders
    _mint(0x49035f3a38644d805C8AEdA5eB5fAA5DB54A5fA0, 70000000 * LECONTE); // Employees
    _mint(0xdaBF505B241695788780b12515066746fDD65592, 337000000 * LECONTE); // Reserves Pool
    _mint(0xEf13476b380C31CA6B1FB5C49d5CfCedcdB90b69, 140000000 * LECONTE); // Marketing
    _mint(0xe998a139D865883C8964d34048a9acb75Eb314Ba, 210000000 * LECONTE); // Strategic Partnerships

    assert(totalSupply() == TOTAL_SUPPLY); // Ensure that exactly all total supply has been allocated
  }
}
