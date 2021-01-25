'use strict';

const {Graph, Vertex} = require('./graph');

describe('Graph data structure', ()=>{

  it('1. Node can be successfully added to the graph', ()=>{
    let vertex = new Vertex(7);
    let graph = new Graph();
    graph.addVertex(vertex);
    // console.log('1 inside test just the graph: ', graph)
    // console.log('1 inside test: ', graph.getNeighbors(vertex))

    //no neighbors
    console.log('1. node added to graph', graph)
    expect(graph.getNeighbors(vertex)).toEqual([]);
  })

  it('2. An edge can be successfully added to the graph', ()=>{
    let vertexOne = new Vertex(7);
    let vertexTwo = new Vertex(9);
    let graph = new Graph;
    graph.addVertex(vertexOne);
    graph.addVertex(vertexTwo);
    graph.addDirectedEdge(vertexOne, vertexTwo, 5);
    // console.log('edge inside edge test: ', graph.getNeighbors(vertexOne))

    //can't find 2 if they aren't connected (edge proof)
    expect(graph.size(vertexOne)).toEqual(2);
  })

  it('3. A collection of all nodes can be properly retrieved from the graph', ()=>{
    let vertexOne = new Vertex(7);
    let vertexTwo = new Vertex(9);
    let graph = new Graph;
    graph.addVertex(vertexOne);
    graph.addVertex(vertexTwo);
    graph.addDirectedEdge(vertexOne, vertexTwo, 5);
    console.log('3: ', graph.dfs(vertexOne))

    // expect(graph.dfs(vertexOne))
  })

  it('4. All appropriate neighbors can be retrieved from the graph', ()=>{
    let vertexOne = new Vertex(7);
    let vertexTwo = new Vertex(9);
    let graph = new Graph;
    graph.addVertex(vertexOne);
    graph.addVertex(vertexTwo);
    graph.addDirectedEdge(vertexOne, vertexTwo, 5);
    console.log('4: ', graph.getNeighbors(vertexOne))

    // expect(graph.getNeighbors(vertexOne)).toBe()
  })

  it('5. Neighbors are returned with the weight between nodes included', ()=>{

  })

  it('6. The proper size is returned, representing the number of nodes in the graph',()=>{
    let graph = new Graph();
    graph.addVertex('a');

    expect(graph.size('a')).toBe(1);
  })

  it('7. A graph with only one node and edge can be properly returned', ()=>{

  })

  it('8. An empty graph properly returns null', ()=>{

  })



})

// 
// 
// 
// The proper size is returned, representing the number of nodes in the graph
// A graph with only one node and edge can be properly returned
// An empty graph properly returns null