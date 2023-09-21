const maxProfit = (prices) => {
    if (prices.length < 2) {
        return 0;
    }


    let lowestPrice = prices[0]
    let highestPrice = 0

    for (const currentPrice of prices) {
        if (currentPrice < 1 || currentPrice > 10**4) {
            return 'price is out of range'
        }

        if (!Number.isInteger(currentPrice)) {
            return 'price must be integer'
        }

        if (currentPrice < lowestPrice) {
            lowestPrice = currentPrice
        }

        const predictedProfit = currentPrice - lowestPrice

        highestPrice = Math.max(highestPrice, predictedProfit)
    }


    return highestPrice
}


console.log(maxProfit([89, 34, 23, 12, 54, 21, 65, 2, 10000]) );