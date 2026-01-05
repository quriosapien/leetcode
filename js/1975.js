const maxMatrixSum = function(matrix) {
    const rowMeta = []
    
    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i]
        let negativesCount = 0
        let leastValue = Math.abs(row[0])
        let leastValueIndex = 0
        let rowSum = 0

        for (let j= 0; j < row.length; j++) {
            const num = row[j]
            rowSum += Math.abs(num)
            if (num < 0) negativesCount++
            if (Math.abs(num) < leastValue) {
                leastValue = Math.abs(num)
                leastValueIndex = j
            }
        }
        rowMeta[i] = {
            negativesCount, leastValue, leastValueIndex, rowSum
        }
    }
    console.log(rowMeta)

    let sum = 0
    
    for (let i = 0; i < rowMeta.length; i++) {
      const rowDetails = rowMeta[i]
      sum += rowDetails.rowSum
      
      if (rowDetails.negativesCount % 2 === 0) {
        continue
      }
      if (rowDetails.leastValue === 0) {
        continue
      }

      const previousRow = i === 0 ? null : rowMeta[i-1]
      const nextRow = i === rowMeta.length - 1 ? null : rowMeta[i+1]

      if ((nextRow && nextRow.leastValue === 0) || (previousRow && previousRow.leastValue === 0)) {
        continue
      }

      if (nextRow && nextRow.negativesCount % 2 !== 0) {
        sum += nextRow.rowSum
        i++
        continue
      }
      
      sum -= 2 * rowDetails.leastValue
    }

    //   if (i === rowMeta.length - 1) {
    //     sum -= 2 * rowDetails.leastValue
    //     continue
    //   } else {
    //     const nextRowDetails = rowMeta[i+1]
    //     sum += nextRowDetails.rowSum
        
    //     if (nextRowDetails.negativesCount % 2 === 0) {
    //       // if previuos rows least value !== 0 
    //       const previousRow = rowDetails[i-1]

    //       if ((previousRow && previousRow.leastValue !== 0) || nextRowDetails.leastValue !== 0) {
    //         sum -= 2 * rowDetails.leastValue
    //       }

    //       i++
    //       continue
    //     } else {
    //       i++
    //       continue
    //     }
    //   }
    // }
    return sum
}

// console.log(maxMatrixSum([[1,-1],[-1,1]]))
// console.log(maxMatrixSum([[1,2,3],[-1,-2,-3],[1,2,3]]))
// console.log(maxMatrixSum([[-1,0,-1],[-2,1,3],[3,2,2]]))
console.log(maxMatrixSum([[10,-6,-6,-8],[-3,-7,-8,-9],[-4,-8,-5,-8],[-9,-9,-6,-8]]))