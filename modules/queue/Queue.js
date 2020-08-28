class _Node {
  constructor(value,next){
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    // Set initial data.
    this.first = null;
    this.last = null;    
  }

  enqueue(data) {
    // Add some data to the queue.
    if(this.first === null) {
      this.first = new _Node(data,null);
      this.last = this.first;
    } else {
      let tNode = new _Node(data,null);
      this.last.next = tNode;
      this.last = tNode;      
    }
    return data;
  }

  dequeue() {
    // Remove some data from the queue.
    if(this.first === null){
      throw new Error('Empty Queue');
    }

    const tNode = this.first;
    this.first = this.first.next;
    return tNode.value;
  }

  show() {
    // Return the next item in the queue.
    if(this.first === null){
      throw new Error('Empty Queue');
    }
    return this.first.value;
  }

  all() {
    // Return all items in the queue.
    if(this.first === null){
      return [];
    }

    let items = [];
    let currentNode = this.first;
    while(currentNode !== null){
      items.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return items;
  }
}

module.exports = Queue;
