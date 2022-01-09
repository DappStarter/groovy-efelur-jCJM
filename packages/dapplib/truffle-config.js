require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess nature swift undo name razor office pulse install muscle army gesture'; 
let testAccounts = [
"0x36d3cc84117ad7bdc95467afc0c138067c3804630325db64141000faee1bec16",
"0x90116d77a83fb3eb6e932614e0028646d303b444c46cc3bfb0bd65204a50c268",
"0x385132477a6b9ab2ac2beb5bc73d8cbb9010aa867ebc3be0337c8d56d09cec29",
"0x7dd571ed1956aed0ea1d01553a05135d22f00b2b4a06a24459ea85d50877ccba",
"0x40ba0afb46d6be7636f5fa6bc17948a702dc242e50f2b7cbb7fb188672b8027b",
"0x68f1445be7e79f00e432097d146e0a584e10cad9b4041bc3d23839b076e0f1cf",
"0x031d14c469ac51b5c3d7b65faf16292d3bb4e22f6ecd2019c55b8e6aee581172",
"0xdbb0fb49dd3bc682cd0096691be370c9a647ab7599f0f25a62f55d8048aaf515",
"0x496ef6efeeb293eab77e396ede355e4f9312f365affc456d8dfd6231138f1e07",
"0x075dee2273ea7d209f34c1e50c7a986343a4f94e8532e6db5d0fa7e87e4c9bf0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


