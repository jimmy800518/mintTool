module.exports = Object.freeze({
    // required. wallet privateKey
    privateKey : "<1a59b43eff6b7fa40c76ccd68692131e25228a5408242df39b5e5fefb67518a1>",
    
    // required. Your wallet address   
    fromAddress : "<0xA5A01B789a6Bca7b711b38485315116351eFA7e7>".toLocaleLowerCase(),
    
    // reuiqred. Your target contract address
    toAddress: "<0x44C34b465DeCdE6996a18F233a03a66AB25bc64E>".toLocaleLowerCase(),

    // required. Find out the contract creator address
    creatorAddress: "<0xA6c0F7bde119930fB919ed02F8155887EcF0D756>".toLocaleLowerCase(),

    // required. The price of public mint
    price: "0.001",                    
    
    // required. How many items you wants to buy
    maxPriorityFeePerGas : "1.5", 
    
    // required. The collection contract address you want to buy                                                                           
    maxFeePerGas : "120",                    
    
    // required. The num you want to mint
    number: "1",

    // required. http provider from infura or alchemy. It must be wss
    wssMainnet: "wss://eth-mainnet.alchemyapi.io/v2/<wss://eth-mainnet.alchemyapi.io/v2/zk1kM3TNLDOy8HD5hCM8nSo6s5LMzzN8>",

    // required. http provider from infura or alchemy. It must be wss
    wssRinkeby: "wss://eth-rinkeby.alchemyapi.io/v2/<wss://eth-rinkeby.alchemyapi.io/v2/u6epmFjOBBhh8mrh9Jj-MggcZID6HXuw>",

    // required. http provider from infura or alchemy. It must be wss
    wssGoerli : "wss://eth-goerli.alchemyapi.io/v2/<wss://eth-goerli.alchemyapi.io/v2/VFYUuU0tPJKSSJgymKFREOb3CEdb5H3i>",

    // optional. debug usage. The value should be "Rinkeby" for rinkeby, "Goerli" for goerli or "" for mainnet
    network : "",

    // timere script const, the start time of dutch
    time: 1644069600,
});
