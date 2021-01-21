class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }

  add(entry){
    let node = new Node(entry);

    if(!this.head){
      this.head = node;
      return;
    }

    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
    node.next = null;
  }
}

class HashMap{
  constructor(size){
    this.map = new Array(size);
    this.size = size;
  }

  hash(key){ //this can be set as many things to give a random but repeatable index point
    return key.split('').reduce((answerSoFar, value)=>{
      return answerSoFar + value.charCodeAt(0); 
    }, 0) * 599 % this.size
  }

  //need a method that will allow putting something into hashmap
  set(key, value){
    //1. get hash
    const hash = this.hash(key) //creating a hash

    //2. make value entry
    const entry = {[key]: value};

    //3. set the entry to the hash value in the map
    //3.1 check to see if there is hash there, if not put a LL in
    if(!this.map[hash]){
      this.map[hash] = new LinkedList();
    }

    //add the entry
    this.map[hash].add(entry); //add makes add(entry) node the new head
  }

  get(key){
    let index = this.hash(key);
    let current = this.map[index].head;
    
    if(!this.map[index]){return null;}
    // if(this.contains(key) === false){return null;} //return something;
    while(current){
      if(current.value.hasOwnProperty(key)){return current.value[key]}
      current = current.next;
  //  let keyOfObject = Object.keys(current.value);
  //  let valueOfObject = Object.values(current.value);
  //  if(keyOfObject[0] === key){
  //    return valueOfObject[0];
  //  }
  //  current = current.next
    }
    return null;
  }

    // [
    //   {
    //     hash: head{{
    //                value: { key: value},
    //                next: {value: {key: value},
    //                       next: null  
    //                      }
    //     }}
    //   }
    // ]
  

  contains(key){
    let index = this.hash(key);
    let current = this.map[index].head;
    if(!current){
      return false;
    }

    while(current){
      // console.log('current.value', Object.values(current.value));
      // console.log('current.value', Object.keys(current.value))
      let keyOfObject = Object.keys(current.value);
      // let valueOfObject = Object.values(current.value);
      // console.log({keyOfObject})
      // console.log({valueOfObject});
      if(keyOfObject[0] === key){
        return true;
      }
      current = current.next
    }
    return false;
  }

}

module.exports = HashMap;