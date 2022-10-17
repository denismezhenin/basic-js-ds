const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(x) {
    this.queue = []
    this.value = x;
    this.next = null
  }

  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
    // function ListNode(x) {
    //   this.value = x;
    //   this.next = null;
    // }
      let list = new ListNode(this.queue[0]);
      
      let selectedNode = list;
      for(let i = 1; i < this.queue.length; i++){
        selectedNode.next = new ListNode(this.queue[i]);
        selectedNode = selectedNode.next
      } 
    
      return list
 
    // return queue.reduceRight((acc, n) => ({ value}))
  }

  enqueue(value) {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
    this.queue.push(value)
  }

  dequeue() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.queue.shift()
  }
}

module.exports = {
  Queue
};
