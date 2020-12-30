'use strict';

const {Node, BinaryTree, BinarySearchTree} = require('./tree');

describe('findMaxValue', ()=>{
  it('returns the highest numerical value from a binary tree', ()=>{
    let node = new Node()
    let tree = new BinarySearchTree(node);
    // let binary = new BinaryTree();
    tree.add(5);
    tree.add(4);
    tree.add(4);
    tree.add(99);
    tree.add(85);
    tree.add(12);
    console.log('this is the tree:', tree);
    expect(tree.findMaxValue()).toEqual(99);
  })

  it('can return an array of values in the Breadth First order', ()=>{
    let node = new Node(7)
    let tree = new BinarySearchTree(node);
    tree.add(5);
    tree.add(99);
    tree.add(4);
    tree.add(85);
    tree.add(85);
    tree.add(12);
    expect(tree.breadthFirst()).toEqual([7,5,99,4,85,12,85]);
  })
})
