/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m-1, j = n-1 
  while (true) {
    const left = nums1[i]
    const right = nums2[j]
    const index = i + j + 1
    console.log({i, j, index, left, right, nums1})
    
    if (left > right) {
      nums1.splice(index, 1, left)
      i--
    } else {
      nums1.splice(index, 1, right)
      j--
    }
    
    if (i < 0) {break}
    if (j < 0) {break}
  }
  console.log(nums1)
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))