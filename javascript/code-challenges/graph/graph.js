'use strict';

class Vertex{
  constructor(value){
    this.value = value;
  }
}

class Edge{
  constructor(vertex, weight){
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph{
  constructor(){
    this.adjacencyList = new Map();
  }

  // {
  //   Node: []
  // }

  //add new vertex to graph
  addVertex(vertex){
    // const vertex = new Vertex(value); change argument in addVertext to value if I use this

    //.set(key, value) puts a key/value node in the map
    //first added vertex(node) is an empty array, will have all of the nodes that it is connected to
    this.adjacencyList.set(vertex, [])

  }

  addDirectedEdge(startVertex, endVertex, weight){
    //must have a starting and ending node
    if(!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)){
      throw new Error('error: must have a start and/or end vertex')
    } 

    //get startVertex from map(has all verticies)
    //then push new Edge that will connect the start to the end into the array with the weight
    const adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));

  }
  
  getNeighbors(vertex){
    if(!this.adjacencyList.has(vertex)){
      throw new Error('error - invalid vertex', vertex);
    }
    return this.adjacencyList.get(vertex);
  }

  bfs(startNode){
    const queue = [];

    //a set is an object that will only store unique keys
    const visitedNodes = new Set();

    queue.push(startNode);
    visitedNodes.add(startNode);

    while(queue.length){
      //remove the first item from the queue
      const currentNode = queue.shift();
      //get all the neighbors from the removed node
      const neighbors = this.getNeighbors(currentNode);

      //loop over all neighbors
      for(let neighbor of neighbors){
        const neighborNode = neighbor.vertex;

        //if set object has the node, move on
        if(visitedNodes.has(neighborNode)){
          //move on to the next node
          continue;
        } else{
          //otherwise, it hasn't been visited. add it to the set
          visitedNodes.add(neighborNode);
        }

        //put it into the queue
        queue.push(neighborNode);
      }
    }
    return visitedNodes;
  }

  dfs(startNode){
    const visitedNodes = new Set();

    const _traverseNeighbors = (node) =>{
      //add the node to the Set
      visitedNodes.add(node);

      //do search logic here

      //get neighbors
      const neighbors = this.getNeighbors(node);

      //loop over neighbors arr
      for(let edge of neighbors){
        //if the set doesn't have the node
        if(!visitedNodes.has(edge.vertex)){
          _traverseNeighbors(edge.vertex);
        }
      }
    }

    _traverseNeighbors(startNode);
    return visitedNodes
  }

  pathTo(startNode, endNode){
    const stack = [];
    const visitedNodes = new Set();
    const parentPath = new Map();

    stack.push(startNode);
    visitedNodes.add(startNode)

    while(stack.length){
      //remove the top/last thing from the stack
      const currentNode = stack.pop();

      //make sure that our currentNode is not our end
      if(currentNode === endNode){
        return parentPath;
      }
      //get the neighbors
      const neighbors = this.getNeighbors(currentNode);

      //loop over the edges
      for(let neighbor of neighbors){
        const neighborNode = neighbor.vertex;

        //check if the Set contains that node
        if(visitedNodes.has(neighborNode)){
          continue;
        }else{
          //otherwise add the node to the Set
          visitedNodes.add(neighborNode)
        }
        
        //add it to the stack
        stack.push(neighborNode);

        //in the parentPath map, set a path with this as the key and currentNode as the value
        parentPath.set(neighborNode, currentNode)
      }
    }
    return parentPath;
  }

  size(startNode){
    let count = 0;
    if(!startNode) return count;
    const visitedNodes = new Set();
    
    const _traverseNeighbors = (node)=>{
      visitedNodes.add(node);
      count++

      const neighbors = this.getNeighbors(node);
      for(let edge of neighbors){
        if(!visitedNodes.has(edge.vertex)){
          _traverseNeighbors(edge.vertex);
        }
      }
    }
    _traverseNeighbors(startNode);
    return count;
  }


}

module.exports = {Graph, Vertex};