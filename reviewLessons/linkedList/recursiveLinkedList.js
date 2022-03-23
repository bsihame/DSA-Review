/**
 * ->
 * -> a ->
 * -> a -> b ->
 * -> a -> b -> c ->
 * -> a -> b -> c -> d ->
 */

//  we create node
// -> a ->
class Node {
  constructor (val){
    // need to store some value
    this.val = val;
    // pointer to next node
    this.next = null;
  }
}
// ->
class LinkedListRecursive {
  constructor () {
    this.head = null;
  }

//  create a method to add a value
  append(val){
    // the first insertion we should check if the node is null
    if(this.head === null){
      // add the new node
      this.head = new Node(val)
      return;
          //we should return here to not have a double of the first node
   
          // ==> Node {
            //   val: 'a',
            //   next: Node { val: 'a', next: Node { val: 'b', next: [Node] } }
          // }

    }
    this._append(val, this.head)
  }
  // create helper function recursively
  _append(val, curr){
    //start with the base case
    // we will check the tail if exist
    if(curr.next === null){
      curr.next = new Node(val);
      return;
    }
    // need to call this recursive and the current position will change
    this._append(val, curr.next)
  }

  // print method recursively;
  print(){
    const output = this._print(this.head)
    console.log(46, output)
  }
  _print(curr){
    if(curr === null) return "";
    // else when the current value is not null
    // return the current vale and you concat to the next value
    return curr.val + "->" + this._print(curr.next);
  }

  // this method to check if a value contains in the linked list
  contains(target) {
    return this._contains(target, this.head)
  }

  _contains(target, curr){
    //base cased
    if(curr === null) return false;
    if(curr.val === target) return true;
    return this._contains(target, curr.next);
  }
}

const list = new LinkedListRecursive();
// add new node
list.append("a");
list.append("b");
list.append("c");
list.append("d");
//to print the node;
console.log(list.head);
/*
        Node {
      val: 'a',
      next: Node { val: 'b', next: Node { val: 'c', next: [Node] } }
    }
*/
// print recursively
list.print(this.head)
// a->b->c->d->

// find if the linked list contains a value
console.log(list.contains("a"));// true
console.log(list.contains("b"));// true
console.log(list.contains("c"));// true
console.log(list.contains("d"));// true
console.log(list.contains("z"));// false