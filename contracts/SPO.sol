pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";

/**
 * @title Sparrow Options
 * @dev Very simple ERC20 Token example, where all tokens are pre-assigned to the creator.
 * Note they can later distribute these tokens as they wish using `transfer` and other
 * `ERC20` functions.
 */
contract SPO is ERC20, ERC20Detailed {
    uint256 public constant TOTAL_SUPPLY = 1400000000 * (10 ** 18); // 1.4 billion SPO

    /**
     * @dev Constructor that gives msg.sender all of existing tokens.
     */
    constructor () public ERC20Detailed("Sparrow Options", "SPO", 18) {
        _mint(msg.sender, TOTAL_SUPPLY);
    }
}
