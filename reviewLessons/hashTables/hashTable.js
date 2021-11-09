// console.log("Hash Table")


// const buckets = [];// ==> []
//                            [0, 1, 2       , 3, 4      , 5, 6, 7]
// buckets[4] = "apple";// ==>[E, E, "orange", E, "apple", E, E, "banana"]
// buckets[2] = "orange";
// buckets[7] = "banana";

// // function hash(key) {
// //   let sum = 0;
// //   for (let i = 0; i < key.length; i++) {
// //     sum += key.charCodeAt(i);
// //   }
// //   return sum;
// // }
// // console.log(hash("Sally"))

// class HashTable {
//   constructor() {
//     this.buckets = [];
//   }
// }

// class Node {
//   constructor(key, value, next = null) {
//     this.key = key;
//     this.value = value; 
//     this.next = next;
//   }

//   insert(key, value) {
//     // Generate the bucket index using our Hash function
//     var bucket = this.hash(key);
//     // Create a new Node holding our key-value pair
//     var newNode = new Node(key, value);
    
//     // 1st Case - No Nodes Exist in that Bucket
//     if(!this.buckets[bucket]) {
//       this.buckets[bucket] = newNode;
//     }
//     // 2nd Case - Node Exists & Inserting key matches
//     else if (this.buckets[bucket].key === key) {
//       this.buckets[bucket].value = value;
//     }
//     // 3rd Case - Keys don't match traverse
//     else {
//       var currentNode = this.buckets[bucket];
//       while(currentNode.next) {
//         if (currentNode.next.key === key) {
//           currentNode.next.value = value;
//           return;
//         }
//         currentNode = currentNode.next;
//       }
//       currentNode.next = newNode;
//     }
//   }
// }
// buckets.insert("France",111)
// console.log(backet)



// // let ht= new HashTable()
// // ht.set("France, 111");
// // ht.set("Span, 150");
// // ht.set("a, 192")
// // console.log(ht.display())
// //================================================================
// const map = new Map()
// console.log(map)
// const confusion = new Map([
//   ["Marily", "Bracket"], 
//   ["Sihame", "Hash Map"], 
//   ["Faris", "Respect"]
// ])


// //   {"Marily": "Bracket",
// //   "Sihame":"Hash Map",
// //   "Faris", "Respect"
// // }
// console.log(confusion)
console.log('Create Map using set method');

const fruits = new Map()// fruits{}

fruits.set("name", "Banana");
// /fruits.set("name", "Apple");
fruits.set("Color", "Yellow");
fruits.set("Weight", "1lb")
fruits.set(200, "Pickles")
fruits.set(true, "Burgers")
fruits.set(false, "Buns")
console.log(fruits.get("name"))
console.log(fruits)
console.log("size in the map", fruits.size)
console.log(fruits.has("Color"))
console.log(fruits.has(300))
console.log(fruits.delete(false))
console.log(fruits)
// console.log(fruits.clear())
// console.log(fruits);

const ageMap = new Map([
  ['Jack', 20],
  ['Alan', 34],
  ['Bill', 10],
  ['Sam', 9]
]);
// ageMap.forEach((value, key)=> {
//   console.log(`${key} is ${value} years old!`)
// })

for(let [key,value] of ageMap) {
  console.log(`${key} is ${value} years old!`)
}
// console.log(ageMap.keys());
// console.log(ageMap.values());
// console.log(ageMap.entries())



