var plusOne = function(digits) {
    let i = digits.length - 1
    let remainder = 1
    
    while (i >= 0) {
      digits[i] += remainder
      remainder = parseInt(digits[i] / 10, 10)
      digits[i] %= 10
      
      if (i === 0 && remainder) {
        digits.unshift(remainder)
      }
      i--
    }

    return digits
};

// console.log(plusOne([1, 2, 3]))
// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))
console.log(plusOne([9]))