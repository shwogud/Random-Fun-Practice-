class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    //initialize new node
    var node = new Node(data);
    if (this.root === null) {
      this.root = node;
    }
    else {
      var current = this.root;
      while(current) {
        if(node.data < current.data) {
          if(!current.left) {
            current.left = node;
            break;
          }
          current = current.left;
        }
        else if (node.data > current.data) {
          if(!current.right) {
            current.right = node;
            break;
          }
          current = current.right;
        }
        else {
          break;
        }
      }
    }
  }
}

function isBST(node, min = null, max = null) {
  if(node === null) return true;

  if ((min && (min > node.value)) || (max && max < node.value)) {
    return false;
  }

  let left = isBST(node.left, min, node.value);
  let right = isBST(node.right, node.value, max);

  return left && right;
}

var bst = new BinarySearchTree();
// bst.root = 5;
bst.insert(5);
bst.insert(3);
bst.insert(1);
bst.insert(2);
bst.insert(7);
bst.insert(6);
bst.insert(8);

console.log(bst);
// console.log(bst.root);
// console.log(bst.root.right);
// console.log(bst.left.left);

console.log(isBST(bst));


module.exports = { BST };