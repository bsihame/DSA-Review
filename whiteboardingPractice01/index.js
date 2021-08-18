// 1.String Compression
// For each character in a string log the
// character and the count in a compressed format.
//   Exp
// stringCompression("aaabbcca") // => "a3b2c2a1"

// input: "aaabbcca" ==> "a3b2c2a1"

const stringCompression = str => {
  let output = "";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
    if (str[i] !== str[i + 1]) {
      output += str[i] + count;
      count = 0
    }
  }
  return output
};
console.log(stringCompression("aaabbcca"));


// Duplicates
// Write a function that takes an array and 
// returns its duplicate values.
// duplicates([2,2,2,1,4]) // => [2]

const duplicate = arr => {
  let dups = new Set();
  let output = new Set();
  arr.forEach(el => {
    if (dups.has(el)) {
      output.add(el)
        
      } else {
        dups.add(el)
      }
  })
  return [...output]
}
console.log(duplicate([2, 2, 2, 1, 4]));
console.log(duplicate([2, 2, 2, 1, 4, 4, 4, 0, 0, 3]));



// [4,5,2,3] [4, 5, 6] => [4, 5]
// any order
// empty arrays possible => return []
const bothArrays = (arr1, arr2) => {
  let dup1 = new Set();
  let output = new Set();
  arr1.forEach((el) => {
    dup1.add(el) // O(1) 
  })
  arr2.forEach((el) => { // O(N)
    if(dup1.has(el)) {  // O(1) 
      output.add(el) //O(1)
    }
  })
  return [...output]
}
console.log(bothArrays([4,5,2,3], [4, 5, 6]))