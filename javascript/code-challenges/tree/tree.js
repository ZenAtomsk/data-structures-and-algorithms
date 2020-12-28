'use strict'

class Node{
  constructor(value=null, leftChild=null, rightChild=null){
    this.value = value;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}

class BinaryTree{
  constructor(){
    this.root = null;
  }
  
  preOrder(){
    const results = [];

    let _recursionPre = (node)=>{
      results.push(node.value);
      if(node.leftChild) _recursionPre(node.leftChild);
      if(node.rightChild) _recursionPre(node.rightChild);
    }

    _recursionPre(this.root);
  }
  
  inOrder(){
    const results = [];

    let _recursionPre = (node)=>{
      if(node.leftChild) _recursionPre(node.leftChild);
      results.push(node.value);
      if(node.rightChild) _recursionPre(node.rightChild);
    }

    _recursionPre(this.root);
    
  }
  
  postOrder(){
    const results = [];

    let _recursionPre = (node)=>{
      if(node.leftChild) _recursionPre(node.leftChild);
      if(node.rightChild) _recursionPre(node.rightChild);
      results.push(node.value);
    }

    _recursionPre(this.root);
    
  }
}

class BinarySearchTree extends BinaryTree{
  constructor(){
    this.root = null;
  }


  add(value){ //values have to be integers
    if(typeof value !== 'number'){
      return null;
    }

    if(!this.root){
      this.root = new Node(value)
      return;
    }

    let _recursion = (node)=>{
      // if the value is less than the value of the node
      if(value < node.value){
        if( node.leftChild === null ){
          node.leftChild = new Node(value);
          return;
        }
        else if(node.leftChild !== null){
          return _recursion(node.leftChild);
        }
      }
      else if( value >= node.value){
        if( node.rightChild===null){
          node.rightChild = new Node(value);
          return;
        }

        else if(node.rightChild !== null){
          return _recursion(node.rightChild);
        }
      }
    }
    _recursion(this.root);
  }

  contains(){
    
  }
}