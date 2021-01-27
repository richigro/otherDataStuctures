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
    } else {
      let current = this.root;
      while(true){
        if(val === current.val){
          return undefined;
        }
        if(val < current.val){
          //check if there is current.left
          if(!current.left){
            // we found our spot
            current.left = newNode;
            //end the loop an return the whole bst
            return this;
          } else {
            current = current.left;
          }
        } else {
          if(!current.right){
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }

    }
  }

}

var bst = new BinarySearchTree();

bst.insert(10);
bst.insert(11);
bst.insert(8);

bst.insert(7);

bst.insert(12);
bst.insert(9);
bst.insert(10.5);



console.log(bst);
