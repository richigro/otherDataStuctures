var mySet = function() {
  this.collection = [];
};

// check the presence of an element and return 
// true or faslse
mySet.prototype.has = function(element) {
  return this.collection.indexOf(element) > -1;
};

// return all the value in the sets
mySet.prototype.values = function() {
  return this.collection;
};
//add an element to the set
mySet.prototype.add = function(element) {
  // make  sure that element id unique
  if(!this.has(element)){
    this.collection.push(element);
  }
  // you cannot add duplicates so return false
  return false;
};

mySet.prototype.remove = function(element) {
  // chek if element exist on the list
  if(this.has(element)){
    var index = this.collection.indexOf(element);
    this.collection.slice(index, 1);
    return true;
  }
  // elemnet not contained
  return false;
};

mySet.prototype.size = function() {
  return this.collection.length; 
};

// ths method return the union of two sets
mySet.prototype.union = function(otherSet) {
  var unionSet = new mySet();
  var firstSetVals = this.values();
  var secondSetVals = otherSet.values();
  console.log("vals first: ", firstSetVals);
  console.log("valls second: ", secondSetVals);
  //add the values from the first set to union set
  firstSetVals.forEach(function(val) {
    unionSet.add(val);
  });
  //add the values from the second set to union set
  secondSetVals.forEach(function(val) {
    unionSet.add(val);
  });
  return unionSet;
};

//will return the intersection of two sets as a new set
mySet.prototype.intersection = function(otherSet) {
  var intersectionSet = new mySet();
  var firstVals = this.values();
  
  firstVals.forEach(function(val){
    if(otherSet.has(val)){
      intersectionSet.add(val);
    }
  });
  return intersectionSet;
};

//will return the difference between the two sets
// into a new set
mySet.prototype.difference = function(otherSet) {
  var diferrenceSet = new mySet();
  var firstVals = this.values();

  firstVals.forEach(function(val){
    // see if they donot have the other value if so add
    // to diferrence set
    if(!otherSet.has(val)){
      diferrenceSet.add(val);
    }
  });
  return diferrenceSet;
};

mySet.prototype.subset = function(otherSet){
  var firstSetVals = this.values();
  return firstSetVals.every(function(val){
    return otherSet.has(val);
  });
};



var setA = new mySet();
var setB = new mySet();

setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());