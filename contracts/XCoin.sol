pragma solidity ^0.4.11;

import './token/MintableToken.sol';

contract XCoin is MintableToken {
  string public name = "X COIN";
  string public symbol = "X";
  uint256 public decimals = 8;
}