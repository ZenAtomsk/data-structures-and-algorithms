'use strict';

const binarySearch = (array, key)=>{
  let start = 0;
  let end = array.length - 1;

  while(start <= end){
    let middle = Math.floor((start+end)/2);

    if(key === array[middle]){
      return middle;
    }
    if(key > array[middle]){
      start = middle +1;
    }
    if(key < array[middle]){
      end = middle -1;
    }
    else{
      return -1;
    }
  }
}
