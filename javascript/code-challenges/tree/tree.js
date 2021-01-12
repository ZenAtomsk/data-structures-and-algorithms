'use strict'

const Queue = require('../queueWithStacks/queue-with-stacks');

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

    let _recursionIn = (node)=>{
      if(node.leftChild) _recursionIn(node.leftChild);
      results.push(node.value);
      if(node.rightChild) _recursionIn(node.rightChild);
    }

    _recursionIn(this.root);
    
  }
  
  postOrder(){
    const results = [];

    let _recursionPost = (node)=>{
      if(node.leftChild) _recursionPost(node.leftChild);
      if(node.rightChild) _recursionPost(node.rightChild);
      results.push(node.value);
    }

    _recursionPost(this.root);
    
  }

  findMaxValue(){
    if(!this.root) return null;
    let tempVar = this.root.value;
    
    let _walk = (node)=>{
      if(node.leftChild){ _walk(node.leftChild);}
      if(node.rightChild){ _walk(node.rightChild);}
      if(node.value > tempVar) tempVar = node.value;
    }
    _walk(this.root);
    return tempVar;
  }

  breadthFirst(){

    //check if tree exists, if not escape
    if(!this.root) return null; 

    //declare array queue
    let breadthQueue = []; 
    //declare output array
    let outputArray = []; 
    //push this.root into queue
    breadthQueue.push(this.root); 
    //loop while queue exists
    while(breadthQueue.length > 0) { 
      //pull off front of que put into temp var
      let frontVariable = breadthQueue.shift(); 
      outputArray.push(frontVariable.value); 
      //check for left child
      if(frontVariable.leftChild) { 
        //push into queue
        breadthQueue.push(frontVariable.leftChild); 
      }
      //check for right child
      if(frontVariable.rightChild) { 
      //push into queue
        breadthQueue.push(frontVariable.rightChild); 
      }
    }
    //return output array
    return outputArray; 
  }

  // breadthFirst(){
  //   if(!this.root) return null;
  //   let breadthQueue = new Queue();
  //   let outputArray = [];
  //   let frontVar;
  //   breadthQueue.enqueue(this.root);
  //   while(breadthQueue.peek() !== null){
  //     frontVar = breadthQueue.dequeue();
  //     outputArray.push(frontVar.value);
      
  //     if(frontVar.leftChild) breadthQueue.enqueue(frontVar.leftChild);
  //     if(frontVar.rightChild) breadthQueue.enqueue(frontVar.rightChild);
  //   }
  //   return outputArray;
  // }
}

class BinarySearchTree extends BinaryTree{
  constructor(){
    super();
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

  contains(value){

    let _walk = (node)=>{
      if(node.leftChild){ _walk(node.leftChild);}
      if(node.rightChild){ _walk(node.rightChild);}
      if(node.value === value) {
        return true;
      }
      else return false;
    }
    _walk(this.root);
  }
}

module.exports = {Node, BinaryTree, BinarySearchTree};
