class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // insert(val, root=this.root) {
  //   //if the tree is empty, set the absolute root to the val
  //   if (this.root === null) {
  //     this.root = new Node(val);
  //     return;
  //   } 
  //   else {
  //     //if val is less, go left. otherwise, go right
  //     if (val < root.val) {
  //       if (root.left === null) {
  //         root.left = new Node(val);
  //       } else {
  //         this.insert(val, root.left);
  //       }
  //     } 
  //     else {
  //       if (root.right === null) {
  //         root.right = new Node(val);
  //       } else {
  //         this.insert(val, root.right);
  //       }
  //     }
  //   }
  // }

  insert(val, root=this.root) {
    if(!this.root) {
      this.root = new Node(val);
      return;
    }
    
    if (val < root.val) {
      if (root.left) {
        this.insert(val, root.left);
      }
      else {
        root.left = new Node(val);
      }
    }
    else {
      if (root.right) {
        this.insert(val, root.right);
      }
      else {
        root.right = new Node(val);
      }
    }

  }

  inOrderPrint(root=this.root) {
    if(root === null) { return };
    this.inOrderPrint(root.left);
    console.log(root.val);
    this.inOrderPrint(root.right);
  }


  //balanced tree: given the root of a tree, the left subtree nad right subtrees
  //MUST differ in heigh by at most 1.
  //AND the left subtree is balanced and the right subtree is balanced.
  
  //Balanced trees are good because the height is smaller
  //binary search in the worst case will travel the full height of the tree
  //binary search will take O(h) where h = height
  //a balanced tree has height of log(n) where n is the number of nodes


  heightDFS(root = this.root) {
    if (root === null) return -1;
    let left = this.heightDFS(root.left);
    let right = this.heightDFS(root.right);
    return Math.max(left, right) + 1;
  }

  heightBFS(root = this.root) {
    let height = -1;
    let nodes = [root];
    while(nodes.length !== 0) {
      let length = nodes.length;
      for(let i = 0; i < length; i++) {
        let currNode = nodes.shift();
        if(currNode.left) { nodes.push(currNode.left) }
        if(currNode.right) { nodes.push(currNode.right) }
      }
      height++;
    }
    return height;
  }

  search(target, root = this.root) {
    if (root === null) return false;

    if (target < root.val) {
      return this.search(target, root.left)
    } else if (target > root.val) {
      return this.search(target, root.right);
    } else {
      return true;
    }
  }

  dfPrint() {
    let stack = [this.root];
    let node;
    while (stack.length !== 0) {
      node = stack.pop();
      if(node.right) stack.push(node.right);
      if(node.left) stack.push(node.left);
      console.log(node.val);
    }
  }
  
  bfPrint() {  
    let queue = [this.root];
    let node;
    while(queue.length !== 0) {
      node = queue.shift();
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      console.log(node.val);
    }
  }
}

const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(17);

// console.log(tree.root);
// tree.inOrderPrint();
// console.log(tree.heightDFS());
// console.log(tree.heightBFS());

// console.log(tree.search(16));

console.log(tree.dfPrint());
// console.log(tree.bfPrint());


module.exports = { BST };