console.log("Using Math function")

console.log(Math.E) //2.718281828459045
console.log(Math.PI) //3.141592653589793

console.log("Difference")

let x = -10;
let y = -11;
let diff = x-y;


console.log("Absolute Value of the Difference")
let absoluteDiff = Math.abs(x - y); // 1
console.log(absoluteDiff);

console.log("Find the Maximum number and the minimum number")

let max = Math.max(1, 2, 10, -4, 100); //100
let min = Math.min(1, 2, 10, -4, 100); // -4
console.log(max)
console.log(min);

let   diff2 = Math.abs(max - min)
console.log(diff2); // 104

console.log("log number");

let L = Math.log(100); //4.605170185988092

console.log(L);

console.log( "random number between 0 and 1");

let randomNum = Math.random();
console.log(randomNum); // 0.1158992010818436

console.log("trig")

let t = Math.tan(10);
console.log(t) // 0.6483608274590866

console.log("square roo of a number");

let s = Math.sqrt(100)
console.log(s); // 10

console.log("Modulo Operation")

// time convert a minutes to hour and minutes


let time = 126;
let hours = Math.floor(time / 60);
let minutes = time % 60
let convertedHours = hours + ":" + minutes +  " H"
console.log(convertedHours)

console.log("Odd number and Even number using Modulo");
let num = 105;

const isEven = num => {
  if(num % 2 > 0) {
    return "false"
  }else {
    return "true"
  }
};

console.log(isEven(10))