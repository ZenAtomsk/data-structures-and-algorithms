'use strict';

const insertShiftArray = require('./array-shift');

test('New value inserted into middle of array', () =>{
  expect(insertShiftArray([1, 2, 3, 4, 6, 7, 8], 5)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  expect(insertShiftArray([60, 50, 40, 20, 10], 30)).toEqual([60, 50, 40, 30, 20, 10]);
})