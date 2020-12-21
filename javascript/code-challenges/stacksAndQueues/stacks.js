'use strict';

const Node = require('../linked-list/node');

class Stack{
  constructor(){
    this.top = null;
  }

  peek(){
    if(!this.top){throw new Error('Stack is empty - cannot peek');}
    return this.top.value;
  }

  push(value){
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
    return this.top.value;
  }

  pop(){
    if(!this.top){throw new Error('Stack is empty - cannot pop');}
    let value = this.top.value;
    this.top = this.top.next;
    return value;
  }

  isEmpty(){
    return (!this.top) ? true : false;
  }
}

module.exports = Stack;