'use strict';

let arr = [1, 2, 3, 4, 5, 6, 7]

function reverseArray(arr){
  for (var i = 0; i <= (arr.length - 1) /2; i++){
      let tempArr = arr[i];
      arr[i] = arr[arr.length - 1 -  i];
      arr[arr.length - 1 -  i ] = tempArr;
   }
   return arr;
}

reverseArray(arr);