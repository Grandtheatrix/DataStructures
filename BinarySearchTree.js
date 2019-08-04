class Node {
  constructor(data) {
    (this.data = data), (this.left = null), (this.right = null);
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
        //  console.log("newly inserted node: ", newNode);
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
        //console.log("newly inserted node: ", newNode);
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  removeData(data) {
    this.root = this.removeNode(this.root, data);
  }
  removeNode(node, key) {
    if (node === null) {
      return null;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
    } else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return;
      }
      if (node.left === null) {
        node = node.right;
        return;
      }
      if (node.right === null) {
        node == node.left;
        return;
      }
      var aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }
  //helper functions
  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  getRootNode() {
    return this.root;
  }
}

var BST = new BinarySearchTree();
// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

var root = BST.getRootNode();
BST.inorder(root);
