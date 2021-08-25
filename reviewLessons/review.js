/**
 * given an array of integers, return an array where every index is the product of all the other numbers in the array except the one at that index.
ie [3,2,4,1] => [2 * 4 * 1, 3* 4 * 1, 3*2*1, 3*2*4] => [8, 12, 6, 24]
 [3,2,5] => [10, 15, 6]
 */

const multiplyOther = ( arr ) => {
  let result = [];
  let product = arr.reduce((acc, n)=>   acc * n);
  
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 0){
       result.push(0)
    }else {
    result.push(product/arr[i])
  }
  }
  return result

}
console.log(multiplyOther([ 1, 2, 3, 2]));
console.log(multiplyOther([3,2,4,1]));
console.log(multiplyOther([3,2,5]));
console.log(multiplyOther([0,2,4,1]));

