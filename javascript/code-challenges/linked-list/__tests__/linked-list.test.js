'use strict';

// Require our linked list implementation
const LinkedList = require('../linked-list');



describe('Linked List', () => {

  it('should start empty linked list', () =>{
    const list = new LinkedList();
    expect(list.head).toEqual(null);
  })

  it('inserts a node at the beginning of an empty list', ()=>{
    const list = new LinkedList();
    list.insert('game');
    expect(list.head.value).toEqual('game');
  });

  it('should point point to the first node in the list', ()=>{
    const list = new LinkedList();
    list.insert('first');
    list.insert('second');
    list.insert('third');
    expect(list.head.value).toEqual('third')
    // expect(list.includes('first').toBe(true))
  });

  //Code Challenge Day 06 Below//////////////////////////
  it('Should add a node at the end of the list', () => {
    const list = new LinkedList();
      list.insert('one');
      list.insert('two');
      list.insert('three');
      list.append('test')
      list.insert('four');
      list.insert('five');
      expect(list.toString()).toEqual('{ five } -> { four } -> { three } -> { two } -> { one } -> { test } -> NULL');
  })
  it('Should add a node to the list before the given value', () => {
    const list = new LinkedList();
      list.insert('one');
      list.insert('two');
      list.insert('three');
      list.insert('four');
      list.insert('five');
      list.insertBefore('four', 'newValue')
      expect(list.head.next.value).toEqual('newValue');
  })
  it('Should add a node to the list after the given value', () => {
    const list = new LinkedList();
      list.insert('one');
      list.insert('two');
      list.insert('three');
      list.insert('four');
      list.insert('five');
      list.insertAfter('four', 'newValue')
      expect(list.head.next.next.value).toEqual('newValue');
  })
});
