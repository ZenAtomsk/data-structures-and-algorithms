'use strict';

let Node = require('./node');

class LinkedList{

  constructor(){
    this.head = null; //starts this.head at null for each new node
  }

  insert(value){//insert a new node at the beginning
    
    if (!value) throw new Error('Insert value error')//throws error if no value is entered
    let newNode = new Node(value); //starts a new Node class instance
    newNode.next = this.head; //assign current head to new node next value
    this.head = newNode; //reassigns head to the new node
    // return this.head;
  }

  includes(value){ //creates method for searching linked list for a specific value
    let current = this.head; //sets a variable to the current head
    if(current.value === value){
    return true,
    current = this.head.next,
    current = current.next
    }else{
      return false
    }
  }

  toString(value){
    let current = this.head;
    let string = '';
    while(current){
      string += current.value + '->';
      current = current.next;
    }
    string +='null';
    return string;
  }
}

module.exports = LinkedList;