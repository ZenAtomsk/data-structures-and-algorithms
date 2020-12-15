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

  //Code Challenge Day 7 kthFromEnd Below/////////////////////////
  it('Should return false where the given value is greater than the length of the list', () => {
    const list = new LinkedList();
      list.insert('one');
      list.insert('two');
      list.insert('three');
      list.insert('four');
      list.insert('five');
      expect(list.kthFromEnd(7)).toEqual(false);
  })
  it('Should return the head.value if the given position is equal to the length of the list', () => {
    const list = new LinkedList();
      list.insert('one');
      list.insert('two');
      list.insert('three');
      list.insert('four');
      list.insert('five');
      expect(list.kthFromEnd(4)).toEqual('five');
  })
  it('Should return false if given value is negative', () => {
    const list = new LinkedList();
      list.insert('one');
      list.insert('two');
      list.insert('three');
      list.insert('four');
      list.insert('five');
      expect(list.kthFromEnd(-3)).toEqual(false);
  })
  it('Should return the value of the head node if the list is only one node long and k = 0', () => {
    const list = new LinkedList();
      list.insert('one');
      expect(list.kthFromEnd(0)).toEqual('one');
  })
  it('Should return the value of the node at a given position', () => {
    const list = new LinkedList();
      list.insert('one');
      list.insert('two');
      list.insert('three');
      list.insert('four');
      list.insert('five');
      expect(list.kthFromEnd(3)).toEqual('four');
  })
});
