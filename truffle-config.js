var HDWalletProvider = require('@truffle/hdwallet-provider');

const dotenv = require('dotenv');
const result = dotenv.config();
if (result.error) {
  throw result.error;
}
console.log(result.parsed);

var mnemonic_ropsten = process.env.mnemonic_ropsten;
var infura_apikey = '';
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic_ropsten, 'https://ropsten.infura.io/v3/' + infura_apikey),
      network_id: 3,
      gas: 5500000,
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true  
    }
  },
  compilers: {
    solc:{
      version: '0.5.6'
    }
  }
};
