var Node = function(val) {
  this.val = val;
  this.next = null;
};

var Queue = function() {
  this.tail = null;
  this.head = null;
  this.size = 0;
};

//add element to the queue
Queue.prototype.enqueue = function(val) {
  var newNode = new Node(val);
  // chek to see if the first element inserted
  if(this.size === 0){
    // then its the first element added
    this.tail = newNode;
    this.head = newNode;
  }
  //add to the tail
  var oldTail = this.tail;

  this.tail = newNode;
  oldTail.next = newNode;

  this.size++;
  return this;
};

Queue.prototype.dequeue = function() {
  if(!this.size){
    return null;
  }
  var oldHead = this.head;

  //assign a new head
  this.head = this.head.next;


  this.size--;
  return oldHead;
};

Queue.prototype.front = function() {
  return this.head;
};

Queue.prototype.isEmpty = function() {
  return this.size === 0;
};

// Queue.prototype.

var myQueue = new Queue();
myQueue.enqueue("a");
myQueue.enqueue("b");
myQueue.enqueue("c");
console.log(myQueue.enqueue("d"));
console.log(myQueue.enqueue("f"));

console.log(myQueue.dequeue());
myQueue.dequeue();
console.log(myQueue.isEmpty());

