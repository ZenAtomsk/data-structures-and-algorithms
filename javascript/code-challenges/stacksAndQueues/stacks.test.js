'use strict';

const Stack = require('./stacks');

describe('stacks', ()=>{

  describe('push', ()=>{
    it('1. Can successfully push onto a stack', ()=>{
      let stack = new Stack();
      stack.push(1);
      expect(stack.peek()).toEqual(1);
    })

    it('2. Can successfully push multiple values onto a stack', ()=>{
      let stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      // console.log(stack.top);
      expect(stack.peek()).toEqual(3);
    })
  })

  describe('pop', ()=>{
    it('3. Can successfully pop off the stack', ()=>{
      let stack = new Stack();
      stack.push(1);
      stack.push('expect this')
      expect(stack.pop()).toEqual('expect this');
    })

    it('4. Can successfully empty a stack after multiple pops', ()=>{
      let stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.pop();
      stack.pop();
      stack.pop();
      expect(stack.isEmpty()).toBe(true);
    })
  })

  describe('peek', ()=>{
    it('5. Can successfully peek the next item on the stack', ()=>{
      let stack = new Stack();
      stack.push(1);
      stack.push(2);
      console.log('stack');
      expect(stack.peek()).toEqual(2);
    })
  })
  describe('classConstructor', ()=>{

    it('6. Can successfully instantiate an empty stack', ()=>{
      let stack = new Stack();
      // console.log(stack);
      expect(stack.isEmpty()).toBe(true);
    })
  })
    
  it('7. Calling pop or peek on empty stack raises exception', ()=>{
    let stack = new Stack();
    expect(()=>{stack.peek();}).toThrow(new Error('Stack is empty - cannot peek'));
    expect(()=>{stack.pop();}).toThrow(new Error('Stack is empty - cannot pop'));
  })

  describe('isEmpty', ()=>{
    it('returns true when stack is empty otherwise returns false.', ()=>{
      let stack = new Stack();
      expect(stack.isEmpty()).toBe(true);
      stack.push(1);
      expect(stack.isEmpty()).toBe(false);
    })
  })

  

})