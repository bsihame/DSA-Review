
//++++++++++++++++++++++++++++++++
//Postoder Traversal
// Iterate the tree then 
// if node !children ==> sum
// repeat until all children are visited


// class  Node {
//   constructor(value) {
    
//     this.value = value;
//     this.children = [];
//   }

// }

// const findMaxInSinglePath = ()=> {
//   postOrder(rootNode);
//   return max
// }

// const maxSum = ( rootNode ) => {
  // if(rootNode === null) return 0;
  // let left = postOrder(rootNode.left)
  // let right = postOrder(rootNode.right)
  // let max = Math.max(max, left, right, rootNode.value);
  // return Math.max(left, right) + rootNode.value






  // let max = -Infinity;
  // let stack = new Stack();
  // stack.push(rootNode);
  // while(!stack.isEmpty()){
  //   let currentNode = stack.pop();
  //   if()
  // }
// }


// JavaScript program to find maximum
    // path sum in Binary Tree
     
    class Node
    {
        constructor(val) {
           this.vaL = val
           this.left = null;
           this.right = null;
           
        }
    }
    const findMaxSum = ( root ) => {
      //base case if root = null return 0
      if(root === null) return 0;
      let sumLeft = 0;
      let sumRight = 0;
      // if not while node is not empty
      let max = -Infinity;
      if(root.left === null){
        sumLeft = findMaxSum(root.left+ root.val  + root.right)
        console.log(66, sumLeft)
      } 
      if(root.right === null){
        sumRight = findMaxSum(root.left  + root.val + root.right)
        console.log(66, sumRight)
      } 
     
    }
     
    
    

    //       10
    //      /  \
    //     2    10
    //    / \     \
    //  20   1    -25
    //             / \
    //            3   4
     
    let root = new Node(10);
    let two = new Node(2);
    let ten = new Node(10);
    let twenty = new Node(20);
    let one = new Node(1);
    let negativeTwentyFive = new Node(-25);
    let three = new Node(3);
    let four = new Node(4);
    root.left = two
    two.left = twenty
    two.right = one
    root.right = ten
    ten.right = negativeTwentyFive
    negativeTwentyFive.left = three
    negativeTwentyFive.right = four
    console.log(findMaxSum(root))
 