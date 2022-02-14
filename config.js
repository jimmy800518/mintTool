module.exports = Object.freeze({
    // required. wallet privateKey
    privateKey : "<762e4a583a3919ed50be47ed516a8e5bc5acdcdc22003dd3913f553985041fe4>",
    
    // required. Your wallet address   
    fromAddress : "<0x71B2964d3BC83D15e88Ed615Dd426f5188077ec7>".toLocaleLowerCase(),
    
    // reuiqred. Your target contract address
    toAddress: "<0x9C99d7f09d4a7e23EA4E36AeC4CB590C5bbdB0e2>".toLocaleLowerCase(),

    // required. Find out the contract creator address
    creatorAddress: "<0xb19bd96932bdA3d66A4eDE9Ee69d77d909203b9f>".toLocaleLowerCase(),

    // required. The price of public mint
    price: "0.05",                    
    
    // required. How many items you wants to buy
    maxPriorityFeePerGas : "2", 
    
    // required. The collection contract address you want to buy                                                                           
    maxFeePerGas : "100",                    
    
    // required. The num you want to mint
    number: "2",

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
