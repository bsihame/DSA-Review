console.log("1. Basic Array")

console.time()
const cars = [
  "Saab",
  "Volvo",
  "BMW"
];
console.timeEnd()
console.log(cars);
//================================================================
console.log("2. Creating Array from scratch");
console.time()
const cars1 = [];
cars1[0] = "Saab";
cars1[1] = "Volvo";
cars1[2] = "BMW"
console.timeEnd()

console.log(cars1);
//=================================================================
console.log("3. creating array wit push method");
console.time()
const cars2 = [];
cars2 .push("Honda");
cars2.push("Tesla");
cars2.push("Mercedes");
cars2.push("Porch")
console.timeEnd()
console.log(cars2);
//==================================================================
console.log("4. Create array using ne Array()");
console.time()
const cars3 = new Array("Honda", "Tesla", " Mercedes", "BMW")
console.timeEnd()
console.log(cars3);
console.log(typeof cars3)
//==================================================================
console.log("5. Array Elements Can Be Objects")
let myArray =[]
myArray[0] = Date.now();
myArray[1] = writeArrayAsFunction();
myArray[2] = cars3;

function writeArrayAsFunction(){
  return "Hello"
}
console.log(myArray)
//===================================================================
console.log("6. Length and sort method");

const cars4 = new Array("Honda", "Tesla", " Mercedes", "BMW")

console.log(cars4.length);

//====================================================================
console.log("7. Looping Array Elements");

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
console.log(text)
//===============================================================
// Create an array with three elements:
const points = new Array(40, 100, 1);
console.log(points)

// Create an array with two elements:
const points1 = new Array(40, 100);
console.log(points1)

// Create an array with one element ???
const points2 = new Array(40); 
const points3 = [40]; 
console.log(1, points2)
console.log(points3)
let colors = new Array(3);
colors[0] = ["green", "blue", "black"]
console.log(colors)
colors.push("pink")
colors[1] = ["magic"]
colors[2] = ["fill all the arrays"]


console.log(colors)
console.log(Array.isArray(colors))

const fruits1 = ["Banana", "Orange", "Apple"];
let entryFruits = fruits1.entries()
// console.log(entryFruits);

console.log(fruits1 instanceof Array);   // returns true








