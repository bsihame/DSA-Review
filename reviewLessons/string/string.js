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

