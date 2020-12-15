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

    // if(!this.head){
    //   return false;
    // }
    // //loop through our linked list to see if the value is there
    // let currentNode = this.head;
    // while(currentNode !== null){
    //   if(currentNode.value === value)return true;
    //   currentNode = currentNode.next;
    // }
    // return false;
  }

  toString(){
    let current = this.head; //
    let string = [];
    while(current !== null){
      string.push(`{ ${current.value} }`);
      current = current.next;
    }
    string.push('NULL')
    return string.join(' -> ')

    // let newString = '';
    // let current = this.head;
    // while(current.next){
    //   newString += `{${current.value}} -> `;
    //   current = current.next;
    // }
    // newString += `{${current.value}} -> NULL`
  }

  append(newValue) {
    const newNode = new Node(newValue);
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    newNode.next = null;
  }

  //Code Challenge Day 06 Below
  insertBefore(givenValue, newValue) {
    if(this.head === null) return false;
    const newNode = new Node(newValue);
    let currentNode = this.head;
    if(currentNode.value === givenValue) {
      newNode.next = currentNode;
      newNode = this.head;
    }
    let nextNode = currentNode.next;
    while (nextNode.value !== givenValue) {
      currentNode = currentNode.next;
      nextNode = nextNode.next;
    }
    currentNode.next = newNode;
    newNode.next = nextNode;
  }
  insertAfter(givenValue, newValue) {
    if(this.head === null) return false;
    const newNode = new Node(newValue);
    let currentNode = this.head;
    let nextNode = currentNode.next;
    while(currentNode.value !== givenValue) {
      currentNode = currentNode.next;
      nextNode = nextNode.next;
    }
    currentNode.next = newNode;
    newNode.next = nextNode;
  }
}

module.exports = LinkedList;