/**
 * write a function, deleteValues(head, val), that accepts the head node of the linked list and a value as an argument.
 * write the function, delete node of the linked List that contains the given value
 * the  function should return the head of the linked list
 * assume that the linked list only contains unique values. 
 * example:input -> a -> b -> c -> d ===> output  -> a -> b -> d
 * 
 * target c
 * preview -> current
 * ===> if current = target
 */


class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

 a.next = b;
 b.next = c;
 c.next = d;

 // a -> b -> c -> d

 const deleteValue = (head, target) => {
   let previous = null;
  let current = head;
  while(current !== null) {
    console.log(curr.val)
    current = current.next;
  }
 }
 deleteValue()

