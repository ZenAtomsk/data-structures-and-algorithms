'use strict';

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
}

class PseudoQueue{
  constructor(){
    this.stackA = new Stack();
    this.stackB = new Stack();
  }

  enqueue(value){

    if(this.stackB.length > 0){
      let bLength = this.stackB.length;

      for(let i = 0; i < bLength; i++){
        let temp = stackB.pop();
        this.stackA.push(temp);
      }
    }
    this.stackA.push(value);
  }

  // dequeue()
}