'use strict';

function llZip(ll1, ll2){
  if(ll1 === null && ll2 !== null){ return ll2};
  if(ll1 !== null && ll2 === null){ return ll1};
  if(ll1 === null && ll2 === null){ return false};

  let currentNode1 = ll1.head;
  let currentNode2 = ll2.head;

  while(ll1 !== null && ll2 !== null){
    if(currentNode1.next !== null && currentNode2 !== null){
      currentNode2.next = currentNode1.next;
      currentNode1.next = currentNode2;
    }
    if(currentNode1.next === null) {
      currentNode1 = currentNode2.next;
    }
    if(currentNode2.next === null) {
      currentNode1 = currentNode1.next;
    }
    currentNode1 = currentNode1.next;
    currentNode2 = currentNode2.next;
    }
    return ll1;
}

