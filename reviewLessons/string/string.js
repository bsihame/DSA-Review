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

console.log(palindrome("Madam I'm Adam"))

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