console.log("COUNT DOWN")

const countDownToZero =(num)=> {
  if(num <=0)return;
  console.log(num)
  countDownToZero(num-1)
}
console.log(countDownToZero(9));
console.log("==========================================================");

console.log("COUNT UP");

const countUp = (start, to) => {
  if(to < start) return;
      console.log(start)
      countUp(start + 1 , to)
}
console.log(countUp(4, 19))
console.log("==========================================================");

console.log("Factorial");

const factorial = (n) => {
  if(n < 1) return -1
  if (n === 0 || n === 1) return 1;
  return n * factorial(n-1)
}
console.log(factorial(5));

console.log("==========================================================");
console.log("Fibonacci")

const fibonacci = (n) =>{
  let arr =[]
  if(n < 2) {
    return n
  } 
     return fibonacci(n-2) + fibonacci(n-1)
 
}
console.log(fibonacci(7));


const fib = (n) => {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++){
    arr.push(arr[i - 2] + arr[i -1]);
  }
  return arr[n]
}
console.log(fib(7));

