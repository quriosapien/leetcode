/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function(nums) {
  let left = 0, right = nums.length - 1
  const result = []

  for (; left <= right; ) {
    const leftNum = nums[left]
    const leftSquare = leftNum * leftNum
    const rightNum = nums[right]
    const rightSquare = rightNum * rightNum
    
    if (leftSquare > rightSquare) {
      result.unshift(leftSquare)
      left++
    } else {
      result.unshift(rightSquare)
      right--
    }
  }
  return result
};


console.log(sortedSquares([-4, -1, 1, 3]))