/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m-1, j = n-1 
  while (true) {
    const index = i + j + 1

    if (i < 0) {
      nums1.splice(0, j+1, ...nums2.slice(0, j+1) )
    }
    if (j < 0) {break}

    const left = nums1[i]
    const right = nums2[j]

    if (left > right) {
      nums1.splice(index, 1, left)
      i--
    } else {
      nums1.splice(index, 1, right)
      j--
    }    
  }
};

// console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))
console.log(merge([4,5,6,0,0,0], 3, [1,2,3], 3))
