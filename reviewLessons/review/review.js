console.log("Linked List")
//initialize the object node
class Node {
  constructor(value) {
    // We want t initialize a Node with a value 
    this.value = value;
    // A independent node should not point to anything by default
    this.next = null;
  }
}
// initialize the node and pass the value we chaining them
let node1 = new Node(12);
//12 -> null
let node2 = new Node(1)
// 1 -> null
let node3 = new Node(3)
// 3 -> null

// We have 3 node but they are not connected or chained together ==> now we will chain them

 node1.next = node2 // 12 -> 1
 node2.next = node3 // 12 -> 1 -> 3 -> null
//  console.log(node1)

 class LinkedList {
   constructor() {
     this.head = null;
     this.tail = null;
     this.length = 0;
   }
 }

 // Linked List methods:

 // 1. push(value)=> add mew element to the beginning
 // 2. append(value)=> add new value at the pass index and undefined otherwise
 // 3. print()=> print all the elements in the list 
 // 4. get(index) => return value found at the passed index and undefined otherwise
 // 5. pop() => remove the last element in the list and return

const contains = (node, value) => {
  let curr = node;
  //loop
  while(curr !== null) {
    //console.log(curr.value)
    if(curr.value === value){
      return true
    }
    curr = curr.next
  }
  return false
}
console.log(contains(node1, 12))
