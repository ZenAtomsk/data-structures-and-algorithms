'use strict';

function mergeSort(unsortedArray){

  //returns array if there is 1 or less integers in it
  if(unsortedArray.length <= 1){ 
    return unsortedArray; 
  }

  //asign dividing array into 2 to a variable
  const middle = Math.floor(unsortedArray.length/2);

  //create variables for left and right using dividing variable
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  //use recursion to combine
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){

  //create variables for resulting array, and index points of each argument array
  let resultArray = [], i = 0, j = 0;

  //combine (by pushing) values intgo the resultArray in order
  while(i < left.length && j < right.length){ //while they are still integers the arrays

    if(left[i] < right[j]){
      resultArray.push(left[i]);
      i++; //move to the next index position
    }else{
      resultArray.push(right[j]);
      j++; //move to the next index position
    }
  }

  //return resulting array with any left over digits merged to the resulting array, anything left will be the highest number.
  return resultArray.concat(left.slice(i)).concat(right.slice(j));
}

module.exports = mergeSort;