# Graph +BFS

## Resolved by: 

    Simon Panek, Nathan Rhead and Ricardo Barcenas

---
## Challenge 35 Graph:
    Write a function that accepts two hashtables, joins them with the left keys. If the key does not exist in the second hashtable, insert null as a value to the left value. If the right hashtable has a key that the right does not, it is ignored. Returns a matrix with each key and values in their own array.

## Challenge 36 BFS:
    Write a function that accepts a node as an argument that traverses a graph in breadth first order and returns a set including all nodes visited.

## Challenge 37 gitEdge:
    Write a function that takes in a graph and an array of city names. Return true if they are directly connected in order and the total weight of connections, else return false.

---
## Approach & Efficiency 35 Graph:

    loop through first hashMap pushing keys and values into arrays

    match hash index from hashMap2, if match push into results

## Approach & Efficiency 36 BFS:
    push nodes into a queue. While queue.length exists, pop off node and retrieve neighbors to add to queue. If the neighbor is already in the set, ignore and continue. If not, add to set and push neighbor nodes into queue. 

## Approach & Efficiency 37 gitEdge:
    loop over length of array, 

---
## Big 0 35 Graph:

    Space and Time = O(n)

## Big 0 36 BFS:

    Space: O(n)
    Time: O(n^2)

## Big 0 37 gitEdge:

    Space: O(n^2)
    Time: O(n)

---
## Solution 35 Graph:

- [Graph](./graph.js) 

## Solution 36 BFS:

- [BFS](./graph.js) 

![Whiteboard](./assets/CC36-whiteboard-bfs.png)

## Solution 37 gitEdge

- [gitEdge](./graph.js)

![whiteboard](./assets/code-challenge37.png)