module.exports = Object.freeze({
    // required. wallet privateKey
    privateKey : "<762e4a583a3919ed50be47ed516a8e5bc5acdcdc22003dd3913f553985041fe4>",
    
    // required. Your wallet address   
    fromAddress : "<0x71B2964d3BC83D15e88Ed615Dd426f5188077ec7>".toLocaleLowerCase(),
    
    // reuiqred. Your target contract address
    toAddress: "<0x1b79c7832ed9358e024f9e46e9c8b6f56633691b>".toLocaleLowerCase(),

    // required. Find out the contract creator address
    creatorAddress: "<0x614483a30E0de7417b0cd9e3B66d9eF83C65A520>".toLocaleLowerCase(),

    // required. The price of public mint
    price: "0.08",                    
    
    // required. How many items you wants to buy
    maxPriorityFeePerGas : "200", 
    
    // required. The collection contract address you want to buy                                                                           
    maxFeePerGas : "300",                    
    
    // required. The num you want to mint
    number: "1",

    // required. http provider from infura or alchemy. It must be wss
    wssMainnet: "wss://eth-mainnet.alchemyapi.io/v2/<wss://eth-mainnet.alchemyapi.io/v2/zk1kM3TNLDOy8HD5hCM8nSo6s5LMzzN8>",

    // required. http provider from infura or alchemy. It must be wss
    wssRinkeby: "wss://eth-rinkeby.alchemyapi.io/v2/<wss://eth-rinkeby.alchemyapi.io/v2/u6epmFjOBBhh8mrh9Jj-MggcZID6HXuw>",

    // required. http provider from infura or alchemy. It must be wss
    wssGoerli : "wss://eth-goerli.alchemyapi.io/v2/<wss://eth-goerli.alchemyapi.io/v2/VFYUuU0tPJKSSJgymKFREOb3CEdb5H3i>",

    // optional. debug usage. The value should be "Rinkeby" for rinkeby, "Goerli" for goerli or "" for mainnet
    network : "Goerli",

    // timere script const, the start time of dutch
    time: 1644069600,
});
