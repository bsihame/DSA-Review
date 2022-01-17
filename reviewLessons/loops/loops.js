console.log("1. Create array that contains num from 0 to 10")

const createNumArr = () => {
  var arr= [];
  for(let i = 0; i <= 10; i++) {
    arr.push(i)
  }
  return arr
}
console.log(createNumArr()) //  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log("2. Create array that contains a range of number form 1 to 9 descending");

const createNumArrDescending = () => {
  var arr2 = [];
  for(let i = 9; i > 0; i--) {
    arr2.push(i)
  }
  return arr2
}
console.log(createNumArrDescending());

console.log("3. Create array that contains a range of number form 1 to 9 increasing by 2");

const arrIncreasingByTwo = () => {
  var arr3 = [];
  for(let i = 1;i < 10;  i = i + 2) {
    arr3.push(i)
  }
  return arr3
}
console.log(arrIncreasingByTwo())







