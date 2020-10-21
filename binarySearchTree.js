class Node {
    constructor(value){
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        if (!this.root) {
        this.root = new Node(value);
        return this.root;
        }
        let currNode = this.root;
        while (value !== currNode.value) {
        if (value > currNode.value) {
            currNode = currNode.right || (currNode.right = new Node(value));
        }
        if (value < currNode.value) {
            currNode = currNode.left || (currNode.left = new Node(value));
        }
        }
        return currNode;
    }
    lookup(value){
        let currNode = this.root;
        while (currNode && value !== currNode.value) {
        if (value > currNode.value) {
            currNode = currNode.right;
        } else if (value < currNode.value) {
            currNode = currNode.left;
        }
        }
        return currNode;
    }
    // remove
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
tree.root;
tree.lookup(21)