export const arrayToBinaryTree = function (arr) {
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

export default {
  arrayToBinaryTree
}