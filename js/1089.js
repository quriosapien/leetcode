/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const duplicateZeros = function(arr) {
    const len = arr.length
    let i = 0
    
    while (i < len - 1) {
      if (arr[i] === 0) {
        let j = len - 1
        for (; j > i; j--) {
          arr[j] = arr[j-1]
        }
        arr[i+1] = 0
        i += 2
        continue
      }
      i++
    }
};

console.log(duplicateZeros([1,0,2,3,0,4,5,0])) // [1,0,0,2,3,0,0,4]