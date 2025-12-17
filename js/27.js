/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
    let i = 0, j = nums.length - 1
    let count = 0

    while (i <= j) {
        if (nums[j] === val) {
            j--
            count++
            continue
        }

        if (nums[i] === val) {
            const temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            count++
            j--
        }

        i++
    }

    return nums.length - count
}

// console.log(removeElement([3,2,2,3], 3))
// console.log(removeElement([0,1,2,2,3,0,4,2], 2))
// console.log(removeElement([4,5], 4))