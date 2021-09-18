/**
 * given an array of integers, return an array where every index is the product of all the other numbers in the array except the one at that index.
ie [3,2,4,1] => [2 * 4 * 1, 3* 4 * 1, 3*2*1, 3*2*4] => [8, 12, 6, 24]
 [3,2,5] => [10, 15, 6]
 */

const multiplyOther = ( arr ) => {
  const result = [];
  if (arr.length < 2 ) return [0]
  
  for(let i = 0; i < arr.length; i++) {

    const currProduct = arr.reduce((prevNum, currNum, currIdx)=> {

      if(i !== currIdx) { 
        return prevNum * currNum
      } else {
      return prevNum 
      }
    }, 1)
    result.push(currProduct)
  }
  return result
}

const multiplyOther2 = ( arr ) => {
  const result = [];
  
  for(let i = 0; i < arr.length; i++) {
    const currProduct = arr.reduce((prevNum, currNum, currIdx) => 
      (i !== currIdx) ? prevNum * currNum : prevNum , 1);
    result.push(currProduct)
  }
  return result
}

console.log(multiplyOther([ 1, 2, 3, 2]));
console.log(multiplyOther([3,2,4,1]));
console.log(multiplyOther([3,2,5]));
console.log(multiplyOther([0,-2,4,1]));//[8, 0,0,0]
console.log(multiplyOther([0,0,4,1]));//[8, 0,0,0]



// console.log(multiplyOther2([ 1, 2, 3, 2]));
// console.log(multiplyOther2([3,2,4,1]));
// console.log(multiplyOther2([3,2,5]));
// console.log(multiplyOther2([0,2,4,1]));//[8, 0,0,0]

function adjacentElementsProduct(arr) {
  let max = arr[0] * arr[1];
  
  for(let i = 0; i < arr.length - 1; i++) {
      let p = arr[i] * arr[i + 1];
      if(p > max) max = p;
  }
  
  return max;
}
console.log(adjacentElementsProduct([ 1, 2, 3, 2]));
console.log(adjacentElementsProduct([3,2,4,1]));
console.log(adjacentElementsProduct([3,2,5]));
console.log(adjacentElementsProduct([0,2,4,1]));//[8, 0,0,0]


let arrWithOneElement = [2]; //[0]
let arrWithTwoElement = [2, 2]; //[2, 2]

let arrWithTwoElementOneNegative = [2,-2] // [-2, 2]
let arrWithTwoElementsOneZero = [2,0] // [0, 2]

let arr = [2,1,3,4]; 
let arr2 = [3,5,2] // 30
// [12, 24, 8, 6]

let arrWithZero = [3,4,0] //=> [0, 0 ,12] 

//more than one zero 
let arrWithTwoZero = [0, 0, 3, 4];// => [0,0,0,0];

let arrWithNegatives = [-3, 1, 4] // => [4, -12, -3]

let arrWithNegAndZero = [-3, 2, 0, 4] // -24, [0, 0, -24, 0]

let arrWithNegAndTwoZeros = [-3, 2, 0, 0, 4] // [0,0,0,0,0]


// given and arr of integers, return and array of ints
//where each index is the product of all other 
//ints except the int originally at that index. 


// how could we solve this?

// get the product of every number 

//create an empty array

// save the product divided by the original index value to that index. in the empty array;

// return the array 


const productExcludingCurrIndex = (arr) => {
  
  if(arr.length < 2) return [0];

  let prodArr = [];

  let product = productOfArray(arr); 

  if(product == 0){
    return arr.map(i => i = 0);
  }

  let hasZero = arr.includes(0);

  for(let num of arr){
    if(hasZero && num != 0){
      prodArr.push(0)
    } else if (num == 0){
      prodArr.push(product)
    } else {
      prodArr.push(product / num);
    }
  }

  return prodArr;
}

//accepts arr of integers 
const productOfArray = (arr) => {
  let product = 1;
  let zeroCount = 0;

  for(let num of arr){
    if(num != 0)
      product *= num;
    else if(num == 0){
      zeroCount += 1;
      if(zeroCount == 2)
        return 0;
    }

  }

  return product;
}

productExcludingCurrIndex(arrWithTwoElementsOneZero)


