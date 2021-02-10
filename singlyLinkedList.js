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
  }else {
    //if its not empty add to tail
    //point the current tail's next to the newly created node
    this.tail.next = newNode;
    // point the tail pointer to the newly created node
    this.tail = newNode;
  }
  // increment the length
  this.length++;
  // return the whole linked list
  return this;
};

//remove the last element in the linked list
SinglyLinkedList.prototype.pop = function(val) {
  if(!this.head){
    return undefined;
  }
  // start at the begining and check each node
  //keep track of the tail to be deleted
  var current = this.head;
  var newTail = current;
  while(current.next) {
    newTail = current;
    current = current.next;
  }
  //make the penultimate node now be the last node in the list
  this.tail = newTail;
  // sever the link between the penultimate node and the current
  this.tail.next = null;

  this.length--;
  if(!this.length){
    this.head = null;
    this.tail = null;
  }
  return current;
};

//remove the node at the head
SinglyLinkedList.prototype.shift = function() {
  if(!this.head){
    return undefined;
  }
  var oldHead = this.head;
  // make the new head be the oldHead's next node
  this.head = oldHead.next;

  this.length--;
  // if length its zero reset the head back to null
  if(!this.length){
    this.head = null;
    this.tail = null;
  }
  return oldHead;
};

SinglyLinkedList.prototype.unshift = function(val) {
  //create a new node with passed in val
  var newNode = new Node(val);
  // if its the first thing we add
  if(!this.head){
    this.head = newNode;
    this.tail = newNode;
  } else {
    // add this element to the head of the list
    var oldHead = this.head;
    this.head = newNode;
    newNode.next = oldHead;
  }
  this.length++;
  return this;
};

SinglyLinkedList.prototype.get = function(index) {
  if(!this.length || index >= this.length || index < 0) return null;
  var counter = 0;
  var currentNode = this.head;
  var targetNode;

  while(currentNode){
    if(counter === index){
      targetNode = currentNode;
      return targetNode;
    }
    currentNode = currentNode.next;
    counter++;
  }
  return targetNode;
};

// get the node at the given index and update its value
SinglyLinkedList.prototype.set = function(index, val) {
  //get node 
  var node = this.get(index);
  if(!node){
    return false;
  }
  node.val = val;
  return true;
};

SinglyLinkedList.prototype.insert = function(index, val) {
  if(index > this.length || index < 0) return false;
  if(index === this.length) {
    this.push(val);
  }else if(index === 0) {
    this.unshift(val);
  } else {
    //create a new node
    var newNode = new Node(val);
    // get the node before the index
    var prevNode = this.get(index - 1);
    // get the node after the index
    var aftNode = this.get(index);
    //if either of the nodes are invalid then the index provided 
    // its out of range
    if(!prevNode || !aftNode){
      return false;
    }
    //point the new node to the node that is currently at index
    newNode.next = aftNode;
    //point the previous next node to the new node
    prevNode.next = newNode;
    // increment the length of the list
    this.length++;
  }
  //after successful insertion return true
  return true
};

var mySLinkedList = new SinglyLinkedList();
// mySLinkedList.push(5);
// mySLinkedList.push(10);
// mySLinkedList.push(7);
// mySLinkedList.push(8);
// mySLinkedList.push(90);

console.log(mySLinkedList.insert(0, "hello"));
console.log(mySLinkedList.insert(2, "boy"));
// console.log(mySLinkedList.unshift("hello"));
// console.log(mySLinkedList);
// console.log(mySLinkedList.unshift("world"));
// console.log(mySLinkedList);
// console.log(mySLinkedList.unshift("yooo"));
// console.log(mySLinkedList);
// console.log();
// mySLinkedList.pop();
// console.log(mySLinkedList.pop());
// console.log(mySLinkedList);
// console.log(mySLinkedList.pop());
// console.log(mySLinkedList);
// console.log(mySLinkedList.pop());
// console.log(mySLinkedList);
// console.log(mySLinkedList.pop());
// console.log(mySLinkedList);
// console.log(mySLinkedList.pop());
// console.log(mySLinkedList);
// console.log(mySLinkedList.pop());
// console.log(mySLinkedList);