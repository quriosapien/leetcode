/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function(nums) {
  const squared = nums.map(x => x * x)
  return squared.sort((a, b) => a - b)
};


console.log(sortedSquares([-4, -1, 1, 3]))