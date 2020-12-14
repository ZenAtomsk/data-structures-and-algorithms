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
    expect(list.head.value).toEqual('cookie');
  });

  it('should point point to the first node in the list', ()=>{
    const list = new LinkedList();
    list.insert('first');
    list.insert('second');
    list.insert('third');
    expect(list.head.value).toEqual('third')
  });

  
});
