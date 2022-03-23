 class Node {
   constructor(val){
     this.val = val;
     this.next = null;
   }
 }
class SumOfLInkedList {
  constructor (){
    this.head = null
  }

  append(val){
    if(this.head === null){
      this.head = new Node(val)
      return;
    }
    this._append(val, this.head)
  }

  _append(val, curr){
    if(curr.next === null){
      curr.next = new Node(val);
      return;
    }
    this._append(val, curr.next)
  }

  print(){
    let output = this._print(this.head)
    console.log(30, output)
  }
  
  _print(curr){
    if(curr === null) return "";
    return curr.val + "->" + this._print(curr.next)
  }
  
}

const list = new SumOfLInkedList();
list.append(11);
list.append(7);
list.append(10);
list.append(2);

console.log(list.head);
list.print(this.head);

const sumList = (head )=> {
  let sum = 0;
  let curr = head;
  while(curr !== null) {
    sum+= curr.val
    curr = curr.next
  }
  return sum
}
// time complexity O(n) space complexity O(1)

const sumListRecursively = (head) => {
  if(head === null) return 0;
  return head.val + sumListRecursively(head.next)
};
// time complexity O(n) space complexity 0(n)
console.log(sumList(list.head))
console.log(sumListRecursively(list.head))
