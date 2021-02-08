var Stack = function() {
  this.storage = {};
  this.size = 0;
};

Stack.prototype.push = function(val) {
  this.storage[this.size] = val;
  this.size++;
};

Stack.prototype.pop = function() {
  if(this.size === 0){
    return undefined;
  }

  var lastItem = this.storage[this.size - 1];
  delete this.storage[this.size - 1];
  this.size--;
  return lastItem;
};

Stack.prototype.size = function() {
  return this.size;
};

Stack.prototype.peek = function() {
  // show the item on top of the stack the last one addded in
  return this.storage[this.size -1];
};

var myStack = new Stack();
myStack.push(5);
myStack.push(9);
myStack.push(10);
myStack.push(3);
myStack.push(1);
console.log(myStack);
///delete last item put in 
console.log(myStack.pop()); // 1
console.log(myStack);

console.log("peeking at: ", myStack.peek());

// console.log(myStack.pop());
// console.log(myStack);

// console.log(myStack.pop());
// console.log(myStack);

// console.log(myStack.pop());
// console.log(myStack);

// console.log(myStack.pop());
// console.log(myStack);

// console.log(myStack.pop());