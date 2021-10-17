//console.log("1. Basic Array")

// console.time()
const cars = [
  "Saab",
  "Volvo",
  "BMW"
];
// console.timeEnd()
//console.log(cars);
//================================================================
//console.log("2. Creating Array from scratch");
console.time()
const cars1 = [];
cars1[0] = "Saab";
cars1[1] = "Volvo";
cars1[2] = "BMW"
console.timeEnd()

//console.log(cars1);
//=================================================================
//console.log("3. creating array wit push method");
console.time()
const cars2 = [];
cars2.push("Honda");
cars2.push("Tesla");
cars2.push("Mercedes");
cars2.push("Porch")
console.timeEnd()
console.log(cars2);
//==================================================================
//console.log("4. Create array using ne Array()");
console.time()
const cars3 = new Array("Honda", "Tesla", " Mercedes", "BMW")
console.timeEnd()
console.log(cars3);
//console.log(typeof cars3)
//==================================================================
//console.log("5. Array Elements Can Be Objects")
let myArray =[]
myArray[0] = Date.now();
myArray[1] = writeArrayAsFunction();
myArray[2] = cars3;

function writeArrayAsFunction(){
  return "Hello"
}
//console.log(myArray)
//===================================================================
//console.log("6. Length and sort method");

const cars4 = new Array("Honda", "Tesla", " Mercedes", "BMW")

//console.log(cars4.length);

//====================================================================
//console.log("7. Looping Array Elements");

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
//console.log(text)
//===============================================================
// Create an array with three elements:
const points = new Array(40, 100, 1);
//console.log(points)

// Create an array with two elements:
const points1 = new Array(40, 100);
//console.log(points1)

// Create an array with one element ???
const points2 = new Array(40); 
const points3 = [40]; 
//console.log(1, points2)
//console.log(points3)
let colors = new Array(3);
colors[0] = ["green", "blue", "black"]
//console.log(colors)
colors.push("pink")
colors[1] = ["magic"]
colors[2] = ["fill all the arrays"]


//console.log(colors)
//console.log(Array.isArray(colors))

const fruits1 = ["Banana", "Orange", "Apple"];
let entryFruits = fruits1.entries()
// //console.log(entryFruits);

//console.log(fruits1 instanceof Array);   // returns true
//========================================================
//console.log("8. concat method");
//console.log("concat method: Joins two or more arrays, and returns a copy of the joined arrays");

const countries = ["Morocco", "Egypt", "Serbia", "India"];
const wishList = ["Casablanca", "Cairo", "Belgrade", "New delhi"];
const trip = countries.concat(wishList)
//console.log(trip);

const line1 = [1, 2, 3, 5, 7];
const line2 = [2, 4, 5, 6, 8, 9];
const union = line1.concat(line2);
const union2 = line2.concat(line1)
//console.log(union)// [1, 2, 3, 5, 7,2, 4, 5, 6, 8, 9]
//console.log(union2)// [2, 4, 5, 6, 8, 9, 1, 2, 3, 5, 7]
const union3 = line1.concat(countries, wishList);
//console.log(union3)
//console.log(Array.isArray(union3))
//========================================================================
//console.log("9. **copyWithin method**");
//console.log("Copies array elements within the array, to and from specified positions");
// const stores = ["Bloomingdales", "Sears", "Macys", "Safora"];
const stores = ["Bloomingdales", "Sears", "Macys", "Safora", "Marshals", "Guess"]
// stores.copyWithin(0, 3);// ["Safora", "Marshals", "Guess", "Safora", "Marshals", "Guess"]
//stores.copyWithin(0, 2);// ["Macys", "Safora", "Marshals", "Guess", "Marshals", "Guess"]
// stores.copyWithin(1, 2);// ["Bloomingdales","Macys", "Safora", "Marshals", "Guess", "Guess"]


stores.copyWithin(1, 2, 1)
// console.log(127, stores)

//==============================================

console.log("10. entries method")
// console.log("entries returns a key/value pair Array Iteration Object");

// Create an Array Iterator, and then iterate over the key/value pairs:

const todos =  ["string", "arrays", "objects", "for loop", "array methods"]
const todoList = todos.entries();
console.log(138, todoList)
for( let todo of todoList) {
  console.log(todo)
}
// => [ 0, 'string' ]
// [ 1, 'arrays' ]
// [ 2, 'objects' ]
// [ 3, 'for loop' ]
// [ 4, 'array methods' ]

const fruitsList = ["banana", "strawberries", "apples", "kiwi"];
for(const[index, fruit] of fruitsList.entries())
console.log(index, fruit)

const displayObject = (arr) => {
  const obj = {};
  const  listArray = arr.entries();
  console.log(154, listArray)
  for(let [index, list] of listArray){
   obj.key= index;
   obj.values = list
  }
  return obj
}
console.log(displayObject(["string", "arrays", "objects", "for loop", "array methods"]))

//=================================================
console.log("11. every method");
console.log("every checks if every element in an array pass a test");

// const ages = [32, 33, 16, 40];
// ages.every(CheckAge)

//this called hosting ==> global function

// function CheckAge(age){
//  return age > 18
// }



const check = (arr) => {
  return arr.every( age => age > 18 )

}

console.log(check([32, 33, 16, 40]))





//=================================================

// console.log("reduce method");
// console.log("Reduce the values of an array to a single value ==> going left-to-right");

// console.log("total of the numbers in the array")

const numbers = [ 15, 30, 40, 10];


// const total = numbers => {
//   let sum = 0;
//   for(let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
//   }
//   return sum
// }
// console.log(total(numbers))


  const total = numbers.reduce((sum, currentValue) => {
    return sum + currentValue
  }, 0)
 


// console.log(total)
//==================================


// console.log("product of the number in the array")

let arr2 = [1, 2, 3, 4, 5]
const product = arr2.reduce((acc, currentValue)=> {
  return acc * currentValue
}, 1)
// console.log(product)











