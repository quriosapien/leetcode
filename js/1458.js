/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const maxDotProduct = function(nums1, nums2) {
  const dp = Array.from({ length: nums1.length }, () => new Array(nums2.length).fill(-Infinity))
  
  const findDotProduct = function (i1, i2) {
    if (i1 === nums1.length || i2 === nums2.length) return -Infinity
    if (dp[i1][i2] !== -Infinity) return dp[i1][i2]
    
    const v1 = nums1[i1]
    const v2 = nums2[i2]

    const self = v1 * v2
    const right = findDotProduct(i1, i2 + 1)
    const bottom = findDotProduct(i1 + 1, i2)
    const longer = self + Math.max(0, findDotProduct(i1 +1, i2 + 1))

    return dp[i1][i2] = Math.max(self, right, bottom, longer)
  }
  
  return findDotProduct(0, 0)
}


// add more test input values here
// const nums1 = [-1, -1]
// const nums2 = [1, 1]

const nums1 = [13,-7,12,-15,-7,8,3,-7,-5,13,-15,-8,5,7,-1,3,-11,-12,2,-12]
const nums2 = [1, 1]

console.log(maxDotProduct(nums1, nums2))