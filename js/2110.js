/**
 * @param {number[]} prices
 * @return {number}
 */
const getDescentPeriods = function(prices) {
    let decentStreak = null
    let smoothDecentCount = 0

    for (let i = 0; i < prices.length; i++) {
        const price = prices[i]

        if (decentStreak === null) {
            decentStreak = [price]
            continue
        }

        const lastDayPrice = decentStreak.at(-1)

        if (lastDayPrice - price === 1) {
            decentStreak.push(price)
        } else {
            const n = decentStreak.length
            smoothDecentCount += n*(n+1)/2
            decentStreak = [price]
        }
    }
    
    if (decentStreak !== null) {
        const n = decentStreak.length;
        smoothDecentCount += n * (n + 1) / 2;
    }

    return smoothDecentCount
};