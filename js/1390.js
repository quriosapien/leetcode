const sumFourDivisors = function(nums) {
    const divisorsOf = function (num) {
        const divisors = new Set()
        for (let i = 1; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                divisors.add(i)
                divisors.add(num / i)
            }
        }
        return divisors.values().toArray()
    }

    let result = 0

    for (let i = 0; i < nums.length; i++) {
        const divisors = divisorsOf(nums[i])
        if (divisors.length === 4) {
            result += divisors.reduce((acc, divisor) => acc + divisor, 0)
        }
    }
    
    return result
};