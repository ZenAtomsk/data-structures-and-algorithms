'use strict';

const mergeSort = require('./mergeSort');

describe('mergeSort', ()=>{
  it('returns an ordered array from an unordered array', ()=>{
    let array = [100,50,20,5,1,8,46,98,23,64];
    expect(mergeSort(array)).toEqual([1,5,8,20,23,46,50,64,98,100]);
  })
})