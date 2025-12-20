/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let count = 0
    for (let x = 0; x < strs[0].length; x++) {
        for (let y = 1; y < strs.length; y++) {
            if (strs[y-1][x] > strs[y][x]) {
                count++
                break
            }
        }
    }
    return count
};

console.log(minDeletionSize(["cba","daf","ghi"]))
// console.log(minDeletionSize(["a","b"]))
// console.log(minDeletionSize(["zyx","wvu","tsr"]))