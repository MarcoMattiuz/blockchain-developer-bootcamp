const Token = artifacts.require("Token"); //in the folder that contains the .json artifacts of the contract it takes the Token.sol 
module.exports = function (deployer) {
  deployer.deploy(Token);
};
console.log(module)