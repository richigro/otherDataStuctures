class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  insert(val){
    //create a new node
    let newNode = new Node(val);
    //starting at the root node
      //check if there is a root, if not the root now becomes the new node
      if(!this.root){
        this.root = newNode;
        //return bst with node added
        return this;
      } else{
        //if there is a root, check if the value of newNode is greater than or
      // less than the value of the root node
      // if its greater
      if(newNode.val > this.root.val){
        //check to see if there is a node to the right
        // if there is, move to that node and repeat these steps
        if(this.root.right){
          this.right = this.insert.call(this.root.right, val);
        } else{
          // if there is not, add that node as the right property
          this.root.right = newNode;
        }
      } else { //if it's less
        //check to see if there is a node to the left
        if(this.root.left){
          // if there is, move to that node and repeat these steps

        } else{
          // if there is not, add that node as the left property
          this.root.left = newNode;
        }

       }
      }
      return this;
  }

}

var bst = new BinarySearchTree();

bst.insert(10);
bst.insert(11);
bst.insert(8);

bst.insert(12);



console.log(bst);
