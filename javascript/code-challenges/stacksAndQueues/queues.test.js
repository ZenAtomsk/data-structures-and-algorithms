'use strict';

const Queue = require('./queues');
const Stack = require('./queues');

describe('stacks', ()=>{
  
  describe('classConstructor', ()=>{
    it('13. Can successfully instantiate an empty queue', ()=>{
      let queue = new Queue();
      expect(queue.isEmpty()).toBe(true);
    })

    it('14. Calling dequeue or peek on empty queue raises exception', ()=>{
      let queue = new Queue();
      expect(()=>{queue.dequeue();}).toThrow(new Error('Queue is empty - cannot dequeue'));
      expect(()=>{queue.peek();}).toThrow(new Error('Queue is empty - cannot peek'));
    })
  })

  describe('enqueue', ()=>{
    it('8. Can successfully enqueue into a queue', ()=>{
      let queue = new Queue();
      queue.enqueue(1);
      expect(queue.peek()).toEqual(1)
    })

    it('9. Can successfully enqueue multiple values into a queue', ()=>{
      let queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.peek()).toEqual(1);
    })
  })

  describe('dequeue', ()=>{
    it('10. Can successfully dequeue out of a queue the expected value', ()=>{
      let queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.dequeue()).toEqual(1);
    })

    it('12. Can successfully empty a queue after multiple dequeues', ()=>{
      let queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.dequeue()
      queue.dequeue()
      expect(queue.isEmpty()).toBe(true);
    })
  })

  describe('peek', ()=>{
    it('11. Can successfully peek into a queue, seeing the expected value', ()=>{
      let queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.peek()).toEqual(1)
    })
  })

})
