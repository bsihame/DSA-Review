// console.log("COUNT DOWN");

// const countDownToZero = (num) => {
//   if (num <= 0) return;
//   console.log(num);
//   countDownToZero(num - 1);
// };
// console.log(countDownToZero(9));
// console.log("==========================================================");
// console.log("COUNT UP TO TEN")

// const countTen = (num = 1) => {
//   if (num > 10) return;
//   console.log(num);
//   num++;
//   countTen(num)
// }
// console.log(countTen())

// console.log("==========================================================");

// console.log("COUNT UP");

// const countUp = (start, to) => {
//   if (to < start) return;
//   console.log(start);
//   countUp(start + 1, to);
// };
// console.log(countUp(4, 19));
// console.log("==========================================================");

// console.log("Factorial");

// const factorial = (n) => {
//   if (n < 1) return -1;
//   if (n === 0 || n === 1) return 1;
//   return n * factorial(n - 1);
// };
// console.log(factorial(5));

// console.log("==========================================================");
// console.log("Fibonacci");

// const fibonacci = (n) => {
//   let arr = [];
//   if (n < 2) {
//     return n;
//   }
//   return fibonacci(n - 2) + fibonacci(n - 1);
// };
// console.log(fibonacci(7));

// const fib = (n) => {
//   let arr = [0, 1];
//   for (let i = 2; i < n + 1; i++) {
//     arr.push(arr[i - 2] + arr[i - 1]);
//   }
//   return arr[n];
// };
// console.log(fib(7));
//=====================================================
var addUntilTen = function(num) {

  if (num >= 10) {
    // base case
    // console.log('done!');
  } else {
    // recursive case
    // console.log(`num is ${num} keep going!`);
    addUntilTen(num + 1);
    
    console.log(num);
  }

}

// addUntilTen(4);

// const countTen = (num = 4) => {
//     if (num >= 10) return;
//     console.log(num);
//     num++;
//     countTen(num)
//   }
//   console.log(countTen())

  const countTen2 = (num) => {
    if (num >= 10) {
      return;
    }else {
      countTen2(num+1)
      console.log(num)
    }
  }
  // console.log(countTen2(4))
//=========================================
const flattenIterative = (arr) => {
  //[1, [2,[3]], [4]]
  // 0,    1   ,  2;
  // value = 1

  //[[2,[3]], [4]]
  //    0,    1   ;
  // [2,[3]]==> yes
  // [[3], [4]]
  // value = 2
  // [[3], [4]]
  // value = [3] => yes
  // [3, [4]]
  // 3==> push
  //[[4]]
  //value =[4];
  // [4]
  //value =4
  // No
  //push(4)
  // [] no
 //hit the base case
 //return  // output = [1, 2, 3, 4]


  let output = [];
  // output = [1, 2, 3, 4]
  while(arr.length){
    let value = arr.shift();
    console.log("value 101:", value)
    if(Array.isArray(value)) {
      arr = value.concat(arr);
      console.log("arr 102: ", arr )
    } else {
      output.push(value)
      console.log("output 107: ", output)
    }
  }
  return output
}

// console.log(flattenIterative([1, [2,[3]], [4]]))

const flattenIterativeRecursive = (arr) => {
 if(!Array.isArray(arr)) return [arr];
 let output = [];
 for(let i = 0; i < arr.length; i++){
   output = output.concat(flattenIterativeRecursive(arr[i]))
 }
 return output
}
// console.log(flattenIterativeRecursive([1, [2,[3]], [4]]))
//============================================================================
// console.log("Power recursive")
/*
Write a function called power which accepts base and exponent. The function should return the power of the base to the exponent. 
This function mimic the functionality of Math.pow( ).
do not worry about negative bases and exponents.
power(2, 0)// 1==> 2*power(2, 1) 2 2^1 // 2* 2
                         2*power(2, 0) // ==>2*  2^0 = 1==> 2
power(2, 2)// 4==>  2* 2*1
power(2, 4)// 16==> 2 * 4* 3*2*1*0 
 */

const power = (base, exponent) => {
 if (exponent === 0) return 1 
  return base * power(base, exponent-1); 
}
// console.log(power(2, 0));// 1
// console.log(power(2, 2))// 4
// console.log(power(2, 4))// 16 

const factorialRecursive = (num) => {// 8 * 7* 6 * 5* 4* 3* 2* 1 * 0
  if(num === 0 || num === 1)  return 1
  return num * factorialRecursive(num-1)

}

console.log(factorialRecursive(1)) // 1
console.log(factorialRecursive(2)) // 2
console.log(factorialRecursive(4)) // 24
console.log(factorialRecursive(7)) // 5040
