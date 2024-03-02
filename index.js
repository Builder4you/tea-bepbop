// Function to fetch cryptocurrency price in USD
async function fetchCryptoPrice(cryptoId) {
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=usd`);
        const data = await response.json();
        const cryptoPrice = data[cryptoId].usd;
        return cryptoPrice;
    } catch (error) {
        throw new Error('Error fetching cryptocurrency price:', error);
    }
}

// Test case for fetching Bitcoin price
async function testFetchBitcoinPrice() {
    try {
        const bitcoinPrice = await fetchCryptoPrice('bitcoin');
        console.log('Bitcoin price in USD:', bitcoinPrice);
    } catch (error) {
        console.error('Test failed:', error.message);
    }
}

// Test case for fetching Ethereum price
async function testFetchEthereumPrice() {
    try {
        const ethereumPrice = await fetchCryptoPrice('ethereum');
        console.log('Ethereum price in USD:', ethereumPrice);
    } catch (error) {
        console.error('Test failed:', error.message);
    }
}

// Run test cases
testFetchBitcoinPrice();
testFetchEthereumPrice();
