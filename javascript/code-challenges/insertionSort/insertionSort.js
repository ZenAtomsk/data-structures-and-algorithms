'use strict';

function insertionSort(inputArray){

    for(let i = 1; i < inputArray.lenth; i++){
      //first element in unsorted subarray
      let current = inputArray[i];
      //last element of sorted subarray
      let j = i-1;

      while((j > -1) && (current < inputArray[j])){
        inputArray[j+1] = inputArray[j];
        j--;
      }
      inputArray[j+1] = current;
    }
    return inputArray;
}