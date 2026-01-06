const arrayToBinaryTree = function (arr) {
  if (!arr || arr.length === 0) return null

  const root = { val: arr[0], left: null, right: null }
  const queue = [root]
  let i = 1
  
  while (queue.length && i < arr.length) {
    const node = queue.shift()
    
    if (arr[i] !== null) {
      node.left = { val: arr[i], left: null, right: null }
      queue.push(node.left)
    }
    i++
    
    if (i < arr.length && arr[i] !== null) {
      node.right = { val: arr[i], left: null, right: null }
      queue.push(node.right)
    }
    i++
  }
  
  return root
}

const maxLevelSum = function(root) {
  const sums = new Map()
  let highestValue = null
  let highestValueLevel = null
  
  const calculate = function (accumulator, node, level) {
    const value = node.val || 0
    const hasLevel = sums.has(level)
    
    if (!hasLevel) {
      sums.set(level, value)
    } else {
      sums.set(level, value + sums.get(level))
    }

    node.left && calculate(accumulator, node.left, level+1)
    node.right && calculate(accumulator, node.right, level+1)
  }

  calculate(sums, root, 1)
  sums.forEach((value, key) => {
    if (highestValueLevel === null) {
      highestValueLevel = key
      highestValue = value
    } else if (value > highestValue) {
      highestValueLevel = key
      highestValue = value
    }
  })
  return highestValueLevel
}

console.log(maxLevelSum(arrayToBinaryTree([1,7,0,7,-8,null,null]))) // 2