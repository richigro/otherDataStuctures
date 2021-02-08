class MaxBinaryHeap {
  constructor(){
    this.values = [];
  }

  insert(val){
    //push val to values property
    this.values.push(val);
    //buble up val if needed
    if(this.values.length === 1)return this.values;
    // will only work if values are unique
    let idxOfVal = this.values.length - 1;
    // let parentIdx = Math.floor((idxOfVal - 1) / 2);
    //do the swap while the new added val its greater than its parent
    while(idxOfVal > 0){
      let parentIdx = Math.floor((idxOfVal - 1) / 2);
      let parent = this.values[parentIdx];
      if(val <= parent) break;
      this.values[parentIdx] = val;
      this.values[idxOfVal] = parent;

      idxOfVal = parentIdx;
    }
   
    return this.values;
  }

  extractMax(){
    
  }
}

var myMaxBHeap = new MaxBinaryHeap(); 

console.log(myMaxBHeap.insert(50));
console.log(myMaxBHeap.insert(25));
console.log(myMaxBHeap.insert(60));
console.log(myMaxBHeap.insert(70));
console.log(myMaxBHeap.insert(55));
console.log(myMaxBHeap.insert(100));