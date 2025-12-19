/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
const join = function(arr1, arr2) {
    arr1.sort((x, y) => x.id-y.id)
    arr2.sort((x, y) => x.id-y.id)
    let result = []
    let leftIndex = 0, rightIndex = 0

    while (leftIndex < arr1.length && rightIndex < arr2.length) {
        if (arr1[leftIndex].id < arr2[rightIndex].id) {
            result.push(arr1[leftIndex])
            leftIndex++
        } else if (arr1[leftIndex].id > arr2[rightIndex].id) {
            result.push(arr2[rightIndex])
            rightIndex++
        } else {
            const r = Object.assign({}, arr1[leftIndex])
            Object.assign(r, arr2[rightIndex])
            result.push(r)
            leftIndex++
            rightIndex++
        }
    }
    if (leftIndex === arr1.length && rightIndex < arr2.length) (
        result.push(...arr2.slice(rightIndex, arr2.length))
    )
    if (rightIndex === arr2.length && leftIndex < arr1.length) (
        result.push(...arr1.slice(leftIndex, arr1.length))
    )

    return result
}

arr1 = [{"id": 1, "x": 1}, {"id": 2, "x": 9}]
arr2 = [{"id": 3, "x": 5}]
result1 = [{"id":1,"x":1},{"id":2,"x":9},{"id":3,"x":5}]

arr1 = [{"id": 1,"x": 1},{"id": 2,"x": 9}]
arr2 =[{"id": 3,"x": 5}, {"id": 1,"x": 1}]
result2 = [{"id": 1, "x": 1}, {"id": 2, "x": 9}, {"id": 3, "x": 5}
]