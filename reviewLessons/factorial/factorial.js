// // function FirstFactorial(num) {
// // 	if (num > 0) {
// // 			return num * FirstFactorial(num - 1);
// // 	} else {
// // 			return 1;
// // 	}
// // }
// // console.log(FirstFactorial(8));
// // function FirstFactorial1(num) { 

// //   // code goes here  
// //       let tempNum=1;
// //     for(i=1;i<num+1;i++){
// //         tempNum=tempNum*i
// //     }
// //     return tempNum; 
         
// // }
// // console.log(FirstFactorial1(8));

// // function FirstFactorial2(num) { 

// //   var res = 1;
// //   for (var i = 2; i <= num; i++) {
// //     res *= i;
// //   }
  
// //   // code goes here
// //   return res; 
            
// // }
// // console.log(FirstFactorial2(8));

// // function FirstFactorial3(num) { 
// //   return (num === 1 ? 1 : num * FirstFactorial(num - 1));
// // }
// // console.log(FirstFactorial3(8));


// // const names = ['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Carl']

// // const count = names =>names.reduce((a, b) => ({ ...a,
// //     [b]: (a[b] || 0) + 1
// //   }), []) // don't forget to initialize the accumulator
// // console.log(count)
// // const duplicates = dict =>
// //   // Object.keys(dict).filter((a) => dict[a] > 0)

// // console.log(count(names)) // { Mike: 1, Matt: 1, Nancy: 2, Adam: 1, Jenny: 1, Carl: 1 }
// // console.log(duplicates(count(names))) // [ 'Nancy' ]

// const countDuplicate = arr => {
//   let newArr = [];
//   let count = 0
// //   let counts = arr.reduce((acc, value) => ({
// //     ...acc,
// //     [value]: (acc[value] || 0) + 1
// //  }), []);
// //  console.log(58,counts)
//   arr.forEach((el) => {
//     if(!el) {
//       newArr.push(el)
//     } else {
//       count++
//       newArr.push(el+count)
//     }
    
//   });
//   console.log(newArr)





// //   counts.forEach(([key, value]) => {
// //    if(value <= 1) {
// //      newArr.push(key)
// //    } else {
// //     newArr.push(key+value)
// //    }
// //    return newArr
// //  } );
// }


// // console.log(countDuplicate(['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Carl']))

// const countDuplicate2 = arr => {

//   // let str = "";
//   // let newArr = []
//   // let count = 0
//   // for (let i = 0; i < arr.length; i++) {
//   //   if (arr[i]) {
//   //     newArr.push(arr[i]+ count++)
//   //   } else {
//   //     newArr.push(arr[i])
//   //   }
//   // }
//   // return newArr
//   let mySet = new Set();
  
  
// }

// console.log(countDuplicate2(['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Carl']))

// JavaScript: Inventory List
// In this challenge, the task is to implement a function inventoryList such that: 

// it maintains the collection of all item names existing in an inventory, where each item is uniquely identified by a name.

// returns a new object, with three methods:

// add(name) - The string name parameter is passed, and it is added to the collection. It is guaranteed that at any time, if an item is in the collection, then no other item with the same name will be added to the collection.

// remove(name) - The string name parameter is passed, and this item is removed from the collection if it exists. If it does not exist, nothing happens.

// getList() - This returns an array of names of items added so far. The names are returned in the order the corresponding items were added.

 

// Your implementation of the function will be tested by a stubbed code on several input files. Each input file contains parameters for the functions call. The functions will be called with those parameters, and the result of their executions will be printed to the standard output by the provided code. The stubbed code joins the strings returned by getList function by a comma and prints to the standard output. If getList returns an empty array, the stubbed code prints 'No Items'.

 

// Constraints:

// The size of the collection will not exceed 10 at any point.
// All names passed to add(name) and remove(name) are non-empty.

/* declare arr []
  if arr is empty ==> return "No Item";
  add Item => if item exist array else we should push to arr







// Send a message to Sean Ellison-Chen
*/
// var Inventory = {
//   list : [],
//   add : (itemName)=> { Inventory.list.push(itemName)},
//   getList : () => Inventory.list,
//   remove : (itemName) => list.filter(currItemName => {
//     if(currItemName !== itemName ){
//       return currentItemName
//     }
//   })
// }

/*
5! = 120
5!= 5*4*3*2*1 
0! = 1
1! = 1
base case should be 1 && 0 ==> 1
factorial ==> + number
*/
const factorial = (num) => {
  //  base case
  // if(num === 0 || num === 1) return 1;
  //if(num <= 1)return 1
  //if(num <= 2)return 1
  // recursion is a function where you calling again the same function until you hit the base case
  // num
  // 5 ==> 4
  //num ==> num -1
  // 5 => (5 - 1)
  // 5 ==> 4 ==> 3
  // num ==> currNum 4===> 3
  // 5 * 4 * (3)
  // (num) * func( num - 1)
  // 5 * fun(5-1)
  // 5 * 4!
  // 5 * 4 *3!
  // 20 * 3 * 2!
  // 60 * 2 * 1 !
  // 120 * 1
  //120 
  //====>  (num) * func( num - 1) <====

  //num < 2
  // 1 < 2 yes ===> 1
  // 0 < 2 yes ===> 2
  if( num === 0 || num === 1 ) return 1; //condition comparing 2 num O(1) constant
  if( num >= 2 ) return num * factorial( num -1 )//  return n => (O(n)) Time complexity O(n)==> 

}


// console.log(factorial(0))
// console.log(factorial(1))
// console.log(factorial(2))
// console.log(factorial(3))
// console.log(factorial(5));








// https://onecompiler.com/javascript/3vyb3ub62

// function inventoryList () {
//   let arr = []
 

//   function add(name) {
//     if (arr.indexOf(name)=== -1) {
//       arr.push(name);
//     }
//   }
  
//   function remove(name) {
//     let i = arr.indexOf(name)
//     if(!i){
//       arr.splice(i, 1)
//     }
//   }
  
//   function getList() {
//     return arr
//   }

//   return { add, remove, getList}
  
// }
// let list = inventoryList()
// list.add("pats")
// list.add("skirt")
// list.add("short")

// console.log(1, list.getList())
// list.remove("skirt")
// console.log(list.getList());


function inventoryList() {
  let arr = [];

  function add(name) {
    if(arr.indexOf(name)=== -1) {
      arr.push(name)
    }
  };

  function remove(name) {
    let i = arr.indexOf(name);
    if(i){
      arr.splice(i, 1);
    }
  }

  function getList() {
    return arr
  }
  return {add, remove, getList}
};

let list = inventoryList();
list.add("pants");
list.add("skirts");
list.add("shorts")
console.log(list.getList())
list.remove("skirts")
console.log(list.getList());


//
          // 2   3
//input [ "R  C", " 3  7"..]
// output = number of occurrences that show matrix


// let count = 0;
// let occurrences= 0
//  R =>[] //arr.length = 2
//  C ==>[]// arr.length = 3
// loop [1,1][1,1,1]
//       [2,2, 1][2,2, 2, 1, 1,1, 1]

function minOccurrences(arr) {
  let min = Infinity;
 
}

// function getFirstNumberOfStr (arr){
//    let arrRow = [];
//    let minValueRow;
//   for(let i=0; i < arr.length; i++){
//     // "2 3"==> split str
//     let row = parseInt(arr[i].split(" ")[0])
//     let column = arr[i].split(" ")[1]
//     // console.log(column)
//     console.log(typeof row)
//     // let minRowVisited = Math.min(...row.toN)
//     // console.log(minRowVisited)
    
//   }

// }
// console.log(getFirstNumberOfStr(["2 3", "3 7", "4 1"]))
// 2*1 = 2
// ['2 2', '3 4', '2 2'] 2 * 2 = 4
// ['2 3', '3 4', '2 3'] 2 * 3 = 6

// function countX(arr){
//   let splittedArr = arr[0].split(" ");// ["5", "3"]
//   let startRow = parseInt(splittedArr[0]);// 5
//   let startColumn  = parseInt(splittedArr[1]);// 3
//       for(let i = 1; i < arr.length; i++){
//           splittedArr = arr[i].split(" ");
//           let rowCurrentVa = parseInt(splittedArr[0]);
//           let columnCurrentVal = parseInt(splittedArr[1]);
//           if(rowCurrentVa < startRow){
//               startRow = rowCurrentVa;
//           }
//           if(columnCurrentVal < startColumn){
//               startColumn = columnCurrentVal;
//           }
//       }
 
//   return startRow * startColumn;

// }

const countMax =(upRight)=> {
  let splitUpRight = upRight[0].split(" ") //[5,3]
  let startRow = parseInt(splitUpRight[0]); //5
  let startColumn = parseInt(splitUpRight[1]);// 3
  for( let i = 1; i < upRight.length ; i++ ){
    splitUpRight = upRight[i].split(" ");
    let currentRowVal = parseInt(splitUpRight[0]);
    let currentColumnVal = parseInt(splitUpRight[1]);
    if (startRow > currentRowVal) {
      startRow = currentRowVal;
    }
    if (startColumn > currentColumnVal) {
      startColumn = currentColumnVal
    }
  }
 return startRow * startColumn
}
console.log(countMax([ "5 3", "3 7", "4 1"]));
console.log(countMax([ "2 3", "3 4", "4 3"]));
console.log(countMax([ "5 3", "3 7", "4 1"]));

