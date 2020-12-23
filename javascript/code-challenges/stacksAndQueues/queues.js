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

        // let newNode = new Node (value);
        // let currentNode = this.front;
        // if(!currentNode) {
        //   this.front = newNode;
        // } else {
        //   while (currentNode.next){
        //     currentNode = currentNode.next;
        //   }
        //   currentNode.next = newNode;
        //  } 

    // let queueItem = {value:value, next:null};

    // if(this.rear){this.rear.next = queueItem}
    // this.rear = queueItem;
    // if(!this.front){this.front = queueItem};
    
  }

  dequeue(){
    if(!this.front){throw new Error('Queue is empty - cannot dequeue');}

    const temp = this.front;
    this.front = this.front.next;

    return temp.value;
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