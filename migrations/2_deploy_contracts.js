var XCoinCrowdsale = artifacts.require("./XCoinCrowdsale.sol");

module.exports = function(deployer) {
 const startBlock = web3.eth.blockNumber + 2
  const endBlock = startBlock + 300
  // const rate = new web3.BigNumber(1000)
  const rate = 1
  const wallet = web3.eth.accounts[0]

  deployer.deploy(XCoinCrowdsale, startBlock, endBlock, rate, wallet)
};
