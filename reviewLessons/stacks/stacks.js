const basicStackFunctionWithArray = () => {
  // with array is not the best case especially if we use shift.
  // shift time complexity it will be linear time
  const myStack = [];
  myStack.push("a");
  myStack.push("b")
  myStack.push("c")
  myStack.push("d")
  myStack.pop()
  return myStack
}

console.log(basicStackFunctionWithArray());


// for optimize the code we should use Linked List

//create the node class
class StackNode {
  constructor(val){
    this.value = val;
    this.next = null;
  }
}
// create the main class utilize the stack node class with the stack
class Stack {
  constructor() {
    // head in the stack it is the top of the stack
    this.top = null;
    this.size = 0;
  }
  // adding a value in my stack
  push(val) {
    if (this.size === 0) {
      this.top = new StackNode(val)
    } else {
      // create the node with a value
      const pushedNode = new StackNode(val);
      // this means that pushed Node is resting on the top of node
      pushedNode.next = this.top;
      // reassign this.top
      this.top = pushedNode
    }
    // we should increment the size
    this.size++
  }
}
// to test your stack, we should create new stack
const myStack = new Stack();
//creating my stack
myStack.push("a");
myStack.push("b");
myStack.push("c");
myStack.push("d");
// to check the size of the stack
console.log(myStack.size)
console.log(57, myStack.top)



