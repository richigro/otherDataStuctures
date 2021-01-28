const { BinarySearchTree}  = require('./bst.js');

var myBst = new BinarySearchTree();

myBst.insert(10);
myBst.insert(11);
myBst.insert(8);
myBst.insert(7);
myBst.insert(12);
myBst.insert(9);
myBst.insert(10.5);

/*
            10
       8          11
    7    9   10.5     12

*/
//PreOrder
//The following function is to traverse a bst in PreOrder

const depthFirstSearchPreOrder = function(bst){
  let visited = [];
  let currentNode = bst.root;

  function helper(node){
    //push the value of current node to visited
    visited.push(node.val);
    //check to see if node has anything to the left
    if(node.left){
      //recursively call helper
      helper(node.left);
    }
    //check to see if node has anything to the right
    if(node.right){
      helper(node.right);
    }
  };
  helper(currentNode);
  return visited;
}; 

// console.log(depthFirstSearchPreOrder(myBst));

// POST ORDER
const dfsPostOrder = function(bst){
  let visited = [];
  let startingNode = bst.root;

  function traverse(node){
    if(node.left){
      traverse(node.left);
    }
    if(node.right){
      traverse(node.right);
    }
    visited.push(node.val);
  }

  traverse(startingNode);
  return visited;
}

// console.log(dfsPostOrder(myBst));

const dfsInOrder = function(bst){
  let visited = [];
  let startingNode = bst.root;

  function traverse(node){
    if(node.left) traverse(node.left);
    visited.push(node);
    if(node.right) traverse(node.right); 
  }

  traverse(startingNode);
  return visited;
};