
//treeSum
//Write a function that accepts the root of a tree as an arg.
//The function should return the total sum of all node values in the tree.
const { BST } = require("./BST");

function treeSum(root) {
  if (root === null) return 0;
  let leftSum = treeSum(root.left);
  let rightSum = treeSum(root.right);

  return leftSum + rightSum + root.val;
}
// console.log(treeSum(tree.root));



//max_path_sum.js
//Write a function that accepts the root of a tree as an arg.
//The function should return the max sum of a path through the tree.
//For this problem, a path must begin at the root and end at a leaf.

function maxPathSum(root) {
  if (root === null) {
    return -1 * Infinity;
  }
  let left = maxPathSum(root.left);
  let right = maxPathSum(root.right);
  let best = Math.max(left, right);
  if (best === -Infinity) {
    return root.val;
  }
  return Math.max(left, right) + root.val;
}

const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(17);

// console.log(maxPathSum(tree.root));



//Leet Code Easy 108.
// Given an array where elements are sorted in ascending order, convert it to
//a height balanced BST


