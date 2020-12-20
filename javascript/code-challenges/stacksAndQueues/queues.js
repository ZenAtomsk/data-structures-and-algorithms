'use strict';

const Node = require('../linked-list/node');

class Queue{
  constructor(){
    this.front = null;
    this.rear = null;
  }

  enqueue(value){
    let node = new Node(value);
    node.rear = node;

    
  }

  dequeue(){
    if(!this.front){throw new Error('Queue is empty - cannot dequeue');}

  }

  peek(){
    if(!this.front){throw new Error('Queue is empty - cannot peek');}
    return this.front.value;
  }


  isEmpty(){
    return (!this.front) ? true : false;
  }
}

module.exports = Queue;