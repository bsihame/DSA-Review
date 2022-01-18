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
// console.log('Create Map using set method');

const fruits = new Map()// fruits{}

fruits.set("name", "Banana");
// /fruits.set("name", "Apple");
fruits.set("Color", "Yellow");
fruits.set("Weight", "1lb")
fruits.set(200, "Pickles")
fruits.set(true, "Burgers")
fruits.set(false, "Buns")
// console.log(fruits.get("name"))
// console.log(fruits)
// console.log("size in the map", fruits.size)
// console.log(fruits.has("Color"))
// console.log(fruits.has(300))
// console.log(fruits.delete(false))
// console.log(fruits)
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

// for(let [key,value] of ageMap) {
//   console.log(`${key} is ${value} years old!`)
// }
// console.log(ageMap.keys());
// console.log(ageMap.values());
// console.log(ageMap.entries())

// ageMap.forEach((value, key)=>{
//   // console.log(123, value)
//   if(value >= 18){
//     console.log(key)
//     // return key
//     // console.log("hello")
//   }
// })
// ageMap.forEach((value, key)=> {
//   if(value< 20){
//     console.log( `You are minor ${key}`)
//   }
// })

// for( let [key, value] of ageMap){
//   if(value <20) {
//     console.log( `You are minor ${key}`)
//   }
// }
for( let [key, value] of ageMap){
    if(value <20) {
      console.log( `You are minor ${key}`)
    }
  }

  console.log("change object into map")

  const address = {
    1: "hello",
    true: "hi",
    'Tapas': 'Bangalore',
    'James': 'Huston',
    'Selva': 'Srilanka'
  };
  // console.log(155, address)
  console.log(158, Object.entries(address))
  let travel = new Map(Object.entries(address))//{}
  // console.log(156, travel)
  console.log("ask question")
  // travel.forEach((value, keys)=> {
  //   if(typeof keys === "1") {
  //     value = Number(keys)
  //     console.log(keys + ": " +typeof keys)
  //   } else {
  //     console.log(keys + ": " +typeof keys)
  //   }
  // })
  // console.log("convert map into object")
  // let changeToOBj = Object.fromEntries(travel);
  // console.log(changeToOBj)
  // console.log("convert has into array")
  // let array = Array.from(travel);
  // console.log(array)
  // // change object to array
  // let array2 = Object.entries(address)
  // console.log(array2)

  console.log("set");
  let fruitsSet = new Set(["🍉", "🍎", "🍐", "🍏"]);
  console.log(fruitsSet);
  console.log(fruitsSet.size)// 4
  //add more fruits in our basket

  fruitsSet.add("🍅");
  fruitsSet.add("🍌");
  fruitsSet.add("🍇");
  fruitsSet.add("🥑");
  console.log(fruitsSet)
  console.log(fruitsSet.size)// 8
  console.log("check the element if exist in the set");
  console.log(fruitsSet.has("carrot"));
  console.log(fruitsSet.has("🍌"));
  fruitsSet.delete("🍅")
  console.log(fruitsSet)
  console.log(fruitsSet.size)
  // fruitsSet.clear()
  console.log(fruitsSet)
  console.log(200, fruitsSet.values());
  console.log(201, fruitsSet.keys())
  console.log(202, fruitsSet.entries());
  fruitsSet.forEach((value)=> {
    console.log(204, value)
  });
  for(let value of fruitsSet) {
    console.log(207, value)
  };
  
  let changeSetToArray = [...fruitsSet]
  console.log(changeSetToArray)





