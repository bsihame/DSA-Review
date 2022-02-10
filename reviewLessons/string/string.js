// /*
// ## Problem Description

// Determine if a given string is a palindrome (the same backwards and forwards) ignoring capitalization and punctuation.

// ## Samples

// | Input | Output |
// | --- | --- |
// | "Madam I'm Adam" | true |
// | "No lava on Avalon.  No lava, no Avalon" | true |
// | "They're taking the Hobbits to Isengard" | false |
// */

// const palindrome = (str) => {

//   let reverseStr = str.split("").reverse().join("").toLowerCase()
//   if(str === reverseStr) return true
//   else return false
// }

// // console.log(palindrome("Madam I'm Adam"))

// /*Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'
// */

// const removeDuplicateWords = s => {
//   const set = new Set(s.split(' '));
//   return Array.from(set).join(' ');
// }
// const removeDuplicates = (str) => {
//   let obj = new Set(str.split(" ")); // Set { 'alpha', 'beta', 'gamma', 'delta' }
//   let array = Array.from(obj) // [ 'alpha', 'beta', 'gamma', 'delta' ]
//   let changeArrayToString = array.join(" "); // alpha beta gamma delta
//  return changeArrayToString
// }
// // console.log(removeDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))

// console.log("Valid Spacing: https:\//\www.codewars.com\/\kata\/\5f77d62851f6bc0033616bd8\/train\/\javascript")

// // Task
// // Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either True or False.

// // For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Below are some examples of what the function should return.

// // 'Hello world' = true
// // ' Hello world' = false
// // 'Hello world  ' = false
// // 'Hello  world' = false
// // 'Hello' = true
// // // Even though there are no spaces, it is still valid because none are needed
// // 'Helloworld' = true 
// // // true because we are not checking for the validity of words.
// // 'Helloworld ' = false
// // ' ' = false
// // '' = true

// // const validSpacing = (s) => {
// //   const spaceRegex = /\s/gi;
// //   const wordRegex = /[a-z]+/gi;
// //   console.log(wordRegex)
// //   if (s.match(spaceRegex) == null || s.length == 0) {
// //     return true;
// //   } else if (s.match(wordRegex) == null) {
// //     return false;
// //   } else if (
// //     s.match(spaceRegex).length ==
// //     s.match(wordRegex).length - 1
// //   ) {
// //     return true;
// //   }
// //   return false;
// // }


// // const validSpacing = (s) => {
// //   const newSentence = s.replace(/\s{2,}/g, " ").trim();
// //       if (s === newSentence) {
// //           return true
// //       } else {
// //           return false
// //       }
// //     };

// // function validSpacing(s) {
// //   for (var i = 0; i < s.length; i++) {
// //     if (s[i] === " " && s[i + 1] === " ") return false;
// //     if (s[i] === " ") {
// //       if (i === 0 || i === s.length - 1) return false
// //     }
// //   } return true
// // };

// function validSpacing(s) {
//   return s==s.split(" ").filter(i=>!i==" ").join(" ");
// }

// console.log(validSpacing('Hello world' ))

// console.log("Alphabet war link: https:\//\www.codewars.com\/\kata\/\alphabet-war");

// /*
// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:
// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

// Example
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!
// */

// function alphabetWar(fight) {

//   let countLeft = 0;
//   let countRight = 0;
//   let obj = {};

//   const left = {
//     "w" : 4,
//     "p" : 3,
//     "b" : 2,
//     "s" : 1
//   };
  
//   const right = {
//       m : 4,
//       q : 3,
//       d : 2,
//       z : 1
//   };
  
//   for ( let letter of fight) {
    
//     if(letter in left) {
//       countLeft += left[letter]
//     } else if (letter in right){
//       countRight += right[letter]
//     }
//   }

//     if(countRight > countLeft) {
//       return "Left side wins!"
//     } else if (countRight < countLeft) {
//       return "Right side wins!"
//     } else {
//       return "Let's fight again!"
//     }
// }
// console.log(alphabetWar("zdqmwpbs"));


// https://coderbyte.com/editor/Longest%20Word:JavaScript
// Longest Word
// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
// Examples
// Input: "fun&!! time"
// Output: time
// Input: "I love dogs"
// Output: love



// function LongestWord(sen) { 

//   sen = sen.replace(/[^a-zA-Z0-9 ]/g, "")
//   let arr = sen.split(" ")
//   let max = ""
//   for (let i =0; i < arr.length; i++) {
//     if (arr[i].length > max.length) {
//       max = arr[i]
//     }
//   }
//     return max;
// }

function LongestWord(sen) { 

  sen = sen.replace(/[^a-zA-Z0-9]/g, "")
  let arr = sen.split(" ")
  let sorted = arr.sort((a, b)=> {
    return b.length - a.length
  })
    return sorted[0];
}
   

   
// keep this function call here 
console.log(LongestWord("fun&!! time"));
console.log(LongestWord("I love dogs"));
console.log(LongestWord("123456789 98765432"));

console.log("==================================================================================")
// https://www.w3resource.com/javascript-exercises/javascript-string-exercises.php#EDITOR

// 1. Write a JavaScript function to check whether an `input` is a string or not. Go to the editor
// Test Data :
// console.log(is_string('w3resource'));
// true
// console.log(is_string([1, 2, 4, 0]));
// false


const  is_string = (s) => {
  if(typeof(s) === "string") {
    return true
    } else {
    return false 
}
}

const check =(input)=> {
  if (Object.prototype.toString.call(input) === '[object String]'){
   return true;
  }else{
    return false;   
    };
}

// console.log(is_string('w3resource'));

// console.log(is_string([1, 2, 4, 0]));
// console.log(check('w3resource'));

// console.log(check([1, 2, 4, 0]));

// 2. Write a JavaScript function to check whether a string is blank or not. Go to the editor
// Test Data :
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));
// true
// false

// const is_Blank = (input) => {
//   if( input.length === 0)return true;
//   else return false
// }

const is_Blank = input => {
  let str = "";
  if (str === input) {
    return true
  } else {
    return false
  }
}

// console.log(is_Blank(''));
// console.log(is_Blank('abc'));

// 3. Write a JavaScript function to split a string and convert it into an array of words. Go to the editor
// Test Data :
// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh"]

const string_to_array = (str) => {
  return str.trim().split(" ")
}
// console.log(string_to_array(" Robin     Singh   "));

// 4. Write a JavaScript function to extract a specified number of characters from a string. Go to the editor
// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"

// const truncate_string = (str, num) => {
//   let newStr = "";
//    newStr = str.slice(0, num)
//    console.log(str)
//    return newStr
// }
// console.log(truncate_string("Robin Singh",4));

function truncate_string (str1, length) {
  
  if ((str1.constructor === String) && (length>0)) {
      return str1.slice(0, length);
  }
};
// console.log(truncate_string("Robin Singh",4));

// 5. Write a JavaScript function to convert a string in abbreviated form. Go to the editor
// Test Data :
// console.log(abbrev_name("Robin Singh"));
// "Robin S."

const abbrev_name = (input) => {
  let abbrev = "";
  const strToArr = input.trim().split(" "); 
  return  abbrev = strToArr[0] + " " + strToArr[1].slice(0, 1) + "."

}
console.log(abbrev_name("Robin Singh"));

// 6. Write a JavaScript function to hide email addresses to protect from unauthorized user. Go to the editor
// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"

protect_email = function (user_email) {
  var avg, splitted, part1, part2;
  splitted = user_email.split("@");
  // splitted = ["robin_singh", "example.com"]
  //splitted[0] = "robin_singh";
  //splitted[2] = "example.com";
  
  part1 = splitted[0];
  //part1 = "robin_singh"
 
  avg = part1.length / 2;
  //part1.length =11
  //avg = 10/2 =>5.5
  
  part1 = part1.substring(0, (part1.length - avg));
 
  //part1 = part1.substring(10 -5)==>  "robin"
  part2 = splitted[1];
 
  //part2 = "example.com"
  return part1 + "...@" + part2;
  // "robin + "...@"+ "example.com" =>  "robin...@example.com"
};
//input "robin_singh@example.com"
//output robin...@example.com

console.log(protect_email("robin_singh@example.com"));

// 7. Write a JavaScript function to parameterize a string. Go to the editor
// Test Data :
// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa"

// const string_parameterize = (string) => {
//   const removeSpecialChar = string.replace(/[^a-zA-Z0-9]/g, "-");
//   console.log(365, removeSpecialChar)
//   const strToLowerCase =removeSpecialChar.substring(0, removeSpecialChar.length-1).toLowerCase()
//   console.log(strToLowerCase)
// }
// console.log(string_parameterize("Robin Singh from USA."));

string_parameterize = function (str1) {
  return str1.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-") 
}
console.log(string_parameterize("Robin Singh from USA."));

  
    
