/*
  Linked list
    - data structure where values are chained sequentially
    - more efficient for insertion/deletion than arrays
    - does not require contiguous  memory addressing

  objective:
  1) add a new value
  2) print the list
  3) search for an existing value

  NB: - if you want to insert in the middle of the linkedList it is O(n) because we have to change one address
        in contrast in the array we have to shift all the elements that are after the middle position: we shifting all the the addresses
      
        => comparing between the array and the linked list

                  Array       Linked List
        access      O(1)          O(n)
        insert      O(n)          O(1)
        delete      O(n)          O(1)   
        
        => Linked List structure 
        Compose of the nodes that contain a stored value and a reference to the next node.
        => Linked List list  variant
        Single Linked List that has one pointer to next
        -> a -> b -> c -> d ->
        Double Linked List that has 2 pointers next and preview
        -> a <==> b <==> c <==> d ->
        Dummy head Linked List
        A linked List where you have a place holder even you have an empty linked list the node that you have in the dummy head linked list it is like a fake node and you don't have to handle any edge cases
        -> head -> a -> b -> c -> d ->
*/
console.log("Single Linked List");

// create a node class
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// create the main of the Linked List an empty Linked List
class LinkedList {
  constructor() {
    this.head = null;
  }

  append(val) {
    // check if the head is null
    if (this.head === null) {
      this.head = new Node(val);
      return;
    }
    // pointer
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    // current is the tail
    curr.next = new Node(val);
  }

  print() {
    //  start with pointer
    let str = "";
    let curr = this.head;
    while (curr !== null) {
      str += curr.val + "->";
      curr = curr.next;
    }
    console.log(str);
  }

  contains(target) {
    let curr = this.head;
    while (curr !== null) {
      if (curr.val === target) {
        return true;
      }
      curr = curr.next;
    }

    return false;
  }
}

//  add a node in the Linked List is to add a new node to the end of the Linked List always add a tail to the list
//  create an instance on linked List
const list = new LinkedList();
list.append("a");
list.append("b");
list.append("c");
list.append("d");
// print linked list with class method
list.print();

// list.append()=>
// -> a -> b -> c -> d ->
// print the linked list=>
// console.log(list.head)
// ==> Node {
//   val: 'a',
//   next: Node { val: 'b', next: Node { val: 'c', next: [Node] } }
// }

// contains method
console.log(list.contains("a")); //true
console.log(list.contains("b")); //true
console.log(list.contains("c")); //true
console.log(list.contains("d")); //true
console.log(list.contains("x")); //false
console.log(list.contains("z")); //false
