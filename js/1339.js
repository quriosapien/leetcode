import { arrayToBinaryTree } from '../helpers/binaryTree.js';

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxProduct = function(root) {
  const updateNodeWithSum = function (node) {
    const leftSum = (node.left && updateNodeWithSum(node.left)) || 0
    const rightSum = (node.right && updateNodeWithSum(node.right)) || 0
    node.sum = node.val + leftSum + rightSum
    return node.sum
  }

  updateNodeWithSum(root)
  
  const totalSum = root.sum
  let maxResult = 0

  const operation = function (node) {
    if (node.left) {
      let leftResult = node.left.sum * (totalSum - node.left.sum)
      if (leftResult > maxResult) maxResult = leftResult
      operation(node.left)
    }
    if (node.right) {
      let rightResult = node.right.sum * (totalSum - node.right.sum)
      if (rightResult > maxResult) maxResult = rightResult
      operation(node.right)
    }
  }

  operation(root)
  return maxResult % (Math.pow(10, 9) + 7)
}


console.log(maxProduct(arrayToBinaryTree([1,2,3,4,5,6])))