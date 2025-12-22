// const input = [12,345,2,6,7896]
const input = [100001]

const findNumbers = function (nums) {
  let result = 0
  nums.forEach(x => {
    const noOfDigits = Math.ceil(Math.log10(x))
    if (noOfDigits % 2 === 0) result++
  })
  return result
}

console.log(findNumbers(input))