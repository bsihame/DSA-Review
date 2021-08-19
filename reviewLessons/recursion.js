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
console.log("Factorial");


