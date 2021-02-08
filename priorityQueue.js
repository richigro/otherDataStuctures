var Node = function(val, priority) {
  this.val = val;
  this.priority = priority;
  // this.next = null;
};

var PriorityQueue = function() {
  this.storage = {};
  this.size = 0;
};

PriorityQueue.prototype.printCollection = function() {
  console.log(Object.values(this.storage));
};

PriorityQueue.prototype.enqueue = function(val) {
  var newNode = new Node(val);
  // if its the pQueue is empty
  if(this.isEmpty()){
    //add the value into the queue
    this.storage[this.size] = newNode;
  } else {
    
  }
};

PriorityQueue.prototype.isEmpty = function() {
  return this.size === 0;
};

var myPriorityQueue = new PriorityQueue();

myPriorityQueue.printCollection();