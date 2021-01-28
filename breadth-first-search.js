const { BinarySearchTree}  = require('./bst.js');
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.head = null;
    this.tail = null;
    this.sizeOfQueue = 0;
  }

  enqueue(val){
    let newNode = new Node(val);
    if(!this.head && !this.tail){
      //first element
      this.tail = newNode;
      this.head = newNode;

    } else {
      //add to the tail
      let oldTail = this.tail;
      //assign newNode to be the new tail
      this.tail.next = newNode;
      this.tail = newNode;

    }
    //increment size of queue
    this.sizeOfQueue++;

    //return the whole queue
    return this;
  }

  dequeue(){
    //if queue is empty
    if(!this.sizeOfQueue){
      return undefined;
    }
    let oldHead = this.head;

    if(this.sizeOfQueue === 1){
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.sizeOfQueue--;
    //return a node not a value
    return oldHead;
  }

  size(){
    return this.sizeOfQueue;
  }
}


const breadthFirstSearch = function(root){
  let result = [];
  let queue = new Queue();
  console.log("root: ", root.val);
  //add the value of the root node into queue
  queue.enqueue(root);
  // console.log();
  //this will continue until the queue is empty
   while(queue.size() > 0){
     console.log("hi");
    let currentNode = queue.dequeue();
    // console.log("current value: ",currentNode.val);
    //add the value of current to array
    console.log("current node: ", currentNode.val.val);
    result.push(currentNode.val.val);
    if(currentNode.val.left){
      //enqueue node
      queue.enqueue(currentNode.val.left);
    } 
    if(currentNode.val.right){
      queue.enqueue(currentNode.val.right);
    }
   }

  return result;
};

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
        8     11
      7  9  10.5 12

*/
console.log("================================");
console.log(breadthFirstSearch(myBst.root));