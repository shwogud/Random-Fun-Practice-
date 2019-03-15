class Node {
  constructor(data = nil) {
    this.data = data 
    this.right = nil 
    this.left = nil 
  }
}

class BST {
  constructor(props) {
    
  }
}
function bfs(node, target) {
  let nodes = [node]
  let node;

  while (nodes.length > 0) {
    node = nodes.shift;
    if (node.value === target) {
      return node;
    }
    nodes.concat(node.children)
  }

  return null;
}