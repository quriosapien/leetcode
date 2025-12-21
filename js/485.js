/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function(nums) {
    let maxOnes = 0
    let lastIndex = -1
    for (let i = 0; i <= nums.length; i++) {
        if (i === nums.length || nums[i] === 0) {
            const onesCount = i - lastIndex - 1
            if (onesCount > maxOnes) {
                maxOnes = onesCount
            }
            lastIndex = i
        }
    }
    return maxOnes
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))