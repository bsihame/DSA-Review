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