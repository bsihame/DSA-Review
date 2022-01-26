/*
## Problem Description

Determine if a given string is a palindrome (the same backwards and forwards) ignoring capitalization and punctuation.

## Samples

| Input | Output |
| --- | --- |
| "Madam I'm Adam" | true |
| "No lava on Avalon.  No lava, no Avalon" | true |
| "They're taking the Hobbits to Isengard" | false |
*/

const palindrome = (str) => {

  let reverseStr = str.split("").reverse().join("").toLowerCase()
  if(str === reverseStr) return true
  else return false
}

// console.log(palindrome("Madam I'm Adam"))

/*Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
*/

const removeDuplicateWords = s => {
  const set = new Set(s.split(' '));
  return Array.from(set).join(' ');
}
const removeDuplicates = (str) => {
  let obj = new Set(str.split(" ")); // Set { 'alpha', 'beta', 'gamma', 'delta' }
  let array = Array.from(obj) // [ 'alpha', 'beta', 'gamma', 'delta' ]
  let changeArrayToString = array.join(" "); // alpha beta gamma delta
 return changeArrayToString
}
// console.log(removeDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))

console.log("Valid Spacing: https:\//\www.codewars.com\/\kata\/\5f77d62851f6bc0033616bd8\/train\/\javascript")

// Task
// Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either True or False.

// For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Below are some examples of what the function should return.

// 'Hello world' = true
// ' Hello world' = false
// 'Hello world  ' = false
// 'Hello  world' = false
// 'Hello' = true
// // Even though there are no spaces, it is still valid because none are needed
// 'Helloworld' = true 
// // true because we are not checking for the validity of words.
// 'Helloworld ' = false
// ' ' = false
// '' = true

// const validSpacing = (s) => {
//   const spaceRegex = /\s/gi;
//   const wordRegex = /[a-z]+/gi;
//   console.log(wordRegex)
//   if (s.match(spaceRegex) == null || s.length == 0) {
//     return true;
//   } else if (s.match(wordRegex) == null) {
//     return false;
//   } else if (
//     s.match(spaceRegex).length ==
//     s.match(wordRegex).length - 1
//   ) {
//     return true;
//   }
//   return false;
// }


const validSpacing = (s) => {
  const newSentence = s.replace(/\s{2,}/g, " ").trim();
      if (s === newSentence) {
          return true
      } else {
          return false
      }
    }



  console.log(validSpacing('Hello world' ))