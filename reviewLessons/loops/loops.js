console.log("1. Create array that contains num from 0 to 10")

const createNumArr = () => {
  var arr= [];
  for (let i = 0; i <= 10; i++) {
    arr.push(i)
  }
  return arr
}
console.log(createNumArr()) //  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log("2. Create array that contains a range of number form 1 to 9 descending");

const createNumArrDescending = () => {
  var arr2 = [];
  for (let i = 9; i > 0; i--) {
    arr2.push(i)
  }
  return arr2
}
console.log(createNumArrDescending());

console.log("3. Create array that contains a range of number form 1 to 9 increasing by 2");

const arrIncreasingByTwo = () => {
  var arr3 = [];
  for (let i = 1;i < 10;  i = i + 2) {
    arr3.push(i)
  }
  return arr3
}
console.log(arrIncreasingByTwo());

console.log("4. Using while loop when you don't know how long you are looping")
const usingWhileLoop = () => {
  var counter = 0;
  var arr4 = [];
  while (counter <= 10) {
    arr4.push(counter);
    counter++;
  }
  return arr4
}
console.log(usingWhileLoop());

console.log("5. Looping through an array")
console.log("take an array and subtract each number by 2")

const subtractElmInArrByTwo = (arr5) => {
  for (let i = 0; i < arr5.length; i ++) {
    arr5[i] = arr5[i] -2
    
  }
  return arr5
}
console.log(subtractElmInArrByTwo([1, 2, 100, 4]));

console.log("6. using break and continue in for loop");

const subtractElmInArrAndUseBreak = (arr) => {
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] === 100) break;
    arr[i]--;
  }
  return arr
}
console.log(subtractElmInArrAndUseBreak([1, 2, 100, 4])) //[ 0, 1, 100, 4 ]

const subtractElmInArrAndUseContinue = (arr) => {
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] === 100) continue;
    arr[i]--;
  }
  return arr
}
console.log(subtractElmInArrAndUseContinue([1, 2, 100, 4])) //[ 0, 1, 100, 3]













