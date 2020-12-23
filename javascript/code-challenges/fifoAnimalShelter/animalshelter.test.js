'use strict';

const AnimalQueue = require('./fifo-animal-shelter');

describe('find preference', ()=>{

  it('adds a dog or cat to the queue', ()=>{
    const animalQ = new AnimalQueue();
    animalQ.enqueue('cat');
    animalQ.enqueue('cat');
    animalQ.enqueue('cat');
    animalQ.enqueue('dog');
    animalQ.enqueue('cat');
    expect(animalQ.front.value).toEqual('cat')
  })

  it('returns the first dog from the queue', ()=>{
    const animalQ = new AnimalQueue();
    animalQ.enqueue('dog');
    animalQ.enqueue('cat');
    animalQ.enqueue('cat');
    animalQ.enqueue('dog');
    animalQ.enqueue('cat');
    expect(animalQ.dequeue('dog')).toEqual('dog')
  })

  it('returns the first dog from the queue', ()=>{
    const animalQ = new AnimalQueue();
    animalQ.enqueue('cat');
    animalQ.enqueue('cat');
    animalQ.enqueue('cat');
    animalQ.enqueue('dog');
    animalQ.enqueue('cat');
    expect(animalQ.dequeue('dog')).toEqual('dog')
  })
})