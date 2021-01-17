# Hashtables

## Author(s):
Ricardo Barcenas, Mariko Alvarado, Simon Moore, Stacy Burris, Tahmina Ringer, Ashley Moore, Garrett Cintron

## Challenge

Implement a Hashtable with the following methods:

1. add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.

2. get: takes in the key and returns the value from the table.

3. contains: takes in the key and returns a boolean, indicating if the key exists in the table already.

4. hash: takes in an arbitrary key and returns an index in the collection.

## Approach & Efficiency

GET:

First we stored the position in the array of the hashed key in a "current" variable.

We used our contains method to error check and return false if the key was not in the array

Next, while we are in the current, we broke down the value of current into keys and values and stored each in it's own variable (key, value).

if the object key was strictly equal to the passed key, we returned the value of that object

CONTAINS:

First we stored the position in the array of the hashed key in a "current" variable.

Error checking, if there was no current, return false.

Next, while we are in the current, we broke down the key of current and stored it in it's own variable (key).

if the object key was strictly equal to the passed key, we returned the true, if it broke out of the while loop return false.

|Big O
|---
| Space: O(1)
| Time: 0(1)
|

## API

1. set (add used from linked list): takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.

2. get: takes in the key and returns the value from the table.

3. contains: takes in the key and returns a boolean, indicating if the key exists in the table already.

4. hash: takes in an arbitrary key and returns an index in the collection.