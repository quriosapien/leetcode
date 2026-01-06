const maxMatrixSum = function(matrix) {
  let overallNegativesCount = 0
  let overallSum = 0
  let overallLeastValue = Math.abs(matrix[0][0])

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i]

    for (let j = 0; j < row.length; j++) {
      const num = row[j]
      const absNum = Math.abs(num)
      overallSum += absNum


      if (num < 0) {
        overallNegativesCount++
      }

      if (absNum < overallLeastValue) {
        overallLeastValue = absNum
      }
    }
  }

  if (overallNegativesCount % 2 !== 0) {
    overallSum -= (2 * overallLeastValue)
  }
  return overallSum
}

console.log(maxMatrixSum([[1,-1],[-1,1]]))
// console.log(maxMatrixSum([[1,2,3],[-1,-2,-3],[1,2,3]]))
// console.log(maxMatrixSum([[-1,0,-1],[-2,1,3],[3,2,2]]))
// console.log(maxMatrixSum([[10,-6,-6,-8],[-3,-7,-8,-9],[-4,-8,-5,-8],[-9,-9,-6,-8]]))