var Node = function(val) {
  this.val = val;
  this.next = null;
};

var SinglyLinkedList = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

// for insertions at the end of the linked list
SinglyLinkedList.prototype.push = function(val) {
  // create a new node
  var newNode = new Node(val);
  // if its empty add to be head and tail
  if(!this.head){
    this.tail = newNode;
    this.head = newNode;
  }
  //if its not empty add to tail
  
  this.tail.next = newNode;
  this.tail = newNode;

  this.length++;
};

SinglyLinkedList.prototype.remove = function(val) {
  if(!this.size){
    return undefined;
  }
  // start at the begining and check each node
  // until you find 
  function traverse(currentNode) {
    //check to see if the current node's value is the node you need to remove
    if(currentNode.val === val){
      return currentNode;
    } 
    //base case, if current node's next is null 
    // it means that were are at the last node 
    if(!node.next){
    
    }
    // got to the next node
    traverse(currentNode.next);
  };
  traverse(this.head);
};

var mySLinkedList = new SinglyLinkedList();
mySLinkedList.push(5);
mySLinkedList.push(10);
mySLinkedList.push(7);
mySLinkedList.push(90);
console.log(mySLinkedList);