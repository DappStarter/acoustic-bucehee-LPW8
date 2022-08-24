require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gesture bread tail tragic educate ranch remain exchange gloom clip bone slam'; 
let testAccounts = [
"0xbc9aba341c325dcc9228e0ce03a3aa35b9c5c5fb8e11eb3430f1da40a747c949",
"0x4dbc2043f0f34e7d079dd0969be445085958f974e15a3f4e97945ec020b34c75",
"0xce0c4c274d32fe593a60675083ad34dbb039b3355752380f7c484f126d4abd29",
"0x4d7f8d397ca8f56132088224d0d7d333f19db5e17e8ee3e138db1a5e81aa0fa6",
"0x615bd301a116f9fe1938d2d4cf4b872e05313393b2f92a6b78df3b2ffa105d38",
"0xb114cb74fbfe867c77d7961b169ff5a9c5c6a950fd70cdd3e5ea4bb03b79d754",
"0xa65a1397f3b2930a8b4af596587c80fabee13dfd8073a1cf694c2de22dba9d79",
"0x2438c4cf3f10bf561dafa86f3907ba44f609bc886dec0ace69a2e8dcc53d1649",
"0xd87a0154cc4c712c7ea6ab7c046e01ffcebef307b0b405b553b3b1669a9a294c",
"0x5947f06504ee773568f6101831cc2b4968a5ab1a5f4592919f1349df44d5e91d"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


